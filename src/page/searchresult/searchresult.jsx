import Header from '../../component/header/header';
import './searchresult.scss';
import Footer from '../../component/Footer/Footer';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import React, { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemHotels from '../../component/itemhotels/itemhotel';
import { FaBed } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import { useEffect } from 'react';
import { BsGeoAlt } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import '../../component/itemhotels/itemhotel.scss';

function Searchresult_app() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  useEffect(() => {
    const closecalendar = (e) => {
      if (e.path[0].tagName !== 'SPAN') {
        setOpenDate(false);
      }
    };
    document.body.addEventListener('click', closecalendar);
    console.log(date[0]);
    return () => document.body.removeEventListener('click', closecalendar);
  }, []);

  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `/api/hotels/bycity?city=${destination}&min=${min || 0}&max=${max || 9999}`
  );
  const { data1 } = useFetch(
    `/api/hotels/bycity?city=${destination}&min=${min || 0}&max=${max || 9999}`
  );

  console.log(data1.length);
  const navigate = useNavigate();
  const handleSearch = () => {
    // reFetch();
    // dispatch({ type: 'NEW_SEARCH', payload: { destination, date, People } });
    // navigate('/searchresult', { state: { destination, date } });
  };
  data.map((item) => {
    console.log(item.name);
  });
  const handleClick = (item) => {
    navigate(`/hotel/${item.id}`, {
      state: {
        hotelname: item.name,
        address: item.address,
        rating: item.rating,
        price: item.price,
        hotelId: item.id,
        date: date,
      },
    });
  };

  return (
    <>
      <Header />
      <div className="content search-result">
        <div className="container main-search">
          <div className="list-filter">
            <div className="w-100">
              <div className="setbackgroundsearch">
                <div className="search">
                  <div>Tên chỗ nghỉ / điểm đến:</div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <BiSearch />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={destination}
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        setDestination(e.target.value);
                        handleSearch();
                      }}
                    />
                  </div>
                  <div>Ngày nhận phòng</div>
                  <div className="input-group mb-3" type="button">
                    <span className="input-group-text" id="basic-addon1">
                      <AiOutlineCalendar />
                    </span>
                    <span
                      onClick={() => setOpenDate((prev) => !prev)}
                      className="headerSearchText form-control"
                    >
                      {`${format(date[0].startDate, 'MM/dd/yyyy')}`}
                    </span>
                  </div>
                  <div>Ngày trả phòng</div>
                  <div className="input-group mb-3 " type="button">
                    <span className="input-group-text" id="basic-addon1">
                      <AiOutlineCalendar />
                    </span>
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText form-control"
                    >
                      {`${format(date[0].endDate, 'MM/dd/yyyy')} `}
                    </span>
                  </div>
                  {openDate && (
                    <DateRange
                      onChange={async (item) => {
                        await setDate([item.selection]);
                        handleSearch();
                        //console.log(date);
                      }}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      minDate={new Date()}
                      ranges={date}
                      direction="horizontal"
                      className="date date_location"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="load-list">
            <div className="list-search-item">
              <div className="count-sort bg-box">
                <div className="count text-uppercase text-success desktop">
                  Có {data1.length} khách sạn gần/tại {destination}
                </div>
              </div>
              <div id="list-hotels" className="list-hotels">
                {loading ? (
                  <h2>Loading...</h2>
                ) : (
                  <>
                    {data.map((item) => (
                      <div className="item-hotel bg-box">
                        <img src={item.image} alt={item.name} />
                        <div className="item-content">
                          <a href="" onClick={() => handleClick(item)}>
                            <h4>{item.name}</h4>
                          </a>

                          <p className="address">
                            <BsGeoAlt />
                            <>{item.address}</>
                          </p>
                          <div className="rate">{item.rating}</div>
                        </div>
                        <div className="price">
                          <div className="content-price">
                            <div className="d-price">
                              <p>Chỉ từ</p>
                              <p className="c-price">{item.price}VND</p>
                              <span>VNĐ</span>
                              <p>phòng/đêm</p>
                            </div>
                            <Button onClick={() => handleClick(item)}>
                              Đặt ngay
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Searchresult_app;
