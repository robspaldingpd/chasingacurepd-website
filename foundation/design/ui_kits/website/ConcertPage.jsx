// ConcertPage.jsx — Concert for a Cure landing
const ConcertPage = () => {
  const [openFaq, setOpenFaq] = React.useState(0);
  const faqs = [
    ['Is my ticket tax-deductible?', 'The portion of your ticket price above the fair-market value of food and entertainment is tax-deductible. We\u2019ll email you an itemized receipt.'],
    ['Where is the event?', 'At a private lake home in Fishers, IN on Geist Reservoir. Address and parking instructions will be emailed to RSVPs closer to the date.'],
    ['What if it rains?', 'We have a large tent on-site. Concert for a Cure happens rain or shine.'],
    ['How does the boat raffle work?', '$100 for 1 ticket, $250 for 3, $500 for 10. Winner drawn live at the event on July 18. You do not need to be present to win.'],
  ];
  return (
    <section>
      <div className="ccpd-concert-hero">
        <div className="ccpd-container">
          <div className="ccpd-eyebrow" style={{color:'#F4A98F'}}>Saturday · July 18, 2026 · Fishers, IN</div>
          <h1 className="ccpd-hero-h1" style={{color:'#FBF8F2', maxWidth: 880}}>
            Concert for a Cure
          </h1>
          <p className="ccpd-hero-sub" style={{maxWidth: 640}}>
            An evening at the lake, with live music, great company, and a
            single shared purpose: funding the science that will end
            Parkinson's disease.
          </p>
          <div className="ccpd-hero-cta">
            <a className="ccpd-btn ccpd-btn-primary" href="#">RSVP</a>
            <a className="ccpd-btn ccpd-btn-ghost-on-dark" href="#">Buy raffle tickets →</a>
          </div>
        </div>
      </div>

      <div className="ccpd-container ccpd-concert-body">
        <div className="ccpd-tickets">
          <div className="ccpd-eyebrow">Tickets</div>
          <h2 className="ccpd-display">Join 100 guests at the lake.</h2>
          <div className="ccpd-ticket-grid">
            <div className="ccpd-ticket">
              <div className="ccpd-ticket-tier">Single</div>
              <div className="ccpd-ticket-price tnum">$225</div>
              <ul>
                <li>Seated dinner + cocktail hour</li>
                <li>Live music under the tent</li>
                <li>Live fund-a-need paddle raise</li>
              </ul>
              <button className="ccpd-btn ccpd-btn-primary ccpd-btn-block">RSVP</button>
            </div>
            <div className="ccpd-ticket featured">
              <div className="ccpd-ticket-tier">Couple</div>
              <div className="ccpd-ticket-price tnum">$400</div>
              <ul>
                <li>Two seats together</li>
                <li>Cocktail hour + dinner</li>
                <li>Personal thank-you from Wendy and Rob</li>
              </ul>
              <button className="ccpd-btn ccpd-btn-primary ccpd-btn-block">RSVP</button>
            </div>
            <div className="ccpd-ticket">
              <div className="ccpd-ticket-tier">Sponsor a seat</div>
              <div className="ccpd-ticket-price tnum">$500+</div>
              <ul>
                <li>Covers a caregiver or patient guest</li>
                <li>Recognition in event program</li>
                <li>Full tax-deductible portion</li>
              </ul>
              <button className="ccpd-btn ccpd-btn-ghost ccpd-btn-block">Sponsor</button>
            </div>
          </div>
        </div>

        <div className="ccpd-raffle">
          <div className="ccpd-raffle-copy">
            <div className="ccpd-eyebrow" style={{color:'#F4A98F'}}>Boat raffle</div>
            <h2 className="ccpd-display" style={{color:'#FBF8F2'}}>
              Win a $25,000 boat.<br/>Fund a breakthrough.
            </h2>
            <p style={{color:'#E4E9F2', maxWidth: 520}}>
              Donated by our core sponsor, <strong>Indy Boat Co</strong>. Every
              raffle dollar funds Parkinson's research. Winner drawn live at
              Concert for a Cure.
            </p>
            <div className="ccpd-raffle-tiers">
              <div><span className="tnum">$100</span><small>1 ticket</small></div>
              <div><span className="tnum">$250</span><small>3 tickets</small></div>
              <div><span className="tnum">$500</span><small>10 tickets</small></div>
            </div>
            <a className="ccpd-btn ccpd-btn-primary" href="#">Buy raffle tickets</a>
          </div>
        </div>

        <div className="ccpd-faq">
          <div className="ccpd-eyebrow">Frequently asked</div>
          <h2 className="ccpd-display">Good to know.</h2>
          {faqs.map(([q, a], i) => (
            <div key={i} className={`ccpd-faq-item ${openFaq === i ? 'open' : ''}`}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <span>{q}</span>
                <span className="ccpd-faq-plus">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p>{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.ConcertPage = ConcertPage;
