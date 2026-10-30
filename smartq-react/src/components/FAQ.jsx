import { useState, useRef } from 'react'
import useFadeUp from '../hooks/useFadeUp'

const faqData = [
  {
    q: 'Apa saja program yang tersedia di SmartQSpace?',
    a: 'SmartQSpace menyediakan tiga program utama: <strong>Tahsin Al-Qur\'an</strong> (perbaikan bacaan), <strong>Tahfidz Al-Qur\'an</strong> (menghafal Al-Qur\'an), dan <strong>Bahasa Arab</strong>. Setiap program dirancang secara privat 1-on-1 agar sesuai dengan kebutuhan peserta.',
  },
  {
    q: 'Bagaimana tingkatan belajar di SmartQSpace?',
    a: 'Program Tahsin dan Tahfidz memiliki tiga tingkatan: <strong>Mubtadi</strong> (pemula), <strong>Mutawasith</strong> (menengah), dan <strong>Mutaqoddim</strong> (lanjutan). Penempatan tingkatan disesuaikan dengan kemampuan awal peserta melalui evaluasi oleh pengajar.',
  },
  {
    q: 'Apakah harus sudah bisa membaca Al-Qur\'an sebelum mendaftar?',
    a: 'Tidak harus. Program Tahsin SmartQSpace menerima peserta dari tingkat pemula (Mubtadi) yang baru belajar mengenal huruf hijaiyah. Untuk program Tahfidz, peserta sebaiknya sudah mengenal huruf hijaiyah. Pengajar akan menyesuaikan materi dengan kemampuan awal peserta.',
  },
  {
    q: 'Berapa usia minimal untuk mengikuti program?',
    a: 'Program Tahsin dan Tahfidz menerima peserta mulai usia <strong>5 tahun</strong>. Program Tahsin juga terbuka untuk orang dewasa yang ingin memperbaiki bacaan Al-Qur\'annya.',
  },
  {
    q: 'Apa metode pembelajaran yang digunakan?',
    a: 'SmartQSpace menggunakan metode <strong>talaqqi</strong>, yaitu peserta belajar langsung secara lisan dari pengajar. Untuk tahfidz, ditambah metode <strong>tikrar</strong> (pengulangan) dan <strong>murajaah</strong> (menjaga hafalan). Semua sesi bimbingan dilakukan secara privat 1-on-1.',
  },
  {
    q: 'Apa saja pilihan paket yang tersedia?',
    a: 'Tersedia tiga pilihan paket untuk Tahsin dan Tahfidz: <strong>Trial</strong> (4 pertemuan × 30 menit, Rp200.000), <strong>Paket 30 Menit</strong> (8 pertemuan × 30 menit, Rp300.000), dan <strong>Paket Talaqi</strong> (8 pertemuan × 45 menit, Rp450.000). Untuk informasi biaya program Bahasa Arab, silakan hubungi admin.',
  },
  {
    q: 'Bagaimana proses pendaftaran di SmartQSpace?',
    a: 'Anda dapat mengisi formulir pendaftaran di website ini atau langsung menghubungi admin melalui <strong>WhatsApp di 0856-0376-9230</strong>. Setelah itu, admin akan membantu konsultasi untuk menentukan program, paket, dan jadwal yang sesuai.',
  },
  {
    q: 'Apakah pembelajaran dilakukan secara online atau tatap muka?',
    a: 'Untuk informasi lebih lanjut mengenai metode pelaksanaan (online atau tatap muka), silakan berkonsultasi dengan admin melalui WhatsApp kami di <strong>0856-0376-9230</strong>.',
  },
]

const FaqItem = ({ q, a }) => {
  const [active, setActive] = useState(false)
  const answerRef = useRef(null)

  return (
    <div className={`faq-item${active ? ' active' : ''}`}>
      <button className="faq-question" onClick={() => setActive(!active)} type="button">
        {q}
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div
        className="faq-answer"
        style={{ maxHeight: active ? answerRef.current?.scrollHeight + 'px' : '0' }}
      >
        <div
          className="faq-answer-inner"
          ref={answerRef}
          dangerouslySetInnerHTML={{ __html: a }}
        />
      </div>
    </div>
  )
}

const FAQ = () => {
  const ref = useFadeUp()

  return (
    <section className="section faq" id="faq" ref={ref}>
      <div className="container">
        <div className="text-center fade-up">
          <div className="section-label" style={{ background: 'var(--yellow-light)', color: 'var(--orange)' }}>
            <i className="fa-solid fa-circle-question"></i> FAQ
          </div>
          <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
          <p className="section-desc mx-auto">
            Temukan jawaban atas pertanyaan umum tentang program dan pendaftaran di SmartQSpace.
          </p>
        </div>
        <div className="faq-list">
          {faqData.map((item, idx) => (
            <FaqItem key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
