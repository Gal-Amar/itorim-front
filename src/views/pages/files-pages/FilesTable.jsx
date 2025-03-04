import { useState, Fragment } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow ,{ tableRowClasses }from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

//assets
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//project imports
import  FileTicket  from './file-ticket-form/FileTicket';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: 'fit-content',
  border: '1px solid ' + theme.palette.divider,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary['main'],
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: 'pointer',
  '&:nth-of-type(even)': {
    backgroundColor:   theme.palette.secondary['light'],
  },
  '&:nth-of-type(odd)': {
    backgroundColor:  theme.palette.secondary['light'],
  },
  [`&.${tableRowClasses.selected}`]:{
    backgroundColor: theme.palette.secondary['800'],
    '& td': {
      color: theme.palette.common.white,
    },
  '&:hover': {
    backgroundColor: theme.palette.secondary['800'],
    '& td': {
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
  }},

}));

function createData(id, name, calories, fat, carbs, protein) {
  return { id,name, calories, fat, carbs, protein };
}

const rows = [
  createData(1,'Frozen yoghurt', 159, 6.0, 24, 4.0, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(2,'Ice cream sandwich', 237, 9.0, 37, 4.3, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(3,'Eclair', 262, 16.0, 24, 6.0, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(4,'Cupcake', 305, 3.7, 67, 4.3, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(5,'Gingerbread', 356, 16.0, 49, 3.9, 'Frozen yoghurt', 159, 6.0, 24, 4.0)
];
const tableHeaders = [
  '',
  'מצב התיק',
  'סטטוס',
  'תיק פנימי',
  'שם החייב',
  'תז החייב',
  'תיק עורך דין',
  'שם עורך דין',
  'שם הלקוח',
  'סטטוס מסירה\\איתור',
  'סטטוס חשבון עסקה',
  'תאריך פתיחת תיק',
  'תאריך העברה למוסר',
  'תאריך ביצוע המסירה',
  'תאריך סגירת תיק'
];

export default function FilesTable() {
  const [selected, setSelected] = useState([]);

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };
  return (
    <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
      <Table sx={{ minWidth: 700, borderRadius: '10px' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <StyledTableCell  key={index} align={'center'}>
                {header}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const isItemSelected = selected.includes(row.id);
            const [open, setOpen] = useState(false);

            return(
              <Fragment key={row.id}>
                <StyledTableRow hover={false} onClick={(event) => handleClick(event, row.id)}
                                 key={row.id} selected={isItemSelected}>
                  <TableCell size={"small"} onClick={() => setOpen(!open)}>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <KeyboardArrowUpIcon  sx={{ color: 'white' }}/> : <KeyboardArrowDownIcon  />}
                    </IconButton>
                  </TableCell>
                  <StyledTableCell onClick={() => setOpen(!open)} scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell size={"small"} onClick={() => setOpen(!open)} align={'center'} >{row.calories}</StyledTableCell>
                  <StyledTableCell size={"small"} onClick={() => setOpen(!open)} align={'center'}>{row.fat}</StyledTableCell>
                  <StyledTableCell size={"small"} onClick={() => setOpen(!open)} align={'center'}>{row.carbs}</StyledTableCell>
                  <StyledTableCell size={"small"} onClick={() => setOpen(!open)} align={'center'}>{row.protein}</StyledTableCell>
                  <StyledTableCell size={"small"} onClick={() => setOpen(!open)} align={'center'} >{row.calories}</StyledTableCell>
                  <StyledTableCell size={"small"} onClick={() => setOpen(!open)} align={'center'} >{row.fat}</StyledTableCell>
                  <StyledTableCell size={"small"} onClick={() => setOpen(!open)} align={'center'}>{row.carbs}</StyledTableCell>
                  <StyledTableCell size={"small"} onClick={() => setOpen(!open)} align={'center'} >{row.protein}</StyledTableCell>
                  <StyledTableCell size={"small"} onClick={() => setOpen(!open)} align={'center'}>{row.calories}</StyledTableCell>
                  <StyledTableCell size={"small"}  align={'center'}>{row.fat}</StyledTableCell>
                  <StyledTableCell size={"small"} align={'center'}>{row.carbs}</StyledTableCell>
                  <StyledTableCell size={"small"} align={'center'}>{row.protein}</StyledTableCell>
                  <StyledTableCell size={"small"} align={'center'} >{row.protein}</StyledTableCell>

                </StyledTableRow>
                <TableRow >
                  <TableCell sx={{ padding: 0, paddingTop: 0 }} colSpan={15}>
                      <Collapse in={open} timeout="auto" unmountOnExit >
                        <FileTicket />
                      </Collapse>
                   </TableCell>
                </TableRow>
          </Fragment>
            ) })}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
