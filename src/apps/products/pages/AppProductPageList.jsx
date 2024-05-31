import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import useFormat from "../../../hook/useFormat";
import WidgetLimit from "../../../widgets/WidgetLimit";
import WidgetSearch from "../../../widgets/WidgetSearch";
import AppProductWidgetCreate from "../widgets/AppProductWidgetCreate";
import AppProductWidgetDetail from "../widgets/AppProductWidgetDetail";

const AppProductPageList = () => {
  const format = useFormat();
  const [products, setProducts] = useState([]);
  const filterProducts = useRef({
    search: "",
    limit: 10,
    page: 1,
    sortBy: "name",
    order: "desc",
  });

  const onGetProducts = () => {
    const url = `${import.meta.env.VITE_BASE_URL}/products`;
    const config = {
      params: { ...filterProducts.current },
    };
    axios
      .get(url, config)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        // TODO: buat otomatis menggunakan custom hooks
        alert(error);
      });
  };

  const onSearchProducts = (value) => {
    filterProducts.current.search = value;
    onGetProducts();
  };

  const onLimitProducts = (value) => {
    filterProducts.current.limit = value;
    onGetProducts();
  };

  useEffect(() => {
    onGetProducts();
  }, []);

  return (
    <>
      <Container className="mt-3 mb-3">
        <Row className="mb-3">
          <Col className="d-flex justify-content-between align-items-center">
            <h5 className="fw-normal">Product List</h5>
            <AppProductWidgetCreate callback={onGetProducts} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Body className="w-50 d-flex gap-2">
                <WidgetLimit callback={onLimitProducts} />
                <WidgetSearch callback={onSearchProducts} />
              </Card.Body>
              <Table responsive hover striped borderless>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Create At</th>
                    <th>Name</th>
                    <th>#</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((value) => (
                    <tr key={value.id}>
                      <td>{value.id}</td>
                      <td>
                        <img style={{ width: "7%" }} src={value.avatar} />
                      </td>
                      <td>{format.toDate(value.createdAt)}</td>
                      <td>{value.name}</td>
                      <td>
                        <AppProductWidgetDetail
                          callback={onGetProducts}
                          id={value.id}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppProductPageList;
