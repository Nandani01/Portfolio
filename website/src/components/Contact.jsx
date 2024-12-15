import React from 'react';
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl text-white">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-white">Temporary Address: {CONTACT["Temporary address"]}</p>
        <p className="my-4 text-white">Permanent Address: {CONTACT["Permanent address"]}</p>
        <p className="my-4 text-white">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b text-cyan-500">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
