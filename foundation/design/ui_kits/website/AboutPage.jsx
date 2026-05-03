// AboutPage.jsx — founding story, founder bios
const AboutPage = () => (
  <section className="ccpd-about">
    <div className="ccpd-container">
      <div className="ccpd-eyebrow">About</div>
      <h1 className="ccpd-display" style={{maxWidth: 880}}>
        Built from a promise. Powered by volunteers. Focused on a cure.
      </h1>
      <p className="ccpd-lead" style={{maxWidth: 720}}>
        Chasing a Cure Parkinson's Foundation was born on Christmas morning
        2017, when co-founder Wendy Chase received her mother Sue's terminal
        Parkinson's diagnosis and decided to redirect grief into action.
        Incorporated in April 2018, the Fishers, Indiana-based 501(c)(3)
        funds high-impact Parkinson's research through The Michael J. Fox
        Foundation and its Team Fox program.
      </p>

      <hr/>

      <div className="ccpd-founders">
        <div className="ccpd-founder">
          <div className="ccpd-founder-photo" aria-hidden="true" />
          <div className="ccpd-eyebrow">Co-founder</div>
          <h3 className="ccpd-h3-serif">Wendy Chase</h3>
          <p>
            Wendy is the driving force of the foundation. Her mother Sue died
            from Parkinson's in December 2018 — the same year Wendy founded
            the organization in her honor. A veteran of the pharmaceutical and
            biotech industries with decades of leadership experience, Wendy
            built Chasing a Cure to channel her professional expertise and
            personal heartbreak into something lasting.
          </p>
        </div>
        <div className="ccpd-founder">
          <div className="ccpd-founder-photo" aria-hidden="true" />
          <div className="ccpd-eyebrow">Co-founder</div>
          <h3 className="ccpd-h3-serif">Rob Spalding</h3>
          <p>
            Rob brings a career spanning pharma, biotech, and health technology
            to the mission. His aunt lives with Parkinson's disease — making
            this work personal as well as professional. He and Wendy bring
            nearly 60 combined years of life sciences leadership to a
            foundation built entirely on volunteer effort.
          </p>
        </div>
      </div>
    </div>
  </section>
);

window.AboutPage = AboutPage;
