import "./update.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import { bookingInputs } from "../../formSource";
import { useLocation,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { axiosInstance } from "../../../config";

const UpdateBooking = () => {
  
  const [info, setInfo] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];


  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
        
      const updatebooking = {
        ...info,
      };
      await axiosInstance.put(`/api/${path}/${path2}/update`,  updatebooking);
      navigate('/booking');
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>Chỉnh sửa trạng thái đơn hàng </h1>
        </div>
        <div className="bottom">
          <div className="right">
            
            <form>
            
              {bookingInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
             
             
              <button onClick={handleClick}>Xác nhận</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooking;
