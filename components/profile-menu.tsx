import React, { useEffect, useState } from 'react'
import { ButtonProps } from '@material-ui/core/Button'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import lang from '../src/lang';
import { user$, signOut } from '../src/firebase';
import { User } from 'firebase';
import { Button } from '@material-ui/core';

interface PropType {
    menuProps?: MenuProps;
}

export const ProfileMenu: React.FC<PropType & ButtonProps> = ({ menuProps, ...buttonProps }) => {
    const [user, setUser] = useState<User>(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        const sub = user$.subscribe(
            setUser,
            () => () => setUser(null)
        );

        return () => sub.unsubscribe();
    }, [user$]);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const logoutAction = () => {
        signOut()
            .then(handleClose)
            .catch(handleClose);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        user
        ?
            <>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color='inherit'
                    {...buttonProps}
                >
                    {/* <Avatar src={user.photoURL} alt={user.displayName} /> */}
                    {user.displayName}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    {...menuProps}
                >
                    <MenuItem onClick={logoutAction}>{lang.logoutButtonLabel}</MenuItem>
                </Menu>
            </>
        : null
    );
}