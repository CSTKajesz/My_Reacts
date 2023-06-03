import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = () => {
    return (
        <>
            {/* // StyledNavbar minden oldalon megjelenik a menü */}
            <StyledNavbar />
            <Outlet />

        </>
    );
};
export default SharedLayout;
