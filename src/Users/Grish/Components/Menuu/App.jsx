import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import Layouts from "./Components/Layouts"
import Agencym4theme from "./Pages/Agencym4theme/Agencym4theme"
import Watchvideo from "./Pages/Watchvideo/Watchvideo"
import Menus from "./Pages/Menus/Menus"
import Blocks from "./Pages/Blocks/Blocks"
import Buynow from "./Pages/Buynow/Buynow"
import ROUTES from "./routes"

import "./App.scss"

export default function App() {

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROUTES.AGENCYM4THEME} element={<Layouts />}>
            <Route index element={<Agencym4theme />} />
            <Route path={ROUTES.WATCHVIDEO} element={<Watchvideo />} />
            <Route path={ROUTES.MENUS} element={<Menus />} />
            <Route path={ROUTES.BLOCKS} element={<Blocks />} />
            <Route path={ROUTES.BUYNOW} element={<Buynow />} />
        </Route>
    )
)
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}
