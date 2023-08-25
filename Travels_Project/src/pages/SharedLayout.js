import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";
import Footer from "./Footer";
import MobileNavigation from "../components/MobileNavigation";

const SharedLayout = () => {
    return (
        <>
            <StyledNavbar />
            <MobileNavigation />
            <Outlet />
            <Footer />

        </>
    );
};
export default SharedLayout;