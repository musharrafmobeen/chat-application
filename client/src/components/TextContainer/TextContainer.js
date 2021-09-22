import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import onlineIcon from "../../icons/onlineIcon.png";
import userImg from "./user.jpg";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div className="textHeadingContainer">
      <h3>People currently chatting:</h3>
    </div>
    {users ? (
      <div className="userContainer">
        <ScrollToBottom>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  <img className="userImg" src={userImg} alt="user" />
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </ScrollToBottom>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
