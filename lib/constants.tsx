import { ImageSourcePropType } from 'react-native';
import icons from './icons';

export type ProfileNavigationRoute =
   | '/requester/(tabs)/profile/settings'
   | '/requester/(tabs)/profile/tasks'
   | '/requester/(tabs)/profile/notifications-settings'
   | '/requester/(tabs)/profile/saved-runners'
   | '/requester/(tabs)/profile/about';

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
      icon: icons.notifications,
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
      href: '/requester/(tabs)/profile/settings',
   },
   { id: 5, title: 'Help & Support', icon: icons.help, href: '/requester/(tabs)/profile/settings' },
   { id: 6, title: 'About Skippit', icon: icons.about, href: '/requester/(tabs)/profile/about' },
];
