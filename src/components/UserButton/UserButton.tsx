import { JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { JodUser } from '@jod/design-system/icons';

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
      className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-3 text-primary-gray select-none"
      role="img"
      title={user.name}
    >
      {initials}
    </user.component>
  ) : (
    <a
      href={login.url}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-gray-2"
      aria-label={login.text}
    >
      <JodUser />
    </a>
  );
};
