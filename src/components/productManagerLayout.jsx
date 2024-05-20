import ProductDetail from "./ProductDetail"

const ProductManagerLayout = () => {
  const produk = {
    kodeProduk: "PRD001",
    nama: "Lampu",
    harga: 300000
  }

  return (
    <>
      <h1>Product Manager</h1>
      <ProductDetail produk={produk} />
    </>
  )
}

export default ProductManagerLayout;