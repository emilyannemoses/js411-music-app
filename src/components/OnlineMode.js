import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function OnlineMode() {
  return (
    <Card sx={{ minWidth: 300, minHeight: 200, m: 6, }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Online Mode
        </Typography>
        <Typography variant="body2">
          Is this application connected to the Internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch {...label} />
      </CardActions>
    </Card>
  );
}