import {
  deleteById,
  getCount,

} from "../../features/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";

import "./Products.scss";

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [iconFix, setIconFix] = useState([]);

  // useEffect(() => {
  //   dispatch(getCountPrice());
  // }, [products.lenght]);

  const toggleButton = (id) => {
    if (iconFix.includes(id)) {
      setIconFix(iconFix.filter((clickId) => clickId !== id));
    } else {
      setIconFix([...iconFix, id]);
    }
  };

  const addCountProd = (value, id) => {
    dispatch(getCount({ value, id }));
  };

  const deleteProd = (id) => {
    dispatch(deleteById({ id }));
  };

  return (
    <div className="Products">
      <table className="Products-table">
        <thead className="Products-thead">
          <tr className="Products-columnTitle">
            <th className="Products-title" colSpan={2}>
              PRODUCT
            </th>
            <th className="Products-title">QUANTITY</th>
            <th className="Products-title">PRICE</th>
            <th className="Products-title"></th>
          </tr>
        </thead>
        <tbody className="Products-showItem">
          {products.map((product) => {
            return (
              <tr key={product.id} className="showItem-wrap">
                <td className="showItem-content" colSpan={2}>
                  <div className="showItem-product">
                    <img
                      src={product.product_image}
                      alt="shirt"
                      className="showItem-img"
                    />
                    <div className="showItem-info">
                      <p className="showItem-prodName">
                        {product.product_name}
                      </p>
                      <span className="showItem-discription">
                        <p className="discription-size">
                          Size: {product.size},
                        </p>
                        <p className="discription-color">
                          Color: {product.color}
                        </p>
                      </span>
                      <span className="showItem-brandName">
                        Brand: {product.product_brand}
                      </span>
                      <span></span>
                    </div>
                  </div>
                </td>
                <td className="showItem-prodCount">
                  <select
                    value={product.product_count}
                    onChange={(e) => addCountProd(e.target.value, product.id)}
                  >
                    {
                      new Array(product.product_count).fill().map((_, index) => {
                        return (
                          <option value={index + 1} key={index}>{index + 1}</option>
                        )
                      })
                    }
                  </select>
                </td>
                <td className="showItem-prodPrice">
                  <p className="prodPrice-count">${product.countPrice}</p>
                  <p className="prodPrice-realPrice">
                    ${product.product_price}
                  </p>
                </td>
                <td className="showItem-icon">
                  <p
                    onClick={() => toggleButton(product.id)}
                    style={{
                      color: iconFix.includes(product.id) ? "red" : "",
                    }}>
                    <AiFillHeart />
                  </p>
                  <button onClick={() => deleteProd(product.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
