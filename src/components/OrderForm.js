import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

export default function AddressForm() {
  return (
    <React.Fragment>
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
            autoComplete="given-name"
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
            autoComplete="family-name"
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
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="pickupState"
            name="pickupState"
            label="State"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
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
            autoComplete="shipping postal-code"
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
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
      <br/>
      <Typography variant="h6" gutterBottom>
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
            autoComplete="given-name"
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
            autoComplete="family-name"
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
            autoComplete="shipping address-line1"
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
            autoComplete="shipping address-level2"
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
            id="consgineeProvince"
            name="consgineeProvince"
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
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
      <br/>
      <Typography variant="h6" gutterBottom>
        Package Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="length"
            name="length"
            label="Length"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="width"
            name="width"
            label="Width"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="height"
            name="height"
            label="Height"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="weight"
            name="weight"
            label="Weight"
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
      // onClick={handleNext}
      >Submit
      </Button>
    </Grid>
    
    </React.Fragment>
  );
}