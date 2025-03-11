import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { tooltipClasses } from '@mui/material';
const StyledTable = styled(Table)(({ theme }) => ({
  borderTop: '1px solid ' + theme.palette.grey[500],
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderColor: theme.palette.grey[400],
}));

const CustomTooltip = styled(Tooltip)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'red', // Change background color
    color: 'white', // Change text color
    fontSize: '14px', // Adjust font size
  },
}));
export const HistoryTable = () => {
  const theme = useTheme();
  const  history= [
      {
        date: '2020-01-05',
        details: 'החצ גדהיחפגד חהפכגיהכגיןה החגרפכהיפרגיחה החכפגהחיכגחנה חה בחמ החכגפחהכ ',
        num: 1,
      },
      {
        date: '2020-01-02',
        details: 'יגםדי ביחגםדיבםג',
        num: 2,
      },
    ];
  return (
    <Stack direction="column" >
      <CustomTooltip title="להוסיף פריט היסטוריה" placement="top" >
        <IconButton variant={'outlined'} sx={{width: '40px', color: theme.palette.secondary[800]}} ><AddIcon /></IconButton>
      </CustomTooltip>
      <StyledTable size="small" aria-label="purchases">
        <TableHead>
          <TableRow >
            <StyledTableCell  align="left" sx={{width: '120px'}}>תאריך</StyledTableCell>
            <StyledTableCell  align="left">פרטים</StyledTableCell>
            <StyledTableCell  align="center">מספר רשומה</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((historyRow) => (
            <TableRow key={historyRow.num}>
              <StyledTableCell component="th" scope="row">
                {historyRow.date}
              </StyledTableCell>
              <StyledTableCell align="start">{historyRow.details}</StyledTableCell>
              <StyledTableCell  align="center">
                {historyRow.num}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
     </Stack>

  );
};