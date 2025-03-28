import { ImageSourcePropType } from 'react-native';
import icons from './icons';

export type ProfileNavigationRoute =
   | '/requester/(tabs)/profile/settings'
   | '/requester/(tabs)/profile/tasks'
   | '/requester/(tabs)/profile/notifications-settings'
   | '/requester/(tabs)/profile/saved-runners'
   | '/requester/(tabs)/profile/about'
   | '/requester/(tabs)/profile/addresses'
   | '/requester/(tabs)/profile/help-support';

interface SettingItem {
   id: number;
   title: string;
   icon: ImageSourcePropType;
   href: ProfileNavigationRoute;
}

export const settingslist: SettingItem[] = [
   {
      id: 1,
      title: 'Recurring Tasks',
      icon: icons.reccuring,
      href: '/requester/(tabs)/profile/tasks',
   },
   {
      id: 2,
      title: 'Notifications',
      icon: icons.BellIconSettings,
      href: '/requester/(tabs)/profile/notifications-settings',
   },
   {
      id: 3,
      title: 'Settings',
      icon: icons.settings,
      href: '/requester/(tabs)/profile/settings',
   },
   {
      id: 4,
      title: 'Manage Address',
      icon: icons.mappin,
      href: '/requester/(tabs)/profile/addresses',
   },
   { id: 5, title: 'Help & Support', icon: icons.help, href: '/requester/(tabs)/profile/help-support' },
   { id: 6, title: 'About Skippit', icon: icons.about, href: '/requester/(tabs)/profile/about' },
];

export const NAV_THEME = {
   light: {
      background: 'hsl(0 0% 100%)', // background
      border: 'hsl(240 5.9% 90%)', // border
      card: 'hsl(0 0% 100%)', // card
      notification: 'hsl(0 84.2% 60.2%)', // destructive
      primary: 'hsl(240 5.9% 10%)', // primary
      text: 'hsl(240 10% 3.9%)', // foreground
   },
   dark: {
      background: 'hsl(240 10% 3.9%)', // background
      border: 'hsl(240 3.7% 15.9%)', // border
      card: 'hsl(240 10% 3.9%)', // card
      notification: 'hsl(0 72% 51%)', // destructive
      primary: 'hsl(0 0% 98%)', // primary
      text: 'hsl(0 0% 98%)', // foreground
   },
};
