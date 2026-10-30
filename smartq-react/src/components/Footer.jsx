const Footer = () => {
  return (
    <footer className="footer" id="kontak">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img
                src="/logo-opt.png"
                alt="SmartQSpace Logo"
                width="160"
                height="48"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <p>SmartQSpace — Pendamping perjalanan belajar Al-Qur'an dan Bahasa Arab secara personal dan bertahap untuk anak dan dewasa.</p>
            <div className="footer-social">
              <a href="https://wa.me/6285603769230" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp SmartQSpace">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/smartqspace_?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram SmartQSpace">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://facebook.com/smartqspace" target="_blank" rel="noopener noreferrer" aria-label="Facebook SmartQSpace">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div>
            <h4>Navigasi</h4>
            <ul className="footer-links">
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#program">Program</a></li>
              <li><a href="#paket">Paket</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#pendaftaran">Pendaftaran</a></li>
            </ul>
          </div>
          <div>
            <h4>Program</h4>
            <ul className="footer-links">
              <li><a href="#program">Tahsin Al-Qur'an</a></li>
              <li><a href="#program">Tahfidz Al-Qur'an</a></li>
              <li><a href="#program">Bahasa Arab</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Kontak</h4>
            <div className="footer-contact-item">
              <i className="fa-brands fa-whatsapp"></i>
              <a href="https://wa.me/6285603769230" target="_blank" rel="noopener noreferrer">0856-0376-9230</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-brands fa-instagram"></i>
              <a href="https://www.instagram.com/smartqspace_?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">@smartqspace</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-brands fa-facebook-f"></i>
              <a href="https://facebook.com/smartqspace" target="_blank" rel="noopener noreferrer">smartqspace</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-globe"></i>
              <span>smartqspace.co.id</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 SmartQSpace. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  )
}

export default Footer
