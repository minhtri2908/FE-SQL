import Footer from "../../component/Footer/Footer";
import LoginForm from "../../component/Form/LoginForm";
import Header from "../../component/header/header";
import './regispartner.scss'


function regispartner() {
    return(
        <>
            <Header />
            <div className="content">
                <div className="row">
                    <LoginForm />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default regispartner;
