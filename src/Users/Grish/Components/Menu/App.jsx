import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ROUTES from "./routes";
import Layouts from "./components/Layouts";
import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";
import SignIn from "./Pages/Signin/Signin";
import Sport from "./Pages/Sport/Sport";
import WorkLife from "./Pages/WorkLife/WorkLife";
import Travel from "./Pages/Travel/Travel";
import Reel from "./Pages/Reel/Reel";
import Future from "./Pages/Future/Future";
import More from "./Pages/More/More";
import Search from "./Pages/Search/Search";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        <Route path={ROUTES.NEWS} element={<News />} />
        <Route path={ROUTES.SPORT} element={<Sport />} />
        <Route path={ROUTES.REEL} element={<Reel />} />
        <Route path={ROUTES.WORKLIFE} element={<WorkLife />} />
        <Route path={ROUTES.TRAVEL} element={<Travel />} />
        <Route path={ROUTES.FUTURE} element={<Future />} />
        <Route path={ROUTES.MORE} element={<More />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
