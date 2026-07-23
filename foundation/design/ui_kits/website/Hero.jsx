// Hero.jsx — full-bleed hero for homepage
const Hero = ({setPage}) => (
  <section className="ccpd-hero">
    <div className="ccpd-hero-bg" aria-hidden="true">
      {/* Placeholder for real photography — see README */}
      <div className="ccpd-hero-photo" />
      <div className="ccpd-hero-scrim" />
    </div>
    <div className="ccpd-hero-inner">
      <div className="ccpd-eyebrow" style={{color:'#F4A98F'}}>Chasing a Cure Parkinson's Foundation</div>
      <h1 className="ccpd-hero-h1">
        Built from love.<br/>
        Backed by science.<br/>
        <span style={{color:'#ED7350'}}>Focused on the cure.</span>
      </h1>
      <p className="ccpd-hero-sub">
        We fund the research that will end Parkinson's disease —
        every dollar, directly to the science.
      </p>
      <div className="ccpd-hero-cta">
        <a className="ccpd-btn ccpd-btn-primary" href="#" onClick={e => {e.preventDefault(); setPage('ways');}}>
          Donate now
        </a>
        <a className="ccpd-btn ccpd-btn-ghost-on-dark" href="#" onClick={e => {e.preventDefault(); setPage('concert');}}>
          Concert for a Cure, July 18 →
        </a>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
