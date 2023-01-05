import Home from "./page/home/Home";
import Login from "./page/login/Login";
import List from "./page/list/List";
import Single from "./page/single/Single";
import New from "./page/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns, bookingColumns } from "./datatablesource";
import NewHotel from "./page/newHotel/NewHotel";
import NewRoom from "./page/newRoom/NewRoom";
import SingleHotel from "./page/singlehotel/SingleHotel";
import SingleRoom from "./page/singleroom/SingleRoom";
import UpdateHotel from "./page/updatehotel/Updatehotel";
import UpdateUser from "./page/update/UpdateUser";
import UpdateRoom from "./page/updateroom/UpdateRoom";
import SingleBooking from "./page/singlebooking/SingleBooking";
import UpdateBooking from "./page/updatebooking/UpdateBooking";

function App() {


  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
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
                path=":id">
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
                   <UpdateUser inputs={userInputs} title="Add New User"/>
                  </ProtectedRoute>
                  }
                  />
                </Route>
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Update user" />
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
    </div>
  );
}

export default App;
