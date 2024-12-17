import { useState } from "react";
import { RiSparklingFill } from "react-icons/ri";
import Intro from "@/components/Intro";
import configs from "@/utils/configs";

const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];

function Form() {
  const [formValue, setFormValues] = useState({
    fullname: "a",
    email: "b",
    message: "c",
    services: [],
  });

  // Runs on form submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  // Runs whenever our input field changes
  const handleInputChange = (value, field) => {
    setFormValues((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const handleCheckbox = (value, status) => {
    setFormValues((prevState) => {
      const newServices = prevState.services.slice(); // this is the services array

      const updatedServices = status
        ? [...newServices, value]
        : newServices.filter((v) => v != value);

      return { ...prevState, services: updatedServices };
    });
  };

  return (
    <>
      <Intro />
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        {/* Inputs */}
        <input
          type="text"
          name={configs.fullname}
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          value={formValue.fullname}
          onChange={(e) => handleInputChange(e.target.value, "fullname")}
        />
        <input
          type="email"
          name={configs.email}
          id="email"
          placeholder="you@company.com"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          value={formValue.email}
          onChange={(e) => handleInputChange(e.target.value, "email")}
        />
        <input
          type="text"
          name={configs.message}
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
          value={formValue.message}
          onChange={(e) => handleInputChange(e.target.value, "message")}
        />

        <p className="my-5 text-gray-800">How can we help?</p>

        {/* Checkbox */}
        <div className="mb-10 grid max-w-96 grid-cols-2">
          {services.map((service, idx) => {
            return (
              <label key={idx} className="flex cursor-pointer gap-2">
                <input
                  type="checkbox"
                  name={configs.services}
                  value={service}
                  className="size-5"
                  onClick={(e) => handleCheckbox(service, e.target.checked)}
                />
                {service}
              </label>
            );
          })}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded bg-zinc-950 p-2 text-white"
        >
          Let's get started
          <RiSparklingFill className="text-lime-500" size={20} />
        </button>
      </form>
    </>
  );
}

export default Form;
