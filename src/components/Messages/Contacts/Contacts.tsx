import React from "react";
import Contact from "./Contact/Contact";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface InterfaceContact {
  id: number;
  name: string;
  online: string;
}

const Contacts: React.FC = () => {
  const contactsData = useTypedSelector(
    (state) => state.contacts_reducer.Contacts
  );

  const ContactElements = contactsData.map((contact: InterfaceContact) => (
    <Contact online={contact.online} name={contact.name} />
  ));

  return (
    <div className="messages__sidebar  dark-block">
      <div className="messages__sidebar-title">Messages</div>
      <div className="messages__contacts">
        <div className="messages__list">{ContactElements}</div>
      </div>
    </div>
  );
};
export default Contacts;
