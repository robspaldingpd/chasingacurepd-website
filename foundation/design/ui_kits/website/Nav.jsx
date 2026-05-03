// Nav.jsx — sticky top nav with logo, page links, donate CTA
const Nav = ({page, setPage}) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const pages = [
    ['home', 'Home'],
    ['about', 'About'],
    ['ways', 'Ways to Give'],
    ['concert', 'Concert for a Cure'],
  ];
  return (
    <nav className={`ccpd-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="ccpd-nav-inner">
        <a className="ccpd-brand" onClick={e => {e.preventDefault(); setPage('home');}} href="#">
          <img src="../../assets/mark.svg" alt="" width="36" height="36" />
          <div className="ccpd-brand-text">
            <div className="ccpd-brand-wm">Chasing a Cure</div>
            <div className="ccpd-brand-sub">Parkinson's Foundation</div>
          </div>
        </a>
        <div className="ccpd-nav-links">
          {pages.map(([k, label]) => (
            <a
              key={k}
              href="#"
              className={page === k ? 'on' : ''}
              onClick={e => {e.preventDefault(); setPage(k); window.scrollTo(0, 0);}}
            >{label}</a>
          ))}
        </div>
        <a className="ccpd-btn ccpd-btn-primary ccpd-donate" href="#" onClick={e => {e.preventDefault(); setPage('ways');}}>
          Donate
        </a>
      </div>
    </nav>
  );
};

window.Nav = Nav;
