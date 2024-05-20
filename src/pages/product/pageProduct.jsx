import axios from "axios";
import { useEffect, useState } from "react"
import { Badge, Button, Card, Col, Container, Placeholder, Row, Table } from "react-bootstrap";

const PageProduct = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [carts, setCarts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const onGetProducts = () => {
    setIsLoading(true);
    axios.get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProducts(response.data);
      }).catch((error) => {
        alert(`Error ${error}`);
      }).finally(() => {
        setIsLoading(false);
      })
  }

  const onGetProduct = (value) => {
    setProduct(value);
  }

  const onAddCart = (value) => {
    setCarts([...carts, value]);
  }

  useEffect(() => {
    onGetProducts()
  }, []);

  return (
    <>
      <Container className="mt-4">
        <Row className="mb-4">
          <Col className="d-flex justify-content-between">
            <h4>Products</h4>
            <Button>Carts <Badge bg="danger">{carts.length}</Badge></Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {isLoading && (
                  <tr>
                    <td>
                      <Placeholder xs={6} />
                    </td>
                    <td>
                      <Placeholder xs={6} />
                    </td>
                    <td>
                      <Placeholder xs={6} />
                    </td>
                    <td>
                      <Placeholder.Button xs={4} aria-hidden="true" />
                    </td>
                  </tr>
                )}
                {!isLoading && products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>
                      <Button onClick={() => onGetProduct(product)}>Detail</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          {product && (
            <Col md={4}>
              <Card className="d-flex flex-column align-items-center">
                <Card.Header className="w-100">
                  <Badge bg="secondary">{product.category}</Badge>
                </Card.Header>
                <Card.Img variant="top" className="w-50 object-fit-contain h-25 d-inline-block" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="w-100 d-flex justify-content-between">
                  <h5>${product.price}</h5>
                  <Button onClick={() => onAddCart(product)}>Add to Cart</Button>
                </Card.Footer>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

export default PageProduct;