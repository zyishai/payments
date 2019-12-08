import React from 'react';
import { createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import lang from '../../src/lang';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.up('lg')]: {
                paddingTop: theme.spacing(7),
            },
            [theme.breakpoints.down('md')]: {
                paddingTop: theme.spacing(4),
            },
            paddingBottom: theme.spacing(5)
        }
    })
);

export const Header = ({ children, ...props }) => {
    const styles = useStyles(props);
    return (
        <Typography variant='h3' align='center' className={styles.root}>{children}</Typography>
    );
}