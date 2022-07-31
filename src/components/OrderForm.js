import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

const session_token = "f428d380583f81dff5d148c13da798bb9d59e9bf0f6862d137f0a19566d50626"

export default function AddressForm() {
  const handleSubmit = (event) =>{
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const orderData = {
    consignee_name: data.get('consigneeName'),
    consignee_number: data.get('consigneeNumber'),
    consignee_address: data.get('consigneeAddress'),
    consignee_postal: data.get('consigneePostal'),
    consignee_country: data.get('consigneeCountry'),
    consignee_city: data.get('consigneeCity'),
    consignee_state: data.get('consigneeState'),
    consignee_province: data.get('consigneeProvince'),
    consignee_email: data.get('consigneeEmail'),
    length: data.get('length'),
    width: data.get('width'),
    height: data.get('height'),
    weight: data.get('weight'),
    payment_type: data.get('paymentType'),
    pickup_contact_name: data.get('pickupName'),
    pickup_contact_number: data.get('pickupNumber'),
    pickup_address: data.get('pickupAddress'),
    pickup_postal: data.get('pickupPostal'),
    pickup_country: data.get('pickupCountry'),
    pickup_city: data.get('pickupCity'),
    pickup_state: data.get('pickupState'),
    pickup_province: data.get('pickupProvince') ,
    }
    
    console.log(orderData, 'data')

    axios
    .post("https://frontend-screening-v1.herokuapp.com/order", orderData, {
      headers: {
        'Authorization': session_token
      }
    })
    .then(res => console.log(res))
  }
  return (
    <React.Fragment>
      <Grid container component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
          Shipper Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pickupName"
            name="pickupName"
            label="Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pickupNumber"
            name="pickupNumber"
            label="Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="pickupAddress"
            name="pickupAddress"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="pickupCity"
            name="pickupCity"
            label="City"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="pickupState"
            name="pickupState"
            label="State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="pickupProvince"
            name="pickupProvince"
            label="Province"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pickupPostal"
            name="pickupPostal"
            label="Postal code"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pickupCountry"
            name="pickupCountry"
            label="Country"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <br/>
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
            id="consigneeNumber"
            name="consigneeNumber"
            label="Number"
            fullWidth
            variant="standard"
          />
        </Grid>
         <Grid item xs={12}>
          <TextField
            
            id="consigneeEmail"
            name="consigneeEmail"
            label="Email"
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
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="consigneeCity"
            name="consigneeCity"
            label="City"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="consigneeState"
            name="consigneeState"
            label="State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="consigneeProvince"
            name="consigneeProvince"
            label="Province"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="consigneePostal"
            name="consigneePostal"
            label="Postal code"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="consigneeCountry"
            name="consigneeCountry"
            label="Country"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <br/>
      <Typography variant="h6" gutterBottom>
        Package Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
          <TextField
            
            id="length"
            name="length"
            label="Length"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            
            id="width"
            name="width"
            label="Width"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            
            id="height"
            name="height"
            label="Height"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            
            id="weight"
            name="weight"
            label="Weight"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            
            id="paymentType"
            name="paymentType"
            label="Payment Type"
            fullWidth
            variant="standard"
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