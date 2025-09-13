import AboutUs from "./component/AboutUs";
import Blogs from "./component/Blogs";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import News from "./component/News";
import Pricing from "./component/Pricing";
import Projects from "./component/Projects";
import Service from "./component/Service";
import Testimonial from "./component/Testimonial";

function App() {
  return (
    <>
      <div id="home" className="bg-[#F7F9FD] px-0">
        <Header />
        <Hero />
      </div>
      <div id="about-us" className="bg-[#FCFCFC] px-0">
        <AboutUs />
      </div>
      <Service />
      <Projects />
      <Testimonial />
      <Pricing />
      <Blogs />
      <News />
      <Footer />
    </>
  );
}

export default App;
