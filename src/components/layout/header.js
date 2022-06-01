import { HeaderMain } from "../../styles/Header.styled";
import logotext from "../../assets/images/logo-text.png"
import labgGlobe from "../../assets/icons/globe.svg"
import userAvatar from "../../assets/icons/avatar.png"
import { Switch } from "antd";
import { BsSun, BsMoon } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Header = ({ handleTheme, setLogged }) => {

    const navigate = useNavigate();




    const handleLogout = () => {
        navigate('/login');
        setLogged(false)
    }

    return (
        <HeaderMain>
            <div className="h-left">
                <img src={logotext} alt="" />
                <ul className="nav-main">
                    <li>Functions</li>
                    <li>Admin</li>
                    <li>Info</li>
                    <li>Resource</li>
                    <li>Self</li>
                </ul>
            </div>
            <div className="h-right">
                <div className="lang-select">
                    <img src={labgGlobe} alt="" />
                    <span>En</span>
                </div>
                <div className="theme-toggle">
                    <Switch
                        checkedChildren={<BsMoon />}
                        unCheckedChildren={<BsSun />}

                        onClick={() => handleTheme()}
                    />
                </div>
                <div className="notific">
                    <VscBell />
                </div>
                <div className="logged-opt" onClick={() => handleLogout()}>
                    <img src={userAvatar} alt="" />
                </div>
            </div>
        </HeaderMain>
    );
}

export default Header;