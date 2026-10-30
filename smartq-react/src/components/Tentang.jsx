import useFadeUp from '../hooks/useFadeUp'

const Tentang = () => {
  const ref = useFadeUp()

  return (
    <section className="section tentang" id="tentang" ref={ref}>
      <div className="container">
        <div className="tentang-grid">
          <div className="tentang-image-wrap fade-up">
            <picture>
              <source srcSet="/hero-illustration.webp" type="image/webp" />
              <img
                src="/hero-illustration-opt.jpg"
                alt="Tentang SmartQSpace — Pendamping belajar Al-Qur'an dan Bahasa Arab"
                width="520"
                height="290"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="tentang-image-accent"></div>
          </div>
          <div className="tentang-content fade-up">
            <div className="section-label" style={{ background: 'var(--mint-light)', color: 'var(--green-dark)' }}>
              <i className="fa-solid fa-heart"></i> Tentang Kami
            </div>
            <h2>
              SmartQSpace, Pendamping <span style={{ color: 'var(--green)' }}>Perjalanan Belajar</span> Al-Qur'an &amp; Bahasa Arab
            </h2>
            <p>
              SmartQSpace hadir sebagai lembaga bimbingan yang berkomitmen mendampingi setiap peserta dalam belajar Al-Qur'an dan Bahasa Arab secara personal dan bertahap. Kami percaya bahwa setiap individu memiliki kecepatan dan gaya belajar yang unik.
            </p>
            <p>
              Dengan pendekatan privat dan metode talaqqi, kami memastikan setiap peserta mendapatkan perhatian penuh dari pengajar yang kompeten. Proses belajar dirancang agar nyaman, terarah, dan sesuai dengan kemampuan masing-masing peserta.
            </p>
            <div className="tentang-values">
              <div className="tentang-value"><i className="fa-solid fa-check-circle"></i> Personal &amp; Bertahap</div>
              <div className="tentang-value"><i className="fa-solid fa-check-circle"></i> Metode Talaqqi</div>
              <div className="tentang-value"><i className="fa-solid fa-check-circle"></i> Pengajar Kompeten</div>
              <div className="tentang-value"><i className="fa-solid fa-check-circle"></i> Evaluasi Berkala</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tentang
