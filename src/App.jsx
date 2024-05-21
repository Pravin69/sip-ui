import Navbar from "./components/Navbar";
import NewsInfo from "./components/NewsInfo";
import Slider from "./components/Slider";
import Button from "./ui/Button";

const slides = [
  { image: "./images/spi-1.jpeg", caption: "Slide 1" },
  { image: "./images/spi-2.jpeg", caption: "Slide 2" },
  { image: "./images/spi-3.jpeg", caption: "Slide 3" },
  { image: "./images/spi-4.jpeg", caption: "Slide 4" },
  { image: "./images/spi-5.jpeg", caption: "Slide 5" },
];

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <section className="flex w-full h-full items-center justify-center">
        <div className="w-4/5 h-4/5 flex gap-8">
          <NewsInfo />
          <Slider slides={slides} />
        </div>
      </section>
    </div>
  );
}

export default App;
