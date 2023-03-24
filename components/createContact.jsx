import { Formik, useFormik } from "formik";
import Joi from "joi";
import FormikUsingJoi from "../formikUsingJoi";
import { useState } from "react";
import PageHeader from "./pageHeader";
import Input from "./input";
import { useNavigate } from "react-router-dom";
import { createContact } from "../contactsServices";
const CreateContact = () => {
  const navigate = useNavigate();
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
        await createContact(values);
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
      <PageHeader title={<h1>add contact page</h1>} />
      <p>
        you can save the contact by filling the inputs correctly and click add
      </p>
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

        <button type="submit" className="btn btn-primary">
          add contact +
        </button>
      </form>
    </>
  );
};
export default CreateContact;
