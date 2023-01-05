import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './itemhotel.scss';
import { BsGeoAlt } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

const ItemHotels = (props) => {
  const item = props.item;

  useEffect(() => {
    console.log(props.fromDate);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/hotel/${item._id}`, {
      state: {
        hotelname: item.name,
        address: item.address,
        rating: item.rating,
        price: item.price,
        hotelId: item._id,
        date: props.fromDate,
      },
    });
  };

  return (
    /* <div className='itemHotels'>
      <div className="itemHotelsCol">
          <img src={item.image} alt={item.name} />
      </div>
      <div className="itemHotelsCol">
            <div className="itemHotelDivs">
                <h2>{item.name}</h2>
            </div>
            <div className="itemHotelsDivs">
                <div className="itemHotelDiv">
                    <span className='rating'>9.6</span>
                </div>
                <div className="itemHotelDiv">
                    <span>Wonderful</span>
                    <span>611 Reviews</span>
                </div>
            </div>
      </div>
      <div className="itemHotelsCol">
            <div className="itemHotelsColDiv">
                <h2>${(item.price).toFixed(2)}</h2>
            </div>
            <div className="itemHotelsColDiv">
                <span>Free Wi-Fi</span>
                <span>Free Parking</span>
                <span>Free Breakfast</span>
            </div>
            <div className="itemHotelsColDiv">
                <Link to={`/hotels/${item._id}`}>
                    <button>View Deal</button>
                </Link>
            </div>
      </div>
    </div> */
    <div className="item-hotel bg-box">
      <img src={item.image} alt={item.name} />

      <div className="item-content">
        <h4 onClick={handleClick}>{item.name}</h4>

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
          {/* <Link to={{
          pathname: `/hotel/${item._id}`,
          state: {
            hotelname: item.name,
            address: item.address,
            rating: item.rating,
            price: item.price,
            hotelId: item._id,
            date,
          }
          }}> */}
          <Button onClick={handleClick}> Đặt ngay </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemHotels;
