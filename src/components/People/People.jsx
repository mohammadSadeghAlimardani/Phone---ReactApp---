import Person from "./Person";
const People = (props) => {
    const { contacts, deletePerson } = props;
    return (
        <div className="people">
            {contacts.map((person) => {
                return (
                    <Person
                        key={person.id}
                        {...person}
                        deletePerson={deletePerson}
                    />
                );
            })}
        </div>
    );
};

export default People;
