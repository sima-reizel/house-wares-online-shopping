import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function TotalShow({item}) {
return (
  <>
    <h1>...</h1>
    <Card sx={{ maxWidth: 1300,paddingLeft:5 ,paddingRight:80}}>
      <CardMedia 
        sx={{ height: 250, width:450}}
        image={item.imgUrl}
        title={item.name}
    /> 
     <CardContent > 
      <Typography variant="h6" color="text.secondary">כמות:{item.qty} </Typography> 
      <Typography  variant="h4" component="div" > {item.qty*item.price} $</Typography>   
     </CardContent>
  </Card>
 </>
);
}