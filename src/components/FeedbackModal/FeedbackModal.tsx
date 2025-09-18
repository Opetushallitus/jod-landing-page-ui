import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, InputField, Modal, RadioButton, RadioButtonGroup, Textarea } from '@jod/design-system';
import { JodOpenInNew } from '@jod/design-system/icons';
import React from 'react';
import { Controller, Form, FormSubmitHandler, useForm, useFormState } from 'react-hook-form';
import { z } from 'zod';

const DETAILS_MAX_LENGTH = 2048;
const MESSAGE_MAX_LENGTH = 5000;
const EMAIL_MAX_LENGTH = 320;

const Feedback = z
  .object({
    section: z.enum(['Osaamispolkuni', 'Ohjaajan osio', 'Tietopalvelu', 'Koko palvelu tai muu palaute']),
    area: z.enum(['Alatunniste', 'Kohtaanto työkalu', 'Työmahdollisuus']),
    language: z.enum(['fi', 'en', 'sv']),
    details: z.string().nonempty().max(DETAILS_MAX_LENGTH).optional(),
    type: z.enum(['Kehu', 'Kehitysehdotus', 'Moite', 'Tekninen vika tai ongelma']),
    message: z.string().nonempty().max(MESSAGE_MAX_LENGTH),
    email: z.string().optional(),
    timestamp: z.iso.datetime().optional(),
    wantsContact: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.wantsContact) {
      if (!data.email || data.email.trim().length === 0) {
        ctx.addIssue({
          code: 'custom',
          path: ['email'],
        });
      } else {
        const emailSchema = z.email().max(EMAIL_MAX_LENGTH);
        const result = emailSchema.safeParse(data.email);
        if (!result.success) {
          ctx.addIssue({
            code: 'custom',
            path: ['email'],
          });
        }
      }
    }
  });

type Feedback = z.infer<typeof Feedback>;

export interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: Feedback['section'];
  area: Feedback['area'];
  language: Feedback['language'];
}

