// material-ui
import { styled } from '@mui/material/styles';

// project imports
import { drawerWidth } from 'store/constant';

// ==============================|| MAIN LAYOUT - STYLED ||============================== //

const MainContentStyled = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'borderRadius'
})(({ theme, open, borderRadius }) => ({
  backgroundColor: theme.palette.grey[100],
  minWidth: '1%',
  width: '100%',
  minHeight: 'calc(100vh - 88px)',
  flexGrow: 1,
  padding: 20,
  marginTop: 88,
  marginLeft: theme.direction === 'rtl' ? 20 : 'auto', // ✅ Adjusted for RTL
  marginRight: theme.direction === 'rtl' ? 'auto' : 20, // ✅ Adjusted for RTL
  borderRadius: `${borderRadius}px`,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,

  ...(!open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter + 200
    }),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.direction === 'rtl' ? -(drawerWidth - 72) : 'auto', // ✅ Adjusted for RTL
      marginLeft: theme.direction === 'rtl' ? 'auto' : -(drawerWidth - 72), // ✅ Adjusted for RTL
      width: `calc(100% - ${drawerWidth}px)`,
      marginTop: 88
    }
  }),

  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shorter + 200
    }),
    marginRight: theme.direction === 'rtl' ? 0 : 'auto', // ✅ Adjusted for RTL
    marginLeft: theme.direction === 'rtl' ? 'auto' : 0, // ✅ Adjusted for RTL
    width: `calc(100% - ${drawerWidth}px)`,
    marginTop: 88
  }),

  [theme.breakpoints.down('md')]: {
    marginRight: theme.direction === 'rtl' ? 20 : 'auto', // ✅ Adjusted for RTL
    marginLeft: theme.direction === 'rtl' ? 'auto' : 20, // ✅ Adjusted for RTL
    padding: 16,
    marginTop: 88,
    ...(!open && {
      width: `calc(100% - ${drawerWidth}px)`
    })
  },

  [theme.breakpoints.down('sm')]: {
    marginRight: theme.direction === 'rtl' ? 10 : 'auto', // ✅ Adjusted for RTL
    marginLeft: theme.direction === 'rtl' ? 'auto' : 10 // ✅ Adjusted for RTL
  }
}));

export default MainContentStyled;
