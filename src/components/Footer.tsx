import React from "react";
import Image from "next/image";

const Footer = () => {
  return <div className="bg-walterWhite p-5 flex flex-col justify-center items-center">
    <Image src="/logo.png" width={133} height={23} alt="Full Stack Week"/>
    <p className="text-sm mt-1 font-medium text-primaryDarker">Todos os direitos reservados</p>
  </div>;
};

export default Footer;
