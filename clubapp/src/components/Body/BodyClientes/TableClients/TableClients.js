import './TableClients.css'
import React ,{ useState } from 'react';
import  PropTypes  from 'prop-types';
import { useTheme } from '@emotion/react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, 
        TableFooter, Box, IconButton } from '@mui/material'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Cupcake', 305, 3.7, 2, 3),
    createData('Donut', 452, 25.0, 2, 3),
    createData('Eclair', 262, 16.0, 2, 3),
    createData('Frozen yoghurt', 159, 6.0, 2, 3),
    createData('Gingerbread', 356, 16.0, 2, 3),
    createData('Honeycomb', 408, 3.2, 2, 3),
    createData('Ice cream sandwich', 237, 9.0, 2, 3),
    createData('Jelly Bean', 375, 0.0, 2, 3),
    createData('KitKat', 518, 26.0, 2, 3),
    createData('Lollipop', 392, 0.2, 45, 6),
    createData('Marshmallow', 318, 0, 2, 3),
    createData('Nougat', 360, 19.0, 2, 3),
    createData('Oreo', 437, 18.0, 2, 3),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

  function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
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
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

const TableClients = () => {

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    return (
        <TableContainer sx={{position: 'relative', top: '80px', width: '86%', maxHeight: '80%'}}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
            <TableRow sx={{color: 'rgb(33, 43, 54)'}}>
                <TableCell sx={{fontSize: '17px', color: 'rgb(33, 43, 54)'}}>Nombre completo</TableCell>
                <TableCell align='right' sx={{fontSize: '17px', color: 'rgb(33, 43, 54)'}}>Teléfono</TableCell>
                <TableCell align='right' sx={{fontSize: '17px', color: 'rgb(33, 43, 54)'}}>Correo</TableCell>
                <TableCell align='right' sx={{fontSize: '17px', color: 'rgb(33, 43, 54)'}}>Dirección</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{color: 'rgb(33, 43, 54)'}}>
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160, color: 'rgb(33, 43, 54)' }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160, color: 'rgb(33, 43, 54)' }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160, color: 'rgb(33, 43, 54)' }} align="right">
                {row.carbs}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'Todas', value: -1 }]}
              colSpan={6}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              labelRowsPerPage='Filas a mostrar:'
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    )

}

export default React.memo(TableClients)