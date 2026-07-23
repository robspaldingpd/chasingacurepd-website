// WaysToGive.jsx — donation amount picker + monthly toggle + giving promise
const WaysToGive = () => {
  const [amount, setAmount] = React.useState(100);
  const [recurring, setRecurring] = React.useState(false);
  const [custom, setCustom] = React.useState('');
  const amounts = [25, 50, 100, 250, 500, 1000];
  const impactFrames = {
    25: 'Joins thousands of supporters moving the science forward',
    50: 'Funds a day of research through Team Fox',
    100: 'Entry-level — a meaningful gift to MJFF research',
    250: 'A serious investment in the science behind a breakthrough',
    500: 'Part of a community of donors driving Parkinson\u2019s research',
    1000: 'Major gift — consider a personal ask from Wendy or Rob',
  };
  const display = custom ? `$${custom}` : `$${amount.toLocaleString()}`;
  return (
    <section className="ccpd-ways">
      <div className="ccpd-container">
        <div className="ccpd-eyebrow">Ways to Give</div>
        <h1 className="ccpd-display">Every dollar, straight to the research.</h1>
        <p className="ccpd-lead">
          We are 100% volunteer-run — no one takes a salary. We keep operations
          as lean as a foundation legally can, so your gift goes directly to
          Parkinson's disease research through The
          Michael&nbsp;J.&nbsp;Fox Foundation and Team Fox.
        </p>

        <div className="ccpd-donate-card">
          <div className="ccpd-donate-row">
            <label className="ccpd-donate-label">I want to give</label>
            <div className="ccpd-toggle">
              <button
                className={!recurring ? 'on' : ''}
                onClick={() => setRecurring(false)}
              >Once</button>
              <button
                className={recurring ? 'on' : ''}
                onClick={() => setRecurring(true)}
              >Monthly</button>
            </div>
          </div>
          <div className="ccpd-amt-grid">
            {amounts.map(a => (
              <button
                key={a}
                className={!custom && amount === a ? 'amt on' : 'amt'}
                onClick={() => {setAmount(a); setCustom('');}}
              >${a.toLocaleString()}</button>
            ))}
            <input
              className="amt amt-input"
              placeholder="Other"
              value={custom}
              onChange={e => setCustom(e.target.value.replace(/[^0-9]/g,''))}
            />
          </div>
          <p className="ccpd-impact">
            {impactFrames[amount] || 'Every dollar reaches the research.'}
          </p>
          <button className="ccpd-btn ccpd-btn-primary ccpd-btn-block">
            Give {display}{recurring ? ' / month' : ''} →
          </button>
          <p className="ccpd-fineprint">
            501(c)(3) nonprofit · EIN 82-5107944 · Donations are tax-deductible
          </p>
        </div>

        <div className="ccpd-promise-grid">
          <div className="ccpd-promise-card">
            <div className="ccpd-promise-n tnum">100%</div>
            <div className="ccpd-promise-t">volunteer-run — no one takes a salary</div>
          </div>
          <div className="ccpd-promise-card">
            <div className="ccpd-promise-n tnum">$0</div>
            <div className="ccpd-promise-t">paid in salaries, ever</div>
          </div>
          <div className="ccpd-promise-card">
            <div className="ccpd-promise-n tnum">$185M+</div>
            <div className="ccpd-promise-t">raised by MJFF / Team Fox since 2006</div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.WaysToGive = WaysToGive;
