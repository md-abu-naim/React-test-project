import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;