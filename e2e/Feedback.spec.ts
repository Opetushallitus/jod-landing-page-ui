import { expect, test } from './fixtures';

test.beforeEach(async ({ page, open }) => {
  await open();
  await page.getByRole('contentinfo').getByRole('button', { name: 'Anna palautetta' }).click();
});

test('user sends feedback with contact details', async ({ page, backend }) => {
  const modal = page.getByTestId('feedback-modal');
  await modal.getByRole('radio', { name: 'Koko palvelu tai muu palaute' }).check();
  await modal.getByRole('radio', { name: 'Kehu' }).check();
  await modal.getByRole('textbox', { name: /^Palaute/ }).fill('Selkeä etusivu.');

  // An email address is required and validated only when the user wants to be contacted.
  await modal.getByRole('checkbox', { name: 'Haluan, että minuun otetaan yhteyttä.' }).check();
  const email = modal.getByRole('textbox', { name: /^Sähköpostiosoite/ });
  const send = modal.getByRole('button', { name: 'Lähetä' });
  await email.fill('ei-sahkoposti');
  await email.blur();
  await expect(modal.getByText('Tarkista sähköpostiosoite')).toBeVisible();
  await expect(send).toBeDisabled();

  await email.fill('testi@example.com');
  await email.blur();
  await expect(modal.getByText('Tarkista sähköpostiosoite')).toBeHidden();
  await send.click();

  await expect(page.getByText('Kiitos palautteestasi!').first()).toBeVisible();
  expect(backend.palautteet).toEqual([
    expect.objectContaining({
      section: 'Koko palvelu tai muu palaute',
      type: 'Kehu',
      message: 'Selkeä etusivu.',
      email: 'testi@example.com',
      language: 'fi',
    }),
  ]);
});

test('cancelling closes the form without sending', async ({ page, backend }) => {
  const modal = page.getByTestId('feedback-modal');
  await modal.getByRole('textbox', { name: /^Palaute/ }).fill('Ei lähetetä.');

  await modal.getByRole('button', { name: 'Peruuta' }).click();

  await expect(modal.getByRole('textbox', { name: /^Palaute/ })).toBeHidden();
  expect(backend.palautteet).toEqual([]);
});
