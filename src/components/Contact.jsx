import React, { useState } from "react";

const Contact = () => {
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  let handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!regexEmail.test(e.target.value) && e.target.name === "email") {
      return setError({ ...error, email: "Please use a valid Email" });
    }

    if (e.target.value.length < 2) {
      setError({
        ...error,
        [e.target.name]: `Please fill this field with your ${e.target.name}`,
      });
    } else {
      setError({
        ...error,
        [e.target.name]: "",
      });
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center"
    >
      <form
        method={
          !error.name && !error.email && !error.message ? "POST" : "hidden"
        }
        action={
          !error.name &&
          !error.email &&
          !error.message &&
          "https://getform.io/f/266bec77-716b-4f59-a896-c43cb98c6bdd"
        }
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl fond-bold text-gray-300 inline border-b-4 border-[#e9d045]">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below or send me an email to kaos4everl@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2"
          onChange={handleChange}
        ></input>
        {error.name && <p className="text-red-300">{error.name}</p>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          className=" bg-[#ccd6f6] my-4 p-2"
          onChange={handleChange}
        ></input>
        {error.email && <p className="text-red-300">{error.email}</p>}
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="bg-[#ccd6f6] p-2"
          onChange={handleChange}
        ></textarea>
        {error.message && <p className="text-red-300">{error.message}</p>}
        <button
          onClick={() =>
            (error.name || error.email || error.description) &&
            alert("Please fill the form")
          }
          className="text-white border-2 hover:bg-[#e9d045] hover:border-[#e9d045] flex items-center mx-auto my-4 px-8 py-4"
        >
          Here we go!
        </button>
      </form>
    </div>
  );
};

export default Contact;
