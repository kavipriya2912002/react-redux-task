import React, {useState, useContext} from 'react'
import { UserContext } from '../utils/ContextComponents'

function CartPage() {
    let {product,setProduct} = useContext(UserContext)
    return <>
        <div className="container">
            {
                product.map((e,i)=>{

                    const discountPrice = Math.round(e.price * (e.discountPercentage/100))
                    const [quantity, setQuantity] = useState(1);

                    const addQuantity = () => {
                        setQuantity(quantity+1)
                    }
                
                    const removeQuantity = () => {
                        setQuantity(quantity-1)
                    }
                    let fprice= e.price-discountPrice;

                    return <>
                        <div  className="card mb-5 border border-secondary" key={i}>
                            
                        <div className="row g-0">
                        <div className="col-md-4">
                        <img src={e.image} className="img-fluid rounded-start"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                        <div className='title-price'>
                        <h5 className="card-title">{e.title}</h5>
                        <h4 className="card-title">${e.price}</h4>
                        </div>
                        <div className='infoOfCard'>
                        <details className='det'>
                        <summary><b>Brand</b></summary>
                        <p>{e.brand}</p>    
                        </details>
                        <details className='det'>
                        <summary><b>Details and Core</b></summary>
                        <p>{e.description}</p>    
                        </details>
                        <p className="card-text"><b>Rating : </b>{e.rating} Out of 5</p>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                                                <button type="button" className='btn btn-outline-danger' onClick={() => { removeQuantity() }}> - </button>
                                                <div className='py-1 quantityText'>{quantity}</div>
                                                <button type="button" className='btn btn-outline-success' onClick={() => { addQuantity() }}> + </button>
                                            </div>
                        </div>
                        </div>
                        </div>

                                        <hr style={{marginRight:"20px",marginLeft:'20px'}} />
                        <div className="second">
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <b>SubTotal :</b> 
                                            <p className="card-text">${e.price} </p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <b>Discount :</b> 
                                            <p className="card-text text-success"> - ${discountPrice}</p>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <b>Final Price (Price - Discount) : </b>
                                            <p className="card-text">${e.price - discountPrice}</p>
                                        </div>
                                        
                          </div>




                          <div>
                            <hr />

                          <div className='total'>
                            <div className='d-flex justify-content-between align-items-center'>
                                            <b>Total:</b>
                                            <h5 className="card-text">${fprice * quantity}</h5>
                                        </div>

                          </div>
                          </div>
                          
</div>
                                
                            
                    </>
                })
            }
        </div>        
    </>
}

export default CartPage