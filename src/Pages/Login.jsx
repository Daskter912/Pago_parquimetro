import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';










    const SignInContainer = styled(Stack)(({ theme }) => ({
        height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
        minHeight: '100%',
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
        },
        '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
            'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
        },
    }));


    const Card = styled(MuiCard)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        width: '100%',
        padding: theme.spacing(4),
        gap: theme.spacing(2),
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
        maxWidth: '400px',
        },
        boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
        ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
        }),
    }));


export default function Login() {
    return (
    <CssBaseline  enableColorScheme >
        <SignInContainer>
            <Card variant='outlined' >
            <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
                Iniciar sesión
            </Typography>
            <Box
                component="form"
                onSubmit={''}
                noValidate
                sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
                }}
            >
                <FormControl>
                <FormLabel htmlFor="email">Matricula</FormLabel>
                <TextField
                    error={''}
                    helperText={''}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Matricula"
                    autoComplete="email"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                />
                </FormControl>
                <FormControl>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <TextField
                error={''}
                helperText={''}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={''}
            >
              Enviar
            </Button>
            </Box>
            </Card>

        </SignInContainer>
    </CssBaseline>
    )
}

