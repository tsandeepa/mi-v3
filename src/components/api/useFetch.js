import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (setDrawerVisible) => {

    const [isLoading, setisLoading] = useState(false);
    const [isDeleting, setisDeleting] = useState(false);
    // const [data, setData] = useState();
    // const [data, setData] = useState();
    const [employees, setEmployees] = useState();
    const [employeeCount, setEmployeeCount] = useState(0);
    const [filteredEmps, setFilteredEmps] = useState();
    const [admin, setAdmin] = useState();

    const [dataAdding, setdataAdding] = useState(false);


    const employeesURL = 'https://mint-v3-default-rtdb.firebaseio.com/employees.json';
    const adminURL = 'https://mint-v3-default-rtdb.firebaseio.com/admin.json';

    const fridge = 'https://thefridge-api.karapincha.io/fridge/';



    const getData = () => {
        setisLoading(true)

        axios.get(employeesURL).then(response => {
            console.log(response.data)
            const empArr = Object.entries(response.data);
            console.log(empArr.length)
            setEmployees(empArr)
            setEmployeeCount(empArr.length)
            setisLoading(false)
        });


        fetch(adminURL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAdmin(data)
                setisLoading(false)
            });
    }

    const addEmployee = (values) => {
        setdataAdding(true)
        console.log('addd', values);
        axios.post('https://mint-v3-default-rtdb.firebaseio.com/employees.json/', values)
            .then(function (response) {
                console.log(response);
                setdataAdding(false)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const deleteEmployee = (id) => {
        setisDeleting(true)
        console.log(id);
        axios.delete('https://mint-v3-default-rtdb.firebaseio.com/employees/' + id + '.json')
            .then(res => {
                console.log('deleted')
                setisDeleting(false)
                setDrawerVisible(false)
            }).catch(err => console.log(err))
    }



    const getFilteredData = (sch_term) => {
        axios.get(employeesURL).then(response => {
            console.log(response.data)
            setEmployees(response.data)
            setisLoading(false)
        });
    }
    // const showEmp = () => {
    //     data && console.log(data);
    //     data.map((emp) => (
    //         console.log(emp.name)
    //     ))
    // }
    return { employees, setEmployees, dataAdding, employeeCount, admin, getData, isLoading, isDeleting, addEmployee, deleteEmployee }
}

export default useFetch;
