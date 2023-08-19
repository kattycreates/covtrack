import React from "react";
import ContactForm from "../components/ContactForm";

type Props = {};

const CreateContact = (props: Props) => {
  const initialData = { firstName: "", lastName: "", status: "active", id: 0 };
  return (
    <div className="form-container">
      <ContactForm mode="create" data={initialData} />
    </div>
  );
};

export default CreateContact;
