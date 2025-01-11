//import Navbar from "./ui/NavBar";

import Navbar from "./ui/NavBar";

const Landing = () => {
  return (
    <div
      className="h-screen w-screen bg-Landinglg-bg flex flex-col"
      style={{
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        color: `white`,
      }}
    >
      <div>
        {" "}
        <Navbar />
      </div>
      <div className="ml-60 w-[40%] flex h-full items-center">
        <div className="border">
          {" "}
          <h1 className="h1init">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
