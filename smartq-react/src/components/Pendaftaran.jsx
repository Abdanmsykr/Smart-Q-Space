import useFadeUp from '../hooks/useFadeUp'

const ADMIN_PHONE = '6285603769230'

const handleFormSubmit = (e) => {
  e.preventDefault()
  const namaPeserta = document.getElementById('nama-peserta').value
  const usia = document.getElementById('usia').value
  const namaWali = document.getElementById('nama-wali').value
  const whatsapp = document.getElementById('whatsapp').value
  const program = document.getElementById('program-pilihan').value
  const paket = document.getElementById('paket-pilihan').value
  const kemampuan = document.getElementById('kemampuan').value
  const jadwal = document.getElementById('jadwal').value
  const catatan = document.getElementById('catatan').value

  let message = `Assalamu'alaikum Admin SmartQSpace,\n\nSaya ingin mendaftarkan peserta berikut:\n\n`
  message += `*Nama Peserta:* ${namaPeserta}\n`
  message += `*Usia:* ${usia}\n`
  if (namaWali) message += `*Nama Orang Tua/Wali:* ${namaWali}\n`
  message += `*No. WhatsApp:* ${whatsapp}\n`
  message += `*Program Pilihan:* ${program}\n`
  if (paket) message += `*Paket Pilihan:* ${paket}\n`
  if (kemampuan) message += `*Kemampuan Awal:* ${kemampuan}\n`
  if (jadwal) message += `*Preferensi Jadwal:* ${jadwal}\n`
  if (catatan) message += `*Catatan:* ${catatan}\n`
  message += `\nMohon informasi lebih lanjut. Jazakumullahu khairan!`

  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${ADMIN_PHONE}?text=${encodedMessage}`, '_blank')
}

const Pendaftaran = () => {
  const ref = useFadeUp()

  return (
    <section className="section pendaftaran" id="pendaftaran" ref={ref}>
      <div className="container">
        <div className="text-center fade-up">
          <div className="section-label" style={{ background: 'var(--white)', color: 'var(--green)' }}>
            <i className="fa-solid fa-user-plus"></i> Pendaftaran
          </div>
          <h2 className="section-title">Mulai Perjalanan Belajar Bersama SmartQSpace</h2>
          <p className="section-desc mx-auto">
            Isi formulir di bawah ini untuk memulai konsultasi dan pendaftaran. Admin kami akan segera menghubungi Anda melalui WhatsApp.
          </p>
        </div>
        <div className="pendaftaran-wrapper">
          {/* Form */}
          <div className="reg-form fade-up">
            <h3><i className="fa-solid fa-pen-to-square" style={{ color: 'var(--green)' }}></i> Formulir Pendaftaran</h3>
            <form id="reg-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nama-peserta">Nama Peserta *</label>
                  <input type="text" id="nama-peserta" required placeholder="Nama lengkap peserta" />
                </div>
                <div className="form-group">
                  <label htmlFor="usia">Usia Peserta *</label>
                  <input type="text" id="usia" required placeholder="Contoh: 7 tahun" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nama-wali">Nama Orang Tua / Wali</label>
                  <input type="text" id="nama-wali" placeholder="Jika peserta anak-anak" />
                </div>
                <div className="form-group">
                  <label htmlFor="whatsapp">Nomor WhatsApp *</label>
                  <input type="tel" id="whatsapp" required placeholder="08xxxxxxxxxx" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="program-pilihan">Program Pilihan *</label>
                  <select id="program-pilihan" required>
                    <option value="">— Pilih Program —</option>
                    <option value="Tahsin Al-Qur'an">Tahsin Al-Qur'an</option>
                    <option value="Tahfidz Al-Qur'an">Tahfidz Al-Qur'an</option>
                    <option value="Bahasa Arab">Bahasa Arab</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="paket-pilihan">Paket Pilihan</label>
                  <select id="paket-pilihan">
                    <option value="">— Pilih Paket —</option>
                    <option value="Trial (4x30 menit - Rp200.000)">Trial — 4×30 menit</option>
                    <option value="Paket 30 Menit (8x30 menit - Rp300.000)">Paket 30 Menit — 8×30 menit</option>
                    <option value="Paket Talaqi (8x45 menit - Rp450.000)">Paket Talaqi — 8×45 menit</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="kemampuan">Kemampuan Awal</label>
                <select id="kemampuan">
                  <option value="">— Pilih Kemampuan —</option>
                  <option value="Belum mengenal huruf hijaiyah">Belum mengenal huruf hijaiyah</option>
                  <option value="Sudah mengenal huruf hijaiyah">Sudah mengenal huruf hijaiyah</option>
                  <option value="Sudah bisa membaca Al-Qur'an">Sudah bisa membaca Al-Qur'an</option>
                  <option value="Sudah memiliki hafalan">Sudah memiliki hafalan</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="jadwal">Preferensi Jadwal</label>
                <input type="text" id="jadwal" placeholder="Contoh: Senin & Rabu, sore hari" />
              </div>
              <div className="form-group">
                <label htmlFor="catatan">Catatan Tambahan</label>
                <textarea id="catatan" placeholder="Informasi tambahan yang ingin disampaikan" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '20px' }}></i> Kirim Pendaftaran via WhatsApp
              </button>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>
                Data pendaftaran akan dikirim langsung ke WhatsApp admin SmartQSpace untuk diproses.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pendaftaran
