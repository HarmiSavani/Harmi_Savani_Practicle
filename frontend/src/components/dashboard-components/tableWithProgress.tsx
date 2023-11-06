import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Tooltip,
} from '@mui/material';

const TableWithProgressBar = ({ saleList }: any) => {
  return (
    <TableContainer component={Paper} className='dark:bg-zinc-900 dark:text-white	'>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100 dark:bg-zinc-900 dark:text-white">
            <TableCell className="dark:text-white">Order ID</TableCell>
            <TableCell className="dark:text-white">Product Id</TableCell>
            <TableCell className="dark:text-white">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {saleList.map((row: any) => (
            <TableRow key={row.id} className='dark:bg-zinc-900 dark:text-white	'>
              <TableCell className="dark:text-white">{row.OrderId}</TableCell>
              <TableCell className="dark:text-white">{row.ProductId}</TableCell>
              <TableCell className="dark:text-white">
                <Tooltip title={`${row.Quantity}`} arrow className="dark:text-white">
                  <LinearProgress
                    variant="determinate"
                    value={row.Quantity}
                    sx={{ minWidth: 100 }}
                  />
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableWithProgressBar;
