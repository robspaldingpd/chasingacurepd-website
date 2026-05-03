// StatBand.jsx — the urgency numbers row
const StatBand = () => {
  const stats = [
    ['10M', 'people worldwide with Parkinson\u2019s'],
    ['1M',  'people in the United States'],
    ['90K', 'new U.S. diagnoses every year'],
    ['0',   'cures. Not yet.'],
  ];
  return (
    <section className="ccpd-stats">
      <div className="ccpd-container">
        <div className="ccpd-eyebrow">The math of urgency</div>
        <div className="ccpd-stats-grid">
          {stats.map(([n, l]) => (
            <div key={l} className="ccpd-stat">
              <div className="ccpd-stat-n tnum">{n}</div>
              <div className="ccpd-stat-l">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.StatBand = StatBand;
