import React from 'react';
import './style.css';
import MyContacts from './components/MyContacts';
<div>
  <h1 className="text-center">My contacts list 📱</h1>
</div>;
function App() {
  return (
    <div className="App">
      <div>
        <MyContacts
          name="Bernard Durand"
          phone="📞 01.02.03.04"
          mail="Bernard@mail.fr"
        />
        <MyContacts
          name="François Dupont"
          phone="📞 02.06.07.08.09"
          mail="François@mail.fr"
        />
        <MyContacts
          name="Jean Untel"
          phone="📞 03.10.23.45.85"
          mail="Jean@mail.fr"
        />
        <MyContacts
          name="Michel André"
          phone="0📞 05.20.65.74.36"
          mail="Michel@mail.fr"
        />
        <MyContacts
          name="Francis Truc"
          phone="📞 04.33.12.75.99"
          mail="Francis@mail.fr"
        />
      </div>
    </div>
  );
}

export default App;
