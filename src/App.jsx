import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Team from "./components/Team";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import More from "./components/More";

import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.header>
        <Navbar />
      </motion.header>
      <motion.main>
        <Hero />
        <Features />
        <More />
        <Team />
        <SignIn />
      </motion.main>
      <Footer />
    </>
  );
}

export default App;
