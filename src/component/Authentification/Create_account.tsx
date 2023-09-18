import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";
import Copyright from "./Copyright";

const theme = createTheme();

const CreatAccount = () => {

    const username = false
    const email = false
    const password = false
    const confirmation = false

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

                    <Typography component="h1" variant="h5">Create Account</Typography>

                    <Box component="form"
                         onSubmit={ ()=>{} }
                         noValidate
                         sx={{ mt: 1 }}>

                        <TextField error={username}
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="Username"
                            autoFocus/>

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

                        <TextField error={confirmation}
                            margin="normal"
                            required
                            fullWidth
                            name="confirmation"
                            label="Confirmation"
                            type="password"
                            id="confirmation"
                            autoComplete="current-password"/>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>Create</Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="/sign_in" variant="body2">
                                    Back to sign in
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
                <Copyright sx={{ mt: 2 }}/>
            </Container>
        </ThemeProvider>
    );

};

export default CreatAccount;