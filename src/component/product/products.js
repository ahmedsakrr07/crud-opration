import {  NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
export default function Product() {
    return (
        <div className='title'>
        <NavLink 
         className="user" 
         to="/Dashbord/products"
         activeclassname="active"
         >
            <FontAwesomeIcon className="users" icon={faShoppingBag} />
            products</NavLink>
        </div>
    )
}