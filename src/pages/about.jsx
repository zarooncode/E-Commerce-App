import snacksImage from "../assets/snacks-image.jpg";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-title-container">
        <strong style={{ fontSize: "18px" }}>
          <span style={{ color: "grey", fontSize: "18px" }}>ABOUT</span> US ———
        </strong>
        <div className="about-text-images">
          <img className="about-image" src={snacksImage} alt="About Image" />
          <div className="about-text">
            <p className="paragraph-1">
              (WE ONLY SELL FOOD AT PISES, RIYADH AS FELLOW STUDENTS) <br />
              The owners of this company are, me, (Anonymous), <br /> and my
              friend (Anonymous) This Website was built by ME, <br /> wanting to
              increase our customers, so our team can profit, <br /> and our
              customers can enjoy! This app took me time to build, so <br />
              please do read everything and check everything out! <br /> We are
              supplised from trusted brands like{" "}
              <a
                className="links"
                href="https://google.com/search?q=local bakala"
                target="_blank"
              >
                MY LOCAL BAKALA
              </a>
              ,{" "}
              <a
                className="links"
                href="https://google.com/search?q=Panda KSA"
                target="_blank"
              >
                PANDA
              </a>
              .
              <br />
              We only deliver food in the school of{" "}
              <a
                href="https://google.com/search?q=PISES Riyadh"
                className="links"
                target="_blank"
              >
                PISES
              </a>
              , Riyadh (as students). The purpose of this store is so that our
              <br />
              fellow classmates and students do not have to wait in the line for
              30 minutes for canteen, <br /> just for the break to end as soon as they get
              their turn, we <br /> will profit from this, and our students will
              profit from this saving their time and money <br /> (WE GIVE
              DISCOUNTS AND OUR PRICE IS CHEAPER THEN CANTEEN), <br /> what we
              want to YOU guys to do is to buy products from us, but not telling
              any Sirs/Teachers.
              <br />
              (Some features like displaying cart sub-total/total are still Work
              In Progress(WIP))
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
