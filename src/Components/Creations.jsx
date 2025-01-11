import "./ui/Creations.css";

const Creations = () => {
  const images = [
    { src: "./desktop/image-deep-earth.jpg", title: "DEEP EARTH" },
    { src: "./desktop/image-night-arcade.jpg", title: "NIGHT ARCADE" },
    { src: "./desktop/image-soccer-team.jpg", title: "SOCCER TEAM VR" },
    { src: "./desktop/image-grid.jpg", title: "THE GRID" },
    { src: "./desktop/image-from-above.jpg", title: "FROM UP ABOVE VR" },
    { src: "./desktop/image-pocket-borealis.jpg", title: "POCKET BOREALIS" },
    { src: "./desktop/image-curiosity.jpg", title: "THE CURIOSITY" },
    { src: "./desktop/image-fisheye.jpg", title: "MAKE IT FISHEYE" },
  ];

  return (
    <div>
      <div className="flex flex-row m-10">
        <h1 className="">OUR CREATIONS</h1>
        <button>SEE ALL</button>
      </div>
      <div className="image-grid mb-80">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.title} />
            <div className="image-title">{image.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creations;
