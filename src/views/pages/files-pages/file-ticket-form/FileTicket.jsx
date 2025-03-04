import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { FileDetails } from './FileDetails';
import { styled, useTheme } from '@mui/material/styles';
import { MoreDetails } from './MoreDetails';
import Grid from '@mui/material/Grid2';
import { gridSpacing } from '../../../../store/constant';

const StyledTab = styled(Tab) (({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.secondary[800],
    borderRadius: "12px 12px 0 0",

  },
  '&:hover': {
    borderRadius: "12px 12px 0 0",
  }
}))


const StyledTabs = styled(Tabs)(({ theme }) => ({
  '.MuiTabs-indicator': {
    backgroundColor: theme.palette.secondary[800],
  }
}));


function CustomTabPanel(props) {
  const { children, tab, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={tab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {tab === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  tab: PropTypes.number.isRequired,
};



export default function FileTicket() {
  const [tab, setTab] = useState( 0 );
  const theme = useTheme();

  const handleChange = ( tab ) => {
    setTab( tab );
  }

  return (
    <Box sx={{ width: 'fit-content', margin: '12px', padding:'12px', backgroundColor: theme.palette.secondary.light, borderRadius: '20px' }}>
      <Box >
        <StyledTabs value={tab}  onChange={handleChange} sx={{ borderBottom: 2, borderColor: theme.palette.grey[300] }}>
          <StyledTab label="פרטי התיק"  value={0}/>
          <StyledTab label="פעולות בתיק"  value={1}/>
          <StyledTab label="תזכורות" value={2}/>
        </StyledTabs>
      </Box>
      <CustomTabPanel tab={tab} index={0}>
          <FileDetails />
      </CustomTabPanel>
      <CustomTabPanel tab={tab} index={1}>

      </CustomTabPanel>
      {/*<CustomTabPanel tab={tab} index={2}>*/}
      {/*  Item Three*/}
      {/*</CustomTabPanel>*/}
    </Box>
  );
}
