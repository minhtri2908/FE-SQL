import "./update.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { hotelInputs } from "../../formSource";
import useFetch from "../../hook/useFetch";
import axios from "axios";
import { useLocation,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { axiosInstance } from "../../../config";

const NewHotel = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];

  const { data, loading } = useFetch("/api/rooms");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };
  
  console.log(file)

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axiosInstance.post(
        "https://api.cloudinary.com/v1_1/dypkrcusa/image/upload",
        data
      );

      const { url } = uploadRes.data;


      const updatehotel = {
        ...info,
        rooms,
        image:  url,
        image1:  url,
        image2:  url,
        image3:  url,
        image4:  url,
        image5:  url,
        image6:  url,
      };

      await axiosInstance.put(`/api/${path}/${path2}/update`, updatehotel);
      navigate('/hotels');
    } catch (err) {console.log(err)}
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>Chỉnh sửa khách sạn</h1>
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

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
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

export default NewHotel;
