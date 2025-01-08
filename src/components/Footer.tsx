import React from "react";
import { FOOTER_TEXT } from "@/constants/constants";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; {FOOTER_TEXT}</p>
      </div>
    </div>
  );
}

export default Footer;
