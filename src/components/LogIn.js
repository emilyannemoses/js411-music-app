import React,{ useState } from 'react';
import Dashboard from './Dashboard';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FlashOnRounded } from '@mui/icons-material';

export default function LogIn() {
    const [login, setLoggedIn] = useState(false)

    const handleClick = () => {
        setLoggedIn(!login)
    };

    return( 
        <div>
        <Card sx={{ minWidth: 200, minHeight: 200 }}>
        <CardContent>
            <Box
            component='form'
            sx={{'& > :not(style)': { m: 5, width: '20ch' },}}
            noValidate
            autoComplete='off'
            >
            <TextField id='outlined-basic' label='Username' variant='outlined' />
            <TextField id='outlined-basic' label='Password' variant='outlined' />
            </Box>
        </CardContent>
        <CardActions>
            <Stack spacing={100} direction='row'>
                <Button sx={{margin: 5,}}
                        onClick={handleClick}>Log In
                </Button>
            </Stack>
        </CardActions>
        </Card>
            {login && <Dashboard />}
        </div>
    )
}