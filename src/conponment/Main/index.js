import React from 'react';
import { Link } from 'react-router-dom'
// import './index.css'
const Main = () => {
    return (
        <div>
            <ul>
                <li> <Link to='/home'>Home</Link></li>
                <li> <Link to='/login'>Admin</Link></li>
            </ul>


        </div>
    );
}

export default Main;