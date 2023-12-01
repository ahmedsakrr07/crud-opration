import { Outlet } from "react-router";
import User from "../Dashbord/User";
import Product from "../product/products";
import NewUser from "../Dashbord/NewUser";
import NewProduct from "../NewProduct/NewProduct ";
export default function SideBar() {
    return (
        <div className="SideBar">
                <div className="row" style={{width:"100%"}}>
                    <div className="col-2 Bar">
                        <User/>
                        <NewUser/>
                        <Product/>
                        <NewProduct/>
                    </div>
                    <div className="col-10" style={{backgroundColor:"#a7a3a30d"}}>
                    <Outlet />
                    </div>
                    </div>
                    </div>
    )
}