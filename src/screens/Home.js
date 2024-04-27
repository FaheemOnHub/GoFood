import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="m-3">
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
