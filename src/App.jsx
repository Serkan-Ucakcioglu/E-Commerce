import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import Login from "./Components/Forms/Login";
import CheckOutPage from "./Pages/CheckOutPage";
import DashBoard from "./Components/Account/DashBoard";
import Error from "./Components/Error";
import PrivateRoute from "./Components/PrivateRoute";
import AddProduct from "./Components/Account/UserOperations/AddProduct";
import EditProduct from "./Components/Account/UserOperations/EditProduct";
import DeleteProduct from "./Components/Account/UserOperations/DeleteProduct";
import WelcomeDashboard from "./Components/Account/WelcomeDashboard";

function App() {
  let user = localStorage.getItem("user") == null ? false : true;

  return (
    <div className="App">
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailsPage />} />
        <Route path="/login" element={user ? <DashBoard /> : <Login />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        >
          <Route index element={<WelcomeDashboard />} />
          <Route path="/account/err" element={<Error />} />
          <Route path="/account/add-product" element={<AddProduct />} />
          <Route path="/account/edit-product" element={<EditProduct />} />
          <Route path="/account/delete-product" element={<DeleteProduct />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
