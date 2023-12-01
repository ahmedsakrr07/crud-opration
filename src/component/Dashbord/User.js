import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
export default function User() {
    return (
        <div className='title'>
        <NavLink className="user"
         to="/Dashbord/users"
         activeclassname="active"
         >
            <FontAwesomeIcon className='users' icon={faUsers} />
            Users</NavLink>
        </div>
    )
}