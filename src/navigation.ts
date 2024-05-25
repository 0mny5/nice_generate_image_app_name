import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['jp', 'en'] as const;
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});
