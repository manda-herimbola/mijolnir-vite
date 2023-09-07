import React from 'react';
import {Grid, Link} from "@mui/material";

const AuthLink = () => {
    return (
        <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="/create_account" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
        </Grid>
    );
};

export default AuthLink;