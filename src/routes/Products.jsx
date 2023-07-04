import { useFetch } from "../hooks/useFetch"
import {Link} from 'react-router-dom'
import './Products.css'

const url = "https://json-server-lake-mu.vercel.app/products"


const Products = () => {

  const {data: items} = useFetch(url)

  return (
    <div className="products">
      <h3>Products Avaible</h3>
      <ul>
        {items && items.map ((item) => (
          <div className="item" key={item.id}>
            <li>{item.name} - R${item.price}</li>
            <Link to={`/products/${item.id}/ProductsDetails`}>Detalhes</Link>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Products
