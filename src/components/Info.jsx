import React from "react";

export default function Info() {
  return (
    <div className="Info">
      <img src="./src/assets/wang.jpg" />
      <div className="Texts">
        <h1>Kenneth Joshua Reano</h1>
        <p className="dev">Frontend Developer</p>
        <p className="url">kennethjoshua.website</p>
      </div>
      <div className="buttons">
        <a className="mail" href="">
          {" "}
          <img src="./src/assets/mail.png" />
          Email
        </a>
        <a className="linked" href="">
          {" "}
          <img src="./src/assets/link.png" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
