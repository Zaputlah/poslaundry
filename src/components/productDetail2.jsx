const ProductDetail2 = ({ produk }) => {
  return (
    <tr>
      <td><a href="#">{produk.nomor}</a></td>
      <td>{produk.nama}</td>
      <td>{produk.satuan}</td>
      <td>{produk.hargaJual}</td>
      <td>{produk.stok}</td>
    </tr>
  )
}

export default ProductDetail2;