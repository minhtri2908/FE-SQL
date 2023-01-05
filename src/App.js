import Login from './page/login/login';
import HomeAdmin from './admin/page/home/HomeAdmin';
import Home from './page/home/home';
import Regishotel from './page/registerhotel/regishotel';
import Regispartner from './page/regispartner/regispartner';
import Support from './page/support/support';
import Searchresult  from './page/searchresult/searchresult';
import Visit from './page/visit/visit';
import Hotel from './page/hotel/hotel';
import Payment from './page/booking/booking';
import User from './page/user/user';
import Forgot from './page/forgot/forgot';

import { hotelColumns, roomColumns, userColumns, bookingColumns } from "./admin/datatablesource";
import List from './admin/page/list/List';
import New from './admin/page/new/New';
import Single from './admin/page/single/Single';
import NewRoom from './admin/page/newRoom/NewRoom';
import NewHotel from './admin/page/newHotel/NewHotel';
import UpdateHotel from "./admin/page/updatehotel/Updatehotel";
import UpdateUser from "./admin/page/update/UpdateUser";
import UpdateRoom from "./admin/page/updateroom/UpdateRoom";
import SingleBooking from "./admin/page/singlebooking/SingleBooking";
import UpdateBooking from "./admin/page/updatebooking/UpdateBooking";
import SingleHotel from "./admin/page/singlehotel/SingleHotel";
import SingleRoom from "./admin/page/singleroom/SingleRoom";

import { userInputs, UpuserInputs } from "./admin/formSource";
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
    if (!user.isAdmin) {
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
          <Route path="/hotel/:id" element = {<Hotel />} />
          <Route path="/payment" element = {<Payment />} />
          <Route path="/user" element = {<User />} />
          <Route path="/forgot" element = {<Forgot />} />

          <Route path="/">
            <Route path="/login" element={<Login />} />
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
                path=":_id">
                    <Route index
                    element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                  }
                  />
                 
                  <Route
                  path="update"
                  element={
                  <ProtectedRoute>
                   <UpdateUser inputs={UpuserInputs} title="Update user"/>
                  </ProtectedRoute>
                  }
                  />
                </Route>
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="booking">
            <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={bookingColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":_id">
                    <Route index
                    element={
                  <ProtectedRoute>
                    <SingleBooking />
                  </ProtectedRoute>
                  }
                  />
                 
                  <Route
                  path="update"
                  element={
                  <ProtectedRoute>
                    <UpdateBooking/>
                  </ProtectedRoute>
                  }
                  />
            
              </Route>
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
                path=":_id">
                    <Route index
                    element={
                  <ProtectedRoute>
                    <SingleHotel />
                  </ProtectedRoute>
                  }
                  />
                 
                  <Route
                  path="update"
                  element={
                  <ProtectedRoute>
                    <UpdateHotel/>
                  </ProtectedRoute>
                  }
                  />
            
              </Route>
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel  />
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
                path=":_id">
                    <Route index
                    element={
                  <ProtectedRoute>
                    <SingleRoom />
                  </ProtectedRoute>
                  }
                  />
                 
                  <Route
                  path="update"
                  element={
                  <ProtectedRoute>
                    <UpdateRoom/>
                  </ProtectedRoute>
                  }
                  />
            
              </Route>
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
