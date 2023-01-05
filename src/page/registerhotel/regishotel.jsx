import './regishotel.scss';
import register_image from '../../image/register-partner.png';
import { FcCheckmark } from 'react-icons/fc';
import { BsCheckCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import family_image from '../../image/meet-guests.0e575a58.png';
import Elvira from '../../image/meet_elivra.1a77fdf3.jpg';
import Footer from '../../component/Footer/Footer';

function regishotel() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="banner row">
          <div className="introduce col">
            <div className="text-1"> Đăng </div>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner d-table-cell fw-bolder fs-2 link-primary">
                <div className="carousel-item active"> Căn Hộ </div>
                <div className="carousel-item "> Khách Sạn</div>
                <div className="carousel-item "> Nhà Nghỉ Dưỡng</div>
                <div className="carousel-item "> Guest House</div>
                <div className="carousel-item "> Nhà Nghỉ B&B</div>
                <div className="carousel-item "> Bất cứ chỗ nghỉ nào </div>
              </div>
              <div className="fs-4  h1 ">Của Qúy Vị</div>
            </div>
            <div className="text-3 h1 ">trên Tour and Travel</div>
            <div className="text-4">
              Đăng kí miễn phí và chỉ mất 15 phút để hoàn tất – hãy bắt đầu ngay
              hôm nay
            </div>
          </div>
          <div className="col">
            <div className="register-partner"> 
              <div className="text1">Tạo Đăng Ký Mới</div>

              <div className="navbar-text d-flex">
                <FcCheckmark />
                <div className="px-1">
                  Hơn 6,4 triệu nhà nghỉ dưỡng đã được đăng kí
                </div>
              </div>

              <div className="navbar-text d-flex">
                <FcCheckmark />
                <div className="px-1">
                  Hơn 1 tỉ lượt khách đã lưu trú tại nhà nghỉ dưỡng
                </div>
              </div>

              <div className="navbar-text d-flex">
                <FcCheckmark className="size-issue" />
                <div className="px-1">
                  Hơn 40% nhà nghỉ dưỡng nhận được đơn đặt đầu tiên trong vòng
                  một tuần sau khi đăng kí
                </div>
              </div>
              <div className="text2 navbar-text">
                Tạo tài khoản đối tác để bắt đầu
              </div>
              <div className="navbar-text">
                Bằng cách đi tiếp, Quý vị đồng ý cho Booking.com gửi email tới
                Quý vị về việc đăng ký chỗ nghỉ.
              </div>
              <Link to="../register-partner">
                <button type="button" className="btn btn-primary">
                  Bắt Đầu {'->'}
                </button>
              </Link>
              <div>
                <div className="navbar-text fw-bold ">
                  Quý vị đã bắt đầu quá trình đăng ký?
                </div>
                <div>
                  <a href="#">Tiếp tục các bước đăng ký</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="infor-for-partner justify-content-center d-grid offset-lg-2 ps-5 py-5">
          <div className=" navbar-text fw-bold fs-2">
            Sự an tâm của Quý vị là ưu tiên hàng đầu của chúng tôi
          </div>
          <div className="navbar-text">
            Đây là cách chúng tôi giúp Quý vị cảm thấy tự tin chào đón khách:
          </div>
          <div className="regulation-for-partner d-flex ">
            <div className="col-6">
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  Thiết lập<strong> quy tắc chung {'  '}</strong> mà khách phải
                  chấp thuận trước khi đến lưu trú
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  Yêu cầu <strong> đặt cọc đề phòng hư hại </strong> để an tâm
                  hơn
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  <strong>Báo cáo hành vi sai phạm của khách</strong> nếu có vấn
                  đề xảy ra
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  Được <strong>hỗ trợ 24/7</strong> với hơn 43 ngôn ngữ
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="mx-1 w-75">
                  Được bảo vệ trước các yêu cầu bồi thường liên quan đến trách
                  nhiệm từ khách và cư dân xung quanh lên đến 1.000.000 USD cho
                  mỗi đơn đặt
                </div>
              </div>
              <div className="py-3">
                <button type="button" className="btn btn-outline-primary ">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            <div className=" ">
              <img className="col-10 " src={register_image} alt="register" />
            </div>
          </div>
        </div>
        <div className="background_div">
          <div className="row d-grid size-fix offset-lg-2 py-5 ">
            <div className="navbar-text fw-bold fs-2">
              Mô tả nào sau đây phù hợp với Quý vị nhất?
            </div>
            <div className="">
              Chọn một trong những lựa chọn sau để xem thông tin đã được tùy
              chỉnh riêng
            </div>
            <div className="pt-5 row">
              <div className="pt-3 pb-3 px-5 shadow col-md-4 col-xs-10">
                <div className="fw-bold navbar-text">
                  Tôi có một chỗ nghỉ thi thoảng mới cho thuê
                </div>
                <div className="navbar-text d-flex">
                  <FcCheckmark />
                  <div className="px-1">
                    {' '}
                    Chỗ nghỉ này là nơi tôi cất giữ đồ dùng cá nhân
                  </div>
                </div>
                <div className="navbar-text d-flex">
                  <FcCheckmark />
                  <div className="px-1">
                    Tôi có rất ít kinh nghiệm trong ngành du lịch khách sạn
                  </div>
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-outline-primary ">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
              <div className="pt-3 pb-3 px-5 shadow col-md-4 col-xs-10 offset-sm-1">
                <div className="fw-bold navbar-text">
                  Tôi có nhiều chỗ nghỉ cho thuê quanh năm
                </div>
                <div className="navbar-text d-flex">
                  <FcCheckmark />
                  <div className="px-1">
                    Những chỗ nghỉ này chủ yếu cho khách sử dụng
                  </div>
                </div>
                <div className="navbar-text d-flex">
                  <FcCheckmark />
                  <div className="px-1">
                    Tôi có kinh nghiệm trong ngành du lịch khách sạn
                  </div>
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-outline-primary ">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-grid size-fix offset-lg-2 py-5">
          <div className="navbar-text fw-bold fs-2">
            Lợi ích khi hợp tác cùng chúng tôi
          </div>
          <div className="pt-5 row">
            <div className="pt-3 pb-3 px-5 shadow col-md-5 col-xs-10 mx-4 my-1">
              <div className="fw-bold navbar-text">
                Đăng bất kỳ loại chỗ nghỉ nào
              </div>
              <div className="navbar-text d-flex">
                <div className="px-1">
                  Từ căn hộ cho đến biệt thự và các loại chỗ nghỉ khác đều có
                  thể được đăng miễn phí.
                </div>
              </div>
            </div>
            <div className="pt-3 pb-3 px-5 shadow col-md-5 col-xs-10 mx-4 my-1">
              <div className="fw-bold navbar-text">Nhập thông tin dễ dàng</div>
              <div className="navbar-text d-flex">
                <div className="px-1">
                  Để tiết kiệm thời gian, Quý vị có thể nhập nhiều thông tin từ
                  các đăng ký có sẵn.
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 row">
            <div className="pt-3 pb-3 px-5 shadow col-md-5 col-xs-10 mx-4 my-1">
              <div className="fw-bold navbar-text">Hướng dẫn từng bước</div>
              <div className="navbar-text d-flex">
                <div className="px-1">
                  Quý vị sẽ được biết cách thức hoạt động của trang chúng tôi,
                  các phương pháp thực hành tốt nhất và những điều cần chú ý.
                </div>
              </div>
            </div>
            <div className="pt-3 pb-3 px-5 shadow col-md-5 col-xs-10 mx-4 my-1">
              <div className="fw-bold navbar-text">Giảm giá đặc biệt</div>
              <div className="navbar-text d-flex">
                <div className="px-1">
                  Được giảm giá cho các sản phẩm và dịch vụ giúp tiết kiệm thời
                  gian cho Quý vị và cải thiện trải nghiệm cho khách.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background_div">
          <div className="row d-grid size-fix offset-lg-2 py-5">
            <div className="navbar-text fw-bold fs-2">Gặp gỡ Elvira</div>
            <div className="navbar-text">
              Hãy xem vì sao Elvira thích cho thuê chỗ nghỉ trên Booking.com.
            </div>
            <div className=" mt-md-3 shadow infor-Elvira w-75  ">
            <div className=" d-flex">
              <img className="col-4 py-1" src={Elvira} alt="Elvira" />
              <div className="px-md-5">
                <div className=" fw-bold fs-2">
                  "Tôi cảm thấy tự tin hơn khi biết rằng tôi có thể báo cáo hành
                  vi sai phạm của khách cho tất cả chỗ nghỉ trong danh mục của
                  tôi trên Booking.com."
                </div>
                <div className="fw-bold fs-5">Elvira Cuéllar</div>
                <div className="figure-caption">
                  Palma Homes Mallorca, Mallorca
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="row d-grid size-fix offset-lg-2 py-5">
          <div className=" navbar-text fw-bold fs-2">
            Biết thêm thông tin về khách
          </div>
          <div className="navbar-text">
            Dù có từ đâu đến, khách của chúng tôi đều có một vài điểm chung.
          </div>
          <div className="regulation-for-partner d-flex">
            <div className="col-6 pt-md-5">
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  75% đêm được đặt bởi khách đã thực hiện từ năm đặt phòng trở
                  lên
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  68% đêm được đặt bởi các gia đình và cặp đôi
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  42% đêm được đặt ở các chỗ nghỉ không phải khách sạn
                </div>
              </div>
            </div>
            <div className="col">
              <img width={'450px'} height={'300px'} src={family_image} alt="family" />
            </div>
          </div>
        </div>
        
        <div className=" infor-for-partner-2 row d-grid size-fix offset-lg-2 py-5">
          <div className="navbar-text fw-bold fs-2">
            Booking.com qua những con số
          </div>
          <div className="regulation-for-partner row">
            <div className="col">
              <div className="fw-bold fs-1 ">Trên 28 triệu</div>
              <div>Đăng ký tại 226 quốc gia và vùng lãnh thổ trên toàn cầu</div>
            </div>
            <div className="col">
              <div className="fw-bold fs-1 ">Trên 6,2 Triệu</div>
              <div>Nhà, căn hộ và những chỗ nghỉ độc đáo khác</div>
            </div>
            <div className="col">
              <div className="fw-bold fs-1 ">Trên 43</div>
              <div>Ngôn ngữ trên trang của chúng tôi</div>
            </div>
          </div>
        </div>
        <div className="row d-grid size-fix offset-lg-2 py-5">
          <div className="navbar-text fw-bold fs-2">
            Sự an tâm của Quý vị là ưu tiên hàng đầu của chúng tôi
          </div>
          <div className="navbar-text">
            Đây là cách chúng tôi giúp Quý vị cảm thấy tự tin chào đón khách:
          </div>
          <div className="regulation-for-partner row">
            <div className="col">
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  Thiết lập<strong> quy tắc chung </strong> mà khách phải
                  chấp thuận trước khi đến lưu trú
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  Yêu cầu <strong> đặt cọc đề phòng hư hại </strong> để an tâm
                  hơn
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  <strong>Báo cáo hành vi sai phạm của khách</strong> nếu có vấn
                  đề xảy ra
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  Được <strong>hỗ trợ 24/7</strong> với hơn 43 ngôn ngữ
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="mx-1 w-75">
                  Được bảo vệ trước các yêu cầu bồi thường liên quan đến trách
                  nhiệm từ khách và cư dân xung quanh lên đến 1.000.000 USD cho
                  mỗi đơn đặt
                </div>
              </div>
              <div className="py-3">
                <button type="button" className="btn btn-outline-primary ">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            <div className="col">
              <img src={register_image} alt="register" />
            </div>
          </div>
        </div>
        <div className="background_div">
          <div className="row d-grid size-fix offset-lg-2 py-5 ">
            <div className="navbar-text fw-bold fs-2">
              Mô tả nào sau đây phù hợp với Quý vị nhất?
            </div>
            <div className="navbar-text">
              Chọn một trong những lựa chọn sau để xem thông tin đã được tùy
              chỉnh riêng
            </div>
            <div className="pt-5 row">
              <div className="pt-3 pb-3 px-5 shadow col-sm-5 mx-4">
                <div className="fw-bold navbar-text">
                  Tôi có một chỗ nghỉ thi thoảng mới cho thuê
                </div>
                <div className="navbar-text d-flex">
                  <FcCheckmark />
                  <div className="px-1">
                    {' '}
                    Chỗ nghỉ này là nơi tôi cất giữ đồ dùng cá nhân
                  </div>
                </div>
                <div className="navbar-text d-flex">
                  <FcCheckmark />
                  <div className="px-1">
                    Tôi có rất ít kinh nghiệm trong ngành du lịch khách sạn
                  </div>
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-outline-primary ">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
              <div className="pt-3 pb-3 px-5 shadow col-sm-5 mx-4">
                <div className="fw-bold navbar-text">
                  Tôi có nhiều chỗ nghỉ cho thuê quanh năm
                </div>
                <div className="navbar-text d-flex">
                  <FcCheckmark />
                  <div className="px-1">
                    Những chỗ nghỉ này chủ yếu cho khách sử dụng
                  </div>
                </div>
                <div className="navbar-text d-flex">
                  <FcCheckmark />
                  <div className="px-1">
                    Tôi có kinh nghiệm trong ngành du lịch khách sạn
                  </div>
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-outline-primary ">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-grid size-fix offset-lg-2 py-5">
          <div className="navbar-text fw-bold fs-2">
            Lợi ích khi hợp tác cùng chúng tôi
          </div>
          <div className="pt-5 row">
            <div className="pt-3 pb-3 px-5 shadow col-md-5 col-xs-10 mx-4 my-1">
              <div className="fw-bold navbar-text">
                Đăng bất kỳ loại chỗ nghỉ nào
              </div>
              <div className="navbar-text d-flex">
                <div className="px-1">
                  Từ căn hộ cho đến biệt thự và các loại chỗ nghỉ khác đều có
                  thể được đăng miễn phí.
                </div>
              </div>
            </div>
            <div className="pt-3 pb-3 px-5 shadow col-md-5 col-xs-10 mx-4 my-1">
              <div className="fw-bold navbar-text">Nhập thông tin dễ dàng</div>
              <div className="navbar-text d-flex">
                <div className="px-1">
                  Để tiết kiệm thời gian, Quý vị có thể nhập nhiều thông tin từ
                  các đăng ký có sẵn.
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 row">
            <div className="pt-3 pb-3 px-5 shadow col-md-5 col-xs-10 mx-4 my-1">
              <div className="fw-bold navbar-text">Hướng dẫn từng bước</div>
              <div className="navbar-text d-flex">
                <div className="px-1">
                  Quý vị sẽ được biết cách thức hoạt động của trang chúng tôi,
                  các phương pháp thực hành tốt nhất và những điều cần chú ý.
                </div>
              </div>
            </div>
            <div className="pt-3 pb-3 px-5 shadow col-md-5 col-xs-10 mx-4 my-1">
              <div className="fw-bold navbar-text">Giảm giá đặc biệt</div>
              <div className="navbar-text d-flex">
                <div className="px-1">
                  Được giảm giá cho các sản phẩm và dịch vụ giúp tiết kiệm thời
                  gian cho Quý vị và cải thiện trải nghiệm cho khách.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background_div">
          <div className="row d-grid size-fix offset-lg-2 py-5">
            <div className="navbar-text fw-bold fs-2">Gặp gỡ Elvira</div>
            <div className="navbar-text">
              Hãy xem vì sao Elvira thích cho thuê chỗ nghỉ trên Booking.com.
            </div>
            <div className=" mt-md-3 shadow infor-Elvira w-75  ">
            <div className=" d-flex">
              <img className="col-4 py-1" src={Elvira} alt="Elvira" />
              <div className="px-md-5">
                <div className=" fw-bold fs-2">
                  "Tôi cảm thấy tự tin hơn khi biết rằng tôi có thể báo cáo hành
                  vi sai phạm của khách cho tất cả chỗ nghỉ trong danh mục của
                  tôi trên Booking.com."
                </div>
                <div className="fw-bold fs-5">Elvira Cuéllar</div>
                <div className="figure-caption">
                  Palma Homes Mallorca, Mallorca
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="row d-grid size-fix offset-lg-2 py-5">
          <div className=" navbar-text fw-bold fs-2">
            Biết thêm thông tin về khách
          </div>
          <div className="navbar-text">
            Dù có từ đâu đến, khách của chúng tôi đều có một vài điểm chung.
          </div>
          <div className="row regulation-for-partner">
            <div className="col pt-md-5">
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  75% đêm được đặt bởi khách đã thực hiện từ năm đặt phòng trở
                  lên
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  68% đêm được đặt bởi các gia đình và cặp đôi
                </div>
              </div>
              <div className="navbar-text d-flex py-3">
                <BsCheckCircle className="width1" />
                <div className="d-block mx-2">
                  42% đêm được đặt ở các chỗ nghỉ không phải khách sạn
                </div>
              </div>
            </div>
            <div className="col">
              <img
                width={'450px'}
                height={'300px'}
                src={family_image}
                alt="family"
              />
            </div>
          </div>
        </div>
        
        <div className=" infor-for-partner-2 row d-grid size-fix offset-lg-2 py-5">
          <div className="navbar-text fw-bold fs-2">
            Booking.com qua những con số
          </div>
          <div className="regulation-for-partner row">
            <div className="col">
              <div className="fw-bold fs-1 ">Trên 28 triệu</div>
              <div>Đăng ký tại 226 quốc gia và vùng lãnh thổ trên toàn cầu</div>
            </div>
            <div className="col">
              <div className="fw-bold fs-1 ">Trên 6,2 Triệu</div>
              <div>Nhà, căn hộ và những chỗ nghỉ độc đáo khác</div>
            </div>
            <div className="col">
              <div className="fw-bold fs-1 ">Trên 43</div>
              <div>Ngôn ngữ trên trang của chúng tôi</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default regishotel;
