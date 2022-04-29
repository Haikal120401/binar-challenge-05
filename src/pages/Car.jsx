import React, { useEffect } from 'react';
import '../assets/css/card.css';
import IconSetting from '../assets/img/fi_settings.png';
import IconUser from '../assets/img/fi_users.png';
import IconCalender from '../assets/img/fi_calendar.png';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Latar from '../components/Latar';
import {Container,Col,Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../redux/action/carAction';
import { saveDetailByID } from '../redux/action/detailAction';


function Car (){

    const dispatch = useDispatch();
    const { isLoading: loading,  data: dataList } = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getCar());
    }, []);

    return (
        <>
            <Navbar/>
            <Latar />
            <center>{loading && "Loading Data"}</center> 
            <div>

                {dataList.map((item) => {
                    return(
                        <Container>
                            <Col className="m-5" md={4}>
                                <Card>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>{item.price}</Card.Text>
                                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
                                        <Card.Text><img src={IconUser} alt="user"/>  4 orang</Card.Text>
                                        <Card.Text><img src={IconSetting} alt="set"/>  Manual</Card.Text>
                                        <Card.Text><img src={IconCalender} alt="calender"/>  Tahun 2020</Card.Text>
                                        <Link to={'/card/${item.id}'} onClick={()=> dispatch(saveDetailByID(item))}>
                                        <Button variant="success">Pilih Mobil</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Container>    
                    )
                })}
            </div>
            <Footer/>
        </>
    )
}
export default Car;