import logo from "./logo.svg";
import "./App.css";
import classNames from "classnames";
import { useState } from "react";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

function App() {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick() {
        setIsClicked((prev) => !prev);
        console.log(isClicked);
    }
    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
                <SideBarIcon
                    onToggle={handleClick}
                    icon={<FaFire size="28" />}
                />
                <SideBarIcon
                    onToggle={handleClick}
                    icon={<BsPlus size="32" />}
                />
                <SideBarIcon
                    onToggle={handleClick}
                    icon={<BsFillLightningFill size="20" />}
                />
                <SideBarIcon
                    onToggle={handleClick}
                    icon={<FaPoo size="20" />}
                />
            </div>
            <div
                className={classNames(
                    "hero-content w-screen h-screen flex justify-center items-center"
                )}
            >
                <div
                    onClick={handleClick}
                    className={classNames(
                        "w-20 h-20 border-2 border-solid border-black transition-all duration-500 ease-in-out",
                        { "hero-content--active": isClicked }
                    )}
                ></div>
            </div>
        </>
    );
}

const SideBarIcon = ({ props, onToggle, icon, text = "tooltip 💡" }) => {
    return (
        <>
            <button
                onClick={onToggle}
                className="sidebar-icon group"
                {...props}
            >
                {icon}

                <span className="sidebar-tooltip group-hover:scale-100">
                    {text}
                </span>
            </button>
        </>
    );
};

export default App;
