// Footer.jsx
const Footer = () => (
  <footer className="ccpd-footer">
    <div className="ccpd-container ccpd-footer-grid">
      <div>
        <div className="ccpd-brand ccpd-brand-footer">
          <img src="../../assets/mark.svg" alt="" width="36" height="36" />
          <div>
            <div className="ccpd-brand-wm" style={{color:'#FBF8F2'}}>Chasing a Cure</div>
            <div className="ccpd-brand-sub" style={{color:'#F4A98F'}}>Parkinson's Foundation</div>
          </div>
        </div>
        <p style={{color:'#B8BAC4', fontSize:14, marginTop:20, maxWidth:360}}>
          <em style={{fontFamily:'var(--font-serif)', fontSize:17, color:'#FBF8F2'}}>
            Built from love. Backed by science. Focused on the cure.
          </em>
        </p>
      </div>
      <div>
        <div className="ccpd-foot-h">Foundation</div>
        <a href="#">About</a>
        <a href="#">Ways to Give</a>
        <a href="#">Concert for a Cure</a>
        <a href="#">Boat Raffle</a>
      </div>
      <div>
        <div className="ccpd-foot-h">Contact</div>
        <a href="mailto:wendy@chasingacurePD.org">wendy@chasingacurePD.org</a>
        <div className="ccpd-foot-sm">
          11650 Olio Road, Suite 1000-149<br/>
          Fishers, IN 46037
        </div>
      </div>
      <div>
        <div className="ccpd-foot-h">Credentials</div>
        <div className="ccpd-foot-sm">501(c)(3) nonprofit</div>
        <div className="ccpd-foot-sm">EIN 82-5107944</div>
        <div className="ccpd-foot-sm">Research partner: MJFF / Team Fox</div>
      </div>
    </div>
    <div className="ccpd-container ccpd-footer-bottom">
      <span>© 2026 Chasing a Cure Parkinson's Foundation</span>
      <span>100% volunteer-run · every dollar directly to research</span>
    </div>
  </footer>
);

window.Footer = Footer;
