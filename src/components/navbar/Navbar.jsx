import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Avatar,
    Collapse,
    Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShareAlt, AiOutlineSearch } from 'react-icons/ai'
import myContext from "../../context/data/myContext";
import SearchDialog from "../searchDialog/SearchDialog";
import ShareDialogBox from "../shareDialogBox/ShareDialogBox";


export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);
    const isAuth = localStorage.getItem('isAuth');
    const context = useContext(myContext);
    const { mode, toggleMode } = context;
let navigate=useNavigate();
    const admin = localStorage.getItem('admin');
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }


    // All NavList 
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/adminhome'} className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/allblogs'} className="flex items-center">
                  All Complaints
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/userdetails'} className="flex items-center">
                    UserDetails
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
            <Link to={'/createblog'} className="flex items-center">
                   Create Sucess Story
                </Link> 
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                {!isAuth ? <Link to={'/adminlogin'} className="flex items-center">
                    Admin Login
                </Link> : <Button onClick={logout}> Logout</Button> }
            </Typography>
        </ul>
    );

    return (
        <>
            {/* Navbar  */}
            <Navbar
                className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
                style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>

                {/* Desktop View  */}
                <div className="flex items-center justify-between text-blue-gray-900">

                    {/* Home Page Link  */}
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                        >
                            {/* Logo Image  */}
                            <img
                                className=' w-10 h-10 '
                                src='data:image/jpeg;base64,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'
                            />
                            {/* Logo Text  */}
                            <span>
                              Admin Portal
                            </span>
                        </Typography>
                    </Link>

                    {/* All Items  */}
                    <div className="flex items-center gap-4">

                        {/* Navlist  */}
                        <div className="hidden lg:block">
                            {navList}
                        </div>

                        {/* Search Icon */}
                        <div>
                            {/* <AiOutlineSearch size={20} color="white" /> */}
                            <SearchDialog/>
                        </div>

                        {/* Share Icon */}
                        <div className="hidden lg:block">
                            {/* <AiOutlineShareAlt size={20} color="white" /> */}
                            <ShareDialogBox/>
                        </div>

                        {/* Admin Profile Pic */}
                        <div>
                            {isAuth 
                            ? <Link to={'/dashboard'}>
                            <div className="">
                                <Avatar
                                    key={1}
                                    src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
                                    alt="avatar"
                                    withBorder={true}
                                    className="p-0.5 text-red-500 w-10 h-10"
                                    style={{
                                        border:
                                            mode === 'dark'
                                                ?
                                                '2px solid rgb(226, 232, 240)'
                                                :
                                                '2px solid rgb(30, 41, 59)'
                                    }}
                                />
                            </div>
                        </Link> 
                        : ""}
                        </div>

                        {/* dark And Light Button */}
                        <div>
                            {mode === 'light'
                                ?
                                <>
                                    {/* Light Button  */}
                                    <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>
                                    </IconButton>
                                </>
                                :
                                <>
                                    {/* Dark Button  */}
                                    <IconButton onClick={toggleMode} className=" lg:inline-block rounded-full" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                    </IconButton>
                                </>}
                        </div>

                        {/* Mobile Toggle  */}
                        <div>
                            <IconButton
                                className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                                style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}
                            >
                                {openNav ?
                                    (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="h-6 w-6"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )
                                    :
                                    (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                            </IconButton>
                        </div>

                    </div>
                </div>

                {/* Mobile View */}
                <Collapse open={openNav}>
                    {/* NavList  */}
                    {navList}
                </Collapse>
            </Navbar>
        </>
    );
}