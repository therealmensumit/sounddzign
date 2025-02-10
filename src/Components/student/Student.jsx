import { student } from "../../staticData/student";

export const Student = () => {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="container">
        <div className="learn-row">
          {student?.map((student) => (
            <div key={student.id}>
              <img
                src={student.icon}
                alt={student.name}
                title={student.name}
                className="mx-auto"
                loading="lazy"
              />
              <h2 className="text-[32px] md:text-[40px] font-black">
                {student.nums}
              </h2>
              <div className="font-bold text-3xl font-alegreya">
                {student.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
