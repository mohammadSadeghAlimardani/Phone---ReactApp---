import { nanoid } from "nanoid";
import { boxes } from "../../data";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import googleMeetIcon from "../../assets/google-meet.png";

const Keyboard = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showBtns, setShowBtns] = useState(false);
    useEffect(() => {
        if (phoneNumber.length === 0) {
            setShowBtns(false);
        } else {
            setShowBtns(true);
        }
    });
    const addNumber = (number) => {
        setPhoneNumber(phoneNumber + number);
    };
    const addLetter = (letter) => {
        setPhoneNumber(phoneNumber + letter);
    };
    const deleteLastNumber = () => {
        setPhoneNumber(phoneNumber.slice(0, phoneNumber.length - 1));
    };
    return (
        <div className="keyboard">
            <div className="keyboard-center">
                <p className="phone-number">{phoneNumber}</p>
                <div className="boxes">
                    {boxes.map((box) => {
                        const { number, letters } = box;
                        return (
                            <div
                                onClick={() => addNumber(number)}
                                key={nanoid()}
                                className="box"
                            >
                                <h3>{number}</h3>
                                <h4>{letters}</h4>
                            </div>
                        );
                    })}
                </div>
                <section className="contact-btns">
                    <a
                        className={showBtns ? "show" : ""}
                        id="googleMeet-btn"
                        href="#"
                    >
                        <img src={googleMeetIcon} alt="google-meet-icon" />
                    </a>
                    <a
                        id="call-btn"
                        href={`tel:${phoneNumber}`}
                        className="btn btn-success"
                    >
                        <FaPhoneAlt />
                    </a>
                    <a
                        className={showBtns ? "show" : ""}
                        id="deleteNumber-btn"
                        onClick={deleteLastNumber}
                    >
                        <TiTimes />
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Keyboard;
