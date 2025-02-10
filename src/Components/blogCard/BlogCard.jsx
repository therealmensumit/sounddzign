export const BlogCard = ({ cardData }) => {
  const { image, category, title } = cardData;
  return (
    <div className="bg-white text-dark font-alegreya rounded-xl overflow-hidden relative">
      <div className="absolute top-2 right-2 rounded-xl px-3 bg-white font-bold text-sm">
        {category}
      </div>
      <img
        src={image}
        alt={title}
        title={title}
        loading="lazy"
        className="lg:h-40 xl:h-60 object-cover object-center rounded-xl w-full"
      />
      <div className="px-6 py-4">
        <h5 className="font-bold text-lg">{title}</h5>
      </div>
    </div>
  );
};
