// import ReactDOM from 'react-dom/client'

// function MyComponent() {
//   const isAuthenticated = true;

//   if (isAuthenticated) {
//     return <h1>Sudah Login</h1>
//   } else {
//     return <h1>Belum Login</h1>
//   }
// }

// const Dashboard = () => {
//   const isAuthenticated = true;

//   // return isAuthenticated ? <h1>Sudah Login</h1> : <h1>Belum Login</h1>
//   return (
//     <>
//       {isAuthenticated ? (
//         <h1>Sudah Login</h1>
//       ) : (
//         <h1>Belum Login</h1>
//       )}
//     </>
//   )
// }


// const ProductManagement = () => {
//   const isAuthenticated = true;

//   return (
//     <>
//       { isAuthenticated && (
//         <ul>
//           <li>Produk 1</li>
//           <li>Produk 2</li>
//           <li>Produk 3</li>
//         </ul>
//       ) }
//     </>
//   )
// }


// const heading = <input className='hello' />

import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import PageProduct from './pages/product/pageProduct';
import PageUser from './pages/product/pageUser';


const ProductDetail = ({ produk }) => {

  const { kodeProduk, nama, harga } = produk

  return (
    <>
      <h1>Product Detail</h1>
      <table>
        <tbody>
          <tr>
            <th>Kode Produk</th>
            <td>{kodeProduk}</td>
          </tr>
          <tr>
            <th>Nama</th>
            <td>{nama}</td>
          </tr>
          <tr>
            <th>Harga</th>
            <td>{harga}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const produk = {
  kodeProduk: "PRD001",
  nama: "Lampu",
  harga: 300000
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProductDetail produk={produk}/>)


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
ReactDOM.createRoot(document.getElementById('root')).render(<PageProduct />)
ReactDOM.createRoot(document.getElementById('root')).render(<PageUser />)
