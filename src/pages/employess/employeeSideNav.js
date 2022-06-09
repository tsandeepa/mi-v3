import { Menu } from "antd";
import {
    AppstoreOutlined,
    SettingOutlined
} from "@ant-design/icons";
import {
    AiOutlineUser,
} from "react-icons/ai";

import { IoBriefcaseOutline } from "react-icons/io5";
import { GrDocumentUser } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { RiContactsBookLine } from "react-icons/ri";
import { HiOutlineLocationMarker, HiOutlineDeviceMobile } from "react-icons/hi";
import { TbUsers } from "react-icons/tb";
import { RiHeartPulseLine, RiLockPasswordLine } from "react-icons/ri";
import { BiShapeCircle } from "react-icons/bi";

const EmpSideNav = () => {

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type
        };
    }


    const onClick = (e) => {
        console.log("click ", e);
    };

    return (
        <div style={{ 'paddingRight': '40px' }}>
            <Menu mode="vertical" defaultSelectedKeys={["m1"]}>
                <Menu.Item key="m1" icon={<AiOutlineUser />}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="m2" icon={<IoBriefcaseOutline />}>
                    Employment
                </Menu.Item>
                <Menu.Item key="m3" icon={<GrDocumentUser />}>
                    Personal Info
                </Menu.Item>
                <Menu.Item key="m4" icon={<GrCertificate />}>
                    Attainment
                </Menu.Item>
                <Menu.Item key="m5" icon={<RiContactsBookLine />}>
                    Contact
                </Menu.Item>
                <Menu.Item key="m6" icon={<HiOutlineLocationMarker />}>
                    Location
                </Menu.Item>
                <Menu.Item key="m7" icon={<AiOutlineUser />}>
                    Contact
                </Menu.Item>
                <Menu.Item key="m8" icon={<TbUsers />}>
                    Family
                </Menu.Item>
                <Menu.Item key="m9" icon={<RiHeartPulseLine />}>
                    Health
                </Menu.Item>
                <Menu.Item key="m10" icon={<RiLockPasswordLine />}>
                    Password
                </Menu.Item>
                <Menu.Item key="m11" icon={<BiShapeCircle />}>
                    Life Cycle
                </Menu.Item>
                <Menu.Item key="m12" icon={<HiOutlineDeviceMobile />}>
                    Mobile App
                </Menu.Item>
            </Menu>
        </div>

    );
}

export default EmpSideNav;