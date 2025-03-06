import { memo, useMemo } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from '@mui/material/Chip';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MenuCard from './MenuCard';
import MenuList from '../MenuList';
import LogoSection from '../LogoSection';
import MiniDrawerStyled from './MiniDrawerStyled';
import { handlerDrawerOpen, useGetMenuMaster } from '../../../api/menu';
import useConfig from '../../../hooks/useConfig';
import { drawerWidth } from '../../../store/constant';

// ==============================|| SIDEBAR DRAWER ||============================== //

function Sidebar() {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const { miniDrawer, mode } = useConfig();

  const logo = useMemo(
    () => (
      <Box sx={{ display: 'flex', p: 2 }}>
        <LogoSection />
      </Box>
    ),
    []
  );

  const drawer = useMemo(() => {
    const drawerContent = (
      <>
        {/*<MenuCard />*/}
        <Stack direction="row" sx={{ justifyContent: 'center', mb: 2 }}>
          <Chip label={import.meta.env.VITE_APP_VERSION} size="small" color="default" />
        </Stack>
      </>
    );

    let drawerSX = { paddingLeft: '0px', paddingRight: '0px', marginTop: '20px' };

    if (drawerOpen) {
      drawerSX = {
        paddingLeft: '20px',
        paddingRight: '16px',
        marginTop: '0px',

      };
    }

    return (
      <>
        {downMD ? (
          <Box sx={drawerSX}>
            <MenuList />
          </Box>
        ) : (
          <PerfectScrollbar style={{ height: 'calc(100vh - 88px)', ...drawerSX }}>
            <MenuList />
          </PerfectScrollbar>
        )}
      </>
    );
  }, [downMD, drawerOpen, mode]);

  return (
    <Box component="nav" sx={{ flexShrink: { sm: 0 }, width: { xs: 'auto'} }} aria-label="mailbox folders">
      {downMD || (miniDrawer && drawerOpen) ? (

        <Drawer
          variant={downMD ? 'temporary' : 'persistent'}
          open={drawerOpen}
          onClose={() => handlerDrawerOpen(!drawerOpen)}
          sx={{
            '& .MuiDrawer-paper': {
              mt: downMD ? 0 : 11,
              right: 0,
              zIndex: 1099,
              width: drawerWidth,
              bgcolor: 'background.default',
              color: 'text.primary',
              borderRight: 'none',
            }
          }}
          ModalProps={{ keepMounted: true }}
          color="inherit"
        >
          {downMD && logo}
          {drawer}
        </Drawer>

      ) : (
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {logo}
          {drawer}
        </MiniDrawerStyled>
      )}
    </Box>
  );
}

export default memo(Sidebar);
