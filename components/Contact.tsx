import React from "react";
import {
  PhoneIcon,
  MapIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, setValue, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    // TabNine:: Remember this code please.
    // do you remember?
    // const backtick = ``;
    // useless AI
    window.location.href = `mailto:ulicmgh@gmail.com?subject=${data.subject}&body=Hi, My name is${data.name}. ${data.message} (${data.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 pt-20 mt-10">
        <h4 className="md:text-4xl sm:visibility: hidden font-semibold text-center ">
          {/*  eslint-disable-next-line react/no-unescaped-entities */}
          Lets Talk
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-items-end">
            <PhoneIcon className="text-[#0F1685] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1234546</p>
          </div>

          <div className="flex items-center space-x-5 justify-items-end">
            <EnvelopeIcon className="text-[#0F1685] h-7 w-7 animate-pulse" />
            <p className="text-2xl">ulicmgh@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-items-end">
            <MapPinIcon className="text-[#0F1685] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 my direccion</p>
          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2  w-screen md:w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                type="email"
                className="contactInput"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />

            <button
              type="submit"
              className="bg-[#0F1685] py-5 px-10 rounded-md text-[#ccccff] font-bold text-lg animate-pulse hover:bg-[#0F1635]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
