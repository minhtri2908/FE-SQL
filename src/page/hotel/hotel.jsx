import Header from '../../component/header/header';
import './hotel.scss';
import Footer from '../../component/Footer/Footer';
import { IoLogoNoSmoking } from 'react-icons/io';
import { GiChickenOven, GiWashingMachine } from 'react-icons/gi';
import { CiParking1 } from 'react-icons/ci';
import { FaCity, FaShower } from 'react-icons/fa';
import { MdBalcony, MdEmojiNature, MdFamilyRestroom } from 'react-icons/md';
import { AiOutlineCalendar, AiOutlineFieldTime } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import { FcCheckmark } from 'react-icons/fc';
import { BsWifi, BsSnow } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { RiSecurePaymentLine } from 'react-icons/ri';
import React, { useContext, useState, useEffect } from 'react';
import { IoIosMan } from 'react-icons/io';
import { Image } from 'cloudinary-react';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config';
import format from 'date-fns/format';
import axios from 'axios';
import moment from 'moment';

function Hotel() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(JSON.parse(localStorage.getItem('user')).details.username);
  const id = location.pathname.split('/')[2];

  const hotelname = location.state.hotelname;
  const address = location.state.address;
  const rating = location.state.rating;
  const price = location.state.price;
  const hotelId = location.state.hotelId;
  const date = location.state.date;

  const { data, loading } = useFetch(`/api/hotels/find/${id}`);
  // console.log(data);
  // console.log((data.image));
  // console.log(date);
  const MILLISECONDS_PER_DAYS = 1000 * 60 * 60 * 24;
  const [selectedRoom, setSelectedRoom] = useState([]);
  const [room, setRoom] = useState([]);
  function dayDifference(date1, date2) {
    const timeDifferent = Math.abs(date2.getTime() - date1.getTime());
    const differentDays = Math.ceil(timeDifferent / MILLISECONDS_PER_DAYS);
    return differentDays;
  }
  const days = dayDifference(date[0].endDate, date[0].startDate) || 1;
  // L???y data hotel

  //L???y data c???a room c???a t???ng hotel
  const [data1, setData1] = useState([]);
  useEffect(() => {
    const proceed = async () => {
      const data2 = await axiosInstance.get(`/api/hotels/room/${id}`);
      setData1(data2.data);
    };
    proceed();
  }, []);
  //console.log(data1);

  const getDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dates = new Date(start.getTime());
    const date = [];
    while (dates <= end) {
      date.push(new Date(dates).getTime());
      dates.setDate(dates.getDate() + 1);
    }
    return date;
  };

  const allDates = getDates(date[0].startDate, date[0].endDate);
  console.log(allDates);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    console.log(new Date().getTime());
    console.log(isFound);
    // console.log(isFound, roomNumber);
    return !isFound;
  };

  const handleClick = async () => {
    try {
      var tot = 0;
      data1.map((item) => {
        item.roomNumbers.map((roomNumber) => {
          const checkbox = document.getElementById(roomNumber.number);

          if (checkbox.checked === true) {
            const value = checkbox.value;
            const name = checkbox.name;
            const id = checkbox.id;
            selectedRoom.push(value);
            room.push({ price: name, roomnum: id });
            tot = tot + Number(name);
          }
          return room, selectedRoom;
        });
        return room, selectedRoom;
      });
      console.log(tot);

      navigate('/payment', {
        state: {
          hotelname,
          fromDate: format(date[0].startDate, 'MM/dd/yyyy'),
          toDate: format(date[0].endDate, 'MM/dd/yyyy'),
          days,
          room,
          selectedRoom,
          tot,
          allDates,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="content w-100 d-flex content-hotel-page">
        <div className="d-flex w-75 my-4 setmargin">
          {/* Th??ng tin hotel */}
          <div className="w-75 ">
            <div className="m-4">
              <div className=" m-2 d-flex">
                <div className="w-75">
                  <div className=" h4 d-block mx-2">
                    <span>{hotelname}</span>
                  </div>
                  <div className=" d-block mx-2">
                    <SiGooglemaps />
                    <span>{address}</span>
                  </div>
                  <div className=" d-block mx-2">
                    <>G??a ch???: </>
                    <span>
                      {days * price} cho {days} ng??y
                    </span>
                  </div>
                </div>
                <div className=" w-25">
                  <button type="button" class="btn btn-primary">
                    ?????t ph??ng theo nhu c???u
                  </button>
                </div>
              </div>
              {/* description picture */}
              <div className="description_picture">
                <div className="d-flex h-66">
                  <div className="row description_picture_left">
                    <span>
                      <img
                        className="col h-100 w-100"
                        src={data.image1}
                        alt={data.name}
                        crop="scale"
                      />
                    </span>
                    <span>
                      <img
                        className="col h-100 w-100"
                        src={data.image2}
                        alt={data.name}
                        crop="scale"
                      />
                    </span>
                  </div>
                  <div className=" description_picture_right">
                    <span>
                      <img
                        className="h-100 w-100"
                        src={data.image3}
                        alt={data.name}
                        crop="scale"
                      />
                    </span>
                  </div>
                </div>
                <div className="h-25 row description_picture_bottom">
                  <span className="col ">
                    <img src={data.image4} alt={data.name} />
                  </span>
                  <span className="col ">
                    <img src={data.image5} alt={data.name} />
                  </span>
                  <span className="col ">
                    <img src={data.image6} alt={data.name} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content content-hotel-page w-75 ms-md-4">
        <div className="d-flex mb-3 ">
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <GiChickenOven />
              <div className="mx-2"> B???p </div>
            </div>
          </div>
          <div className="flex-fill  border mx-md-3 ">
            <div className="m-3 d-flex">
              <FaCity />
              <div className="mx-2"> Nh??n ra th??nh ph???</div>
            </div>
          </div>
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <GiWashingMachine />
              <div className="mx-2 "> M??y gi???t </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <BsWifi />
              <div className="mx-2 "> Wifi mi???n ph?? </div>
            </div>
          </div>
          <div className="flex-fill  border">
            <div className="m-3 d-flex">
              <MdEmojiNature />
              <div className="mx-2 "> S??n hi??n </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <MdBalcony />
              <div className="mx-2 "> Ban c??ng </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 ">
          <div className=" flex-fill border ">
            <div className="m-3 d-flex">
              <BsSnow />
              <div className="mx-2"> ??i???u h??a kh??ng kh?? </div>
            </div>
          </div>
          <div className="flex-fill  border mx-md-3 ">
            <div className="m-3 d-flex">
              <FaShower />
              <div className="mx-2"> Ph??ng t???m ri??ng</div>
            </div>
          </div>
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <AiOutlineFieldTime />
              <div className="mx-2 "> L?? t??n 24 gi??? </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <RiSecurePaymentLine />
              <div className="mx-2 "> ??? kh??a m??? b???ng th??? </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 flex-nowrap">
          <div className=" p-2 order-1 w-100  shadow">
            <pre>{`N???m ??? th??nh ph??? V??ng T??u, c??ch B??i Sau 700 m v?? B??i Tr?????c 1,8 km, Vung Tau Melody Apartment
cung c???p ch??? ngh??? v???i WiFi mi???n ph?? v?? khu v???c gh??? ng???i.
T???t c??? c??c c??n t???i ????y ?????u ???????c b??? tr?? m??y ??i???u h??a, TV m??n h??nh ph???ng, ph??ng kh??ch v???i gh??? sofa, 
b???p ??n ?????y ????? ti???n nghi ??i k??m khu v???c ??n
u???ng v?? ph??ng t???m ri??ng v???i vo??i sen, ??o cho??ng t???m c??ng de??p ??i trong pho??ng. C??c c??n c??n ???????c trang
b??? l?? vi s??ng, t??? l???nh, b???p n???u ??n v?? ???m ??un n?????c.
C??n h??? c?? s??n hi??n.
B??i D???a n???m trong b??n k??nh 2,7 km t??? Vung Tau Melody Apartment trong khi M??i Nghinh Phong c??ch ???? 
2,4 km. S??n bay g???n nh???t l?? S??n bay V??ng T??u,c??ch ch??? ngh??? 6 km.
C??c c???p ????i ?????c bi???t th??ch ?????a ??i???m n??y ??? h??? cho ??i???m 8,9 cho k??? ngh??? d??nh cho 2 ng?????i.
Vung Tau Melody Apartment ???? ch??o ????n kh??ch Booking.com t??? 23 th??ng 4 2019.`}</pre>
            {/* <pre>{data.desc}</pre>  */}
            <div>
              <strong>
                Vung Tau Melody Apartment ???? ch??o ????n kh??ch Booking.com t??? 23
                th??ng 4 2019.
              </strong>
            </div>
            <div>
              <strong>C??c ti???n nghi ???????c ??a chu???ng nh???t: </strong>
            </div>
            <div className="d-flex">
              <div className="mx-2">
                <BsWifi /> Wifi mi???n ph??
              </div>
              <div className="mx-2">
                <CiParking1 /> Ch??? ?????u xe
              </div>
              <div className="mx-2">
                <MdFamilyRestroom /> Ph??ng gia ????nh
              </div>
              <div className="mx-2">
                <IoLogoNoSmoking /> Ph??ng kh??ng h??t thu???c l??
              </div>
            </div>
          </div>
          <div className="order-2 flex-shrink-1 ">
            <div className="p-3 shadow mx-md-3 mb-3 bg-custom-1">
              <div className="">
                <div className="fw-bold mb-3 ">??i???m n???i b???t c???a ch??? ngh???</div>
                <div className="d-flex mb-3">
                  <GoLocation />
                  <div className="mx-2">?????a ??i???m h??ng ?????u ch???t l?????ng cao</div>
                </div>
                <div className="d-flex mb-3">
                  <CiParking1 />
                  <div className="mx-2">C?? ch??? ?????u xe trong khu??n vi??n</div>
                </div>
                <button
                  className="btn btn-primary input-group mt-3 "
                  type="submit"
                >
                  ?????t ngay
                </button>
              </div>
            </div>
            <div className=" p-3 mx-md-3 shadow bg-custom-1 ">
              <div className="d-flex">
                <FcCheckmark />
                <div className="mx-2 color-text-green">Th??ng tin uy t??n</div>
              </div>
              <div className="d-block mx-2">
                Kh??ch n??i r???ng m?? t??? v?? h??nh ???nh ch??? ngh??? n??y{' '}
                <strong>????ng v???i s??? th???t.</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom mb-5"></div>
      </div>
      <div className=" table w-75 ms-md-4">
        <div className="h4">Ph??ng tr???ng</div>
      </div>
      <div className="table">
        <table className=" table table-bordered w-75">
          <thead className="table-primary">
            <tr>
              <th scope="flex-fill">Lo???i ch??? ???</th>
              <th scope="flex-fill">Ph?? h???p cho</th>
              <th scope="flex-fill">Gi?? thu??</th>
              <th scope="flex-fill">Ph??ng tr???ng</th>
              <th scope="flex-fill"></th>
            </tr>
          </thead>
          {data1.map(
            (item) => (
              console.log(item),
              (
                <tbody>
                  <tr>
                    <td>
                      <a>{item.title}</a>
                    </td>
                    <td>
                      <IoIosMan /> x {item.maxPeople}
                    </td>
                    <td>
                      <div>{item.price} VND</div>
                    </td>
                    <td>
                      <div>
                        {item.roomNumbers.map((roomNumber) => (
                          <div>
                            <input
                              type="checkbox"
                              disabled={!isAvailable(roomNumber)}
                              id={roomNumber.number}
                              value={roomNumber.id}
                              name={item.price}
                            />
                            <label htmlFor={roomNumber.number}>
                              Number of Room:{' '}
                              <strong>{roomNumber.number}</strong>
                            </label>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="w-100 btn btn-primary"
                        onClick={handleClick}
                      >
                        ?????t ch???
                      </button>
                    </td>
                  </tr>
                </tbody>
              )
            )
          )}
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Hotel;
