const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/6285603769230?text=Halo%20Admin%20SmartQSpace%2C%20saya%20ingin%20bertanya%20tentang%20program%20bimbingan."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp SmartQSpace"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#25D366',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        transition: 'all 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 6px 30px rgba(37,211,102,0.5)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'
      }}
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  )
}

export default FloatingWhatsApp

