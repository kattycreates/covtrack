import React from "react";
import Button from "./Button";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { removeContact } from "../redux/actionCreators";
import { NavigateFunction } from "react-router-dom";

type Props = {
  contactData: IContact;
  navigate: NavigateFunction;
  toggleModal: () => void;
  setContactData: React.Dispatch<React.SetStateAction<IContact>>;
};

const ContactItem = (props: Props) => {
  const { firstName, lastName, status, id } = props.contactData;
  const dispatch: Dispatch<any> = useDispatch();

  const editContact = () => {
    props.navigate(`/edit/${id}`);
  };
  const deleteContact = () => {
    dispatch(removeContact(props.contactData));
  };
  const viewContact = () => {
    props.setContactData(props.contactData);
    props.toggleModal();
  };
  return (
    <div className="\w-1/4 p-2">
      <div className="flex-col justify-between rounded border-2 p-2  bg-gray-100 w-full">
        <div className="w-full">
          <p className="flex justify-center pt-2 ">
            {/* <span className="font-bold mr-2">Name: </span> */}
            <span className="font-bold mr-2 text-gray-900">
              {firstName} {lastName}
            </span>
          </p>
          <p className="flex justify-center pb-2">
            <span> {status}</span>
          </p>
        </div>
        <div className="flex justify-between gap-2">
          <div className="w-1/3">
            <Button type="button" label="View" handleClick={viewContact} />
          </div>
          <div className="w-1/3">
            <Button type="button" label="Edit" handleClick={editContact} />
          </div>
          <div className="w-1/3">
            <Button type="button" label="Delete" handleClick={deleteContact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
