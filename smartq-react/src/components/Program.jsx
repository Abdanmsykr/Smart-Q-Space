import useFadeUp from '../hooks/useFadeUp'

const Program = () => {
  const ref = useFadeUp()

  return (
    <section className="section program" id="program" ref={ref}>
      <div className="container">
        <div className="text-center fade-up">
          <div className="section-label" style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
            <i className="fa-solid fa-book-quran"></i> Program Pembelajaran
          </div>
          <h2 className="section-title">Pilih Program yang Sesuai</h2>
          <p className="section-desc mx-auto">
            SmartQSpace menyediakan tiga program utama yang dirancang untuk memenuhi kebutuhan belajar Al-Qur'an dan Bahasa Arab secara menyeluruh.
          </p>
        </div>
        <div className="program-grid">

          {/* Tahsin */}
          <div className="program-card fade-up">
            <div className="program-card-image">
              <picture>
                <source srcSet="/tahsin-illustration.webp" type="image/webp" />
                <img
                  src="/tahsin-illustration-opt.jpg"
                  alt="Program Tahsin Al-Qur'an SmartQSpace"
                  width="340"
                  height="240"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="program-card-badge" style={{ background: 'var(--lavender)' }}>Tahsin</div>
            </div>
            <div className="program-card-body">
              <h3>Tahsin Al-Qur'an</h3>
              <p>Bimbingan privat perbaikan bacaan Al-Qur'an untuk anak mulai usia 5 tahun hingga orang dewasa. Fokus pada kebenaran dan keindahan bacaan.</p>
              <div className="program-levels">
                <span className="program-level" style={{ borderColor: 'var(--mint)', color: 'var(--green-dark)' }}>🟢 Mubtadi</span>
                <span className="program-level" style={{ borderColor: 'var(--orange)', color: 'var(--orange)' }}>🟠 Mutawasith</span>
                <span className="program-level" style={{ borderColor: 'var(--lavender)', color: 'var(--lavender-dark)' }}>🟣 Mutaqoddim</span>
              </div>
              <ul className="program-features">
                <li><i className="fa-solid fa-check-circle"></i> Perbaikan makhraj &amp; sifat huruf</li>
                <li><i className="fa-solid fa-check-circle"></i> Ilmu tajwid &amp; kelancaran membaca</li>
                <li><i className="fa-solid fa-check-circle"></i> Fashahah, waqaf &amp; ibtida</li>
                <li><i className="fa-solid fa-check-circle"></i> Adab membaca Al-Qur'an</li>
              </ul>
              <a href="#pendaftaran" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Pelajari Program <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Tahfidz */}
          <div className="program-card fade-up">
            <div className="program-card-image">
              <picture>
                <source srcSet="/tahfidz-illustration.webp" type="image/webp" />
                <img
                  src="/tahfidz-illustration-opt.jpg"
                  alt="Program Tahfidz Al-Qur'an SmartQSpace"
                  width="340"
                  height="240"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="program-card-badge" style={{ background: 'var(--orange)' }}>Tahfidz</div>
            </div>
            <div className="program-card-body">
              <h3>Tahfidz Al-Qur'an</h3>
              <p>Bimbingan privat menghafal Al-Qur'an untuk anak mulai usia 5 tahun yang sudah mengenal huruf hijaiyah dan peserta yang ingin memulai atau melanjutkan hafalan.</p>
              <div className="program-levels">
                <span className="program-level" style={{ borderColor: 'var(--mint)', color: 'var(--green-dark)' }}>🟢 Mubtadi — Juz 30</span>
                <span className="program-level" style={{ borderColor: 'var(--orange)', color: 'var(--orange)' }}>🟠 Mutawasith — Juz 29–30</span>
                <span className="program-level" style={{ borderColor: 'var(--lavender)', color: 'var(--lavender-dark)' }}>🟣 Mutaqoddim — Juz 1+</span>
              </div>
              <ul className="program-features">
                <li><i className="fa-solid fa-check-circle"></i> Setoran hafalan &amp; talaqqi</li>
                <li><i className="fa-solid fa-check-circle"></i> Tikrar &amp; murajaah rutin</li>
                <li><i className="fa-solid fa-check-circle"></i> Pendampingan personal</li>
                <li><i className="fa-solid fa-check-circle"></i> Target hafalan bertahap</li>
              </ul>
              <a href="#pendaftaran" className="btn btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
                Pelajari Program <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Bahasa Arab */}
          <div className="program-card fade-up">
            <div className="program-card-image">
              <picture>
                <source srcSet="/arabic-illustration.webp" type="image/webp" />
                <img
                  src="/arabic-illustration-opt.jpg"
                  alt="Program Bahasa Arab SmartQSpace"
                  width="340"
                  height="240"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="program-card-badge" style={{ background: 'var(--green)' }}>Bahasa Arab</div>
            </div>
            <div className="program-card-body">
              <h3>Bahasa Arab</h3>
              <p>Program bimbingan Bahasa Arab SmartQSpace untuk memperkuat pemahaman bahasa Al-Qur'an dan komunikasi dasar. Rincian materi dan biaya akan segera dilengkapi.</p>
              <div className="program-levels">
                <span className="program-level" style={{ borderColor: 'var(--green)', color: 'var(--green-dark)' }}>📚 Program Segera Hadir</span>
              </div>
              <ul className="program-features">
                <li><i className="fa-solid fa-check-circle"></i> Bimbingan privat Bahasa Arab</li>
                <li><i className="fa-solid fa-check-circle"></i> Materi sesuai kebutuhan peserta</li>
                <li><i className="fa-solid fa-check-circle"></i> Metode interaktif &amp; bertahap</li>
                <li><i className="fa-solid fa-check-circle"></i> Hubungi admin untuk info lengkap</li>
              </ul>
              <a
                href="https://wa.me/6285603769230?text=Halo%20Admin%20SmartQSpace%2C%20saya%20ingin%20bertanya%20tentang%20program%20Bahasa%20Arab."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Tanya Admin
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Program
