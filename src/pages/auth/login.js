import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Carousel, Checkbox, Col, Form, Input, Row } from 'antd';
import { LoginMain } from '../../styles/Login.styled';

import bannerBg from '../../assets/images/BG.png'
import bs1 from '../../assets/images/b-s1.png'
import bs2 from '../../assets/images/b-s2.png'
import bs3 from '../../assets/images/b-s3.png'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GoGlobe } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { CgMicrosoft } from "react-icons/cg";


const Login = ({ setLogged }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setLogged(false)
    }, []);

    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);
    const handleLogin = () => {

        navigate('/emplyees');
        setLogged(true)
    }



    const carouselSlides = [
        {
            src: bs1,
            tagH2: 'Connected people insights for data-driven HR decisions',
            tagP: 'Your employees want to feel heard. Listen, reflect, and respond to engagement feedback to retain top talent as your business grows.'
        },
        {
            src: bs2,
            tagH2: 'Connected  for  data-driven HR decisions',
            tagP: 'Your employees want to feel heard.  to engagement  feedback to retain top talent as your business grows.'
        },
        {
            src: bs3,
            tagH2: 'Connected  for  data-driven HR decisions',
            tagP: 'Your employees want to feel heard.  to engagement  feedback to retain top talent as your business grows.'
        }
    ]
    return (
        <LoginMain>
            <div className={`lc-left `}>
                {/* <img className='bg-img' src={bannerBg} alt="" /> */}
                <div className='c-holder'>
                    <Carousel fade autoplay>
                        {
                            carouselSlides.map((slide) => (
                                <div className='slide-item'>
                                    <img src={slide.src} alt="" />
                                    <h3>{slide.tagH2}</h3>
                                    <p>{slide.tagP}</p>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>

            </div>
            <div className='lc-right'>
                <div className='lang-opt'>
                    <span> <GoGlobe /> English</span>
                </div>
                <div className='sign-box'>
                    <div className='log-titles'>
                        <img src={logo} alt="" />
                        <h1>Sign in to Minthrm</h1>
                        <p>Welcome back! Please Sign in to your account</p>
                    </div>
                    <div className='account-login'>
                        <Button className='acc-l-btn'> <FcGoogle /> Sign in with Google</Button>
                        <Button className='acc-l-btn'> <CgMicrosoft /> Sign in with Microsoft</Button>
                    </div>
                    <div class='divider-or'>
                        <span>OR</span>
                    </div>
                    <Form form={form} layout="vertical" autoComplete="off">
                        <Form.Item name="name" label="Username">
                            <Input />
                        </Form.Item>

                        <Form.Item name="password" label="Password">
                            <Input />
                        </Form.Item>
                        <div className='sign-forgot'>
                            <a>Forgot password ?</a>
                            <span>Forgot Password</span>
                        </div>
                        <Button type="primary" htmlType="submit" block
                            onClick={() => handleLogin()}
                        >
                            Submit
                        </Button>
                    </Form>
                    <div className='sign-diffent-acc'>
                        <span>Sign in with a <a>Defferent account</a></span>
                    </div>
                </div>
                <div className='copy-right'>
                    <span>© 2022  Powered by Minthrm</span>
                </div>
            </div>
        </LoginMain>
    );
}

export default Login;