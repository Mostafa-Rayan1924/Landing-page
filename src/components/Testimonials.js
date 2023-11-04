import MainTitle from "./MainTitle";
import TestBox from "./TestBox";
import img1 from "../images/avatar1.jpg";
import img2 from "../images/avatar2.jpg";
import img3 from "../images/avatar3.jpg";
import img4 from "../images/avatar4.jpg";
import img5 from "../images/avatar5.jpg";
import img7 from "../images/avatar7.jpg";

const Testimonials = () => {
  return (
    <div className="py-[100px]">
      <MainTitle title={"Testimonials"} />
      <div className="container grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
        <TestBox img={img1} name={"Rawan"} job={"Teacher ismailia"} />
        <TestBox img={img2} name={"Mona"} job={"Teacher ismailia"} />
        <TestBox img={img3} name={"Rayan"} job={"Teacher ismailia"} />
        <TestBox img={img4} name={"Zeina"} job={"Teacher ismailia"} />
        <TestBox img={img5} name={"Fatma"} job={"Teacher ismailia"} />
        <TestBox img={img7} name={"Aesha"} job={"Teacher ismailia"} />
      </div>
    </div>
  );
};

export default Testimonials;
