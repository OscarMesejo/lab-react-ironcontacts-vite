import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json";

function App() {

  const fiveContacts = contactsArray.slice(0,5);
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

          {contacts.hasOscar ? <p>:trophy:</p> : <p></p>}
        </tr>
        ))}
        
      </table>
    </div>
  );
}

export default App;
