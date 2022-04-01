import React from 'react';

function Mycontacts(props) {
  console.log(props.name, props.phone, prop.mail);

  return (
    <div>
      <div className="name"></div>
      <div className="phone"></div>
      <div className="mail"></div>
    </div>
  );
}
export default Mycontacts;
