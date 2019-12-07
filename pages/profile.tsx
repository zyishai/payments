import React from 'react';
import { withAuth } from '../guards/auth';
import { User } from 'firebase';
import { MenuButton } from '../components/profile/menu-button';
import green from '@material-ui/core/colors/lightGreen';
import orange from '@material-ui/core/colors/orange';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/red';
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
            flex: 1,
            position: 'relative',
        },
        background: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundImage: 'url("/images/pencils.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: '22% 0%',
            opacity: 0.4,
            filter: 'alpha(opacity=40)'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            justifyContent: 'center'
        },
        icon: {
            fontSize: theme.typography.fontSize * 4
        }
    })
);

const ProfilePage: StatelessPage<{ user?: User }> = ({ user, ...props }) => {
    const styles = useStyles(props);
    return (
        <div className={styles.hero}>
            <div className={styles.background}></div>
            <Header name={user && user.displayName} />
            <div className={styles.grid}>
                <MenuButton baseColor={indigo} onHoverTextColor={theme.palette.primary.contrastText}>
                    <FaceIcon className={styles.icon} />
                    {lang.studentsManagementLabel}
                </MenuButton>
                <MenuButton baseColor={pink} onHoverTextColor={theme.palette.primary.contrastText}>
                    <PaymentIcon className={styles.icon} />
                    {lang.paymentsManagementLabel}
                </MenuButton>
                <MenuButton baseColor={green} onHoverTextColor={theme.palette.primary.contrastText}>
                    <ScheduleIcon className={styles.icon} />
                    {lang.scheduleManagementLabel}
                </MenuButton>
                <MenuButton baseColor={orange} onHoverTextColor={theme.palette.primary.contrastText}>
                    <MenuBookIcon className={styles.icon} />
                    {lang.topicsManagementLabel}
                </MenuButton>
            </div>
        </div>
    );
}

export default withAuth(ProfilePage);