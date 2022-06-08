import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { Container } from "../../styles/Layout-styles/PageContainer.styled";
import { SideTabbed } from "../../styles/Layout-styles/SideTab.Styled";
import { BreadcrumbTh } from "../../styles/Theme-elements/Breadcrumb.styled";

import EmpAddForm from "./addEmployeeForm";
import EmpSideNav from "./employeeSideNav";

const AddEmployee = ({ setLogged }) => {

    useEffect(() => {
        setLogged(true)
    }, []);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    const style = {
        background: '#0092ff', padding: '8px 0'
    }


    const { Option } = Select;

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div>
            <Container>
                <SideTabbed>
                    <div className="left-tb">
                        <div className="side-title">
                            <BreadcrumbTh>
                                <span> <Link to='/emplyees'>Employee Information</Link> / Add Employee</span>
                            </BreadcrumbTh>
                            <h3>Employee Information</h3>
                        </div>
                        <EmpSideNav />
                    </div>
                    <div className="right-vw">
                        <div className="right-title">
                            <h4>Basic Information</h4>
                        </div>

                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >

                            <Row gutter={16}>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Name"
                                        name="Name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Department"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Select onChange={handleChange}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                </Col>
                                <Col className="gutter-row" span={3}>

                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={3}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Col>

                            </Row>
                        </Form>


                    </div>
                </SideTabbed>
            </Container>
        </div>
    );
}

export default AddEmployee;