import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as HomeLogo} from '../../assets/logo2.svg'

import '../navigation/navigation.style.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                   <HomeLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/list'>
                        LIST
                    </Link>
                    <Link className="nav-link" to='/ajout'>
                        AJOUT
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;