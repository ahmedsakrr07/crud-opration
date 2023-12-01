import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom";

export default function NewUser() {
    return (
        <div className='title'>
            <NavLink className="user"
             to="/Dashbord/NewUser"
             activeclassname="active"
             >
                <FontAwesomeIcon className='users' icon={faUser} />NewUser</NavLink>
        </div>
    )
}