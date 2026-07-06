export default function Nav() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <div className="brand">
          frankel<span>.</span>dev
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#iris">IRIS</a>
          <a href="#projets">Projets</a>
          <a href="#stack">Stack</a>
          <a href="#github">GitHub</a>
        </div>
        <a href="#contact" className="nav-cta">
          Me contacter
        </a>
      </div>
    </nav>
  );
}
