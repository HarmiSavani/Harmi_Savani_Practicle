import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OrderTable = ({ orderList }:any) => {

  return (
    <TableContainer component={Paper} className="dark:bg-zinc-900 dark:text-white	">
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-gray-100 dark:bg-zinc-900 dark:text-white">
            <TableCell className="dark:text-white">Order Id</TableCell>
            <TableCell align="center" className="dark:text-white" >Customer Id</TableCell>
            <TableCell  align="center" className="dark:text-white">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.slice(0,5).map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className='dark:bg-zinc-900 dark:text-white	'
            >
              <TableCell component="th" scope="row" className="dark:bg-zinc-900 dark:text-white	">
                {row.OrderId}
              </TableCell>
              <TableCell align="center" className="dark:text-white">{row.CustomerId}</TableCell>
              <TableCell align="center" className="dark:text-white">{row.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
