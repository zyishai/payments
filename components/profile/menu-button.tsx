import React from 'react';
import { ButtonBase, createStyles, Theme, Color } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles<Theme, Props>((theme: Theme) => 
    createStyles({
        root: {
            paddingTop: theme.spacing(1),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            margin: theme.spacing(1),
            backgroundColor: props => props.baseColor[900],
            color: props => props.onHoverTextColor,
            border: props => `1px solid ${props.borderColor || props.baseColor[900]}`,
            fontSize: theme.typography.fontSize * 1.8,
            width: theme.spacing(4) * 5,
            height: theme.spacing(4) * 5,
            borderRadius: theme.shape.borderRadius * 1.8,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            transition: '.5s',
            '&:hover': {
                backgroundColor: props => props.baseColor[700],
                color: props => props.onHoverTextColor
            }
        }
    })
)

interface Props {
    baseColor: Color;
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