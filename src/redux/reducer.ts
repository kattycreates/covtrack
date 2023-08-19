import * as actionTypes from "./actionTypes";

/* const initialState: ContactState = {
    contacts: [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        status: "active",
      },
    ],
  }; */

const initialState: ContactState = {
  contacts: [],
};
const reducer = (
  state: ContactState = initialState,
  action: ContactAction
): ContactState => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      const newContact: IContact = {
        id: action.contact.id,
        firstName: action.contact.firstName,
        lastName: action.contact.lastName,
        status: action.contact.status,
      };

      return {
        ...state,
        contacts: state.contacts.concat(newContact),
      };
    case actionTypes.REMOVE_CONTACT:
      const updatedContacts: IContact[] = state.contacts.filter(
        (contact) => contact.id !== action.contact.id
      );
      return {
        ...state,
        contacts: updatedContacts,
      };
    case actionTypes.EDIT_CONTACT:
      const editedContacts: IContact[] = state.contacts.map((contact) =>
        contact.id !== action.contact.id ? contact : action.contact
      );
      return {
        ...state,
        contacts: editedContacts,
      };
  }
  return state;
};

export default reducer;
