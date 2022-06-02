import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = () => {

    const [isLoading, setisLoading] = useState(false);
    // const [data, setData] = useState();
    // const [data, setData] = useState();
    const [employees, setEmployees] = useState();
    const [admin, setAdmin] = useState();


    const employeesURL = 'https://mint-v3-default-rtdb.firebaseio.com/employees.json';
    const adminURL = 'https://mint-v3-default-rtdb.firebaseio.com/admin.json';

    const fridge = 'https://thefridge-api.karapincha.io/fridge/';

    const getData = () => {
        setisLoading(true)

        axios.get(employeesURL).then(response => {
            console.log(response.data)
            setEmployees(response.data)
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
    // const showEmp = () => {
    //     data && console.log(data);
    //     data.map((emp) => (
    //         console.log(emp.name)
    //     ))
    // }
    return { employees, admin, getData, isLoading }
}

export default useFetch;
