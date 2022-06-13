import { Button, Drawer, Tabs } from "antd";
import { EmpSideMain } from "./empSidePanel.styled";

const EmployeeSidePanel = ({ drawerVisible, onClose }) => {

    const { TabPane } = Tabs;

    const onChange = (key) => {
        console.log(key);
    };


    return (
        <Drawer placement="right" width={600} onClose={onClose} visible={drawerVisible}>
            <EmpSideMain>

                <p className="p-l">
                    span
                    Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>

                <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1 asasasdas
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>

            </EmpSideMain>

        </Drawer>
    );
}

export default EmployeeSidePanel;