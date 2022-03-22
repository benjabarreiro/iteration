import React from "react";

export default function ValuesCard({ title, text }) {
  return (
    <div className="values-card">
      <img className="values-card-icon" src="/icons/key-values.png" alt="" />
      <h4 className="title values-card-title">{title}</h4>
      <p className="text paragraph">{text}</p>
    </div>
  );
}
