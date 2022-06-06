import { useEffect } from "react";
import { Container } from "../../styles/Layout-styles/PageContainer.styled";

const AddEmployee = ({ setLogged }) => {

    useEffect(() => {
        setLogged(true)
    }, []);

    return (
        <div>
            <Container>
                asdas
            </Container>
        </div>
    );
}

export default AddEmployee;