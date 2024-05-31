import axios from "axios";
import { useState } from "react"
import { Button, Card, Modal, Table, Alert } from "react-bootstrap";
import { FaArrowAltCircleDown, FaCartArrowDown } from "react-icons/fa";
import useFormatter from "../../hook/useFormatter";

const WidgetOrderChoice = ({ callback }) => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState("");
  const formatter = useFormatter();

  const handleClose = () => {
    setShow(false);
    setNotification(""); // Reset notification when modal is closed
  };
  
  const handleShow = () => setShow(true);

  const [orders, setOrders] = useState([]);

  const onGetOrders = () => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/orders?status=${import.meta.env.VITE_STATUS_HOLD}`)
      .then((response) => {
        setOrders(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  const handleSelectOrder = (order) => {
    callback(order);
    setNotification(`Order with ID: ${order.id} has been selected.`);
    setTimeout(() => {
      setNotification("");
    }, 3000);
    handleClose();
  };

  return (
    <>
      {notification && <Alert variant="success">{notification}</Alert>}
      
      <Button variant="primary" onClick={handleShow} size="sm">
        <FaCartArrowDown /> Hold Orders
      </Button>

      <Modal onShow={onGetOrders} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hold Orders</Modal.Title>
        </Modal.Header>
        <Table responsive borderless>
          <thead>
            <tr>
              <th>ID</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { orders.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{formatter.toCurrency(value.total)}</td>
                <td>{value.status}</td>
                <td>
                  <Button size="sm" onClick={() => handleSelectOrder(value)}>
                    <FaArrowAltCircleDown /> Pilih
                  </Button>
                </td>
              </tr>
            )) }
          </tbody>
        </Table>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WidgetOrderChoice;
