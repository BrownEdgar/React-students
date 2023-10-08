import { useDispatch, useSelector } from 'react-redux'
import './ShopingCart.css'

import { HiRefresh } from 'react-icons/hi'
import { BsTrashFill } from 'react-icons/bs'
import { addCount, addProductCount, deleteProductById, getTotal } from '../../features/ProductSlice';
import { useEffect } from 'react';

export default function ShopingCart() {
  const products = useSelector((state) => state.products.data);
  const total = useSelector((state) => state.products.total);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addCount())
    dispatch(getTotal())
  })


  const handleDeleteProductInErevan = (id) => {
    console.log("ok")
    dispatch(deleteProductById({ id }))
  }

  const handleChange = (value, id) => {

    dispatch(addProductCount({ value, id }))

  }
  return (
    <div className='ShopingCart'>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Product</th>
            <th>price</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => {
              return (
                <tr key={product.id}>
                  <td colSpan={2}>
                    <div>
                      <img src={product.image} alt="" />
                      <div className="content">
                        <h2>{product.product_name || "unknown"}</h2>
                        <p>{product.brand_name || "unknown"}</p>
                      </div>
                    </div>
                  </td>
                  <td className='table-price'>
                    <span>
                      ${product.price}
                    </span>
                  </td>
                  <td className='table-quantity'>
                    <input type="text"
                      value={product.count}
                      onChange={(e) => handleChange(e.target.value, product.id)}
                      onBlur={() => dispatch(getTotal())} />
                  </td>
                  <td>
                    <button className="icon" >
                      <HiRefresh />
                    </button>
                    <button className="icon" onClick={() => handleDeleteProductInErevan(product.id)}>
                      <BsTrashFill />
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className='flex'>
        <h2 className="total">
          Subtotal:
        </h2>
        <span>{total}</span>
      </div>

    </div>
  )
}
