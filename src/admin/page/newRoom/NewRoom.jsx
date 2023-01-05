import "./newRoom.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import { roomInputs } from "../../formSource";
import useFetch from "../../hook/useFetch";
import axios from "axios";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useNavigate} from 'react-router-dom';
import {  useState } from 'react';
import { axiosInstance } from "../../../config";

const NewRoom = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  const { data, loading } = useFetch("/api/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
        const uploadRes = await axiosInstance.post(
          "https://api.cloudinary.com/v1_1/dypkrcusa/image/upload",
          data
        );
        const { url } = uploadRes.data;
      const newroom = {
        ...info,
        roomNumbers,
        image: url,
      };
      await axiosInstance.post(`/api/rooms/${hotelId}`,  newroom);
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
          <h1>Thêm phòng mới</h1>
        </div>
        <div className="bottom">
        <div className="left">
          <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            </div>
          <div className="right">
            
            <form>
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div> 
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
                <label>Số Phòng</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Thêm dấu phẩy sau mỗi phòng"
                />
              </div>
              <div className="formInput">
                <label>Chọn khách sạn</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Xác nhận</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
