import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

const TableComponent = ({ productList }: { productList: any[] }) => {
  
  const [rows, setRows] = useState<any[]>([]);

    useEffect(() => {
    setRows(productList.slice(0,5));
  }, [productList]);

  return (
    <TableContainer component={Paper} className="dark:bg-zinc-900 dark:text-white	">
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead className='dark:bg-zinc-900 dark:text-white'>
          <TableRow className="bg-gray-100 dark:bg-zinc-900 dark:text-white	">
            <TableCell className="dark:text-white">Product Name</TableCell>
            <TableCell align="center" className="dark:text-white">ManufacturedCountry</TableCell>
            <TableCell  align="center" className="dark:text-white">WeightGrams</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='dark:bg-zinc-900 dark:text-white	'>
          {rows.map((row: any) => (
            <TableRow
            className='dark:bg-zinc-900 dark:text-white	'
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              
            >
              <TableCell component="th" scope="row" className="dark:text-white">
                {row.Name}
              </TableCell>
              <TableCell align="center" className="dark:text-white">{row.ManufacturedCountry}</TableCell>
              <TableCell align="center" className="dark:text-white">{row.WeightGrams}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
