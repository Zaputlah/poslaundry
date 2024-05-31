import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { Button, Card, Table, Alert } from "react-bootstrap";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import useFormatter from "../../hook/useFormatter";

const OrderList = forwardRef(({ onDeleteOrder }, ref) => {
  const formatter = useFormatter();
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  const getOrders = () => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/orders`)
      .then((response) => {
        console.log("Orders:", response.data);
        setOrders(response.data);
      }).catch((error) => {
        console.error("Error fetching orders:", error);
        if (error.response && error.response.status === 404) {
          setError("Data pesanan tidak ditemukan.");
        } else {
          setError("Terjadi kesalahan saat mengambil data pesanan.");
        }
      });
  }

  const deleteOrder = (id) => {
    axios.delete(`${import.meta.env.VITE_BASE_URL}/orders/${id}`)
      .then((response) => {
        onDeleteOrder(id);
        getOrders();
      }).catch((error) => {
        alert(`Error ${error}`);
      });
  }

  // Expose getOrders method to parent component via ref
  useImperativeHandle(ref, () => ({
    refreshOrders() {
      getOrders();
    }
  }));

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Card.Body>
        <Card>
        <Card.Title>Daftar Order</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Table hover striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{formatter.toCurrency(order.total)}</td>
                <td>{order.status}</td>
                <td>
                  <Button onClick={() => deleteOrder(order.id)} size="sm" variant="danger">
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
});

export default OrderList;
