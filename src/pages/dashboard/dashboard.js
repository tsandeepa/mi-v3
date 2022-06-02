import { useEffect } from "react";
import useFetch from "../../components/api/useFetch";
import Header from "../../components/layout/header";
import { ThemeTable } from "../../styles/Theme-elements/Table.styled";


const Dashboard = ({ setLogged }) => {

    const { admin, getData, isLoading } = useFetch()


    useEffect(() => {
        setLogged(true)
        getData()
    }, []);


    return (
        <div>
            <ThemeTable>
                <div className="table-header">
                    <div style={{ 'flex': '2' }}>NAME</div>
                    <div style={{ 'flex': '1' }}>AGE sdas</div>
                </div>
                <div className="table-body">
                    {
                        admin && admin.map((item) => {
                            return (
                                <div className="table-row">
                                    <div style={{ 'flex': '2' }}>{item.name}</div>
                                    <div style={{ 'flex': '1' }}>{item.age}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </ThemeTable>
        </div>

    );
}

export default Dashboard;