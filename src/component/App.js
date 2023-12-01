import { Routes , Route } from "react-router"
import SingIn from "../component/Auth/SingIn"
import Login from "../component/Auth/Login"
import Home from "../component/Navbar/Home"
import Dashbord from "./Dashbord/Dashbord"
import UserContent from "./Dashbord/userContent"
import Product from "./product/ProductContent"
import UserShow from "./Dashbord/userShow"
import NewUserContent from "./Dashbord/newUserContent"
import NewProductContent from "./NewProduct/NewProductContent"


export default function App () {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<SingIn/>}/>

            <Route path="/dashbord" element={<Dashbord/>}>
            <Route path="users" element={<UserContent/>}/>
            <Route path="users/:id" element={<UserShow/>}/>
            <Route path="NewUser" element={<NewUserContent/>}/>
            

            <Route path="products" element={<Product/>}/>
            <Route path="NewProduct" element={<NewProductContent/>}/>

            </Route>
            </Routes> 
        </div>
    )
}