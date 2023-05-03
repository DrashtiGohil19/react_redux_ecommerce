import Header from './header';
import Table from 'react-bootstrap/Table';
import { Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../action/slice';
function Cart() {

  const product = useSelector(state => state.product)
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <div>
          <h1 className='text-center mt-4 mb-4'>
            My cart
          </h1>
        </div>
        <Row>
          <Table striped bordered hover className='align-middle text-center border-dark'>
            <thead>
              <tr>
                <th style={{ width: '10%' }}>Number</th>
                <th style={{ width: '15%' }}>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                product.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><img src={item.image} alt='' height="100px" width="100px"></img></td>
                      <td className='h5'>{item.title}</td>
                      <td>${item.price}</td>
                      <td><Button className='btn btn-primary' onClick={() => dispatch(decrement(item.id))}>Delete</Button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  )
}

export default Cart;
