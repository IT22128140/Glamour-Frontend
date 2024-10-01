// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLinks from "./FooterLinks";
import FooterMap from "./FooterMap";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row w-[100%] bg-footer min-h-[350px] bg-secondary">
        <FooterSocialLinks />
        <FooterLinks />
        <FooterMap />
      </div>
      <center>
        <label className=" font-BreeSerif">© 2024 Glamour Fashions Ltd.</label>
      </center>
    </>
  );
};

export default Footer;
