import { nanoid } from "nanoid";
import { boxes } from "../../data";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import googleMeetIcon from "../../assets/google-meet.png";

const Keyboard = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showBtns, setShowBtns] = useState(false);
    const [now, setNow] = useState(null);
    useEffect(() => {
        if (phoneNumber.length === 0) {
            setShowBtns(false);
        } else {
            setShowBtns(true);
        }
    });
    const addChar = (box) => {
        const { letters, number } = box;
        const later = new Date().getTime();
        const difference = later - now;
        if (difference >= 300) {
            setPhoneNumber(phoneNumber + letters);
        } else {
            setPhoneNumber(phoneNumber + number);
        }
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
                                onMouseDown={() => setNow(new Date().getTime())}
                                onMouseUp={() => addChar(box)}
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
                        href="https://meet.google.com"
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
                    <button
                        className={showBtns ? "show" : ""}
                        id="deleteNumber-btn"
                        onClick={deleteLastNumber}
                    >
                        <TiTimes />
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Keyboard;
