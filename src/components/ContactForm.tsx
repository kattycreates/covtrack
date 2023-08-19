import React, { useState } from "react";
import Button from "./Button";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../redux/actionCreators";
import { useNavigate } from "react-router-dom";

type Props = {
  mode: string;
  data: IContact;
};

const ContactForm = (props: Props) => {
  const { mode, data } = props;
  const [firstName, setFirstName] = useState(data?.firstName || "");
  const [lastName, setLastName] = useState(data?.lastName || "");
  const [status, setStatus] = useState(data?.status || "active");
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      window.alert("Please enter all fields!");
      return;
    }
    const newContact = {
      firstName,
      lastName,
      status,
      id: mode === "edit" ? data.id : Math.random() * 999,
    };
    if (mode === "edit") {
      dispatch(editContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }
    navigate("/contacts");
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold my-5">
        {mode === "edit" ? "Edit Contact" : "Create Contact"}
      </h2>
      <div className="input-group bg-white">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="first-name"
            >
              First Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="first-name"
              type="text"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="last-name"
            >
              Last Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="last-name"
              type="text"
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 w-full">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="status"
            >
              Status
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value="active"
                checked={status === "active"}
                onChange={(e: any) => setStatus(e.target.value)}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Active
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                value="inactive"
                checked={status === "inactive"}
                onChange={(e: any) => setStatus(e.target.value)}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Inactive
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-center mt-5">
        <div className="md:w-2/3">
          <Button
            label={`${mode === "edit" ? "Update" : "Add"} Contact`}
            handleClick={handleSubmit}
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
