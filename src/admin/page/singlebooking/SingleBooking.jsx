import './single.scss'
import Sidebar from '../../component/sidebar/Sidebar'

import useFetch from "../../hook/useFetch";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import { Link } from 'react-router-dom';



const SingleBooking = (  ) => {
  const [user, setUser] = useState([]);
  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setUser(value);
  };
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  console.log(path);
  console.log(path2);
  const { data, loading, error } = useFetch(`/api/${path}/${path2}`);
  console.log(data);

  return (
    <div className="single">
      <Sidebar />
      <div className=" singleContainer page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12 w-100">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src='https://res.cloudinary.com/dypkrcusa/image/upload/v1671256656/upload/jjtexszmqhgzb1pxhnpc.png'
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      </div>
                  </div>
                  <div className="col-sm-8">
                     <Link to={`/${path}/${path2}/update`}>
                       <h5 className="editButton" color='yellow'>Cập nhật</h5>
                        </Link>
                    <div className="card-block">
              
                      <h3 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Thông tin thuê phòng
                      </h3>


                      <div className="row">
                      <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Tên người dùng</p>
                          <h6 className="text-muted f-w-400">
                            {data.fullname}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Số điện thoại</p>
                          <h6 className="text-muted f-w-400">{data.phone}</h6>
                        </div>
                      </div>
              
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Ngày đặt</p>
                          <h6 className="text-muted f-w-400">{data.updateAt}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Ngày nhận phòng</p>
                          <h6 className="text-muted f-w-400">
                            {data.fromDate}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Ngày trả phòng</p>
                          <h6 className="text-muted f-w-400">
                            {data.toDate}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Số ngày thuê</p>
                          <h6 className="text-muted f-w-400">
                            {data.totalDays}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Tổng giá tiền</p>
                          <h6 className="text-muted f-w-400">
                            {data.totalPrice}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Trạng thái</p>
                          <h6 className="text-muted f-w-400">
                            {data.status}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleBooking;