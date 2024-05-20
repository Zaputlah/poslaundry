import ProductDetail2 from "./productDetail2";
import { Col, Container, Row, Table } from "react-bootstrap";

const ProductList = () => {
  const MOCK_DATA = [
    {
      "_id": "6625f021bdac1ca6598ff032",
      "nomor": "BRG002",
      "nama": "Barang 02",
      "satuan": "Kg",
      "hargaJual": 14000,
      "stok": 100
    },
    {
      "_id": "6625f0b810a6636d57d7fd1f",
      "nomor": "BRG001",
      "nama": "Barang 01",
      "satuan": "Kg",
      "hargaJual": 14000,
      "stok": 100
    },
    {
      "_id": "6625f190818c9d54af879c33",
      "nomor": "BRG003",
      "nama": "Barang 03",
      "satuan": "Kg",
      "hargaJual": 14000,
      "stok": 100
    },
    {
      "_id": "6626d2a31c380ffaf0194daf",
      "nomor": "YbQNjy",
      "nama": "Laurie Johnson",
      "satuan": "Kg",
      "hargaJual": 8581,
      "stok": 2217
    },
    {
      "_id": "6626d2a31c380ffaf0194db4",
      "nomor": "IxKaWS",
      "nama": "Duane Parker",
      "satuan": "Kg",
      "hargaJual": 1952,
      "stok": 6438
    },
    {
      "_id": "6626d2a31c380ffaf0194db6",
      "nomor": "wFMlsu",
      "nama": "Laura Thomas",
      "satuan": "Kg",
      "hargaJual": 1952,
      "stok": 7225
    },
    {
      "_id": "6626d2a41c380ffaf0194dba",
      "nomor": "fvxAbT",
      "nama": "Sandra Ramos",
      "satuan": "Kg",
      "hargaJual": 7510,
      "stok": 6542
    },
    {
      "_id": "6626d2a31c380ffaf0194db2",
      "nomor": "kLTiaY",
      "nama": "Robert Ayala",
      "satuan": "Kg",
      "hargaJual": 9083,
      "stok": 8148
    },
    {
      "_id": "6626d2a41c380ffaf0194dc0",
      "nomor": "UjgFyN",
      "nama": "Edward Sutton",
      "satuan": "Kg",
      "hargaJual": 1912,
      "stok": 4952
    },
    {
      "_id": "6626d2a41c380ffaf0194dc2",
      "nomor": "bYceBa",
      "nama": "Amanda Stewart",
      "satuan": "Kg",
      "hargaJual": 7243,
      "stok": 4423
    }
  ]

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h4>Daftar Produk</h4>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Table responsive bordered striped>
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Nama</th>
                  <th>Satuan</th>
                  <th>Harga Jual</th>
                  <th>Stok</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_DATA.map((produk, index) => (
                  <ProductDetail2 key={index} produk={produk} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductList;