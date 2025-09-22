const PrivacyAndCookies = () => {
  const title = 'Tietosuojaseloste ja evästeet';

  return (
    <>
      <title>{title}</title>
      <h1 data-testid="privacy-and-cookies-title" className="mb-5 text-heading-2 sm:text-heading-1">
        {title}
      </h1>
      <p className="mb-8 text-body-md font-arial">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </>
  );
};

export default PrivacyAndCookies;
