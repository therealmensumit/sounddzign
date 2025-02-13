import { useGetTestimonilasQuery } from "../../service/api";

export const Testimonial = () => {
  const { data } = useGetTestimonilasQuery();

  return (
    <section className="py-20 bg-dark text-white">
      <div className="container">
        <h2 className="text-[32px] md:text-[40px] !mb-10 !font-black line">
          What our students say?
        </h2>
        <div className="grid gap-20 lg:grid-cols-3 font-alegreya">
          {data &&
            data?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col md:flex-row lg:flex-col gap-4">
                <div className="mx-auto md:mx-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    title={testimonial.title}
                    loading="lazy"
                    className="rounded-xl"
                    width={testimonial.size}
                    height={testimonial.size}
                  />
                </div>
                <div className="text-center md:text-start">
                  <h5 className="mb-1.5 text-xl font-bold">
                    {testimonial.title}
                  </h5>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
