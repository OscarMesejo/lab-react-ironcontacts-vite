import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json";

function App() {

  const fiveContacts = contactsArray.slice(5,10);
  const [contacts, setContacts] = useState(fiveContacts);
  

  return (
    <div>
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>

        {contacts.map((contactsArray)=>(
          <tr className="contact-row" key={contacts._id}>
          <td><img src={contactsArray.pictureUrl} width="100px"alt="" /></td>
          <td>{contactsArray.name}</td>
          <td>{contactsArray.popularity}</td>
          <td>
          {contactsArray.wonOscar && <p>🏆</p>}
          {!contactsArray.wonOscar && <p></p>}
          </td>
          <td>
          {contactsArray.wonEmmy && <p>⭐</p>}
          {!contactsArray.wonEmmy && <p></p>}
          </td>
        </tr>
        ))}
        
      </table>
    </div>
  );
}

export default App;
