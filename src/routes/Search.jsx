import './Search.css'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


const Search = () => {

  const [searchParams] = useSearchParams()

  const url = "http://localhost:3000/products?" + searchParams

  const {data: items} = useFetch(url)

  return (
    <div className='search'>
      <ul>
        {items && items.map((item) => (
          <li>{item.name} - R${item.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search