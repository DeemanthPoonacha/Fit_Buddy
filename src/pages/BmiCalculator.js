import { Box, Button, InputAdornment, MenuItem, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { bmiOptions , fetchData} from '../utils/fetchData';

const BmiCalculator = ({setPage}) => {
    setPage('bmi')//onClick={handleSearch}
    const [weight, setWeight] = useState();
    const [weightMetric, setWeightMetric] = useState('kg');
    const [heightMetric, setHeightMetric] = useState('mts');
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState(0)

    // useEffect(() => {
        const fetchBmi = async () => {
            const bmiUrl = 'https://body-mass-index-bmi-calculator.p.rapidapi.com';
            
            const bmiData = await fetchData(`${bmiUrl}/metric?weight=${weight}&height=${height}`, bmiOptions);
            setBmi(bmiData.bmi);
            console.log(bmiData);
        }
        
    // }, [])
    

    let handleChange = () => { }
    // const weightMetrics = [
    //     {
    //         value: 'kg',
    //         label: 'kg',
    //     },
    //     {
    //         value: 'lbs',
    //         label: 'lbs',
    //     },
    // ];
  return (
      <Box
        sx={{
            '& .MuiTextField-root': { width:"250px", mt:"25px" },
        }}
        display="flex" 
        justifyContent="center">
        <Stack>
          <TextField id="outlined-basic" label="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              InputProps={{
              endAdornment: <InputAdornment position="end">{weightMetric}</InputAdornment>,
              }}
              variant="outlined"
          />
          <TextField id="outlined-basic" label="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              InputProps={{
              endAdornment: <InputAdornment position="end">{heightMetric}</InputAdornment>,
              }}
              variant="outlined"
          />
        {/* <TextField
          id="outlined-select-meric"
          select
          label="Metric"
          value={weightMetric}
          onChange={(e) => setWeightMetric(e.target.value.toLowerCase())}
          helperText="Please select your metric"
        >
          {weightMetrics.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        {/* <TextField
          height="76px"
        //   sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: {inputWidth} }, backgroundColor: '#fff', borderRadius: '40px', justifyContent: 'center' }}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
          type="text"
        />KG
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: {inputWidth}}, backgroundColor: '#fff', borderRadius: '40px' }}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
          type="text"
        /> */}
            <Button className="calc-btn" sx={{mt:'25px' ,bgcolor: '#FF2625', color: '#fff', textTransform: 'none', height: '56px', fontSize: { lg: '20px', xs: '14px' } }} onClick={fetchBmi} >
            Calculate BMI
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <Typography variant='h4' align='center'>Your BMI is</Typography>
            <Typography variant='h1' align='center'> { bmi?bmi.toFixed(2):0 }</Typography>
        </Stack>
    </Box>
  )
}

export default BmiCalculator