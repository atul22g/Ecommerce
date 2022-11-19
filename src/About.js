import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  document.title = "Ecommerce | About"
  const { myName } = useProductContext();

  const data = {
    name: "Atul Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
