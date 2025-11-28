import "./App.css";
import People from "./components/People/People";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";
import { links } from "./data";
const url = "https://api.npoint.io/7d8d81b6240264558517";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(true);
    const [contacts, setContacts] = useState([]);
    const [activeLink, setActiveLink] = useState("recents");
    const changeActiveLink = (id) => {
        setActiveLink(id);
    };
    const fetchContacts = async () => {
        try {
            const response = await fetch(url);
            let data = await response.json();
            setContacts(data);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        fetchContacts();
    }, []);
    const deletePerson = (id) => {
        setContacts(contacts.filter((person) => person.id !== id));
    };
    if (isLoading) {
        <div className="contacts">
            <div className="contacts-center">
                <div className="dotted-loading">
                    <section>
                        <div className="dot-1"></div>
                        <div className="dot-2"></div>
                        <div className="dot-3"></div>
                        <div className="dot-4"></div>
                    </section>
                </div>
            </div>
        </div>;
    }
    if (isError) {
        <div className="contacts">
            <div className="contacts-center">
                <div className="alert alert-danger">
                    <div className="alert-icon">&#10799;</div>
                    <p>There was an error</p>
                </div>
            </div>
        </div>;
    }
    return (
        <div className="contacts">
            <div className="contacts-center">
                <ul className="links">
                    {links.map((link) => {
                        const { text, icon } = link;
                        return (
                            <li
                                key={text}
                                onClick={() => changeActiveLink(text)}
                                className={activeLink === text ? "active" : ""}
                            >
                                {icon}
                                <h4>{text}</h4>
                            </li>
                        );
                    })}
                </ul>
                {activeLink === "recents" ? (
                    <People contacts={contacts} deletePerson={deletePerson} />
                ) : (
                    ""
                )}
                {activeLink === "favorite" ? (
                    <People
                        contacts={contacts.filter(
                            (person) => person.favorite === true
                        )}
                        deletePerson={deletePerson}
                    />
                ) : (
                    ""
                )}
                {activeLink === "keyboard" ? (
                    <Keyboard contacts={contacts} />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default App;
