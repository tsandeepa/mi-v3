import { useEffect } from "react";
import Header from "../../components/layout/header";


const Dashboard = ({ setLogged }) => {

    useEffect(() => {
        setLogged(true)
    }, []);


    return (
        <div>

        </div>

    );
}

export default Dashboard;