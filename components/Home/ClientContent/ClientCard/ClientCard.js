import React from "react";

export default function ClientCard({ icon, title, text }) {
  return (
    <div className="client-card">
      <img className="icon-style" src={icon} alt="" />
      <h4 className="card-title title">{title}</h4>
      <p className="text">{text}</p>
    </div>
  );
}
