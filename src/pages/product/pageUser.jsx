import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Placeholder, Row, Table } from "react-bootstrap";

const PageUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onGetUsers = () => {
    setIsLoading(true);
    axios.get(`https://fakestoreapi.com/users`)
      .then((response) => {
        setUsers(response.data);
      }).catch((error) => {
        alert(`Error ${error}`);
      }).finally(() => {
        setIsLoading(false);
      });
  };

  const onSelectUser = (user) => {
    setSelectedUser(user);
    setSelectedAddress(null); // Clear address selection
  };

  const onSelectAddress = (user) => {
    setSelectedAddress(user);
    setSelectedUser(null); // Clear user selection
  };

  useEffect(() => {
    onGetUsers();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Email</th>
                <th>Username</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Telepon</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan="5">
                    <Placeholder as="p" animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </td>
                </tr>
              )}
              {!isLoading && users.map((user) => (
                <tr key={user.id}>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>
                    <Button variant="primary" onClick={() => onSelectUser(user)}>
                      {user.name.firstname}
                    </Button>
                  </td>
                  <td>
                    <Button variant="primary" onClick={() => onSelectAddress(user)}>
                      {`${user.address.street}`}
                    </Button>
                  </td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        {selectedUser && (
          <Col md={4}>
            <Card className="d-flex flex-column align-items-center">
              <Card.Header className="w-100">
                <Badge bg="secondary">Info Pengguna</Badge>
              </Card.Header>
              <Card.Body>
                <Card.Title>Nama Pengguna</Card.Title>
                <Card.Text>
                  <strong>Nama:</strong> {selectedUser.name.firstname} {selectedUser.name.lastname}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
        {selectedAddress && (
          <Col md={4}>
            <Card className="d-flex flex-column align-items-center">
              <Card.Header className="w-100">
                <Badge bg="secondary">Info Alamat</Badge>
              </Card.Header>
              <Card.Body>
                <Card.Title>Alamat</Card.Title>
                <Card.Text>
                  <strong>Jalan:</strong> {selectedAddress.address.street} <br />
                  <strong>Kota:</strong> {selectedAddress.address.city} <br />
                  <strong>Nomor:</strong> {selectedAddress.address.number} <br />
                  <strong>Kode Pos:</strong> {selectedAddress.address.zipcode} <br />
                  <strong>Geolokasi:</strong> Latitude: {selectedAddress.address.geolocation.lat}, Longitude: {selectedAddress.address.geolocation.long}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default PageUser;
