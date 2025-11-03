import CardContainer from "../components/card/CardContainer";
import CategoryMenu from "../components/category/CategoryMenu";
import EmblaCarousel from "../components/EmblaCarousel";
import SwiperHome from "../components/SwiperHome";
import Swiper from "../components/SwiperHome";
import Login from "./Login";
import Register from "./Register";


const OPTIONS = {}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Home() {
    return ( 
        <div className="container ">
            
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
            {/* <CategoryMenu /> */}
            <SwiperHome/>
            <CardContainer />
            {/* <Login />
            <Register /> */}
        </div>
     );
}

export default Home;
