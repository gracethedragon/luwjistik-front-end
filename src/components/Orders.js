import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

// const session_token = sessionStorage.getItem('sessionToken');



export default function Orders({session}) {
  const [rows, setRows] = useState([])
  const [dataExist, setDataExist] = useState(false)
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const session_token = location.state?.sessionToken
  useEffect(()=>{
    session_token && 
    axios
    .get("https://fe-screening.onrender.com/orders", {
      headers:{
        'Authorization': session_token
      }
    })
    .then(res=>{
      console.log(res)
      setLoading(false)
      if (res.data.data?.length >= 1) {
        setRows(res.data.data)
        setDataExist('exist')
      } else {
        setDataExist('no data')
      }
    })
  }, [])
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tracking Number</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Payment Type</TableCell>
            <TableCell>Weight (kg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading &&
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Loading orders ...
            </TableCell>
          </TableRow>
          }

          {dataExist === "exist" && 
          rows.map(row => 
            <TableRow key={row.TrackingNumber}>
              <TableCell>{row.TrackingNumber}</TableCell>
              <TableCell>{(row.ConsigneeCountry.toUpperCase())}</TableCell>
              <TableCell>{row.PaymentType}</TableCell>
              <TableCell>{(row.Weight).toFixed(1)}</TableCell>
            </TableRow>
          )}
          {dataExist === "no data" &&
          <TableRow>
            <TableCell align="center" colSpan={4}>
              No orders yet
            </TableCell>
          </TableRow>
          } 
        </TableBody>
      </Table>
    </React.Fragment>
  );
}