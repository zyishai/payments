import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { Box, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { LoginButton } from '../components/login-button';
import lang from '../src/lang';

const Home: StatelessPage<{ authorName: string }> = ({ authorName }) => {
  const router = useRouter();
  return (
    <div className="page">
      <Head>
        <title>Home</title>
      </Head>

      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' flexGrow={1} p={2} overflow='auto'>
      <LoginButton returnUrl={router.query.returnUrl as string}>
          {lang.loginButtonLabel}
        </LoginButton>
      </Box>
      <Box py={2}>
        <Typography variant='body2' color='textSecondary' align='center'>
          {lang.footer.builtWith + ' '}
          {
            <FavoriteIcon fontSize='inherit' />
          }
          {' ' + lang.footer.by + ' ' + authorName}
        </Typography>
        <Typography variant='body2' color='textSecondary' align='center'>
          <CopyrightIcon fontSize='inherit' />{' ' + new Date().getFullYear()}
        </Typography>
      </Box>

      <style jsx>{`
        .page {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async function() {
  return {
    authorName: process.env.AUTHOR_NAME
  }
}

export default Home
