import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HotelIcon from '@mui/icons-material/Hotel';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">STYLISH HOTEL</div>
      </div>
      <div className="center">
        <ul>
            <p className="title"> Main</p>
            <li>
                <Link to="/" > 
                <DashboardIcon/>
                <span url="">Bảng điều khiển</span>
                </Link>
            </li>
            <p className="title"> Danh sách</p>
            <li>
                <Link to="/users" > 
                <AccountBoxIcon/>
               
                <span>Khách hàng</span>
                </Link>
            </li>
            <li>
            <Link to="/hotels" > 
                <HotelIcon/>
                <span>Khách sạn</span>
                </Link>
            </li>  <li>
            <Link to="/rooms" > 
                <HotelIcon/>
                <span url='/rooms'>Phòng</span>
                </Link>
            </li>
            <li>
                <CreditCardIcon/>
                <Link to="/booking" > 
                <span>Đơn hàng</span>
                </Link>
            </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Sidebar
