import Creations from "./Components/Creations";
import Informational from "./Components/Informational";
import Landing from "./Components/Landing";

const Home = () => {
  return (
    <>
      {" "}
      <Landing />
      <Informational/>
      <Creations />
    </>
  );
};

export default Home;
