import React from "react";
import "./css/ecard.css";
import ifsLogo from "../assets/ifsLogo.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import web from "../assets/web.png";

function Ecard(ecard_name) {
  const name_data = {
    minahil: {
      name: "Minahil Alvi",
      phone: "+971 58 197 1185",
      secondary_phone: "",
      email: "minahil@ifsgcc.com",
    },
    peter: {
      name: "Jaewon Peter Chun",
      phone: "+82 10 3476 3445",
      secondary_phone: "",
      email: "peter@ifsgcc.com",
    },
    richard: {
      name: "Richard Kay",
      phone: "+44 7947 251077",
      secondary_phone: "+971 58 197 1185",
      email: "richard@ifsgcc.com",
    },
    brockner: {
      name: "Joshua Brockner",
      phone: "+1 (917) 613-2461",
      secondary_phone: "",
      email: "josh@ifsgcc.com",
    },
  };
  const vname = ecard_name.ecard_name
  const this_name = name_data[vname];
  console.log(this_name);
  return (
    <div className="card-container">
      <div className="card-logo">
        <div className="card-blue">
          <img src={ifsLogo} alt="ifs logo description" />
        </div>
      </div>
      <div className="card-details">
        <h1>{this_name.name}</h1>
        <h3>
          <img src={phone} alt="icons for the card" /> {this_name.phone}
        </h3>
        {this_name.secondary_phone.length !== 0 ? (
          <h3>
            <img src={phone} alt="icons for the card" />{" "}
            {this_name.secondary_phone}
          </h3>
        ) : (
          <></>
        )}
        <h3>
          <img src={mail} alt="icons for the card" /> {this_name.email}
        </h3>
        <h3>
          <img src={web} alt="icons for the card" /> www.ifsgcc.com
        </h3>
      </div>
    </div>
  );
}

export default Ecard;
