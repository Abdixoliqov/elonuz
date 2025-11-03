import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout() {
    return ( 
        <div>
            <div className="pt-16">
                <Navbar />
            </div>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
     );
}

export default MainLayout;