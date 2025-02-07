import banner from "../../assets/banner.jpg";

export const Hero = () => {
  return (
    <section
      className="h-[720px] bg-no-repeat bg-cover bg-center relative z-0"
      style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero">
        <div className="line">Sound Design Masterclass</div>
        <h1 className="mb-8 text-[40px] font-bold font-alegreya">
          Learn the Art of Sound Design
        </h1>
        <button className="btn">Demo Lesson</button>
      </div>
    </section>
  );
};
