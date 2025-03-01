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
      id: 'customer-files',
      title: 'תיקי לקוחות',
      type: 'collapse',
      icon: icons.IconBriefcase2,
      children: [
        {
          id: 'view-files',
          title: 'צפייה בתיקים',
          type: 'item',
          url: '/files/search-files',
          breadcrumbs: false
        },
        {
          id: 'view-files-reports',
          title: 'צפייה בדוחות',
          type: 'item',
          url: '/pages/login',
          target: true
        },
        {
          id: 'view-files-activity',
          title: 'פעילות',
          type: 'item',
          url: '/pages/register',
          target: true
        },
        {
          id: 'customer-management',
          title: 'לקוחות',
          type: 'item',
          url: '/pages/register',
          target: true
        },
        {
          id: 'todo',
          title: 'משימות',
          type: 'item',
          url: '/pages/register',
          target: true
        },
        {
          id: 'payments',
          title: 'תשלומים',
          type: 'item',
          url: '/pages/register',
          target: true
        }
      ]
    },
    {
      id: 'cases',
      title: 'צפייה בדוחות',
      type: 'collapse',
      icon: icons.IconBriefcase2,
      children: []
    }
  ]
};

export default pages;
