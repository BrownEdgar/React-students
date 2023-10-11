import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./Components/Posts";
import store from "./app/store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
