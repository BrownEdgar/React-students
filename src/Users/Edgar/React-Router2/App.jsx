import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Layouts from './components/Layouts';


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path='blog' element={<Blog />} />
        <Route path='about' element={<About />} />
      </Route>
    )
  )

  return (
    <div>

      <RouterProvider router={router} />

    </div>
  )
}
