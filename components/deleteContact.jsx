import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteContact, getSpecificContact } from "../contactsServices";
import useContact from "./UseContact";
const DeleteContact = () => {
  const { id } = useParams();
  const contactToDelete = useContact(id);

  console.log(contactToDelete);
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    const remove = async () => {
      console.log(await deleteContact(id));

      navigate("/my-contacts");
    };

    remove();
  }, []);
};

export default DeleteContact;
