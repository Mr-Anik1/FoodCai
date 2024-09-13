import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import { Cart } from "./components/Cart";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import "./css/App.css";
import { appStore } from "./utils/appStore";

// I want to split our app, Grocery will load when there is demand.
const Grocery = lazy(() => import("./components/Grocery"));

/**
 * @Final_AppLayout
 */
function AppLayout() {
  return (
    <Provider store={appStore}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </Provider>
  );
}

/**
 * @outLet replaced with the children component
 *
 * when path is "/", <Outlet /> replaced with the <Body/> component
 *
 * when path is "/about", <Outlet /> replaced with the <About/> component
 *
 */

// App Router Configuration.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

// Render the AppLayout
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
