import React from "react";
import ContactForm from "./contact-form";
import Image from "next/image";

const Message = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          <h2 className="text-3xl font-bold border-b-2 inline pb-2">
            Contact Me{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-4">
          <div className="relative aspect-square">
            <Image src="/images/message.svg" alt="contact image" fill />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
