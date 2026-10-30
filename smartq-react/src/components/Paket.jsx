import useFadeUp from '../hooks/useFadeUp'

const Paket = () => {
  const ref = useFadeUp()

  return (
    <section className="section paket" id="paket" ref={ref}>
      <div className="container">
        <div className="text-center fade-up">
          <div className="section-label" style={{ background: 'var(--orange-light)', color: 'var(--orange)' }}>
            <i className="fa-solid fa-tag"></i> Pilihan Paket
          </div>
          <h2 className="section-title">Paket Bimbingan Tahsin &amp; Tahfidz</h2>
          <p className="section-desc mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan kenyamanan belajar peserta. Semua paket mencakup bimbingan privat 1-on-1.
          </p>
        </div>
        <div className="paket-grid">

          {/* Trial */}
          <div className="paket-card fade-up">
            <div className="paket-icon" style={{ background: 'var(--mint-light)', color: 'var(--green)' }}>
              <i className="fa-solid fa-seedling"></i>
            </div>
            <h3>Trial</h3>
            <p className="paket-desc">Coba dulu sebelum memilih</p>
            <div className="paket-price">Rp200<span>.000</span></div>
            <ul className="paket-details">
              <li><i className="fa-solid fa-check"></i> 4 kali pertemuan</li>
              <li><i className="fa-solid fa-check"></i> 30 menit per pertemuan</li>
              <li><i className="fa-solid fa-check"></i> Bimbingan privat 1-on-1</li>
              <li><i className="fa-solid fa-check"></i> Evaluasi kemampuan awal</li>
            </ul>
            <a href="#pendaftaran" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              Pilih Paket
            </a>
          </div>

          {/* Paket 30 Menit */}
          <div className="paket-card featured fade-up">
            <div className="paket-icon" style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
              <i className="fa-solid fa-clock"></i>
            </div>
            <h3>Paket 30 Menit</h3>
            <p className="paket-desc">Bimbingan rutin efektif</p>
            <div className="paket-price">Rp300<span>.000</span></div>
            <ul className="paket-details">
              <li><i className="fa-solid fa-check"></i> 8 kali pertemuan</li>
              <li><i className="fa-solid fa-check"></i> 30 menit per pertemuan</li>
              <li><i className="fa-solid fa-check"></i> Bimbingan privat 1-on-1</li>
              <li><i className="fa-solid fa-check"></i> Evaluasi perkembangan</li>
            </ul>
            <a href="#pendaftaran" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Pilih Paket
            </a>
          </div>

          {/* Paket Talaqi */}
          <div className="paket-card fade-up">
            <div className="paket-icon" style={{ background: 'var(--lavender-light)', color: 'var(--lavender-dark)' }}>
              <i className="fa-solid fa-book-open-reader"></i>
            </div>
            <h3>Paket Talaqi</h3>
            <p className="paket-desc">Sesi intensif talaqqi</p>
            <div className="paket-price">Rp450<span>.000</span></div>
            <ul className="paket-details">
              <li><i className="fa-solid fa-check"></i> 8 kali pertemuan</li>
              <li><i className="fa-solid fa-check"></i> 45 menit per pertemuan</li>
              <li><i className="fa-solid fa-check"></i> Bimbingan privat 1-on-1</li>
              <li><i className="fa-solid fa-check"></i> Evaluasi &amp; laporan perkembangan</li>
            </ul>
            <a href="#pendaftaran" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              Pilih Paket
            </a>
          </div>

        </div>
        <div className="paket-note fade-up">
          <i className="fa-solid fa-circle-info"></i>
          <div>
            <strong>Catatan:</strong> Harga di atas berlaku untuk program Tahsin dan Tahfidz Al-Qur'an. Untuk informasi biaya program Bahasa Arab, silakan hubungi admin melalui{' '}
            <a href="https://wa.me/6285603769230" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: 600 }}>WhatsApp</a>.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Paket

