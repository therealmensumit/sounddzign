import { BlogCard } from "../blogCard/BlogCard";
import { useGetPostsQuery } from "../../service/api";

export const Blog = () => {
  const { data } = useGetPostsQuery();

  return (
    <section className="py-20 bg-pink text-white">
      <div className="container">
        <h2 className="text-[32px] md:text-[40px] !mb-10 !font-black line after:!bg-yellow">
          Latest Posts
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data?.map((card) => <BlogCard key={card.id} cardData={card} />)}
        </div>
      </div>
    </section>
  );
};
