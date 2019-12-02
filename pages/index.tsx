import React from 'react'
import Head from 'next/head'

import '../public/styles/index.scss';
import { Box, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Home: StatelessPage<{ authorName: string }> = ({ authorName }) => (
  <div className="page">
    <Head>
      <title>Home</title>
    </Head>

    <Box display='flex' flexDirection='column' alignItems='center' flexGrow={1} p={2} overflow='auto'>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </Box>
    <Box py={2}>
      <Typography variant='body2' color='textSecondary' align='center'>
        Built with{' '}
        {
          <FavoriteIcon fontSize='inherit' />
        }
        {' '}by {authorName}
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

Home.getInitialProps = async function() {
  return {
    authorName: process.env.AUTHOR_NAME
  }
}

export default Home
