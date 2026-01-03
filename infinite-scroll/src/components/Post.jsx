import { useEffect } from "react";

export default function Post({ data, setPageNo }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (params) => {
        if (params[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageNo((prev) => prev + 1);
        }
      },
      {
        threshold: 0.5,
      }
    );
    const lastImage = document.querySelector(".image-post:last-child");
    if (!lastImage) {
      return;
    }
    observer.observe(lastImage);
    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [data]);
  return (
    <div className="container">
      {data.map((photo) => {
        return (
          <img key={photo.id} className="image-post" src={photo.download_url} />
        );
      })}
    </div>
  );
}
