const Informational = () => {
  return (
    <div className="h-screen w-screen flex flex-row justify-center items-center">
      <div className="absolute">
        <img className="w-[1200px] mr-[10vw]" src="./desktop/image-interactive.jpg" />
      </div>
      <div className="w-[600px] z-10 bg-white mt-[25vw] ml-[50vw] p-20">
        <h1 className="font pb-5">THE LEADER IN INTERACTIVE VR</h1>
        <p>
          Founded in 2011. Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Informational;
