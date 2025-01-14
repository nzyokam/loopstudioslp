const Informational = () => {
  return (
    <div>
      {/* Large Devices */}
    <div className="h-screen w-screen lg:flex flex-row justify-center items-center sm:hidden ms:hidden xs:hidden">
      <div className="absolute">
        <img className="w-[1200px] mr-[10vw]" src="./desktop/image-interactive.jpg" />
      </div>
      <div className="w-[600px] h-[400px] flex flex-col justify-center z-10 bg-white mt-[35vw] ml-[60vw] ">
        <h1 className="font pb-5 tracking-widest ml-[5vw]">THE LEADER IN INTERACTIVE VR</h1>
        <p className="paragraph ml-[5vw]">
          Founded in 2011. Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
    {/* Small Devices */}
    <div className="sm:flex justify-center xs:flex ms:flex flex-col lg:hidden h-screen w-screen">
    <div className="m-8">
        <img className="" src="./mobile/image-interactive.jpg" />
      </div>
      <div className="text-center">
        <h1 className="font mb-10 m-12  tracking-normal ">THE LEADER IN INTERACTIVE VR</h1>
        <p className="paragraph mt-0 m-14 ">
          Founded in 2011. Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
    
    </div>
  );
};

export default Informational;
