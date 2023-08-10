import React from 'react';
import Title from 'components/Layouts/Title';
import ContactLeft from './ContactLeft';
import { useForm } from 'react-hook-form';

const Contacts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = formData => {
    window.location.href = `mailto:arturlvchnk@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Let's build something together" des="Contacts" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col gap-6 lgl:gap-0 lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-9"
            >
              <div className="w-full flex flex-col lgl:flex-row gap-6 lgl:gap-10">
                <div className="w-full lgl:w-1/2 flex  flex-col gap-2 lgl:gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Name
                  </p>
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    className="contactInput"
                  ></input>
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-2 lgl:gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    {...register('email', { required: true })}
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
                  {...register('subject')}
                  type="text"
                  className="contactInput"
                ></input>
              </div>
              <div className="flex flex-col gap-2 lgl:gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Your message
                </p>
                <textarea
                  {...register('message')}
                  cols="30"
                  rows="9"
                  className="contactTextArea"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  // onClick={handleSubmit}
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase outline-none hover:text-white hover:border-[1px] focus:border-[1px] focus:border-designColor/60 hover:border-designColor/60 border-transparent duration-300"
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
