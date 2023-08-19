import React from "react";

type Props = { toggleModal: () => void; contactData: IContact | any };

const Modal = (props: Props) => {
  const { firstName, lastName, status } = props.contactData;
  return (
    <div className="flex flex-col justify-center items-center bg-white px-6 py-3 rounded md:w-1/4 w-4/5">
      <div onClick={props.toggleModal} className="w-full flex justify-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="w-full">
        <div className="flex justify-center gap-2 w-full my-2">
          <span className="text-base font-bold w-1/2 flex justify-start">
            First Name
          </span>
          <span className="w-1/2 flex justify-start">{firstName}</span>
        </div>
        <div className="flex justify-center gap-2 w-full my-2">
          <span className="text-base font-bold w-1/2 flex justify-start">
            Last Name
          </span>
          <span className="w-1/2 flex justify-start">{lastName}</span>
        </div>
        <div className="flex justify-center gap-2 w-full my-2">
          <span className="text-base font-bold w-1/2 flex justify-start">
            Status
          </span>
          <span className="w-1/2 flex justify-start">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
