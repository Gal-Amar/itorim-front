import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

import { DebtorDetails } from './DebtorDetails';
import { MoreDetails } from './MoreDetails';
import Box from '@mui/material/Box';



const StyledGrid = styled(Grid) (({ theme }) => ({
  borderRadius: '20px',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
}))





export const FileDetails = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <StyledGrid container spacing={2}>
          <Grid size={{ xs:12, sm: 6, md: 4 }}>
            <DebtorDetails />
          </Grid>
          <Grid size={{ xs:12, sm: 6, md: 4 }}>
            <MoreDetails />
          </Grid>
          <Grid size={{ xs:12, sm: 6, md: 4 }}>
            <MoreDetails />
          </Grid>
        </StyledGrid>
      </Box>
    )
};