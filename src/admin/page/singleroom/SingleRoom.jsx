import './single.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import useFetch from "../../hook/useFetch";
import {  useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';



const Singlehotel = () => {
 
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/api/${path}/${path2}`);
console.log(data)
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
                          src={data.image}
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 className="f-w-600">{data.title}</h6>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                     <Link to={`/${path}/${path2}/update`}>
                       <h5 className="editButton" color='yellow'>Cập nhật</h5>
                        </Link>
                    <div className="card-block">
              
                      <h3 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Thông tin phòng
                      </h3>


                      <div className="row">
                      <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Giá thuê 1 ngày</p>
                          <h6 className="text-muted f-w-400">
                          {data.price}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Mô tả</p>
                          <h6 className="text-muted f-w-400">{data.desc}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Giá thuê 1 ngày</p>
                          <h6 className="text-muted f-w-400">{data.price}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Số người tối đa</p>
                          <h6 className="text-muted f-w-400">{data. maxPeople}</h6>
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

export default Singlehotel;