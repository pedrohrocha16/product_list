import './InputSearch.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const InputSearch = () => {

  const [query, setQuery] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/search?q=' + query)
  }
   
  return (
    <form className='search_input' onSubmit={handleSubmit}>
      <input type="text" placeholder='nome' onChange={(e) => setQuery(e.target.value)} />
      <button>Pesquisar</button>
    </form>
  )
}

export default InputSearch