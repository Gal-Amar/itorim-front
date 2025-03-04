import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

import { DebtorDetails } from './DebtorDetails';
import { MoreDetails } from './MoreDetails';



const StyledGrid = styled(Grid) (({ theme }) => ({
  // border: `2px solid ${theme.palette.secondary['light']}`,
  // padding: theme.spacing(2),
  borderRadius: '20px',
  // backgroundColor: theme.palette.secondary['light'],
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}))





export const FileDetails = () => {
    return (
        <StyledGrid container spacing={0}>
          <Grid xs={4} >
            <DebtorDetails />
          </Grid>
          <Grid  xs={4} >
            <MoreDetails />
          </Grid>

          <Grid  xs={4}>

          </Grid>
        </StyledGrid>
    )
};