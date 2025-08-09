import { IoStarSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

const Person = (props) => {
    const { id, name, phone, image, favorite, deletePerson } = props;
    const href = `tel:${phone}`;
    return (
        <article className="person">
            <section>
                {favorite ? (
                    <IoStarSharp style={{ color: "#6200ee" }} />
                ) : (
                    <IoStarSharp style={{ visibility: "hidden" }} />
                )}
                <img src={image} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <a href={href}>{phone}</a>
                </div>
            </section>
            <button
                className="link link-danger"
                onClick={() => deletePerson(id)}
            >
                <FaTrash />
            </button>
        </article>
    );
};

export default Person;
