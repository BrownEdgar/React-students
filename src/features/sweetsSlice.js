import {createSlice} from "@reduxjs/toolkit"
const initialProductsValue = {

    data: [

        {
            id: "1",
            title: "Desert Cup",
            description:"stex mi ban kgrem heto",
            image:"https://images.pexels.com/photos/18841332/pexels-photo-18841332/free-photo-of-cup-of-coffee-and-cake-with-chocolate-sprinkles-and-red-berries-in-jelly-on-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           
        },
        {
            id: "2",
            title: "Fruit Cakes",
            description:"stex mi ban kgrem heto",
            image:"https://images.pexels.com/photos/14761473/pexels-photo-14761473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: "3",
            title: "Weeding Cake",
            description:"stex mi ban kgrem heto",
            image:"https://images.pexels.com/photos/3181263/pexels-photo-3181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
           
        {
            id: "4",
            title: "Buns & Meals",
            description:"stex mi ban kgrem heto",
            image:"https://images.pexels.com/photos/17850150/pexels-photo-17850150/free-photo-of-bread-buns-and-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

    ],



}
const productsSlice = createSlice({
    name: "sweets",
    initialState: initialProductsValue,
    reducers: {

    }
})

export default productsSlice.reducer