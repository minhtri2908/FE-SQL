import './Footer.css'
import 'react-bootstrap'
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-light font-weight-bold footer">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div className='media'>
                    <a href={"#"} className="me-4 text-reset">
                        <BsFacebook />
                    </a>
                    <a href={"#"} className="me-4 text-reset">
                        <BsGithub />
                    </a>
                    <a href={"#"} className="me-4 text-reset">
                        <BsInstagram />
                    </a>
                </div>

            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Stylish Hotel
                            </h6>
                            <p>
                                Giúp bạn đặt phòng mọi lúc, mọi nơi.
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Group 22
                            </h6>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Các đường dẫn hữu ích
                            </h6>
                            <p>
                                <a href="/support" className="text-reset">Trợ giúp khách hàng</a>
                            </p>
                            <p>
                                <a href="/register-partner" className="text-reset">Đăng ký</a>
                            </p>
                            <p>
                                <a href="/support#privacy" className="text-reset">An toàn và bảo mật</a>
                            </p>
                            <p>
                                <a href="/support#detail" className="text-reset">Các quyền lợi</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                        <p><i className="fas fa-home me-3"></i> Linh Trung, Thủ Đức, TP Hồ Chí Minh</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            email@gm.uit.edu.vn
                        </p>
                        <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="">T & T</a>
            </div> */}
        </footer>
    );
}

export default Footer;
