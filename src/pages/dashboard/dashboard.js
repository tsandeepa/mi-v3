import { Carousel } from "antd";
import Header from "../../components/layout/header";

const Dashboard = () => {

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };



    return (
        <div>
            <Header />
            <h2>This is dashboard</h2>
            <div>
                <p>asds asdsa</p>

                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>



            </div>
        </div>

    );
}

export default Dashboard;