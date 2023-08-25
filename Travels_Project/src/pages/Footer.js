import StyledNavbar from "../components/StyledNavbar"

const Footer = () => {

  return (
    <footer className='section footer'>
      {/* // propsba ezt adtuk át, hogy működjön a css  */}
      <StyledNavbar className='footer' />
      <p className='copyright'>
        copyright &copy; Travels Project
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}
export default Footer

{/* {children} */ }