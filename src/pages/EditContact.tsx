import React from "react";
import ContactForm from "../components/ContactForm";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
type Props = {};

const EditContact = (props: Props) => {
  const { id } = useParams();
  const contacts: IContact[] = useSelector(
    (state: ContactState) => state.contacts
  );
  const contactToEdit = contacts.filter(
    (contact: IContact) => contact.id === Number(id)
  );

  return (
    <div className="form-container">
      <ContactForm mode="edit" data={contactToEdit[0]} />
    </div>
  );
};

export default EditContact;
