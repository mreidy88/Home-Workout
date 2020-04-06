import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <div>
            <nav>
                <ul className="nav-links">
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                    <Link to="/Components/ShowPage">
                    <li>Show Page</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;