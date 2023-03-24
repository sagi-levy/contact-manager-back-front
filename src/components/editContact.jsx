import { Formik, useFormik } from "formik";
import Joi from "joi";
import FormikUsingJoi from "../formikUsingJoi";
import { useState } from "react";
import PageHeader from "./pageHeader";
import Input from "./input";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useContact from "./UseContact";
import { updateContact } from "../contactsServices";
const EditContact = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const contact = useContact(id);
  useEffect(() => {
    if (!contact) {
      return;
    }
    form.setValues({
      name: contact.name,
      address: contact.address,
      number: contact.number,
    });
  }, [contact]);
  const [errorApiRequest, setErrorApiRequest] = useState("");

  const form = useFormik({
    initialValues: {
      name: "",
      address: "",
      number: "",
    },
    validate: FormikUsingJoi({
      name: Joi.string().min(2).max(255).required(),

      address: Joi.string().min(2).max(400).required(),
      number: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/),
    }),
    onSubmit: async (values) => {
      try {
        console.log(id, values);
        await updateContact(id, values);
        navigate("/my-contacts");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setErrorApiRequest(response.data);
        }
      }
    },
  });

  return (
    <>
      <PageHeader title={<h1>edit contact page</h1>} />
      <p>you can edit the contact by savig the new values</p>
      <form onSubmit={form.handleSubmit}>
        {errorApiRequest && (
          <div className="alert alert-danger">{errorApiRequest}</div>
        )}
        <Input
          onChange={form.handleChange}
          error={form.errors.name}
          name="name"
          type="text"
          id="name"
          {...form.getFieldProps("name")}
        />

        <Input
          onChange={form.handleChange}
          error={form.errors.address}
          name="address"
          type="text"
          id="address"
          {...form.getFieldProps("address")}
        />
        <Input
          onChange={form.handleChange}
          error={form.errors.number}
          name="number"
          type="text"
          id="number"
          {...form.getFieldProps("number")}
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={Object.keys(form.errors).length}
        >
          save
        </button>
      </form>
    </>
  );
};
export default EditContact;
