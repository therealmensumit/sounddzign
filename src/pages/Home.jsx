import { Element } from "react-scroll";
import { Hero } from "../Components/Hero/Hero";
import { Blog } from "../Components/blog/Blog";
import { Learn } from "../Components/learn/Learn";
import { Student } from "../Components/student/Student";
import { Testimonial } from "../Components/testimonial/Testimonial";

export const Home = () => {
  return (
    <>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <Learn />
      </Element>
      <Element name="course-details">
        <Student />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="testimonials">
        <Testimonial />
      </Element>
    </>
  );
};
