import React from "react";
import { SocialIcon } from "react-social-icons";
import "./App.css";

function Footer() {
  return (
    <div>
      <footer>
        <table className="table1">
          <thead>
            <tr>
              <td>
                <h4 className="letter">Newsletter sign</h4>
              </td>
              <td>
                <input
                  className="letter"
                  type="text"
                  placeholder="Enter your email"
                />
              </td>
              <td>
                <button className="letter">Subscribe</button>
              </td>
            </tr>
          </thead>
        </table>
        <table className="table2">
          <thead>
            <tr>
              <td>
                <h4 className="contact">Connect us</h4>
              </td>
              <td>
                <SocialIcon
                  className="contact"
                  url="http://twitter.com/jaketrent"
                />
              </td>
              <td>
                <SocialIcon network="facebook" className="contact" />
              </td>
              <td>
                <SocialIcon network="instagram" className="contact" />
              </td>
            </tr>
          </thead>
        </table>
        <div></div>
      </footer>
    </div>
  );
}

export default Footer;
