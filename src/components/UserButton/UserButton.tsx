import { JodUser } from '@jod/design-system/icons';
import { JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { useLoginLink } from '@/hooks/useLoginLink';

export const UserButton = ({ user }: { user: { name: string; component: JSX.ElementType } }) => {
  const { t } = useTranslation();
  const loginLink = useLoginLink();
  const login = { url: loginLink, text: t('common:login') };
  const initials = user?.name
    .split(' ')
    .map((part) => part[0])
    .splice(0, 2)
    .join('')
    .toUpperCase();

  return user ? (
    <user.component
      className="bg-secondary-3 flex h-8 w-8 items-center justify-center rounded-full text-black select-none"
      role="img"
      title={user.name}
    >
      {initials}
    </user.component>
  ) : (
    <a
      href={login.url}
      className="bg-bg-gray-2 flex h-8 w-8 items-center justify-center rounded-full"
      aria-label={login.text}
    >
      <JodUser />
    </a>
  );
};
