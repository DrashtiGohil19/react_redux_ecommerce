import Header from './header';
import Table from 'react-bootstrap/Table';
import { Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decreceQuntity, decrement, increaseQuantity } from '../action/slice';

function Cart() {

  const product = useSelector(state => state.product)
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(decrement(productId))
  }

  const handleAdd = (itemId, originalPrice) => {
    dispatch(increaseQuantity({ itemId, originalPrice }));
  }

  const handleRemove = (itemId, originalPrice) => {
    dispatch(decreceQuntity({ itemId, originalPrice }));
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          {
            product.length === 0 ? (
              <h4 className='spacer text-center align-middle'>NO ITEM ADDED HERE...!</h4>
            ) : (
              <>
                <div className='mt-3'>
                  <h1 className='text-center mt-5 mb-4'>
                    My cart
                  </h1>
                </div>

                <Table striped bordered className='align-middle text-center border-dark'>
                  <thead>
                    <tr>
                      <th style={{ width: '10%' }}>Number</th>
                      <th style={{ width: '15%' }}>Image</th>
                      <th>Product Name</th>
                      <th>Quentity</th>
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
                            <td><img src={item.image} alt='' height="100px" width="100px" className='border border-dark'></img></td>
                            <td className='h5'>{item.title}</td>
                            <td>
                              <Button className='me-2' onClick={() => handleAdd(item.id, item.originalPrice)}>+</Button>
                              <input type="text" value={item.qty} className='w-25 text-center border border-dark ' disabled />
                              <Button className='ms-2 px-3' onClick={item.qty > 1 ? () => handleRemove(item.id, item.originalPrice) : () => handleDelete(item.id)}>-</Button>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td><Button className='btn btn-danger' onClick={() => dispatch(decrement(item.id))}>Delete</Button></td>
                          </tr>
                        )
                      })
                    }
                    <tr>
                      <th colSpan={4}> Total Price</th>
                      <th colSpan={2}>${product.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2)}</th>
                    </tr>
                  </tbody>
                </Table>
              </>
            )
          }
        </Row>
      </Container>
    </>
  )
}

export default Cart;
