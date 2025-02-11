import { learn } from "../../staticData/learn";

export const Learn = () => {
  const { img, title, lists } = learn;
  return (
    <section className="py-20 bg-black text-white overflow-x-hidden">
      <div className="container">
        <h2 className="text-[32px] md:text-[40px] !mb-10 line">{title}</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="md:hidden">
            <img
              src={img}
              alt={title}
              title={title}
              className="w-full"
              loading="lazy"
            />
          </div>
          <div>
            <ul className="font-alegreya text-xl font-normal ps-8">
              {lists?.map((list, i) => (
                <li className="learn-list" key={i}>
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <div className="learn-img-div">
            <img
              src={img}
              alt={title}
              title={title}
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
