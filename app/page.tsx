import Image from "next/image";
import Intro from "./_intro/Intro";
import About from "./_about/About";
import Advantages from "./_advantages/Advantages";
import Reason from "./_reason/Reason";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Advantages />
      <Reason />
    </>
  );
}
