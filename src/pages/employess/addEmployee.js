import { Button, Col, Form, Input, Row, Select, Switch } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../components/api/useFetch";
import { Container } from "../../styles/Layout-styles/PageContainer.styled";
import { SideTabbed } from "../../styles/Layout-styles/SideTab.Styled";
import { BreadcrumbTh } from "../../styles/Theme-elements/Breadcrumb.styled";
import addIm from '../../assets/images/up-im.png';
import { storage } from '../../components/api/firebase';
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { v4 } from "uuid";
import { AiFillCamera, AiOutlineUpload } from "react-icons/ai";
import defaultAvatar from '../../assets/icons/avatar-90.png'


import EmpSideNav from "./employeeSideNav";

const AddEmployee = ({ setLogged }) => {

    const { addEmployee, dataAdding, isLoading } = useFetch()

    const [userImgFile, setUseriImgFile] = useState(null);
    const [usrImgUrl, setusrImgUrl] = useState();
    const [progress, setProgress] = useState(0);
    const [imgUploading, setimgUploading] = useState(false);


    useEffect(() => {
        setLogged(true)
    }, []);

    const onFinish = (values) => {
        // console.log('Success:', values);
        let formValues = values;
        let userUl = {
            userAvatar: [usrImgUrl]
        };
        const userObj = { ...formValues, ...userUl }
        console.log(userObj);

        addEmployee(userObj)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const { Option } = Select;
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const uploadImage = () => {
        if (!userImgFile) return
        setimgUploading(true)
        console.log(userImgFile);
        const imageRef = ref(storage, `users/${userImgFile.name + v4()}`);

        const uploadtask = uploadBytesResumable(imageRef, userImgFile);

        uploadtask.on("state_changed", (snapshot) => {

            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog)
            console.log(prog);
            if (prog == 100) {
                console.log('done');
            }
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadtask.snapshot.ref).then(url => {
                    console.log(url)
                    setusrImgUrl(url)
                    setimgUploading(false)
                })
            }
        );
        // uploadBytes(imageRef, userImgFile).then(() => {
        //     alert('uploaded')
        //     getDownloadURL(imageRef).then((url) => {
        //         console.log(url);
        //         setusrImgUrl(url)
        //     }).catch(err => {
        //         console.log(err.message, 'error getting the img URL');
        //     })
        // }).catch(err => {
        //     console.log(err.message);
        // })
    }

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
                        <div className="form-box">
                            <div className="p-20 flex-between-center">
                                <div className="user-img-upload">

                                    <div style={{ 'marginRight': '20px' }}>
                                        <div className="user-circle">
                                            {
                                                usrImgUrl ? <img className="user-avatar-prv" src={usrImgUrl} alt="" /> :
                                                    <img src={defaultAvatar} alt="" />
                                            }

                                            <AiFillCamera className="user-select-ico" />
                                            <input className="user-img-select" type="file" onChange={(e) => { setUseriImgFile(e.target.files[0]) }} />
                                        </div>

                                    </div>


                                    <div className="up-info">
                                        <h5>Personal Details</h5>
                                        <p>Your name and other personal details will add here after add your data</p>
                                        {
                                            userImgFile && <div className="img-up-option">
                                                {
                                                    imgUploading ? <button disabled className="img-up-btn" onClick={uploadImage}> <span style={{ 'fontSize': '12px' }}>{progress}%</span> Uploading...</button> :
                                                        <button className="img-up-btn" onClick={uploadImage}> <AiOutlineUpload /> Upload</button>
                                                }

                                                <label className="lbl-file-name">{userImgFile.name}</label>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <img style={{ 'width': '115px' }} src={addIm} alt="" />
                            </div>
                        </div>

                        <div className="form-box">
                            <div className="fb-header">
                                <h4>Basic Information</h4>
                                <Button>Cancel</Button>
                            </div>
                            <div className="fb-content">
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
                                                {
                                                    dataAdding ? <Button disabled type="primary" htmlType="submit" style={{ 'marginTop': '20px' }}>Submiting...</Button> :
                                                        <Button type="primary" htmlType="submit" style={{ 'marginTop': '20px' }}>Submit</Button>
                                                }

                                            </Form.Item>
                                        </Col>

                                    </Row>
                                </Form>
                            </div>
                        </div>







                    </div>
                </SideTabbed>
            </Container>
        </div>
    );
}

export default AddEmployee;