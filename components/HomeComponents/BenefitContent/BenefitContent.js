import React from "react";
import InformationHeading from "../../InformationHeading/InformationHeading";
import BenefitCard from "../BenefitCard/BenefitCard";

export default function BenefitContent() {
  return (
    <div className="information-content benefit-content">
      <div className="information-heading">
        <h4 className="title">Why choosing us?</h4>
        <p className="content-text benefit-text text">
          We provide digital solutions that meet your{" "}
          <span className="text-bold">
            Business Goals, Budget and Deadlines.
          </span>{" "}
          Some advantages of our service are:
        </p>
      </div>
      <div className="benefit-card-container">
        <BenefitCard
          video="/agile-methodology-development.mp4"
          text="AGILE METHODOLOGY DEVELOPMENT"
        />
        <BenefitCard video="/quick-start.mp4" text="QUICK START" style="benefit-card-text2" />
        <BenefitCard video="/affordable.mp4" text="RETURN OF INVESTMENT" />
        <BenefitCard
          video="/customized-results.mp4"
          text="100% CUSTOMIZED RESULTS"
        />
        <BenefitCard
          video="/security-of-information.mp4"
          text="SECURITY OF INFORMATION"
        />
        <BenefitCard
          video="/optimizations-every-6-month.mp4"
          text="OPTIMIZATIONS EVERY 6 MONTH"
        />
      </div>
    </div>
  );
}
