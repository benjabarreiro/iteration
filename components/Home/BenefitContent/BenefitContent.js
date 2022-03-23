import React from "react";
import BenefitCard from "./BenefitCard/BenefitCard";

export default function BenefitContent() {
  return (
    <div className="benefit-content">
      <div className="benefit-heading">
        <h4 className="title">Why choosing us?</h4>
        <p className="paragraph content-text benefit-text text-thin">
          We provide digital solutions that meet your{" "}
          <span className="text-bold">
            Business Goals, Budget and Deadlines.
          </span>{" "}
          Some advantages of our service are:
        </p>
      </div>
      <div className="benefit-card-container">
        <BenefitCard
          video="/videos/img/agile-methodology-development.jpg"
          text="AGILE METHODOLOGY DEVELOPMENT"
        />
        <BenefitCard
          video="/videos/img/quick-start.jpg"
          text="QUICK START"
          style="benefit-card-text2"
        />
        <BenefitCard
          video="/videos/img/affordable.jpg"
          text="RETURN OF INVESTMENT"
        />
        <BenefitCard
          video="/videos/img/customized-results.jpg"
          text="100% CUSTOMIZED RESULTS"
        />
        <BenefitCard
          video="/videos/img/security-of-information.jpg"
          text="SECURITY OF INFORMATION"
        />
        <BenefitCard
          video="/videos/img/optimizations-every-6-month.jpg"
          text="OPTIMIZATIONS EVERY 6 MONTH"
        />
      </div>
    </div>
  );
}
