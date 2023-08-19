import React from "react";
import Button from "../components/Button";
import Contacts from "../components/Contacts";
type Props = {};

const Contact = (props: Props) => {
  const addContact = () => {
    window.alert("clicked");
  };
  return (
    <div>
      <Button label="Create Contact" handleClick={addContact} type="button" />
      <Contacts />
    </div>
  );
};

export default Contact;
