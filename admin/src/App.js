import './styles/css/bootstrap.min.css';
import Login from './page/login/login';
import Home from './page/home/home';
import Regishotel from './page/registerhotel/regishotel';
import Regispartner from './page/regispartner/regispartner';
import Support from './page/support/support';
import Searchresult  from './page/searchresult/searchresult';
import Visit from './page/visit/visit';
import Hotel from './page/hotel/hotel';
import Booking from './page/booking/booking';
import HomeAdmin from './admin/page/home/HomeAdmin';
import LoginAdmin from './admin/page/login/LoginAdmin';
import { hotelColumns, roomColumns, userColumns } from "./admin/datatablesource";
import List from './admin/page/list/List';
import New from './admin/page/new/New';
import Single from './admin/page/single/Single';
import NewRoom from './admin/page/newRoom/NewRoom';
import NewHotel from './admin/page/newHotel/NewHotel';
import { userInputs } from "./admin/formSource";
import { AuthContext } from './admin/context/AuthContext';
import { useContext } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/home" />;
    }
    return children;
  };
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-hotel" element = {<Regishotel />} />
          <Route path="/register-partner" element = {<Regispartner />} />
          <Route path="/support" element = {<Support />} />
          <Route path="/searchresult" element = {<Searchresult  />} />
          <Route path="/visit" element = {<Visit  />} />
          <Route path="/hotel" element = {<Hotel />} />
          <Route path="/booking" element = {<Booking />} />
          

          <Route path="/">
          <Route path="/loginadmin" element={<LoginAdmin />} />
            <Route index element={
                <ProtectedRoute>
                  <HomeAdmin />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route path="new" element={
              <ProtectedRoute>
                    <NewHotel/>
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                     <NewRoom  />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
