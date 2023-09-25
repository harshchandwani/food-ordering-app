import { LOGO_URL } from "../utils/constant";
const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact uS</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
};
export default Header;