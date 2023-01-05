import Sidebar from '../../component/sidebar/Sidebar';
import './homeadmin.scss'
const HomeAdmin = () => {
  return (
    <div className='homeadmin'>
    <Sidebar/>
    <div className=" singleContainer page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12 w-100">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                      <h2 className="f-w-600">Chức năng của Admin</h2>
                      </div>
                      
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
              
                      <h3 className="m-b-20 p-b-5 b-b-default f-w-600">
                      </h3>
                      <div className="row">
                      <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Xem danh sách khách hàng, khách sạn, phòng, lịch đặt phòng</p>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Tạo tài khoản khách hàng, nhân viên mới</p>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Tạo khách sạn, phòng</p>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Sửa thông tin và cấp quyền admin</p>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Xóa khách hàng, khách sạn, phòng </p>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Cập nhật trạng thái lịch đặt phòng</p>
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

export default HomeAdmin;