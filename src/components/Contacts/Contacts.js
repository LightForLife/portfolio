import React, { useState } from 'react';
import Title from 'components/Layouts/Title';
import ContactLeft from './ContactLeft';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  //=============== Email Validation start ===============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  //=============== Email Validation end ===============

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      setErrorMessage('Name is required!');
    } else if (email === '') {
      setErrorMessage('Please give your Email!');
    } else if (!emailValidation(email)) {
      setErrorMessage('Give a valid Email!');
    } else if (subject.trim() === '') {
      setErrorMessage('Please give your Subject!');
    } else if (message.trim() === '') {
      setErrorMessage('Message is required!');
    } else {
      setSuccessMessage(
        `Thank you dear ${name}, Your Messages has been sent Successfully!`
      );
      setErrorMessage('');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
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
        <div className="w-full h-auto flex flex-col gap-6 lgl:gap-0 lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-6 py-2 lgl:py-5">
              {errorMessage && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errorMessage}
                </p>
              )}
              {successMessage && !errorMessage && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMessage}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-6 lgl:gap-10">
                <div className="w-full lgl:w-1/2 flex  flex-col gap-2 lgl:gap-4">
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
                <div className="w-full lgl:w-1/2 flex flex-col gap-2 lgl:gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className="contactInput"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-2 lgl:gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={e => setSubject(e.target.value)}
                  value={subject}
                  type="text"
                  className="contactInput"
                ></input>
              </div>
              <div className="flex flex-col gap-2 lgl:gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Your message
                </p>
                <textarea
                  onChange={e => setMessage(e.target.value)}
                  value={message}
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
              {errorMessage && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errorMessage}
                </p>
              )}
              {successMessage && !errorMessage && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
