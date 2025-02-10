import { Hero } from "../Components/Hero/Hero";
import { Blog } from "../Components/blog/Blog";
import { Learn } from "../Components/learn/Learn";
import { Student } from "../Components/student/Student";
import { Testimonial } from "../Components/testimonial/Testimonial";

export const Home = () => {
  return (
    <>
      <Hero />
      <Learn />
      <Student />
      <Blog />
      <Testimonial />
    </>
  );
};
