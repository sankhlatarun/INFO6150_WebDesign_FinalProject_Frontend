import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { default as Awards } from "../components/Landing/Awards";
import { default as Growing } from "../components/Landing/Growing";
import { default as Info } from "../components/Landing/Info";
import { default as Reviews } from "../components/Landing/Reviwes";
import { default as Safety } from "../components/Landing/Safety";
import { default as Section } from "../components/Landing/Section";
import { default as Services } from "../components/Landing/Services";
import { default as Slider } from "../components/Landing/Slider";
import { removeall } from "../Redux/ticket/ticket.action";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeall());
  }, []);
  return (
    <>
      <Slider />
      <Info />
      <Safety />
      <Services />
      <Awards />
      <Reviews />
      <Growing />
      <Section />
    </>
  );
}
export default Home;
