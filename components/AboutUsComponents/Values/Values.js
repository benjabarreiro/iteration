import React from "react";
import FlexWrapper from "../../FlexWrapper/FlexWrapper";
import ValuesCard from "./ValuesCard";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { Carousel } from "react-bootstrap";

export default function Values() {
  const mobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="information-content values-content">
      <h4 className="title">Our Key values</h4>
      {!mobile ? (
        <FlexWrapper>
          <ValuesCard
            title="Constant Optimization"
            text="With the rapid advancement of technology, there may be crucial functionality that your current website has yet to adopt. We’re here to make sure you stay current in this relentless business landscape and gain more customers with your website. Our goal is to make your vision a reality."
          />
          <ValuesCard
            title="Your time is gold"
            text="We work in an organized way based on realistic planning to respect the previously agreed delivery times. Concentrate on your business strategy while delegating all project-related workflow to professionals. We select the right methodology for each specific project to deliver products in a fast, yet effective way."
          />
          <ValuesCard
            title="Profitable results"
            text="We are fully focused to solve your business challenges. No matter the technology or architecture, we will find the most optimal solution and deliver a ready-to-operate product. We implement the most complex solution architecture to establish the foundation of an efficient, performant, and scalable digital solution."
          />
        </FlexWrapper>
      ) : (
        <Carousel>
          <Carousel.Item>
            <ValuesCard
              title="Constant Optimization"
              text="With the rapid advancement of technology, there may be crucial functionality that your current website has yet to adopt. We’re here to make sure you stay current in this relentless business landscape and gain more customers with your website. Our goal is to make your vision a reality."
            />
          </Carousel.Item>
          <Carousel.Item>
            <ValuesCard
              title="Your time is gold"
              text="We work in an organized way based on realistic planning to respect the previously agreed delivery times. Concentrate on your business strategy while delegating all project-related workflow to professionals. We select the right methodology for each specific project to deliver products in a fast, yet effective way."
            />
          </Carousel.Item>
          <Carousel.Item>
            <ValuesCard
              title="Profitable results"
              text="We are fully focused to solve your business challenges. No matter the technology or architecture, we will find the most optimal solution and deliver a ready-to-operate product. We implement the most complex solution architecture to establish the foundation of an efficient, performant, and scalable digital solution."
            />
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
}
