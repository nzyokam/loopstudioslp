const Landing = () => {
  return (
    <div>
      {/* Large Devices */}
      <div
        className="h-screen w-screen bg-Landinglg-bg sm:hidden ms:hidden xs:hidden lg:flex flex-col"
        style={{
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          color: `white`,
        }}
      >
        
        <div className="ml-60 w-[50%] flex h-full items-center">
          <div className="border">
            {" "}
            <h1 className="h1init p-10">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
          </div>
        </div>
      </div>
      {/* Small Devices */}
      <div
        className="sm:flex lg:hidden ms:flex xs:flex h-screen bg-Landingsm-bg"
        style={{
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          color: `white`,
        }}
      >
      
        <div className="flex justify-center items-center h-screen text-start">
          <h1 className="smH1 p-10 ">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
