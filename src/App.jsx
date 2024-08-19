import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas } from "./components";
import Hero from "./components/Hero";
import Footer from "./components/Footer";



const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-cover bg-no-repeat bg-center'> */}
        <Navbar />
        {/* </div> */}
        <div className='relative z-0'>
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
