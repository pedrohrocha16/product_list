import './ProductsDetails.css'
import { useNavigate, useParams } from 'react-router'
import iphone from '../img/iphone.jpg'
import drone from '../img/drone_mavick.jpg'
import macbook from '../img/macbook.jpg'
import bike from '../img/bike.jpg'
import gopro from '../img/gopro.jpg'
import dellg5 from '../img/dellg5.jpg'
import violao from '../img/violao.jpg'

const ProductsDetails = () => {

  const {id} = useParams()

  const navigate = useNavigate()

  const handleSubmit = () => {

    navigate('/products')
  }

  return (
    <div className='productDetails'>
      <h3>Detalhes do produto: {id}</h3>
        {id === "1" ? (<div><h4>iPhone 14 Pro Max 256gb</h4> <p>R$6.500,00</p><img src={iphone} /></div>)
          : 
        (id === "2"? (<div><h4>Drone Mavick</h4> <p>R$4.500,00</p><img src={drone} /></div>)
          :
        (id === "3" ? (<div><h4>Macbook Pro M2</h4> <p>R$6.999,00</p><img src={macbook} /></div>)
          :
        (id === "4" ? (<div><h4>Bike Specialized</h4> <p>R$25.000,00</p><img src={bike} /></div>)
          :
        (id === "5" ? (<div><h4>Go Pro 8</h4> <p>R$2.500,00</p><img src={gopro} /></div>)
          :
        (id === "6" ? (<div><h4>Notebook Dell G5</h4> <p>R$4.900,00</p><img src={dellg5} /></div>)
          :
        (id === "7" ? (<div><h4>Violão Takamine GB7C</h4> <p>R$14.000,00</p><img src={violao} /></div>) : ("")))) )))}
      <button onClick={handleSubmit}>Voltar</button>
    </div>
  )
}

export default ProductsDetails