export const FeedbackModal = ({ isOpen, onClose, section, area, language }: FeedbackModalProps) => {
  const formId = React.useId();

  const { control, register, watch, reset } = useForm({
    resolver: zodResolver(Feedback),
    defaultValues: {
      section,
      area,
      language,
      type: 'Kehu',
      wantsContact: false,
    },
  });
  const { isValid } = useFormState({ control });
  const wantsContact = watch('wantsContact');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, area, language]);

  const onSubmit: FormSubmitHandler<Feedback> = async (payload) => {
    try {
      setIsSubmitting(true);
      const { wantsContact, email, ...rest } = payload.data;
      const body = JSON.stringify({
        ...rest,
        email: wantsContact ? email : undefined,
        details: window.location.href,
        timestamp: new Date().toISOString(),
      });
      const response = await fetch('/api/palaute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-amz-content-sha256': Array.from(
            new Uint8Array(await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(body))),
          )
            .map((b) => b.toString(16).padStart(2, '0'))
            .join(''),
        },
        body,
      });

      if (!response.ok) {
        throw new Error();
      }

      reset();
      onClose();
      alert('Kiitos palautteestasi! Palautteesi auttaa meitä parantamaan palvelua.');

      // eslint-disable-next-line sonarjs/no-ignored-exceptions, @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsSubmitting(false);
      alert('Palautteen lähettäminen epäonnistui. Yritä uudelleen myöhemmin.');
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      fullWidthContent
      content={
        <Form id={formId} control={control} onSubmit={onSubmit}>
          <h2 className="sm:text-heading-1 text-heading-1-mobile mb-5">Anna palautetta</h2>
          <p className="sm:text-body-md text-body-md-mobile mb-9">
            Anna palautetta palvelusta tai ilmoita teknisestä ongelmasta. Näin autat meitä palveluiden kehittämisessä.
            Jos raportoit häiriötilanteesta, meitä auttaisi, että kerrot siitä mahdollisimman tarkasti.
            <br />
            <br />
            Älä kirjoita palautteeseen henkilökohtaisia tietoja, kuten henkilötunnusta tai terveystietoja. Täytähän
            kaikki kentät, jotta voimme käsitellä palautteesi.
          </p>
          <Controller
            control={control}
            name="section"
            render={({ field: { value, onChange } }) => (
              <RadioButtonGroup
                label="Mitä osiota palautteesi koskee?"
                value={value}
                onChange={onChange}
                className="mb-6"
              >
                <RadioButton label="Osaamispolkuni" value="Osaamispolkuni" />
                <RadioButton label="Ohjaajan osio" value="Ohjaajan osio" />
                <RadioButton label="Tietopalvelu" value="Tietopalvelu" />
                <RadioButton label="Koko palvelu tai muu palaute" value="Koko palvelu tai muu palaute" />
              </RadioButtonGroup>
            )}
          />
          <Controller
            control={control}
            name="type"
            render={({ field: { value, onChange } }) => (
              <RadioButtonGroup
                label="Minkälaista palautetta haluat antaa?"
                value={value}
                onChange={onChange}
                className="mb-6"
              >
                <RadioButton label="Kehu" value="Kehu" />
                <RadioButton label="Kehitysehdotus" value="Kehitysehdotus" />
                <RadioButton label="Moite" value="Moite" />
                <RadioButton label="Tekninen vika tai ongelma" value="Tekninen vika tai ongelma" />
              </RadioButtonGroup>
            )}
          />
          <Textarea label="Palaute" {...register('message')} className="mb-9" rows={5} maxLength={MESSAGE_MAX_LENGTH} />
          <Controller
            control={control}
            name="wantsContact"
            render={({ field: { name, value, onChange } }) => (
              <Checkbox
                label="Haluan, että minuun otetaan yhteyttä"
                ariaLabel="Haluan, että minuun otetaan yhteyttä"
                name={name}
                value="yes"
                checked={value}
                onChange={onChange}
                className={wantsContact ? 'mb-5' : 'mb-7'}
              />
            )}
          />
          {wantsContact && (
            <InputField label="Sähköpostiosoite" {...register('email')} className="mb-9" maxLength={EMAIL_MAX_LENGTH} />
          )}
          <hr className="h-1 bg-border-gray text-border-gray mb-7" />
          <div className="sm:text-body-md text-body-md-mobile">
            <p>
              Kun lähetät palautetta, tallennamme palvelun tilatiedon, kuten mistä näkymästä palaute on lähetetty.
              Tilatietoa ei välitetä eteenpäin kolmansille osapuolille. Palautteita käytetään palvelun kehittämiseen ja
              vapaaehtoisesti jätettäviä yhteystietoja palautteisiin vastaamiseen.
            </p>
            <br />
            <p>Palaute käsitellään osiosta riippuen seuraavasti:</p>
            <ul className="list-disc list-outside ml-7">
              <li>Osaamispolkuni Opetushallituksessa,</li>
              <li>Ohjaajan osio KEHA-keskuksessa,</li>
              <li>Tietopalvelu ja koko palvelu opetus- ja kulttuuriministeriössä.</li>
            </ul>
            <br />
            <p>Lue lisää palautteiden käsittelijöiden tietosuojaseloisteista:</p>
            <ul className="list-disc list-outside ml-7">
              <li>
                <a
                  href="https://www.oph.fi/fi/tietosuoja"
                  target="_blank"
                  className="inline-flex text-accent hover:underline"
                >
                  Opetushallituksen tietosuojakäytäntö
                  <JodOpenInNew />
                </a>
              </li>
              <li>
                <a
                  href="https://tyomarkkinatori.fi/tietoa-palvelusta/tietosuoja-ja-kayttoehdot/tietosuojaselosteet"
                  target="_blank"
                  className="inline-flex text-accent hover:underline"
                >
                  KEHA-keskuksen asiakas- ja neuvontapalveluiden tietosuojaseloste
                  <JodOpenInNew />
                </a>
              </li>
              <li>
                <a
                  href="https://okm.fi/tietoa-sivustosta#henkilotiedot"
                  target="_blank"
                  className="inline-flex text-accent hover:underline"
                >
                  Opetus- ja kulttuuriministeriön tietosuojaseloste
                  <JodOpenInNew />
                </a>
              </li>
            </ul>
          </div>
        </Form>
      }
      footer={
        <div className="flex justify-end flex-1 gap-4">
          <Button
            variant="white"
            label="Peruuta"
            onClick={() => {
              reset();
              onClose();
            }}
            className="whitespace-nowrap"
          />
          <Button
            variant="white"
            label="Lähetä"
            className="whitespace-nowrap"
            disabled={!isValid || isSubmitting}
            form={formId}
          />
        </div>
      }
    />
  );
};
