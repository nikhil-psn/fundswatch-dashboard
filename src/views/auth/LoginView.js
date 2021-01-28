import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
import {
    Box,
    // Button,
    Container,
    // Grid,
    // Link,
    // TextField,
    // Typography,
    makeStyles
} from '@material-ui/core';
// import FacebookIcon from 'src/icons/Facebook';
// import GoogleIcon from 'src/icons/Google';
import Page from 'src/components/Page';
import QueuedReports from '../reports/DashboardView/QueuedReports'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        height: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const LoginView = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Page
            className={classes.root}
            title="Pending Reports"
        >
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
            >
                <Container >
                    <QueuedReports />
                </Container>
            </Box>
        </Page>
    );
};

export default LoginView;