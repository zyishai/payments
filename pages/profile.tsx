import React from 'react';
import { withAuth } from '../guards/auth';
import { User } from 'firebase';
import { MenuButton } from '../components/profile/menu-button';
import FaceIcon from '@material-ui/icons/Face';
import PaymentIcon from '@material-ui/icons/Payment';
import ScheduleIcon from '@material-ui/icons/Schedule';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import lang from '../src/lang';
import { theme } from '../src/theme';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { Header } from '../components/profile/header';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        hero: {
            marginTop: theme.spacing(8),
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            justifyContent: 'center'
        }
    })
);

const ProfilePage: StatelessPage<{ user?: User }> = ({ user, ...props }) => {
    const styles = useStyles(props);
    return (
        <div className={styles.hero}>
            <Header name={user && user.displayName} />
            <div className={styles.grid}>
                <MenuButton color={theme.palette.primary.main} onHoverTextColor={theme.palette.primary.contrastText}>
                    <FaceIcon fontSize='large' />
                    {lang.studentsManagementLabel}
                </MenuButton>
                <MenuButton color={theme.palette.primary.main} onHoverTextColor={theme.palette.primary.contrastText}>
                    <PaymentIcon fontSize='large' />
                    {lang.paymentsManagementLabel}
                </MenuButton>
                <MenuButton color={theme.palette.primary.main} onHoverTextColor={theme.palette.primary.contrastText}>
                    <ScheduleIcon fontSize='large' />
                    {lang.scheduleManagementLabel}
                </MenuButton>
                <MenuButton color={theme.palette.primary.main} onHoverTextColor={theme.palette.primary.contrastText}>
                    <MenuBookIcon fontSize='large' />
                    {lang.topicsManagementLabel}
                </MenuButton>
            </div>
        </div>
    );
}

export default withAuth(ProfilePage);