import useFadeUp from '../hooks/useFadeUp'

const keunggulanData = [
  {
    icon: 'fa-user-graduate',
    title: 'Bimbingan Privat',
    desc: 'Pembelajaran satu pengajar untuk satu peserta, sehingga setiap sesi belajar fokus pada kebutuhan dan perkembangan individu.',
  },
  {
    icon: 'fa-layer-group',
    title: 'Pembelajaran Bertahap',
    desc: 'Materi disusun secara bertahap dari level Mubtadi hingga Mutaqoddim, disesuaikan dengan kemampuan awal setiap peserta.',
  },
  {
    icon: 'fa-microphone',
    title: 'Metode Talaqqi',
    desc: 'Peserta belajar langsung secara lisan dari pengajar, metode yang terbukti efektif dalam pembelajaran Al-Qur\'an dan Bahasa Arab.',
  },
  {
    icon: 'fa-hand-holding-heart',
    title: 'Pendampingan Personal',
    desc: 'Setiap peserta mendapat perhatian khusus dari pengajar yang memahami gaya belajar dan kecepatannya masing-masing.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Evaluasi Perkembangan',
    desc: 'Perkembangan peserta dipantau dan dievaluasi secara berkala agar proses belajar terus berjalan optimal dan terarah.',
  },
]

const Keunggulan = () => {
  const ref = useFadeUp()

  return (
    <section className="section keunggulan" id="keunggulan" ref={ref}>
      <div className="container">
        <div className="text-center fade-up">
          <div className="section-label" style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
            <i className="fa-solid fa-circle-check"></i> Mengapa SmartQSpace?
          </div>
          <h2 className="section-title">Keunggulan Belajar Bersama Kami</h2>
          <p className="section-desc mx-auto">
            Kami menghadirkan pendekatan belajar Al-Qur'an dan Bahasa Arab yang personal, terstruktur, dan menyenangkan untuk setiap peserta.
          </p>
        </div>
        <div className="keunggulan-grid">
          {keunggulanData.map((item, idx) => (
            <div className="keunggulan-card fade-up" key={idx}>
              <div className="keunggulan-icon">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keunggulan
