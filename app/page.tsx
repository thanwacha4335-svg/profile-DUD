const profileLinks = [
  {
    name: "DUDSHOP777 SHOP",
    description: "เข้าสู่เว็บไซต์ร้านค้า",
    url: "https://dudshop777.web2u.xyz/home",
    tag: "OFFICIAL SHOP",
  },
  {
    name: "DISCORD",
    description: "พูดคุยและติดตามข่าวสาร",
    url: "https://discord.com/",
    tag: "COMMUNITY",
  },
  {
    name: "FACEBOOK",
    description: "ติดตามผ่าน Facebook",
    url: "https://www.facebook.com/",
    tag: "SOCIAL",
  },
  {
    name: "INSTAGRAM",
    description: "ติดตามผ่าน Instagram",
    url: "https://www.instagram.com/",
    tag: "SOCIAL",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <nav className="topbar">
        <a className="brand" href="#home" aria-label="DUDSHOP777 home">
          <span className="brand-mark">D7</span>
          <span>DUDSHOP<span className="red-text">777</span></span>
        </a>
        <span className="online"><i /> SYSTEM ONLINE</span>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> OFFICIAL PROFILE / DIGITAL CREATOR</p>
          <h1>WELCOME TO<br /><span>DUDSHOP777</span></h1>
          <p className="hero-description">
            ยินดีต้อนรับสู่เว็บไซต์โปรไฟล์อย่างเป็นทางการ
            พื้นที่รวมข้อมูลและช่องทางติดต่อของ DUDSHOP777
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#links">สำรวจช่องทาง <span>↗</span></a>
            <a className="button button-ghost" href="#about">เกี่ยวกับเรา</a>
          </div>
          <div className="hero-meta"><span>THAILAND</span><b>•</b><span>EST. 2026</span><b>•</b><span>INDEPENDENT PROFILE</span></div>
        </div>

        <div className="hero-card">
          <div className="card-top"><span>PROFILE ID</span><span>№ 007</span></div>
          <div className="avatar">D<span>7</span></div>
          <h2>DUDSHOP<span className="red-text">777</span></h2>
          <p className="role">OFFICIAL PROFILE</p>
          <div className="card-line" />
          <div className="card-bottom"><span>STATUS</span><strong><i /> ACTIVE</strong></div>
        </div>
      </section>

      <section className="content-grid" id="about">
        <article className="panel about-panel">
          <div className="section-label"><span>01 / ABOUT</span><b>INTRODUCTION</b></div>
          <h2>ABOUT <span className="red-text">ME</span></h2>
          <p>
            พื้นที่แนะนำตัวและรวบรวมข้อมูลของ DUDSHOP777
            เว็บไซต์นี้จัดทำขึ้นเพื่อรวมช่องทางติดต่อและเว็บไซต์ที่เกี่ยวข้องไว้ในที่เดียว
          </p>
          <div className="about-note"><span className="note-icon">✦</span><span>เว็บไซต์โปรไฟล์นี้แยกจากระบบร้านค้า DUDSHOP777 โดยเฉพาะ</span></div>
        </article>

        <article className="panel info-panel">
          <div className="section-label"><span>02 / DETAILS</span><b>PROFILE INFO</b></div>
          <div className="info-row"><span>DISPLAY NAME</span><strong>DUDSHOP777</strong></div>
          <div className="info-row"><span>LOCATION</span><strong>THAILAND</strong></div>
          <div className="info-row"><span>WEBSITE</span><strong>OFFICIAL PROFILE</strong></div>
          <div className="info-row"><span>STATUS</span><strong className="active-text">● ONLINE</strong></div>
        </article>
      </section>

      <section className="links-section" id="links">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> 03 / CONNECT LINKS</p>
            <h2>MY <span className="red-text">LINKS</span></h2>
            <p className="section-subtitle">ช่องทางติดต่อและเว็บไซต์ที่เกี่ยวข้อง</p>
          </div>
          <span className="links-count">04 LINKS AVAILABLE</span>
        </div>

        <div className="links-grid">
          {profileLinks.map((link, index) => (
            <a className="link-card" href={link.url} target="_blank" rel="noopener noreferrer" key={link.name}>
              <div className="link-card-top"><span className="link-number">0{index + 1}</span><span className="link-tag">{link.tag}</span></div>
              <div className="link-card-bottom">
                <div><h3>{link.name}</h3><p>{link.description}</p></div>
                <span className="link-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">D7</span><span>DUDSHOP<span className="red-text">777</span></span></a>
        <p>© 2026 DUDSHOP777. ALL RIGHTS RESERVED.</p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
