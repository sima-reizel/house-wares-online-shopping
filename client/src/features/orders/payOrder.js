import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate } from 'react-router';
export  function PayOrder() {
  let sum=useSelector(state=>state.order.basketArr);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const totalSUm = sum.map(item => item.qty*item.price).reduce((a, b) => a + b)
  let nav=useNavigate();
  const buy=()=>{
  nav('./ThankYou')
  }
  return (       
    <Box sx={{ display: 'flex', flexWrap: 'wrap',justifyContent: "center" }}>
      <div>
        <FormControl fullWidth sx={{ m: 1 ,width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">מספר אשראי</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <br/>
        <TextField
          label="תוקף"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
        <br/>
        <TextField
          label="3 ספרות"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
        />
        <div>${totalSUm}</div>
        <Stack direction="column-reverse" >
          <Button onClick={()=>{buy()}}>pay </Button>
        </Stack>
      </div>
    </Box>
  );
}