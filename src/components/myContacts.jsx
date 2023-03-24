import PageHeader from "./pageHeader";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll } from "../contactsServices";
import ContactComponent from "./contactComponent";
const MyContacts = () => {
  const [contactsList, setContactsList] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const contacts = await getAll();
      setContactsList(contacts.data);
    };

    getContacts();
  }, []);
  return (
    <>
      <PageHeader title={<h1>my contacts</h1>} />
      <h2>this is my contacts page</h2>
      <Link to={"/create-contact"}>add contact</Link>{" "}
      <div className="container">
        <div className="row">
          {contactsList.length ? (
            contactsList.map((contact) => {
              return (
                <ContactComponent
                  key={contact.id}
                  id={contact.id}
                  contact={contact}
                  name={contact.name}
                  address={contact.address}
                  number={contact.number}
                />
              );
            })
          ) : (
            <span className="m-5">
              it seems that you dont have contacts yet...
            </span>
          )}
        </div>
      </div>
    </>
  );
};
export default MyContacts;
