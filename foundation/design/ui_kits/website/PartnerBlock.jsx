// PartnerBlock.jsx — MJFF / Team Fox partnership block
const PartnerBlock = () => (
  <section className="ccpd-partner">
    <div className="ccpd-container">
      <div className="ccpd-partner-card">
        <div className="ccpd-eyebrow" style={{color:'#F4A98F'}}>Research partner</div>
        <h2 className="ccpd-display" style={{color:'#FBF8F2', maxWidth: 720}}>
          Every dollar flows to <em style={{fontStyle:'italic'}}>The Michael&nbsp;J.&nbsp;Fox Foundation</em> &amp; Team Fox.
        </h2>
        <p style={{color:'#E4E9F2', maxWidth: 640}}>
          The world's leading Parkinson's research funder — more than
          $185&nbsp;million raised since 2006. We're 100% volunteer-run and keep
          operations as lean as a foundation legally can, so your gift goes
          directly to the science.
        </p>
        <div className="ccpd-partner-row">
          <img src="../../assets/mjff-placeholder.svg" alt="Partner logo placeholder" />
          <a className="ccpd-link-coral" href="#">
            Read our giving promise →
          </a>
        </div>
      </div>
    </div>
  </section>
);

window.PartnerBlock = PartnerBlock;
