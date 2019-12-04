import React from 'react';
import { createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import lang from '../../src/lang';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5)
        }
    })
);

export const Header = ({ name, ...props }) => {
    const styles = useStyles(props);
    return (
        <Typography variant='h3' align='center' className={styles.root}>{lang.profileHeaderGreeting} {name}</Typography>
    );
}