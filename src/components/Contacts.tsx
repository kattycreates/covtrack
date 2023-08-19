import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
type Props = {};

const Contacts = (props: Props) => {
  const contacts: IContact[] = useSelector(
    (state: ContactState) => state.contacts
  );

  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Button
          label="Create Contact"
          type="button"
          handleClick={() => navigate("/create")}
        />
      </div>
      {(!contacts || contacts.length === 0) && (
        <div className="md:w-1/3 sm:w-1/2 w-full mt-32 flex justify-center items-center border-2 rounded">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-1 alert-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="m-1">No contacts found</p>
            <p>Please add contact</p>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center mt-5 ">
        {contacts.map((contact: IContact, index: number) => (
          <ContactItem contactData={contact} key={index} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
