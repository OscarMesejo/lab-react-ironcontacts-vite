import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json";

function App() {

  const fiveContacts = contactsArray.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);

  function handleRandom() {
    console.log('This is working');
    //create a new array with the contacts I already have and add a random one
    const newArray = [...contacts, contactsArray[Math.floor(Math.random() * contactsArray.length)]]
    setContacts(newArray)

  }
  function handleDelete(contactsId) {
    console.log(contactsId);
    const removedArray = contacts.filter((contact)=>{
      return contact.id !== contactsId;
    })
    setContacts(removedArray)
    console.log(removedArray)
  }
  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={() => handleRandom()}>Add Random Contact</button>
      {/* <button onClick={() =>}>Sort by Popularity</button>
      <button onClick={() =>}>Sort by Name</button> */}
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>

        {contacts.map((contact) => (
          <tr className="contact-row" key={contacts.id}>
            <td><img src={contact.pictureUrl} width="100px" alt="" /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>
              {contact.wonOscar && <p>🏆</p>}
              {!contact.wonOscar && <p></p>}
            </td>
            <td>
              {contact.wonEmmy && <p>⭐</p>}
              {!contact.wonEmmy && <p></p>}
            </td>
            <td>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}

      </table>
    </div>
  );
}

export default App;
