import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate, useLocation } from 'react-router';


export default function AddressForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const session_token = location.state?.sessionToken
  const [orderError, setOrderError] = useState("")
  const [paymentType, setPaymentType] = useState("")
  const handleSubmit = (event) =>{
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const orderData = {
    "consigneeName": data.get('consigneeName'),
    "consigneeAddress": data.get('consigneeAddress'),
    "consigneeCity": data.get('consigneeCity'),
    "consigneeCountry": data.get('consigneeCountry'),
    "consigneePostalCode": data.get('consigneePostalCode'),
    "consigneeProvince": data.get('consigneeProvince'),
    "consigneeNumber": data.get('consigneeNumber'),
    "length": parseFloat(data.get('length')),
    "width": parseFloat(data.get('width')),
    "height": parseFloat(data.get('height')),
    "weight": parseFloat(data.get('weight')),
    "paymentType": paymentType,
    }
    
    console.log(orderData, 'data')
    
    axios
    .post("https://fe-screening.onrender.com/orders", orderData, {
      headers: {
        'Authorization': session_token
      }
    })
    .then(res => {
      console.log(res)
      if(res.status === 200) {
      navigate('/dashboard', {state: {sessionToken: session_token}})
      }
    })
    .catch(error =>{
      console.log(error.response)
      setOrderError("Order submission failed. Please check fields again")
    })
  }
  return (
    <React.Fragment>
      {orderError !== "" &&
      <Box>
        <Typography variant="h6" gutterBottom>
          {orderError}
        </Typography>
      </Box>
      }
      <Grid container component="form" onSubmit={handleSubmit}>
     
      <Typography variant="h6"gutterBottom>
        Consignee Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="consigneeName"
            name="consigneeName"
            label="Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="number"
            id="consigneeNumber"
            name="consigneeNumber"
            label="Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="consigneeAddress"
            name="consigneeAddress"
            label="Address"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="consigneeCity"
            name="consigneeCity"
            label="City"
            fullWidth
            variant="standard"
          />
        </Grid>
       
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="consigneeProvince"
            name="consigneeProvince"
            label="Province"
            fullWidth
            variant="standard"
          />
        </Grid>
         <Grid item xs={12} sm={3}>
          <TextField
            required
            id="consigneeCountry"
            name="consigneeCountry"
            label="Country"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="consigneePostalCode"
            name="consigneePostalCode"
            label="Postal code"
            fullWidth
            variant="standard"
          />
        </Grid>
         <Grid item>
        </Grid>
       
      </Grid>
      
      <Typography variant="h6" gutterBottom>
        Package Information
        <Tooltip title = "Round details to 1 d.p.">
          <IconButton>
            <InfoIcon/>
          </IconButton>
        </Tooltip>
      </Typography> 
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <FormControl variant="standard" sx={{minWidth: 120 }}>
          <InputLabel id="paymentType">Payment Type</InputLabel>
          <Select
            labelId="paymentType"
            id="paymentType"
            value={paymentType}
            onChange={event=> setPaymentType(event.target.value)}
            label="PaymentType"
            required
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={'cod'}>COD</MenuItem>
            <MenuItem value={'prepaid'}>Prepaid</MenuItem>
          </Select>
          </FormControl>
        </Grid>
        <Grid item sm={8}>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            type="number" inputProps={{ min: 0, step: 0.1}}
            id="length"
            name="length"
            label="Length (cm)"
            fullWidth
            variant="standard"
            onChange={event => event.target.value < 0 ? event.target.value = 0 : event.target.value}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            type="number" inputProps={{ min: 0, step: 0.1}}
            id="width"
            name="width"
            label="Width (cm)"
            fullWidth
            variant="standard"
            onChange={event => event.target.value < 0 ? event.target.value = 0 : event.target.value}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            type="number" inputProps={{min:0, step: 0.1}}
            id="height"
            name="height"
            label="Height (cm)"
            fullWidth
            variant="standard"
            onChange={event => event.target.value < 0 ? event.target.value = 0 : event.target.value}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            type="number" inputProps={{ min: 0, step: 0.1}}
            id="weight"
            name="weight"
            label="Weight (kg)"
            fullWidth
            variant="standard"
            onChange={event => event.target.value < 0 ? event.target.value = 0 : event.target.value}
          />
        </Grid>
        
        <Grid item xs>
          
        </Grid>
    </Grid>
    <Grid container justifyContent="center">
      <Button
        variant="contained"
        size="small"
        type="submit"
      // onClick={handleNext}
      >Submit
      </Button>
    </Grid>
    </Grid>
  </React.Fragment>
  );
}