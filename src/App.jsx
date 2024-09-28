import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFOund";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
import { CitiesProvider } from "./context/CitiesContex";
import { AuthProvider } from "./context/FakeAuthContext";
import { lazy, Suspense } from "react";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={SpinnerFullPage}>
            <Routes>
              <Route index element={<Homepage></Homepage>}></Route>
              <Route path="product" element={<Product></Product>}></Route>
              <Route path="pricing" element={<Pricing></Pricing>}></Route>
              <Route path="pricing" element={<Pricing></Pricing>}></Route>
              <Route path="login" element={<Login></Login>}></Route>
              <Route path="app" element={<AppLayout></AppLayout>}>
                <Route
                  index
                  element={<Navigate to="cities" replace></Navigate>}
                ></Route>
                <Route path="cities" element={<CityList></CityList>}></Route>
                <Route path="cities/:id" element={<City></City>}></Route>
                <Route
                  path="countries"
                  element={<CountryList></CountryList>}
                ></Route>
                <Route path="form" element={<Form></Form>}></Route>
              </Route>
              <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
