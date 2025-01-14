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
{/* Large Devices */}
    <div className="sm:hidden ms:hidden xs:hidden lg:block">
      <div className="flex flex-row ml-[10%] mr-[10%] mb-20 justify-between">
        <h1 className="text-4xl tracking-wider light">OUR CREATIONS</h1>
        <button className="buttonn">SEE ALL</button>
      </div>
      <div className="image-grid mb-80">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.title} />
            <div className="image-title light">{image.title}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Small Devices */}
        <div className="sm:flex xs:flex ms:flex flex-col lg:hidden">
        <div className="flex flex-row ml-[10%] mr-[10%] mb-20 justify-center">
        <h1 className="text-2xl tracking-wider light">OUR CREATIONS</h1>
       
      </div>
      <div className="image-grid mb-10">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.title} />
            <div className="image-title light">{image.title}</div>
          </div>
        ))}
       
      </div>
      <button className="buttonn lightt ">SEE ALL</button>
        </div>

  </div>
  );
};

export default Creations;
