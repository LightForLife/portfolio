import React, { useState } from 'react';
import Title from 'components/Layouts/Title';
import ContactLeft from './ContactLeft';

const Contacts = () => {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') {
      setErrorMessage('Name is required field!');
    } else {
      setName('');
    }

    console.log(errorMessage);
  };

  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Contacts" des="Contact with me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-between">
          <ContactLeft />
          <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-6">
              <div className="w-full flex gap-10">
                <div className="w-1/2 flex  flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Name
                  </p>
                  <input
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="contactInput"
                  ></input>
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input type="email" className="contactInput"></input>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input type="text" className="contactInput"></input>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Your message
                </p>
                <textarea
                  cols="30"
                  rows="8"
                  className="contactTextArea"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
