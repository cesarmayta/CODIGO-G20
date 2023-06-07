import './ProductCard.scss'
import ropa from '@assets/ropa.jpg'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'

const ProductCard = ({ product }) => {

    const [likedProduct, setLikedProduct] = useState(false);

    return (
        <div className='Card'>
            <div className="Card-header">
                <img className='Card-product-image' src={product.imagen} alt="" />
                <span className='Card-product-name'>Category</span>
                <div className='Card-product-icon' onClick={()=>setLikedProduct(!likedProduct)}>
                    {
                        likedProduct ? <AiFillHeart className='Card-product-heart-liked' /> : <AiOutlineHeart className='Card-product-heart' />
                    }
                </div>
            </div>
            <div className="Card-body">
                <div className='Card-product-description'>
                    <h3>{product.nombre}</h3>
                    <p>{product.nombre}</p>
                </div>
                <div className='Card-product-price'>
                    <button className='Card-price-button'>${product.precio}</button>
                </div>
            </div>
        </div>
    )
}

export { ProductCard };