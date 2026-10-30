const Hero = () => {
  return (
    <section className="hero" id="beranda">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Temani Perjalanan Belajar <span>Al-Qur'an</span> dan <span>Bahasa Arab</span> Bersama SmartQSpace
            </h1>
            <p className="hero-desc">
              Pembelajaran yang personal dan bertahap, dirancang khusus untuk setiap peserta. Dari tahsin hingga tahfidz, kami mendampingi setiap langkah perjalanan belajar Al-Qur'an dan Bahasa Arab Anda.
            </p>
            <div className="hero-buttons">
              <a href="#program" className="btn btn-primary btn-lg">
                <i className="fa-solid fa-book-quran"></i> Lihat Program
              </a>
              <a href="#pendaftaran" className="btn btn-secondary btn-lg">
                Daftar Sekarang
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">Privat</div>
                <div className="hero-stat-label">Bimbingan 1-on-1</div>
              </div>
              <div>
                <div className="hero-stat-value">Bertahap</div>
                <div className="hero-stat-label">Sesuai Kemampuan</div>
              </div>
              <div>
                <div className="hero-stat-value">Talaqqi</div>
                <div className="hero-stat-label">Metode Belajar</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <picture>
                <source srcSet="/hero-illustration.webp" type="image/webp" />
                <img
                  src="/hero-illustration-opt.jpg"
                  alt="Suasana belajar Al-Qur'an yang hangat dan menyenangkan bersama SmartQSpace"
                  width="520"
                  height="290"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
