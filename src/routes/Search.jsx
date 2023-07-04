import './Search.css'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


const Search = () => {

  const [searchParams] = useSearchParams()

  const url = "https://json-server-ruddy-iota.vercel.app/products?" + searchParams

  const {data: items} = useFetch(url)


  return (
    <div className='search'>
      <ul>
        {items && items.map((item) => (
          <div>
            <li>{item.name} - R${item.price}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Search