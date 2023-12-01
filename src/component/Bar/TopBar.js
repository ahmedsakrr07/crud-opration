import{Link} from "react-router-dom";
import Bints from "../../Assets/pintester_icon.png"
export default function TopBar() {
    return (
        <>
                <div className="TopBar">
            <img className="img" src={Bints} alt=""/>
            <p>TopBar</p>
            <Link to="/" style={{ marginLeft: "auto" }} type="button" className="btn btn-outline-info">Go to website</Link>
            </div>
        </>
    );
}