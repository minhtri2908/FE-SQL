import Loginform from "../../component/Form/LoginForm";
import Header from "../../component/header/header";
import './support.scss'
import { Button } from 'react-bootstrap'
import Footer from "../../component/Footer/Footer";

function support() {
    return(
        <>
            <Header />
            <div className="content" >
                <div id="intro">
                    <div className="color-overlay row">
                        <div className="col info-container">
                            <h1 className="color-white info_header">An tâm vì T&T luôn hỗ trợ Quý vị</h1>
                            <p className="color-white info_body">
                                Chúng tôi luôn xem trọng vấn đề bảo mật để
                                Quý vị tự tin host.
                            </p>
                        </div>
                        <div className="col">
                            <Loginform />
                        </div>
                    </div>
                </div>
                <div id="detail">
                    <div className="text-container-medium">
                        <h1 className="info_header">Để Quý vị kiểm soát việc tiếp đón khách</h1>
                        <p className="info_subheader">Sau đây là một số quyền lợi Quý vị nhận khi đăng ký với chúng tôi...</p>
                    </div>
                    <div className="text-container-medium">
                        <div className="row">
                            <div className="col">
                                <div className="detail_icon" style={{backgroundColor: '#EBF3FF'}}>
                                    1
                                </div>
                                <h2 className="feature_header">Truyền tải quy định chung</h2>
                                <p className="feature_column feature-small">
                                    Quý vị không chỉ thiết lập quy định chung cho khách,
                                    mà khách còn phải chấp thuận các quy định này trước
                                    khi đặt phòng tại chỗ nghỉ.
                                </p>
                            </div>
                            <div className="col">
                                <div className="detail_icon" style={{backgroundColor: '#E7FDE9'}}>
                                    2
                                </div>
                                <h2 className="feature_header">Thống nhất với khách trước khi đặt</h2>
                                <p className="feature_column feature-small">
                                    Khách có thể dùng hệ thống nhắn tin của chúng tôi để liên lạc
                                    với Quý vị trước khi đặt nhằm thống nhất kỳ vọng của đôi bên.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="detail_icon" style={{backgroundColor: '#FFF0F0'}}>
                                    3
                                </div>
                                <h2 className="feature_header">Nhận hỗ trợ dễ dàng</h2>
                                <p className="feature_column feature-small">
                                    Đội ngũ lớn của chúng tôi bao gồm nhiều chuyên viên hỗ trợ
                                    đối tác hoạt động 24/7 bằng 43 ngôn ngữ bất kỳ khi nào Quý vị cần liên lạc.
                                </p>
                            </div>
                            <div className="col">
                                <div className="detail_icon" style={{backgroundColor: '#f0daf7'}}>
                                    4
                                </div>
                                <h2 className="feature_header">Nhận loại đặt phòng Quý vị muốn</h2>
                                <p className="feature_column feature-small">
                                    Tìm những vị khách phù hợp với chỗ nghỉ bằng
                                    cách đưa ra các tiêu chí cho khách trước khi đặt phòng,
                                    chẳng hạn như khách cần có số điện thoại xác thực.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="detail_icon" style={{backgroundColor: '#FDF4D8'}}>
                                    5
                                </div>
                                <h2 className="feature_header">Bảo vệ vật chất đã đầu tư</h2>
                                <p className="feature_column feature-small">
                                    Lo lắng về các vật dụng có giá trị tại chỗ nghỉ?
                                    Quý vị có thể thiết lập đặt cọc đề phòng hư hại
                                    như một phần đảm bảo cho mình.
                                </p>
                            </div>
                            <div className="col">
                                <div className="detail_icon" style={{backgroundColor: '#FFC489'}}>
                                    6
                                </div>
                                <h2 className="feature_header">Dễ dàng hành động khi có vấn đề xảy ra</h2>
                                <p className="feature_column feature-small">
                                    Trong trường hợp hy hữu khi Quý vị có trải nghiệm
                                    tiếp đón khách không được tốt, công cụ báo cáo hành 
                                    vi sai phạm của khách giúp mọi việc trở nên dễ dàng
                                    hơn trong việc tường thuật lại sự kiện.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="privacy">
                    <div className="text-container-medium">
                        <h1 className="info_header">Biện pháp bảo mật</h1>
                        <p className="info_subheader">Việc bảo vệ đối tác được áp dụng cho tất cả đặt phòng.</p>
                    </div>
                    <div className="text-container-medium">
                        <div className="row">
                            <div className="col">
                                <h2 className="feature_header">Kiểm tra lý lịch</h2>
                                <p className="feature_column feature-small">
                                    Chúng tôi đảm bảo khách đã được sàng lọc và kiểm tra để đảm bảo không
                                    nằm trong danh sách theo dõi cấm vận toàn cầu để đối tác không gặp rủi
                                    ro khi tiếp đón khách.
                                </p>
                            </div>
                            <div className="col">
                                <h2 className="feature_header">Điểm gian lận</h2>
                                <p className="feature_column feature-small">
                                    Chúng tôi sử dụng các mô hình học máy để phát hiện gian 
                                    lận khi khách đặt và áp dụng nhiều biện pháp để bảo vệ
                                    đặt phòng của Quý vị.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <h2 className="feature_header">Rủi ro đặt phòng</h2>
                                <p className="feature_column feature-small">
                                    Kể cả sau khi khách đặt, chúng tôi vẫn làm một
                                    số bước kiểm tra thêm và áp dụng nhiều cách xử 
                                    lý cho các đặt phòng mà chúng tôi biết sẽ bị hủy.
                                </p>
                            </div>
                            <div className="col">
                                <h2 className="feature_header">Chặn khách</h2>
                                <p className="feature_column feature-small">
                                    Chúng tôi có nhiều đội giúp đảm bảo rằng các vị 
                                    khách có vấn đề sẽ không thể đặt phòng trên T&T.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="btn btn-primary mb-4 color-btn btn-support" variant="primary" href={"#intro"}>
                    Đăng chỗ nghĩ của quý vị
                </Button>
            </div>
            <Footer />
        </>
    );
}

export default support;
