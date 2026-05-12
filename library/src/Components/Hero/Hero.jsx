import "./Hero.css";
import za from "../../assets/za.jpg"

function Hero() {
  
  return (
    <>
     <section className="hero">

      <img src={za} className="hero-image" />

      <div className="overlay"></div>

      <div className="hero-content">

        <h1>

          Rent your car <br />

          the <span>easy</span> way

        </h1>

        <p>

          From luxury to economy <br />

          Fast process • Great prices

        </p>

       

      </div>

    </section>




    </>
  );
}
export default Hero;
