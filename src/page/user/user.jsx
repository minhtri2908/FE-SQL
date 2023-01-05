import Header from '../../component/header/header';
import './user.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthContext';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { axiosInstance } from '../../config';
import { Link } from 'react-scroll';
import useFetch from '../../hooks/useFetch';
import moment from 'moment';
import format from 'date-fns/format';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Modal from 'react-bootstrap/Modal';

function User() {
  const { user } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [phone, setPhone] = useState(user.details.phone);
  const [fullname, setFullname] = useState(user.details.fullname);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = user.details.id;
  console.log(id);
  const { data, loading, error, reFetch } = useFetch(
    `/api/users/${id}/booking`
  );
  console.log(data);
  data.map((item) => {
    console.log(item);
  })
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('Sai mật khẩu xác nhận!');
    } else {
      try {
        const res = await axiosInstance.put('/api/users/password', {
          userId: id,
          password: password,
          newPassword: newPassword,
        });
        alert('Đổi mật khẩu thành công');
        navigate('/home');
        if (res.status == 400) alert('Sai mật khẩu hiện tại!');
      } catch (err) {
        alert('Đã xảy ra lỗi!');
      }
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put(`/api/users/${id}/update`, {
        fullname: fullname,
        phone: phone,
      });
      alert('Cập nhật thông tin thành công');
    } catch (err) {
      alert('Đã xảy ra lỗi!');
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    const bookingId = e.target.id;
    try {
      const res = await axiosInstance.delete(
        `/api/booking/${bookingId}/delete`
      );
      reFetch();
    } catch (err) {
      alert('Đã xảy ra lỗi!');
    }
  };
  var today = format(new Date(), 'dd-MM-yy');
  console.log(today);
  return (
    <>
      <Header />
      <div className="content">
        <Box>
          <Box
            sx={{
              display: 'grid',
              gridGap: '50px',
              gridTemplateColumns: '30% 65%',
            }}
          >
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              sx={{ paddingTop: 30 }}
              orientation="vertical"
            >
              <Tab label="Thông tin cá nhân" />
              <Tab label="Thông tin đặt phòng" />
              <Tab label="Lịch sử" />
            </Tabs>
            <Box sx={{ margin: 2 }}>
              {tabIndex === 0 && (
                <Box>
                  <Typography>
                    <div className="item-info">
                      <div className="item-info-intro">
                        <h2 id="userInfo">Thông tin cá nhân</h2>
                      </div>
                      <div className="item-content bg-box">
                        <Form onSubmit={handleUpdate}>
                          <Form.Group className="mb-3">
                            <Form.Label>Địa chỉ email</Form.Label>
                            <Form.Control
                              type="email"
                              defaultValue={user.details.email}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Tên người dùng</Form.Label>
                            <Form.Control
                              type="text"
                              defaultValue={user.details.username}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Tên đầy đủ</Form.Label>
                            <Form.Control
                              type="text"
                              defaultValue={user.details.fullname}
                              value={fullname}
                              onChange={(e) => setFullname(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control
                              type="text"
                              defaultValue={user.details.phone}
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </Form.Group>
                          <div className="d-md-flex justify-content-md-end">
                            <Button
                              variant="primary"
                              type="submit"
                              className="me-md-2"
                              disabled={
                                phone === user.details.phone &&
                                fullname === user.details.fullname
                              }
                            >
                              Lưu thay đổi
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Typography>
                </Box>
              )}

              {tabIndex === 1 && (
                <Box>
                  <Typography>
                    <div className="item-info">
                      <div className="item-info-intro">
                        <h2>Thông tin đặt phòng</h2>
                      </div>
                      <div className="item-content bg-box">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Hotel</th>
                              <th scope="col">Ngày nhận phòng</th>
                              <th scope="col">Ngày trả phòng</th>
                              <th scope="col">Giá tiền</th>
                              <th scope="col">Hoạt động</th>
                            </tr>
                          </thead>
                          {loading ? (
                            <h2>Loading...</h2>
                          ) : (
                            data.map((item) => {
                              console.log(item);
                              console.log(item.toDate);
                              console.log(today);
                              console.log(
                                moment(item.toDate, 'MM/DD/YYYY') >
                                  moment(today, 'DD-MM-YY')
                              );
                              if (
                                moment(item.toDate, 'MM/DD/YYYY') >=
                                moment(today, 'DD-MM-YY')
                              ) {
                                return (
                                  <>
                                    <tbody>
                                      <tr>
                                        <td>{item.hotel}</td>
                                        <td>{item.fromDate}</td>
                                        <td>{item.toDate}</td>
                                        <td>{item.totalPrice} VND</td>
                                        <td>
                                          <Button onClick={handleShow}>
                                            Xóa
                                          </Button>
                                        </td>
                                      </tr>
                                    </tbody>

                                    <Modal show={show} onHide={handleClose}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>Xác nhận xóa</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        Bạn có chắc muốn xóa?
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button
                                          variant="secondary"
                                          onClick={handleClose}
                                        >
                                          Đóng
                                        </Button>
                                        <Button
                                          variant="primary"
                                          id={item.id}
                                          onClick={handleDelete}
                                        >
                                          Xác nhận
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>
                                  </>
                                );
                              }
                            })
                          )}
                        </table>
                      </div>
                    </div>
                  </Typography>
                </Box>
              )}
              {tabIndex === 2 && (
                <Box>
                  <Typography>
                    <div className="item-info">
                      <div className="item-info-intro">
                        <h2>Lịch sử</h2>
                      </div>
                      <div className="item-content bg-box">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Hotel</th>
                              <th scope="col">Ngày nhận phòng</th>
                              <th scope="col">Ngày trả phòng</th>
                              <th scope="col">Giá tiền</th>
                              <th scope="col">Hoạt động</th>
                            </tr>
                          </thead>
                          {loading ? (
                            <h2>Loading...</h2>
                          ) : (
                            data.map((item) => {
                              if (
                                moment(item.toDate, 'MM/DD/YYYY') <
                                moment(today, 'DD-MM-YY')
                              ) {
                                return (
                                  <>
                                    <tbody>
                                      <tr>
                                        <td>{item.hotel}</td>
                                        <td>{item.fromDate}</td>
                                        <td>{item.toDate}</td>
                                        <td>{item.totalPrice} VND</td>
                                        <td>
                                          <Button onClick={handleShow}>
                                            Xóa
                                          </Button>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <Modal show={show} onHide={handleClose}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>Xác nhận xóa</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        Bạn có chắc muốn xóa?
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button
                                          variant="secondary"
                                          onClick={handleClose}
                                        >
                                          Đóng
                                        </Button>
                                        <Button
                                          variant="primary"
                                          id={item.id}
                                          onClick={handleDelete}
                                        >
                                          Xác nhận
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>
                                  </>
                                );
                              }
                            })
                          )}
                        </table>
                      </div>
                    </div>
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default User;
