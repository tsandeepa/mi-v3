import { Button, Col, Form, Input, Row, Select, Switch } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../components/api/useFetch";
import { Container } from "../../styles/Layout-styles/PageContainer.styled";
import { SideTabbed } from "../../styles/Layout-styles/SideTab.Styled";
import { BreadcrumbTh } from "../../styles/Theme-elements/Breadcrumb.styled";

import EmpSideNav from "./employeeSideNav";

const AddEmployee = ({ setLogged }) => {

    const { addEmployee, isLoading } = useFetch()

    useEffect(() => {
        setLogged(true)
    }, []);

    const onFinish = (values) => {
        // console.log('Success:', values);

        addEmployee(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


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
                                        name="name"
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
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your email!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Department"
                                        name="department"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select your department!',
                                            },
                                        ]}
                                    >
                                        <Select onChange={handleChange}>
                                            <Option value="Accounts Assistant">Accounts Assistant</Option>
                                            <Option value="Finance Manager">Finance Manager</Option>
                                            <Option value="Sales">Sales</Option>
                                            <Option value="Marketing">Marketing</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Category"
                                        name="emp_category"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select your category!',
                                            },
                                        ]}
                                    >
                                        <Select >
                                            <Option value="Executive">Executive</Option>
                                            <Option value="Head of operations">Head Of Operations</Option>
                                            <Option value="Manager">Manager</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Location"
                                        name="location"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select your location!',
                                            },
                                        ]}
                                    >
                                        <Select >
                                            <Option value="Anuradhapura">Anuradhapura</Option>
                                            <Option value="Gampaha">Gampaha</Option>
                                            <Option value="Kurunegala">Kurunegala</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col className="gutter-row" span={6}>
                                    <Form.Item
                                        label="Status"
                                        name="status"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select your location!',
                                            },
                                        ]}
                                    >
                                        <Select >
                                            <Option value="Active">Active</Option>
                                            <Option value="Inactive">Inactive</Option>
                                            <Option value="Resigned">Resigned</Option>
                                            <Option value="Other">Other</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>



                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={3}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" style={{ 'marginTop': '20px' }}>
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