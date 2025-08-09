import { FaPhoneAlt } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { RiKeyboardFill } from "react-icons/ri";
import { IoIosInfinite } from "react-icons/io";

const links = [
    {
        text: "recents",
        icon: <FaPhoneAlt />,
    },
    {
        text: "favorite",
        icon: <IoStarSharp />,
    },
    {
        text: "keyboard",
        icon: <RiKeyboardFill />,
    },
];
const boxes = [
    {
        number: "1",
        letters: <IoIosInfinite />,
    },
    {
        number: "2",
        letters: "ABC",
    },
    {
        number: "3",
        letters: "DEF",
    },
    {
        number: "4",
        letters: "GHI",
    },
    {
        number: "5",
        letters: "JKL",
    },
    {
        number: "6",
        letters: "MNO",
    },
    {
        number: "7",
        letters: "PQRS",
    },
    {
        number: "8",
        letters: "TUV",
    },
    {
        number: "9",
        letters: "WXYZ",
    },
    {
        number: "*",
        letters: "",
    },
    {
        number: "0",
        letters: "+",
    },
    {
        number: "#",
        letters: "",
    },
];
export { links, boxes };
