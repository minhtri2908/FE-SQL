import './searchbar.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import React, { useContext, useState, useEffect } from 'react';
import format from 'date-fns/format';
import { DateRange, DateRangePicker } from 'react-date-range';
import {
  BsFillGeoAltFill,
  BsCalendarRangeFill,
  BsSearch,
} from 'react-icons/bs';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [OpenDate, setOpenDate] = useState(false);
  // useEffect(() => {
  //   const closecalendar = (e) => {
  //     if (e.path[0].tagName !== 'INPUT') {
  //       setOpenDate(false);
  //     }
  //   };
  //   document.body.addEventListener('click', closecalendar);
  //   return () => document.body.removeEventListener('click', closecalendar);
  // }, []);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    // dispatch({ type: 'NEW_SEARCH', payload: { destination, date, People } });
    navigate('/searchresult', { state: { destination, date } });
  };
  const handllesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="booking-search-bar">
        <form
          action="/searchresult"
          target=""
          onSubmit={handllesubmit}
          method="get"
          id="search-form"
          name="search-form"
        >
          <div className="search">
            <div className="input">
              <h2>Bạn muốn nghỉ dưỡng ở đâu ?</h2>
              <div className="select-location d-flex">
                <BsFillGeoAltFill className="input_icon" />
                <input
                  type="text"
                  name="location_search"
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Nhập Khách sạn / Điểm đến"
                  className="form-control"
                />
                {/* <input type='hidden' id='location' name='location' placeholder=
                                'Nhập Khách sạn / Điểm đến' className='form-control' />
                                <input type='hidden' id='hotel' name='hotel' /> */}
              </div>
            </div>
            <div className="input">
              <h2>Ngày nhận - trả phòng</h2>
              <div className="d-flex">
                <BsCalendarRangeFill className="input_icon" />
                <input
                  type="text"
                  name="location_search"
                  className="form-control"
                  // onFocus={() => setOpenDate(true)}
                  onClick={() => setOpenDate(!OpenDate)}
                  value={`${format(date[0].startDate, 'MM/dd/yyyy')} - ${format(
                    date[0].endDate,
                    'MM/dd/yyyy'
                  )}`}
                />
              </div>

              {OpenDate && (
                <DateRange
                  onChange={(item) => {
                    setDate([item.selection]);
                    setOpenDate(false);
                  }}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={date}
                  minDate={new Date()}
                  direction="horizontal"
                  className="date"
                />
              )}
            </div>

            <div className="button">
              <button id="search-btn" onClick={handleSearch}>
                <BsSearch />
                Tìm kiếm
              </button>
            </div>
          </div>
        </form>

        {/* <FontAwesomeIcon icon={faHotel} className="headerIcon" />
                <input
                    type="text"
                    placeholder="Mình đi đâu thế?"
                    className="headerSearchInput"
                />
                <div type="button">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                    onClick={() => setOpenDate(!OpenDate)}
                    className="headerSearchText"
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                    date[0].endDate,
                    'MM/dd/yyyy'
                )} `}</span>

                {OpenDate && (
                    <DateRangePicker
                    onChange={(item) => setDate([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={date}
                    direction="horizontal"
                    className="date"
                    />
                )}
                </div>
                <div>
                    <FontAwesomeIcon icon={faBed} />
                <span
                    onClick={() => setChoosePeople(!ChoosePeople)}
                    className="headerSearchText"
                >{`${People.Adult} Người lớn - ${People.Children} Trẻ em - ${People.Room} Phòng`}</span>
                {ChoosePeople && (
                    <div className="people">
                    <div className="peopleItem">
                        <span className="peopletext">Người lớn</span>
                        <button
                        disabled={People.Adult <= 1}
                        className="couter"
                        onClick={() => handlePeople('Adult', 'd')}
                        >
                        -
                        </button>
                        <span className="couter">{People.Adult}</span>
                        <button
                        className="couter"
                        onClick={() => handlePeople('Adult', 'i')}
                        >
                        +
                        </button>
                    </div>
                    <div className="peopleItem">
                        <span className="peopletext">Trẻ em</span>
                        <button
                        disabled={People.Children <= 0}
                        className="couter"
                        onClick={() => handlePeople('Children', 'd')}
                        >
                        -
                        </button>
                        <span className="couter">{People.Children}</span>
                        <button
                        className="couter"
                        onClick={() => handlePeople('Children', 'i')}
                        >
                        +
                        </button>
                    </div>
                    <div className="peopleItem">
                        <span className="peopletext">Phòng</span>
                        <button
                        disabled={People.Room <= 1}
                        className="couter"
                        onClick={() => handlePeople('Room', 'd')}
                        >
                        -
                        </button>
                        <span className="couter">{People.Room}</span>
                        <button
                        className="couter"
                        onClick={() => handlePeople('Room', 'i')}
                        >
                        +
                        </button>
                    </div>
                    </div>
                )}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn">Tìm kiếm</button>
            </div>*/}
      </div>
    </>
  );
};

export default SearchBar;
