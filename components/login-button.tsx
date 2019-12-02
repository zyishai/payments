import React from 'react';
import Router from 'next/router';
import { Button, makeStyles } from "@material-ui/core"
import { signIn } from '../src/firebase';
import { ButtonProps } from '@material-ui/core/Button';
import { GoogleIcon } from './google-icon';

const useStyles = makeStyles({
    startIcon: {
        margin: '0 0 0 5px'
    }
});

export const LoginButton: React.FC<ButtonProps & { returnUrl: string }> = ({ children, returnUrl, ...props }) => {
    const styles = useStyles(props);
    return (
        <Button
            onClick={() => signIn().then(() => {
                if (returnUrl) {
                    Router.push(returnUrl)
                }
            })}
            variant="contained"
            color="default"
            startIcon={<GoogleIcon />}
            size="large"
            classes={{
                startIcon: styles.startIcon
            }}
            {...props}>
            {children}
        </Button>
    )
}