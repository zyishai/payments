import React from 'react';
import { ButtonBase, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles<Theme, Props>((theme: Theme) => 
    createStyles({
        root: {
            paddingTop: theme.spacing(1),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            margin: theme.spacing(1),
            // backgroundColor: theme.palette.primary.main,
            color: props => props.color,
            border: props => `1px solid ${props.borderColor || props.color}`,
            fontSize: theme.typography.fontSize,
            width: theme.spacing(3) * 5,
            height: theme.spacing(3) * 5,
            borderRadius: theme.shape.borderRadius,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            transition: '.5s',
            '&:hover': {
                backgroundColor: props => props.color,
                color: props => props.onHoverTextColor
            }
        }
    })
)

interface Props {
    color: string;
    borderColor?: string;
    onHoverTextColor: string;
}
export const MenuButton: React.FC<Props> = ({ children, ...props }) => {
    const styles = useStyles(props);
    return (
        <ButtonBase
            classes={{
                root: styles.root
            }}>
            {children}
        </ButtonBase>
    );
}