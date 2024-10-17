import logo from '../assets/ShaastraLogoWhite.jpg'
const Navbar: React.FC = () => {
    return(
        <>
        <div className="flex justify-between w-full h-24 sticky top-0">
            <div className="h-full p-2 w-1/12"><img src={logo} className="h-full w-full"/></div>
            <div className="-mt-2 text-3xl w-3/6 flex justify-between items-center h-full mr-12"><a href="#c1">Home</a>
            <a href="#c2">About</a>
            <a href="#c3">Sampark</a>
            <a href="#c4">Shaastra</a>
            <a href="#c5">Campus Ambassador</a>
            </div>
        </div>
        </>
    )
}
export default Navbar;