import axios from "axios";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from "react";
import { Container, Row, Button, NavItem } from "react-bootstrap";
import Header from "./header";
import { useDispatch } from "react-redux";
import { increment } from "../action/slice";

function Product() {

    let [product, setproduct] = useState();
    let [status, setstatus] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                console.log(response.data);
                setproduct(response.data);
                setstatus(true);
            })
    }, [])
   

    if (status) {
        return (
            <>
                <Header/>
                <div className="pt-5">
                <Container>
                    <Row className="justify-content-center p-3">
                        {
                            product.map((data, index) => {
                                return (
                                    <Card style={{ width: '15rem' }} key={index} className="border-dark mt-4">
                                        <Card.Img variant="top" src={data.image}/>
                                        <Card.Body>
                                            <Card.Title>{data.title}</Card.Title>
                                            <Card.Text className="price mb-1">${data.price}</Card.Text>
                                            <Card.Text className="cat mb-3">{data.category}</Card.Text>
                                            <Button className="btn btn-primary d-flex m-auto" onClick={()=>dispatch(increment(data))}>Add to cart</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </Row>
                </Container>
                </div>
            </>
        )
    }
    else {
        return <Spinner animation="border"/>;
    }
}
export default Product;