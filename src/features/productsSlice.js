import { createSlice } from "@reduxjs/toolkit";

const initialProductValue = [
  {
    id: 1,
    product_brand: "A.P.C.",
    product_name: "Cotton Jacket",
    size: "XL",
    color: "Aquamarine",
    product_count: 1,
    product_price: 294,
    product_image:
      "https://i.pinimg.com/564x/f8/2f/9c/f82f9cee3e8b74af49c1d5bf2aa1b63d.jpg",
  },
  {
    id: 2,

    product_brand: "A|X Armani Exchange",
    product_name: "Shirt short",
    size: "S",
    color: "Aquamarine",
    product_count: 2,
    product_price: 459,
    product_image:
      "https://i.pinimg.com/564x/b6/3a/bb/b63abb0e50534627926a59169772a586.jpg",
  },
  {
    id: 3,
    product_brand: "Adidas",
    product_name: "Bag",
    size: "S",
    color: "Orange",
    product_count: 3,
    product_price: 107,
    product_image:
      "https://i.pinimg.com/564x/a3/42/8d/a3428d47ee9fa2593b72b8d1704177e3.jpg",
  },
  {
    id: 4,

    product_brand: "Adrianna Papell",
    product_name: "Shirt",
    size: "XL",
    color: "Yellow",
    product_count: 4,
    product_price: 690,
    product_image:
      "https://i.pinimg.com/564x/8b/57/81/8b57811ba441d2b7231903a8518f332c.jpg",
  },
  {
    id: 5,

    product_brand: "Calvin Klein",
    product_name: "Cap",
    size: "L",
    color: "Teal",
    product_count: 8,
    product_price: 766,
    product_image:
      "https://i.pinimg.com/564x/7d/1e/13/7d1e1383f2b6ef85b694aced588e7b73.jpg",
  },
  {
    id: 6,

    product_brand: "Fendi",
    product_name: "Bag",
    size: "S",
    color: "Maroon",
    product_count: 6,
    product_price: 296,
    product_image:
      "https://i.pinimg.com/564x/86/99/1b/86991b62b6350a663776af9af76d2fe2.jpg",
  },
  {
    id: 7,

    product_brand: "Nike",
    product_name: "Shoes sport",
    size: 38,
    color: "Purple",
    product_count: 7,
    product_price: 184,
    product_image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f820e398-3050-438b-91a9-e985898def17/spark-womens-shoes-w4WdlF.png",
  },
  {
    id: 8,

    product_brand: "Champions",
    product_name: "hoodie sweatshirt",
    size: "2XL",
    color: "Turquoise",
    product_count: 8,
    product_price: 284,
    product_image:
      "https://i.pinimg.com/564x/86/48/8c/86488c243e224ace1f541b579f72b2dc.jpg",
  },
  {
    id: 9,

    product_brand: "Gucci",
    product_name: "Polo shirt",
    size: "XS",
    color: "Blue",
    product_count: 9,
    product_price: 83,
    product_image:
      "https://i.pinimg.com/564x/22/4c/01/224c01b7a151bfb15fab3671426ba50d.jpg",
  },
  {
    id: 10,

    product_brand: "Hermès",
    product_name: "Shirt",
    size: "L",
    color: "Turquoise",
    product_count: 10,
    product_price: 240,
    product_image:
      "https://i.pinimg.com/564x/f3/6a/e6/f36ae60dda5a7de88cf65c613ccc702c.jpg",
  },
  {
    id: 11,

    product_brand: "Chanel",
    product_name: "Sweatshirts",
    size: "S",
    color: "Orange",
    product_count: 11,
    product_price: 53,
    product_image:
      "https://images.vestiairecollective.com/cdn-cgi/image/w=375,q=75,f=auto,/produit/orange-cotton-louis-vuitton-t-shirt-37007878-1_2.jpg",
  },
  {
    id: 12,

    product_brand: "Louis Vuitton",
    product_name: "Cropped Monogram Puffer Jacket",
    size: "XL",
    color: "Mauv",
    product_count: 12,
    product_price: 229,
    product_image:
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cropped-monogram-puffer-jacket-ready-to-wear--FQOW15CAR134_PM2_Front%20view.png?wid=1090&hei=1090",
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductValue,
  reducers: {
    deleteById: (state, action) => {
      return state.filter((prod) => prod.id !== action.payload.id);
    },

    getCount: (state, action) => {
      const product = state.find((prod) => prod.id == action.payload.id);
      product.product_count = parseInt(action.payload.id);
    },
  },
});

export const { getCount, deleteById } = productsSlice.actions;
export default productsSlice.reducer;
