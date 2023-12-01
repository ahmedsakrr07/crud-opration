import "./Dashbord.css"
import TopBar from "../Bar/TopBar";
import SideBar from "../Bar/sideBar";
export default function Dashbord() {
    return (
        <div className="dashbord">
            <TopBar />
            <SideBar />
        </div>
    )
}