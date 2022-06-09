import { Button, Carousel, DatePicker, Dropdown, Input, Menu, Pagination, Select } from "antd";
import Header from "../../components/layout/header";
import { Container } from "../../styles/Layout-styles/PageContainer.styled";
import { TitleTop } from "../../styles/Layout-styles/PageHeader.styled";
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { SearchTop } from "../../styles/Layout-styles/SearchBarTop.styled";
import { ThemeTable } from "../../styles/Theme-elements/Table.styled";
import useFetch from "../../components/api/useFetch";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BreadcrumbTh } from "../../styles/Theme-elements/Breadcrumb.styled";

const Employees = ({ setLogged }) => {


    const { employees, setEmployees, employeeCount, getData, admin, isLoading } = useFetch()

    useEffect(() => {

        getData()
        console.log(employeeCount);
        setLogged(true)
        setOutput(employees);


    }, []);

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            1st menu item
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            2nd menu item
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            3rd menu item
                        </a>
                    ),
                },
            ]}
        />
    );

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const variants = {
        hidden: { opacity: 0, scale: 0.98 },
        visible: i => (
            {
                opacity: 1,
                scale: 1,
                transition: {
                    // type: "easeIn",
                    delay: i * 0.05,
                }
            }
        )
    }

    const { Option } = Select;

    const [output, setOutput] = useState(employees);

    const [searchTearm, setsearchTearm] = useState('');

    const searchEmp = (e) => {

        setOutput([])
        employees.filter((emp => {
            if (emp.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                setOutput(output => [...output, emp])
            }
        }))

        // console.log(e.target.value);
        // const filtered = employees.filter((emp) => {
        //     let name = emp.name.toLowerCase()
        //     return name.includes(e.target.value)
        // })
        // console.log(filtered);
        // setEmployees(employees=>[...employees,])
    }

    return (
        <div>
            {/* <Header /> */}
            <Container>
                <TitleTop>
                    <div className="th-l">
                        <BreadcrumbTh>
                            <span> <Link to='/emplyees'>Employee Information</Link> / Employee Details</span>
                        </BreadcrumbTh>
                        <h3>Employees </h3>
                    </div>
                    <div className="th-r">
                        <div className="flex-gap-15">
                            <Link to="/emplyees/add">
                                <Button type="primary">Add New Employee</Button>
                            </Link>
                            <Dropdown overlay={menu} placement="bottomRight" arrow>
                                <Button> Upload <DownOutlined /></Button>
                            </Dropdown>
                        </div>
                    </div>
                </TitleTop>
                <SearchTop>
                    <Input className="search-wide" placeholder="Search" onChange={(e) => { setsearchTearm(e.target.value) }} prefix={<SearchOutlined />} />
                    <DatePicker onChange={onChange} />
                    <Input className="input-w-sm" placeholder="Emp No." />
                    <Select defaultValue="Category" allowClear>
                        <Option value="CategoryOne">Category one</Option>
                        <Option value="CategoryTwo">Category two</Option>
                    </Select>
                </SearchTop>
                <ThemeTable>
                    <div className="table-header">
                        <div style={{ 'flex': '2' }}>NAME</div>
                        <div style={{ 'flex': '1' }}>EMAIL</div>
                        <div style={{ 'flex': '1' }}>DEPARTMENT</div>
                        <div style={{ 'flex': '1' }}>EMP CATEGORY</div>
                        <div style={{ 'flex': '1' }}>LOCATION</div>
                        <div style={{ 'flex': '1' }}>STATUS</div>
                    </div>
                    <div className="table-body">
                        {isLoading &&
                            <>
                                <div className="loading-table-row">
                                    <div style={{ 'flex': '2' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                </div>
                                <div className="loading-table-row">
                                    <div style={{ 'flex': '2' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                </div>
                                <div className="loading-table-row">
                                    <div style={{ 'flex': '2' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                </div>
                                <div className="loading-table-row">
                                    <div style={{ 'flex': '2' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                </div>
                                <div className="loading-table-row">
                                    <div style={{ 'flex': '2' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                    <div style={{ 'flex': '1' }}></div>
                                </div>
                            </>

                        }
                        {
                            employees &&
                            employees.filter((user) => user[1].name.toLowerCase().includes(searchTearm)).map((emp, i) => (
                                <motion.div className="table-row" key={i}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                >
                                    <div style={{ 'flex': '2' }}>
                                        {
                                            emp[1]?.userAvatar ?
                                                <img className="tbl-avtar-sm" src={emp[1]?.userAvatar} alt="" /> :
                                                <div className="avatar-letter">
                                                    {emp[1].name.slice(0, 1)}
                                                </div>
                                        }
                                        {emp[1].name}
                                    </div>
                                    <div style={{ 'flex': '1' }}>{emp[1]?.email}</div>
                                    <div style={{ 'flex': '1' }}>{emp[1]?.department}</div>
                                    <div style={{ 'flex': '1' }}>{emp[1]?.emp_category}</div>
                                    <div style={{ 'flex': '1' }}>{emp[1]?.location}</div>
                                    <div style={{ 'flex': '1' }}>{emp[1]?.status}</div>
                                </motion.div>
                            ))
                        }
                    </div>
                </ThemeTable>
                <Pagination className="fixed-pagination" size="small" defaultCurrent={1} total={50} />
            </Container>
        </div>
    );
}

export default Employees;