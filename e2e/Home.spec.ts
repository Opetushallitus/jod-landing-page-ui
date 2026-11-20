import { expect, test } from './fixtures';

test('shows the hero and links to the services', async ({ page, open }) => {
  await open();

  const main = page.getByRole('main');
  await expect(main.getByRole('heading', { level: 1, name: 'Osaamispolku - löydä oma suuntasi' })).toBeVisible();
  await expect(main.getByRole('link', { name: /^Siirry Oma Osaamispolkuun/ })).toHaveAttribute('href', '/yksilo/fi');
  await expect(main.getByRole('link', { name: /^Oma Osaamispolku/ })).toHaveAttribute('href', '/yksilo/fi');
  await expect(main.getByRole('link', { name: /^Ohjaajan osio/ })).toHaveAttribute('href', '/ohjaaja/fi');
  await expect(main.getByRole('link', { name: /^Tietopalvelu/ })).toHaveAttribute('href', '/tietopalvelu/fi');
  await expect(main.getByRole('link', { name: /^Siirry Ohjaus- ja neuvontapalveluihin/ })).toHaveAttribute(
    'href',
    'https://www.suomi.fi/aihe/ohjaus-ja-neuvontapalveluja',
  );
  await expect(main.getByRole('link', { name: /^Opintopolku/ })).toHaveAttribute(
    'href',
    'https://opintopolku.fi/konfo/fi/',
  );
  await expect(main.getByRole('link', { name: /^Työmarkkinatori/ })).toHaveAttribute(
    'href',
    'https://tyomarkkinatori.fi/',
  );
  await expect(main.getByRole('link', { name: /^Opin\.fi/ })).toHaveAttribute('href', 'https://opin.fi/fi');
});

test('situation accordions open and close', async ({ page, open }) => {
  await open();

  const accordion = page.getByRole('button', { name: 'Haluan löytää työpaikan' });
  const content = page.getByTestId('home-accordion-2-content');
  await expect(content).toBeHidden();

  await accordion.click();
  await expect(content).toBeVisible();

  await accordion.click();
  await expect(content).toBeHidden();
});

test('main menu links to the services and the languages', async ({ page, open }) => {
  await open();

  await page.getByTestId('open-nav-menu').click();
  const menu = page.getByRole('navigation', { name: 'Päänavigaatio' });
  await expect(menu.getByRole('link', { name: /^Oma Osaamispolku/ })).toHaveAttribute('href', '/yksilo/fi');
  await expect(menu.getByRole('link', { name: /^Ohjaajan osio/ })).toHaveAttribute('href', '/ohjaaja/fi');
  await expect(menu.getByRole('link', { name: /^Tietopalvelu/ })).toHaveAttribute('href', '/tietopalvelu/fi');
  await expect(menu.getByRole('link', { name: /^Ohjaus- ja neuvontapalveluja/ })).toBeVisible();
  await expect(menu.getByRole('link', { name: 'På svenska' })).toHaveAttribute('href', '/sv');
  await expect(menu.getByRole('link', { name: 'In English' })).toHaveAttribute('href', '/en');

  await menu.getByRole('button', { name: 'Sulje valikko' }).click();
  await expect(menu).toBeHidden();
});

test('user changes the language from the header', async ({ page, open }) => {
  await open();

  await page.getByTestId('language-button-trigger').click();
  await page.getByRole('link', { name: 'På svenska' }).click();

  await expect(page).toHaveURL('/sv');
  await expect(page.getByRole('heading', { level: 1, name: 'Kompetensstigen – hitta din riktning' })).toBeVisible();

  await page.getByTestId('language-button-trigger').click();
  await page.getByRole('link', { name: 'In English' }).click();

  await expect(page).toHaveURL('/en');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Competency Path - find your own direction' }),
  ).toBeVisible();
});

test('the root and unsupported languages redirect to Finnish', async ({ page, open }) => {
  await open();

  await page.goto('/');
  await expect(page).toHaveURL('/fi');

  await page.goto('/de');
  await expect(page).toHaveURL('/fi');
  await expect(page.getByRole('heading', { level: 1, name: 'Osaamispolku - löydä oma suuntasi' })).toBeVisible();
});

test('unknown page shows the not found page', async ({ page, open }) => {
  await open('ei-ole-olemassa');

  await expect(page.getByRole('heading', { level: 1, name: 'Hups! Sivua ei löytynyt' })).toBeVisible();
});

test('shows service notifications from the configuration', async ({ page, open, backend }) => {
  backend.notifications = [
    {
      id: 'maintenance',
      title: { fi: 'Huoltokatko', sv: 'Serviceavbrott', en: 'Maintenance break' },
      description: {
        fi: 'Palvelu on poissa käytöstä lauantaina.',
        sv: 'Tjänsten är ur bruk på lördag.',
        en: 'The service is unavailable on Saturday.',
      },
      variant: 'warning',
    },
  ];

  await open();

  await expect(page.getByText('Huoltokatko')).toBeVisible();
  await expect(page.getByText('Palvelu on poissa käytöstä lauantaina.')).toBeVisible();
});
