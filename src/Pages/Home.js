import Accordion from "../components/Accordion";
import Cat from "../components/Cat";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="pt-[150px] md:pt-[200px]">
      <Hero />
      <Cat />
      <Accordion />
      <Testimonials />
      <Product />
    </div>
  );
};

export default Home;
