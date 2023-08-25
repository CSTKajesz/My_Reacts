import { useState } from "react"
import StyledNavbar from "./StyledNavbar"
import { AiOutlineMenuFold } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

const MobileNavigation = () => {
    //eleinte false, majd a setOpennel átállítjuk true-ra 
    // ezzel a sorral mondjuk meg, ha open akkor jelenítse meg :)
    // { open && < StyledNavbar className="mobilenavigation" /> }
    const [open, setOpen] = useState(false);

    const hamburgerIcon =
        <AiOutlineMenuFold className="hamburger"
            size="60px"
            onClick={() => setOpen(!open)} />

    const closeIcon =
        <AiOutlineMenuUnfold className="hamburger"
            size="60px"
            onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false)
    return (
        <>

            {/*propsban ezt adjuk át, hogy működjön a css*/}
            {open && < StyledNavbar className="mobilenavigation"
                isMobile={true} closeMobileMenu={closeMobileMenu} />}
            {open ? closeIcon : hamburgerIcon}
        </>
    )
}

export default MobileNavigation