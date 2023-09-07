import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    TextField,
    Typography
} from "@mui/material";
import Copyright from "./Copyright";
import AuthLink from './AuthLink';
import usePostData from "../../Hooks/usePostData";
import {useRecoilValue} from "recoil";
import {Sign_in} from "../../RecoilState/Authentification";

const theme = createTheme();

export default function SignIn() {

    const [email, password]: Array<boolean> = useRecoilValue(Sign_in)

    const [, PostUsers ]: any = usePostData('http://localhost:5000/users/login')

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">

                <CssBaseline />
                <Box sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Sign in</Typography>

                    <Box component="form" onSubmit={PostUsers} noValidate sx={{ mt: 1 }}>
                        <TextField error={email}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus/>

                        <TextField error={password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"/>

                        <FormControlLabel control={
                            <Checkbox value="remember"
                                      color="primary" />} label="Remember me"/>

                        <Button type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>Sign In</Button>

                        <AuthLink />
                    </Box>
                </Box>

                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}