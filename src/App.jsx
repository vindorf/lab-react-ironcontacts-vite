import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

const initialContacts = contacts.slice(0, 5);

function App() {
  const [fiveContacts, setFiveContacts] = useState(initialContacts);

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];
    setFiveContacts((prevContacts) => [...prevContacts, randomContact]);
  };

  

  const deleteContact = (cId) => {
  const filterC = fiveContacts.filter((cont) => {
    return cont.id !== cId;
  })
     setFiveContacts(filterC);
  } 

  const sortByName = () => {
    const sortedContacts = [...fiveContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setFiveContacts(sortedContacts);
  };

console.log(fiveContacts)
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <table>
        <tbody>
          <tr>    
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
          </tr>
          {fiveContacts.map((contact, index) => (
            <tr key={index}>
              <td className='pic'>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: '150px', height: 'auto' }}
                />
                 <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? 'got OC' : ''}</td>
              <td>{contact.wonEmmy ? 'got EM' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
