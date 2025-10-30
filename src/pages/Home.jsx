import CardContainer from "../components/card/CardContainer";
import CategoryMenu from "../components/category/CategoryMenu";
import SwiperHome from "../components/SwiperHome";
import Swiper from "../components/SwiperHome";
import Login from "./Login";
import Register from "./Register";

function Home() {
    return ( 
        <div className="container ">
            
            <CategoryMenu />
            <SwiperHome/>
            <CardContainer />
            {/* <Login />
            <Register /> */}
        </div>
     );
}

export default Home;
