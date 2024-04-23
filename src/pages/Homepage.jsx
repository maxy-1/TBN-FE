import About from "../layout/About";
import Event from "../layout/Event";
import Focus from "../layout/Focus";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Partners from "../layout/Partner";
import Communitas from "../layout/Communitas";


const Homepage = () => {

    return(
        <>
        <div>
            <Header/>
            <Partners/>
            <About/>
            <Focus/>
            <Event/>
            <Communitas/>
            <Footer/>
        </div>
        </>
    )
}

export default Homepage;