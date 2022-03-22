import React from "react";
import InformationHeading from "../../../InformationHeading/InformationHeading";
import ClientCard from "../ClientCard/ClientCard";
import FlexWrapper from "../../../FlexWrapper/FlexWrapper";

export default function Desktop() {
  return (
    <>
      <InformationHeading
        title="Who can work with us?"
        text="We have large expertise in software development for startups and big brands. This is who we most work with:"
        style="client-text"
      />
      <FlexWrapper>
        <ClientCard
          icon="/icons/business-companies.png"
          title="Business companies"
          text="interested in expanding their market through the digital world. We offer them a reliable and self-managed secure E-commerce website to increase business profitability."
        />
        <div className="client-card">
          <img className="icon-style" src="/icons/professional-agencies.png" alt="" />
          <h4 className="card-title title">Professional agencies</h4>
          <p className="text-thin paragraph">
            that want to publicize their services online to attract more clients
            using a <span className="text-medium underlined">responsive</span>,
            self-managing and 100% customizable website that will show them
            profitable results in a short period of time.
          </p>
        </div>
        <ClientCard
          icon="/icons/independent-entrepreneurs.png"
          title="Independent entrepreneurs"
          text="and professionals of any field who want to position themselves in the digital market through an affordable, easy-to-use and 100% customizable website."
        />
      </FlexWrapper>
      <p className="card-cta text">
        Arrange a meeting with us to get your free and personalized budget{" "}
        <a
          href="https://calendly.com/iteration-websites/iteration-free-consultation-call"
          rel="noopener noreferrer"
          target="_blank"
          className="card-cta-link text-bold"
        >
          here
        </a>
      </p>
    </>
  );
}
