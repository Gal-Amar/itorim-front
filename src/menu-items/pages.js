// assets
import { IconBriefcase2 } from '@tabler/icons-react';

// constant
const icons = {
  IconBriefcase2
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'לקוחות וחשבוניות',
  // caption: 'Pages Caption',
  icon: icons.IconBriefcase2,
  type: 'group',
  children: [
    {
      id: 'cases',
      title: 'תיקי לקוחות',
      type: 'collapse',
      icon: icons.IconBriefcase2,
      children: [
        {
          id: 'login',
          title: 'התחברות',
          type: 'item',
          url: '/pages/login',
          target: true
        },
        {
          id: 'register',
          title: 'הרשמה',
          type: 'item',
          url: '/pages/register',
          target: true
        }
      ]
    }
  ]
};

export default pages;
