import "./update.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import { roomInputs } from "../../formSource";
import { useLocation,useNavigate} from 'react-router-dom';
import {  useState } from 'react';
import { axiosInstance } from "../../../config";

const UpdateRoom = () => {
  
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];


  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
        
      const updateroom = {
        ...info,
        roomNumbers,
      };
      await axiosInstance.put(`/api/${path}/${path2}/update`,  updateroom);
      navigate('/rooms');
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
          <h1>Chỉnh sửa thông tin phòng </h1>
        </div>
        <div className="bottom">
          <div className="right">
            
            <form>
            
              {roomInputs.map((input) => (
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
              <div className="formInput">
                <label>Số phòng</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="thêm dấu phẩy sau mỗi phòng"
                />
              </div>
             
              <button onClick={handleClick}>Xác nhận</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoom;
