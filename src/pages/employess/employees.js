import { Button, Carousel, DatePicker, Dropdown, Input, Menu, Pagination, Select } from "antd";
import Header from "../../components/layout/header";
import { Container } from "../../styles/Layout-styles/PageContainer.styled";
import { TitleTop } from "../../styles/Layout-styles/PageHeader.styled";
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { SearchTop } from "../../styles/Layout-styles/SearchBarTop.styled";
import { ThemeTable } from "../../styles/Theme-elements/Table.styled";
import useFetch from "../../components/api/useFetch";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Employees = ({ setLogged }) => {


    const { employees, getData, isLoading } = useFetch()

    useEffect(() => {
        getData()
        // console.log(employees);
        setLogged(true)
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

    return (
        <div>
            {/* <Header /> */}
            <Container>
                <TitleTop>
                    <div className="th-l">
                        <div className="bredCrumb">
                            <span>Employee Information / Employee Details</span>
                        </div>
                        <h3>Employee Details</h3>
                    </div>
                    <div className="th-r">
                        <div className="flex-gap-15">
                            <Button type="primary">Add New Employee</Button>
                            <Dropdown overlay={menu} placement="bottomRight" arrow>
                                <Button> Upload <DownOutlined /></Button>
                            </Dropdown>
                        </div>
                    </div>
                </TitleTop>
                <SearchTop>
                    <Input className="search-wide" placeholder="Search" prefix={<SearchOutlined />} />
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
                        <div style={{ 'flex': '1' }}>EMP NO</div>
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
                            employees.map((emp, i) => (
                                <motion.div className="table-row"
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                >
                                    <div style={{ 'flex': '2' }}>
                                        <img className="tbl-avtar-sm" src={emp.user_img} alt="" />
                                        {emp.name}
                                    </div>
                                    <div style={{ 'flex': '1' }}>{emp.emp_no}</div>
                                    <div style={{ 'flex': '1' }}>{emp.department}</div>
                                    <div style={{ 'flex': '1' }}>{emp.emp_category}</div>
                                    <div style={{ 'flex': '1' }}>{emp.location}</div>
                                    <div style={{ 'flex': '1' }}>{emp.status}</div>
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