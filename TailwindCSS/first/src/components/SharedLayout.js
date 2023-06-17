import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {

    return (
        <>
            <Navbar />
            <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center'>
                <Outlet />
            </div>
        </>
    );
};
export default SharedLayout;
