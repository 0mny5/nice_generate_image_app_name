'use client';

import {useTranslations} from 'next-intl';
import PageLayout from '../../../components/PageLayout';
import {signOut} from 'next-auth/react';

export default function Secret() {
  const t = useTranslations('Secret');

  function onLogoutClick() {
    signOut();
  }

  return (
    <PageLayout title={t('title')}>
      <p>{t('description')}</p>
      <button onClick={onLogoutClick} type="button">
      {t('logout')}
      </button>
    </PageLayout>
  );
}
