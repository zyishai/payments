import React from 'react';
import { Header } from '../../components/shared/header';
import lang from '../../src/lang';

const StudentsManagement: StatelessPage = () => {
    return (
        <Header>{lang.studentManagementHeader}</Header>
    );
}

export default StudentsManagement;