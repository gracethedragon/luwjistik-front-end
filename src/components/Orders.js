import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios';

const session_token = "f428d380583f81dff5d148c13da798bb9d59e9bf0f6862d137f0a19566d50626"

// Generate Order Data
function createData(order_id, pickup_country, consignee_country, payment_type, weight) {
  return { order_id, pickup_country, consignee_country, payment_type, weight };
}



const rows = [
  createData(
    0,
    'SG',
    'MY',
    'card',
    312.44,
  ),
  createData(
    1,
    'MY',
    'ID',
    'COD',
    866.99,
  ),
  createData(
    2, 
    'SG', 
    'MY', 
    'card', 
    100.81
  ),
  createData(
    3,
    'ID',
    'MY',
    'card',
    654.39,
  ),
  createData(
    4,
    'MY',
    'SG',
    'card',
    212.79,
  ),
];


export default function Orders() {

  axios
  .get("https://frontend-screening-v1.herokuapp.com/order", {
    headers:{
      'Authorization': session_token
    }
  })
  .then(res=>console.log(res))
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell>Ship From</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.order_id}>
              <TableCell>{row.order_id}</TableCell>
              <TableCell>{row.pickup_country}</TableCell>
              <TableCell>{row.consignee_country}</TableCell>
              <TableCell>{row.payment_type}</TableCell>
              <TableCell align="right">{`${row.weight}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}