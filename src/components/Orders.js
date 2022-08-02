import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios';
import { useState, useEffect } from 'react';

const session_token = sessionStorage.getItem('sessionToken');

// Generate Order Data
function createData({
  consignee_address,
  consignee_city,
  consignee_country,
  consignee_email,
  consignee_name,
  consignee_number,
  consignee_postal,
  consignee_province,
  consignee_state,
  height,
  length,
  order_id,
  payment_type,
  pickup_address,
  pickup_city,
  pickup_contact_name,
  pickup_contact_number,
  pickup_country,
  pickup_postal,
  pickup_province,
  pickup_state,
  user_id,
  weight,
  width}) {
  return { order_id, pickup_country, consignee_country, payment_type, weight };
}


export default function Orders() {
  const [rows, setRows] = useState([])
  
  useEffect(()=>{
    axios
    .get("https://fe-screening.onrender.com/orders", {
      headers:{
        'Authorization': session_token
      }
    })
    .then(res=>{
      console.log(res)
      setRows(res.data.data.map((data)=> createData(data)))
    })
  }, [])
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