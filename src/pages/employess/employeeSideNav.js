import { Menu } from "antd";
import {
    AppstoreOutlined,
    SettingOutlined
} from "@ant-design/icons";
import {
    AiOutlineUser,
} from "react-icons/ai";

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
    const items = [
        getItem("Basic Information", "sub1", <AiOutlineUser />, [
            getItem("Employee Info", "1"),
            getItem("Contact", "2"),
            getItem("Lifecycle", "3"),
            getItem("Employment", "4")
        ]),

        getItem("Office Information", "sub2", <SettingOutlined />, [
            getItem("Employee Info", "5"),
            getItem("Contact", "6"),
            getItem("Lifecycle", "7"),
            getItem("Employment", "8")
        ]),

        getItem("Privacy", "sub3", <SettingOutlined />, [
            getItem("Employee Info", "9"),
            getItem("Contact", "10"),
            getItem("Lifecycle", "11"),
            getItem("Employment", "12")
        ]),
        getItem("Other", "sub4", <SettingOutlined />, [
            getItem("Employee Info", "13"),
            getItem("Contact", "14"),
            getItem("Lifecycle", "15"),
            getItem("Employment", "16")
        ]),



    ];

    const onClick = (e) => {
        console.log("click ", e);
    };

    return (
        <Menu
            onClick={onClick}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
        />
    );
}

export default EmpSideNav;