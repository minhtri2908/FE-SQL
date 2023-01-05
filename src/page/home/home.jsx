import React, { useContext, useState, useEffect } from 'react';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/header/header';
import './home.scss';
import { Link } from 'react-router-dom';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { Image } from 'cloudinary-react';
import SearchBar from '../../component/searchbar/searchbar';
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [ChoosePeople, setChoosePeople] = useState(false);
  const [People, setPeople] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);
  const handleSearch = () => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, date, People } });
    navigate('/searchresult', { state: { destination, date, People } });
  };
  return (
    <>
      <Header />
      <div className="content home">
        <div className="content1">
          <div
            id="stay"
            className="carousel slide setheight28rem"
            data-bs-ride="true"
          >
            <div className="carousel-indicators ">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  cloudName="dxivl2lh5"
                  publicId="1_vu75bt"
                  className="d-block w-100"
                  crop="scale"
                />
              </div>
              <div className="carousel-item">
                <Image
                  cloudName="dxivl2lh5"
                  publicId="2_xekldn"
                  className="d-block w-100"
                  crop="scale"
                />
              </div>
              <div className="carousel-item">
                <Image
                  cloudName="dxivl2lh5"
                  publicId="3_wnjtpa"
                  className="d-block w-100"
                  crop="scale"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="info_select setheight22rem">
              <div className="text_1">Áp dụng đến 3/1/2023</div>
              <div className="text_2">Tiết kiệm 15% với Ưu Đãi Cuối Năm</div>
              <div className="text_3">
                Vẫn còn kịp để thực hiện thêm một chuyến đi trong danh sách của
                bạn
              </div>
              <button
                type="button"
                className="btn btn-primary buton_text zindex"
              >
                Khám phá ưu đãi
              </button>
            </div>
          </div>
          <SearchBar />
        </div>

        {/* Phần ưu đãi */}
        <div className="justify-content-center offset-lg-2 ps-5 py-5">
          <div className="fw-bold fs-3">Ưu Đãi</div>
          <div className="figure-caption">
            Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
          </div>
          <div className="setbackgroud mt-md-3 row col-md-9 ">
            <div className="d-flex">
              <div className="infor py-5  px-md-5 ">
                <div className="fw-bold">Đổi gió một thời gian</div>
                <div>
                  Tận hưởng sự tự do với kỳ nghỉ theo tháng trên Booking.com
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-primary ">
                    Khám phá kỳ nghỉ theo tháng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Phần Khám phá Việt Nam */}
        <div className="justify-content-center offset-lg-2 ps-5 pb-md-5">
          <div className="fw-bold fs-3" id="discover">
            Khám phá Việt Nam
          </div>
          <div className="figure-caption">
            Các điểm đến phổ biến này có nhiều điều chờ đón bạn
          </div>
          <div className="row w-75">
            <div
              className=" pt-3 w-50 col-xs-10 "
              onClick={() => {
                navigate('/searchresult', {
                  state: { destination: 'Hà Nội', date, People },
                });
              }}
            >
              <div className="Sites Ha_noi d-flex  ">
                <div className="px-1 fw-bold fs-3">Hà Nội</div>
                <div className="National_flag ">
                  <Image
                    cloudName="dxivl2lh5"
                    publicId="places/vietnam_fseacf"
                    crop="scale"
                  />
                </div>
              </div>
            </div>
            <div
              className="pt-3 w-50 col-xs-10 "
              onClick={() => {
                navigate('/searchresult', {
                  state: { destination: 'Hội An', date, People },
                });
              }}
            >
              <Link to="../searchresult">
                <div className="Sites Hoi_an d-flex">
                  <div className="px-1 fw-bold fs-3">Hội An </div>
                  <div className="National_flag ">
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="places/vietnam_fseacf"
                      crop="scale"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row w-75">
            <div
              className="pt-3 col-xs-10 col "
              onClick={() => {
                navigate('/searchresult', {
                  state: { destination: 'HCM', date, People },
                });
              }}
            >
              <div className="Sites TPHCM d-flex   ">
                <div className="px-1 fw-bold fs-3">TP. Hồ Chí Minh </div>
                <div className="National_flag ">
                  <Image
                    cloudName="dxivl2lh5"
                    publicId="places/vietnam_fseacf"
                    crop="scale"
                  />
                </div>
              </div>
            </div>
            <div
              className=" pt-3  col-xs-10 col"
              onClick={() => {
                navigate('/searchresult', {
                  state: { destination: 'Huế', date, People },
                });
              }}
            >
              <div className="Sites Hue d-flex">
                <div className="px-1 fw-bold fs-3">Huế </div>
                <div className="National_flag ">
                  <Image
                    cloudName="dxivl2lh5"
                    publicId="places/vietnam_fseacf"
                    crop="scale"
                  />
                </div>
              </div>
            </div>
            <div
              className=" pt-3 col-xs-10  col "
              onClick={() => {
                navigate('/searchresult', {
                  state: { destination: 'Nha Trang', date, People },
                });
              }}
            >
              <div className="Sites NhaTrang d-flex">
                <div className="px-1 fw-bold fs-3">Nha Trang </div>
                <div className="National_flag ">
                  <Image
                    cloudName="dxivl2lh5"
                    publicId="places/vietnam_fseacf"
                    crop="scale"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="slide1">
            <div
              id="carouselExampleSlides"
              className="carousel slide "
              data-bs-ride="true"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex row">
                    <div
                      className="col"
                      onClick={() => {
                        navigate('/searchresult', {
                          state: { destination: 'Đà Lạt', date, People },
                        });
                      }}
                    >
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/da-lat_s4w1q5"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Đà Lạt</div>
                      </div>
                    </div>
                    <div
                      className="col"
                      onClick={() => {
                        navigate('/searchresult', {
                          state: { destination: 'Phú Quốc', date, People },
                        });
                      }}
                    >
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/phuquoc_cvx6gt"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Phú Quốc</div>
                      </div>
                    </div>
                    <div
                      className="col"
                      onClick={() => {
                        navigate('/searchresult', {
                          state: { destination: 'Sapa', date, People },
                        });
                      }}
                    >
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/sapa_vownhc"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Sapa</div>
                      </div>
                    </div>
                    <div
                      className="col"
                      onClick={() => {
                        navigate('/searchresult', {
                          state: { destination: 'Vũng Tàu', date, People },
                        });
                      }}
                    >
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/vungtau_zxuj4v"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Vũng tàu</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex row">
                    <div
                      className="col"
                      onClick={() => {
                        navigate('/searchresult', {
                          state: { destination: 'Đà Nẵng', date, People },
                        });
                      }}
                    >
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/danang_u845ar"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Đà Nẵng</div>
                      </div>
                    </div>
                    <div
                      className="col"
                      onClick={() => {
                        navigate('/searchresult', {
                          state: { destination: 'Quy Nhơn', date, People },
                        });
                      }}
                    >
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/quynhon_eg3c8a"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Quy Nhơn</div>
                      </div>
                    </div>
                    <div
                      className="col"
                      onClick={() => {
                        navigate('/searchresult', {
                          state: { destination: 'Quảng Bình', date, People },
                        });
                      }}
                    >
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/quangbinh_zdr6su"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Quảng Bình</div>
                      </div>
                    </div>
                    <div
                      className="col"
                      onClick={() => {
                        navigate('/searchresult', {
                          state: { destination: 'Quảng Ninh', date, People },
                        });
                      }}
                    >
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="places/quangninh_zv8c1s"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div>Quảng Ninh</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleSlides"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleSlides"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* Phần chỗ nghỉ dưỡng  */}
        <div className="justify-content-center offset-lg-2 ps-5 pb-md-5">
          <div className="fw-bold fs-3">Tìm theo loại chỗ nghỉ</div>
          <div className="slide1">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide "
              data-bs-ride="true"
            >
              <div className="carousel-inner" id='hotel'>
                <div className="carousel-item active">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/canho_iox4ez"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Căn hộ</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/khachsan_kib5dt"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Khách sạn</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/resort_hraq5u"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Resort</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/bietthu_pkv9sm"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Biệt thự</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/nha-go-cap-4-dep_qe5wjy"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nhà gỗ</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/nha-nghi-o-que-3_rhizkm"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nhà nghỉ thôn dã</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/glamping_kzu5wb"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Glamping</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/b_b_ydiio1"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nhà nghỉ B&B</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex row">
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/ryokan_zzsazk"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Ryokan</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/riad_tboox5"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Riad</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/khu-cam-trai_x7crhn"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Khu cam trai</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="type_of_r_place">
                        <Image
                          cloudName="dxivl2lh5"
                          publicId="rest/nha-thuyen_udvppb"
                          className="d-block w-100"
                          crop="scale"
                          alt="image canho"
                        />
                      </div>
                      <div>
                        <div className="fw-bold">Nhà thuyền</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
