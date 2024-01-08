import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./util/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchCard from "./components/WatchCard";
import MenuContainer from "./components/MenuContainer";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

/**
 * header
 * body
 *  - sidebar
 *     -menuitems
 *  - menucontainer
 *    - buttonlist
 *    - menucards
 */

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MenuContainer /> },
      { path: "watch", element: <WatchCard /> },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRoutes} />
      </div>
    </Provider>
  );
}

export default App;
