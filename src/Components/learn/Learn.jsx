import { learn } from "../../staticData/learn";

export const Learn = () => {
  return (
    <section className="py-20 bg-black text-white overflow-x-hidden">
      <div className="container">
        <h2 className="text-[32px] md:text-[40px] !mb-10 line">
          {learn.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="md:hidden">
            <img
              src={learn.img}
              alt={learn.title}
              title={learn.title}
              className="w-full"
              loading="lazy"
            />
          </div>
          <div>
            <ul className="font-alegreya text-xl font-normal ps-8">
              {learn?.lists?.map((list, i) => (
                <li className="learn-list" key={i}>
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <div className="learn-img-div">
            <img
              src={learn.img}
              alt={learn.title}
              title={learn.title}
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
