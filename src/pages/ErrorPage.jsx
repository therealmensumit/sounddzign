import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-black text-white h-dvh flex items-center">
      <div className="container text-center">
        <h1 className="mb-8 text-[32px] md:text-[40px]">404 Page not found</h1>
        <button onClick={() => navigate(-1)} className="btn">
          Go Back
        </button>
      </div>
    </section>
  );
};
