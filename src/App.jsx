import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route
} from 'react-router-dom'
import Products from './components/Products/Products';
import Layouts from './components/Navbar/Layouts/Layouts';
import Basket from './components/Basket/Basket';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layouts />}>
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Basket />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );
}


