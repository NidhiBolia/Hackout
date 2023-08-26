import { SignOutButton, useAuth } from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import "../stylesheets/Navbar.css";

const Navbar = () => {
    const { isSignedIn } = useAuth();
    return (
        <>
            <nav className="flex h-14 w-full  justify-between items-center">
                <div className="flex gap-8 ml-6 font-roboto font-medium text-sm">
                    <div className="un-effect cursor-pointer">Events</div>
                    <div className="un-effect cursor-pointer"  onClick={() => {
                                window.location.href = "/college";
                            }}>Colleges</div>
                </div>
                <div className="font-lobster text-3xl opacity-90">
                    <div>Engage</div>
                </div>
                {(!isSignedIn && (
                    <div className="flex gap-6 mr-6">
                        <button
                            onClick={() => {
                                window.location.href = "/sign-in";
                            }}
                            className="font-roboto px-4 py-2 bg-[#1f1f1f] text-sm text-white font-bold rounded-full border-2 border-[#1f1f1f] hover:bg-white hover:text-black transition-all"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => {
                                window.location.href = "/sign-up";
                            }}
                            className="font-roboto px-4 py-2 bg-[#1f1f1f] text-sm text-white font-bold rounded-full border-2 border-[#1f1f1f] hover:bg-white hover:text-black transition-all"
                        >
                            Sign Up
                        </button>
                    </div>
                )) || (
                    <div className="flex gap-6 mr-6">
                        <SignOutButton className="font-roboto px-4 py-2 bg-[#1f1f1f] text-sm text-white font-bold rounded-full border-2 border-[#1f1f1f] hover:bg-white hover:text-black transition-all" />
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
