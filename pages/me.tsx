import React from 'react';
import { withAuth } from '../guards/auth';

const MePage = () => <h1>My page!</h1>

export default withAuth(MePage);