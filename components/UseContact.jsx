import { useState } from "react";
import { useEffect } from "react";
import { getSpecificContact } from "../contactsServices";
const useContact = (id) => {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const getContact = async () => {
      const { data } = await getSpecificContact(id);
      setContact(data[0]);
    };
    getContact();
  }, []);
  return contact;
};
export default useContact;
