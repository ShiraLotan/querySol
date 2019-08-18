import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import { withStyles } from '@material-ui/core/styles';
import greenDot from './img/greenDot.png';
import redDot from './img/redDot.jpg';
import * as style from './main.material.style';
import NoSsr from '@material-ui/core/NoSsr';

import './main.css';
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));




function Main(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;



  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }


  
  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}



function createData(date1, date2, date3, name, active, wrong, id, operator) {
  return { date1, date2, date3, name, active, wrong, id, operator };
}

const rows = [
  createData('3/3/2019', '3/3/2019', '3/3/2019', 'יוחנן כהן', 'פעיל', 'פעיל','1', 'אגד'),
  createData('3/3/2019', '3/3/2019', '3/3/2019', 'יוחנן כהן', 'פעיל', 'תקלה','2', 'אגד'),
  createData('3/3/2019', '3/3/2019', '3/3/2019', 'יוחנן כהן', 'תקלה', 'פעיל','3', 'אגד'),
  createData('3/3/2019', '3/3/2019', '3/3/2019', 'יוחנן כהן', 'תקלה', 'פעיל','4', 'אגד'),
  createData('3/3/2019', '3/3/2019', '3/3/2019', 'יוחנן כהן', 'תקלה', 'פעיל','5', 'אגד'),
  createData('3/3/2019', '3/3/2019', '3/3/2019', 'יוחנן כהן', 'פעיל', 'תקלה','6', '234'),
  createData('', '', '', '', '', '','7', ''),
  createData('', '', '', '', '', '','8', ''),
  createData('', '', '', '', '', '','9', ''),
  createData('', '', '', '', '', '','10', ''),
]

const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <div className='main'>
      <div className='upperRow'>
      <NoSsr>
      <style.CustomTextField
        id="outlined-email-input"
        label="חיפוש"
        type="search"
        name="email"
        margin="dense"
        variant="outlined"
      />
      </NoSsr>
        <style.CustomFab  variant="extended">
          הוספת מפעיל
        </style.CustomFab>
        <span className='topRightHead'>ניהול מפעילים</span>
      </div>

    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>מועד שליפה תקינה אחרונה</StyledTableCell>
            <StyledTableCell align="right">מועד שליפה אחרון</StyledTableCell>
            <StyledTableCell align="right">מועד שאילתה היסטוריה אחרונה</StyledTableCell>
            <StyledTableCell align="right">איש קשר</StyledTableCell>
            <StyledTableCell align="right">סטטוס תפעולי</StyledTableCell>
            <StyledTableCell align="right">סטטוס ניהולי</StyledTableCell>
            <StyledTableCell align="right"> מספר המפעיל במערכת</StyledTableCell>
            <StyledTableCell align="right"> שם המפעיל</StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
          </TableRow>
        </TableHead>

          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
              
              <TableRow key={row.id}>

                <TableCell align="right" scope="row">{row.date1}</TableCell>
                <TableCell align="right">{row.date2}</TableCell>
                <TableCell align="right">{row.date3}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.active}{row.active === 'פעיל' ? <img className='dot1' src={greenDot} alt='#'/>: (row.active === 'תקלה'? <img className='dot' src={redDot} alt='#'/>: null)}</TableCell>
                <TableCell align="right">{row.wrong}{row.wrong === 'פעיל' ? <img className='dot1' src={greenDot} alt='#'/>: (row.wrong === 'תקלה'? <img className='dot' src={redDot} alt='#'/>: null)}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.operator}</TableCell>
                <TableCell align="right" padding={'none'} ></TableCell>
                
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={Main}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  </div>

  );
}