import { Button, Drawer, Tabs, Image } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { EmpSideMain } from "./empSidePanel.styled";
import { SearchOutlined } from '@ant-design/icons';
import { AiOutlineDelete } from "react-icons/ai";
import useFetch from "../../components/api/useFetch";
import { MdOutlineAutoDelete } from "react-icons/md";

const EmployeeSidePanel = ({ drawerVisible, setDrawerVisible, onClose, employees, eid }) => {

    const { deleteEmployee, isDeleting } = useFetch(setDrawerVisible)

    const { TabPane } = Tabs;

    const onChange = (key) => {
        console.log(key);
    };

    const [emp, setEmp] = useState();

    useEffect(() => {
        // setEmp(employees[emp_i])
        // console.log(emp_info);
        console.log(eid);
        employees && setEmp(employees.filter((emp) => emp[0] == eid))
        console.log(emp);
    }, [eid]);



    return (
        <Drawer placement="right" width={600} onClose={onClose} visible={drawerVisible}>
            <EmpSideMain>
                {
                    isDeleting &&
                    <div className="pannel-updating">
                        <MdOutlineAutoDelete />
                        <span>Deleting...</span>
                    </div>
                }
                {
                    emp &&
                    <div className="side-p-top">
                        <div className="sp-tp-opt">
                            <Button shape="circle" icon={<AiOutlineDelete />} onClick={() => deleteEmployee(emp[0])} />
                        </div>
                        <div className="sp-img">
                            {
                                emp[0][1]?.userAvatar ? <Image src={emp[0][1]?.userAvatar} alt="" /> :
                                    <h4 className="spi-letter">{emp[0][1].name.slice(0, 1)} </h4>
                            }
                        </div>
                        <div className="sp-ifo">
                            <h5>{emp[0][1].name}</h5>
                            <span>{emp[0][1].emp_category}</span>
                            <div className="emp-social">

                            </div>
                        </div>
                    </div>
                }


                <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="Employment" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Personal Files" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Personal Info" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Attainment" key="4">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Contact" key="5">
                        Content of Tab Pane 3
                    </TabPane>

                </Tabs>

            </EmpSideMain>

        </Drawer>
    );
}

export default EmployeeSidePanel;