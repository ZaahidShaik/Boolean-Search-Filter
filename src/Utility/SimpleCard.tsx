import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (



    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: '#173A5E',
        overflow: 'hidden', 
        borderRadius: '1px',
        boxShadow: 1,
        fontWeight: 'bold',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}

      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 250 },
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>

        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>

        </Box>
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: '5px',
            color: 'primary.main',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            '& svg': {
              fontSize: 21,
              mr: 1,
            },
          }}
        >
          <ErrorOutlineIcon />

        </Box>
      </Box>
    </Box>





 
);

export default function SimpleCard() {
  return (
    <Box sx={{ minWidth: 600 }}>
      <Card variant="outlined">{card}</Card>
     </Box>
  );
}