import { expect, test } from './fixtures';

const footerPages = [
  { link: 'Tietoa palvelusta', path: 'tietoa-palvelusta', title: 'Tietoa palvelusta' },
  {
    link: 'Tietosuojaseloste ja evästeet',
    path: 'tietosuojaseloste-ja-evasteet',
    title: 'Tietosuojaseloste ja evästeet',
  },
  { link: 'Datalähteet', path: 'datalahteet', title: 'Datalähteet' },
  { link: 'Tietoa tekoälyn käytöstä', path: 'tietoa-tekoalyn-kaytosta', title: 'Tietoa tekoälyn käytöstä' },
  { link: 'Tietoa saavutettavuudesta', path: 'tietoa-saavutettavuudesta', title: 'Saavutettavuusseloste' },
];

for (const { link, path, title } of footerPages) {
  test(`footer link opens the page "${title}"`, async ({ page, open, isMobile }) => {
    await open();

    await page.getByRole('contentinfo').getByRole('link', { name: link }).click();

    await expect(page).toHaveURL(`/fi/${path}`);
    await expect(page.getByRole('main').getByRole('heading', { level: 1, name: title })).toBeVisible();
    const breadcrumb = page.getByRole('navigation', { name: 'Murupolku' });
    await expect(breadcrumb.getByRole('link', { name: 'Etusivu' })).toHaveAttribute('href', '/fi');
    await expect(breadcrumb).toHaveText(`Etusivu/${title}`);
    // On narrow screens the current page is hidden visually, but kept for screen readers.
    const currentPage = breadcrumb.getByText(title);
    await expect(currentPage).toHaveAttribute('aria-current', 'page');
    if (isMobile) {
      await expect(currentPage).toHaveClass(/ds:sr-only/);
    }
  });
}

const aboutSubpages = [
  { path: 'osaamispolku-yksiloille', title: 'Osaamispolku tukee oman suunnan löytämisessä' },
  { path: 'osaamispolku-ohjaajille', title: 'Osaamispolku tuo ohjaustyön ammattilaisen työkalut yhteen paikkaan' },
  { path: 'tietopalvelu', title: 'Osaamispolku kokoaa tietoa työmarkkinoista päätöksenteon tueksi' },
];

for (const { path, title } of aboutSubpages) {
  test(`about the service subpage "${path}" opens`, async ({ page, open }) => {
    await open(`tietoa-palvelusta/${path}`);

    await expect(page.getByRole('main').getByRole('heading', { level: 1, name: title })).toBeVisible();
  });
}

test('basic information pages have localized URLs', async ({ page, open }) => {
  await open('information-om-tjansten', 'sv');
  await expect(
    page.getByRole('main').getByRole('heading', { level: 1, name: 'Information om tjänsten' }),
  ).toBeVisible();

  await page.goto('/en/privacy-notice-and-cookies');
  await expect(
    page.getByRole('main').getByRole('heading', { level: 1, name: 'Privacy policy and cookies' }),
  ).toBeVisible();
});
