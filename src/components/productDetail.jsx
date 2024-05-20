const ProductDetail = ({ produk }) => {

  const { kodeProduk, nama, harga } = produk

  const hitungDikson = (diskon) => {
    const hasil = harga - (harga * diskon);
    alert(`Harga after diskon adalah: ${hasil}`);
  }

  const contohEvent = (e) => {
    console.log(e);
  }

  const contohEvent2 = (e, diskon) => {
    console.log("Event => ", e);
    console.log("Dikson => ", diskon);
  }

  return (
    <>
      <h1>Product Detail</h1>
      <table>
        <tbody>
          <tr>
            <th>Kode Produk</th>
            <td onClick={(e) => contohEvent2(e, 30/100)}>{kodeProduk}</td>
          </tr>
          <tr>
            <th>Nama</th>
            <td onClick={contohEvent}>{nama}</td>
          </tr>
          <tr>
            <th>Harga</th>
            <td onClick={() => hitungDikson(20/100)}>{harga}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default ProductDetail;