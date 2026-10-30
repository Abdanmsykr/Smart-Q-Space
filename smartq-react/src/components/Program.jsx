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
                  height="230"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="program-card-badge">Tahsin</div>
            </div>
            <div className="program-card-body">
              <h3>Tahsin Al-Qur'an</h3>
              <p>Bimbingan privat perbaikan bacaan Al-Qur'an untuk anak mulai usia 5 tahun hingga orang dewasa. Fokus pada kebenaran dan keindahan bacaan.</p>
              <div className="program-levels">
                <span className="program-level active-level">Mubtadi</span>
                <span className="program-level">Mutawasith</span>
                <span className="program-level">Mutaqoddim</span>
              </div>
              <ul className="program-features">
                <li><i className="fa-solid fa-check"></i> Perbaikan makhraj &amp; sifat huruf</li>
                <li><i className="fa-solid fa-check"></i> Ilmu tajwid &amp; kelancaran membaca</li>
                <li><i className="fa-solid fa-check"></i> Fashahah, waqaf &amp; ibtida</li>
                <li><i className="fa-solid fa-check"></i> Adab membaca Al-Qur'an</li>
              </ul>
              <a href="#pendaftaran" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Pelajari Program
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
                  height="230"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="program-card-badge">Tahfidz</div>
            </div>
            <div className="program-card-body">
              <h3>Tahfidz Al-Qur'an</h3>
              <p>Bimbingan privat menghafal Al-Qur'an untuk anak mulai usia 5 tahun yang sudah mengenal huruf hijaiyah dan peserta yang ingin memulai atau melanjutkan hafalan.</p>
              <div className="program-levels">
                <span className="program-level active-level">Mubtadi (Juz 30)</span>
                <span className="program-level">Mutawasith (Juz 29–30)</span>
                <span className="program-level">Mutaqoddim (Juz 1+)</span>
              </div>
              <ul className="program-features">
                <li><i className="fa-solid fa-check"></i> Setoran hafalan &amp; talaqqi</li>
                <li><i className="fa-solid fa-check"></i> Tikrar &amp; murajaah rutin</li>
                <li><i className="fa-solid fa-check"></i> Pendampingan personal</li>
                <li><i className="fa-solid fa-check"></i> Target hafalan bertahap</li>
              </ul>
              <a href="#pendaftaran" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Pelajari Program
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
                  height="230"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="program-card-badge">Bahasa Arab</div>
            </div>
            <div className="program-card-body">
              <h3>Bahasa Arab</h3>
              <p>Program bimbingan Bahasa Arab SmartQSpace untuk memperkuat pemahaman bahasa Al-Qur'an dan komunikasi dasar. Rincian materi dan biaya akan segera dilengkapi.</p>
              <div className="program-levels">
                <span className="program-level" style={{ background: 'var(--yellow-light)', color: 'var(--orange-dark)', borderColor: 'rgba(242,140,0,0.3)' }}>Segera Hadir</span>
              </div>
              <ul className="program-features">
                <li><i className="fa-solid fa-check"></i> Bimbingan privat Bahasa Arab</li>
                <li><i className="fa-solid fa-check"></i> Materi sesuai kebutuhan peserta</li>
                <li><i className="fa-solid fa-check"></i> Metode interaktif &amp; bertahap</li>
                <li><i className="fa-solid fa-check"></i> Hubungi admin untuk info lengkap</li>
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
