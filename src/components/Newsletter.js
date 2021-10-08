export default function Newsletter() {
  const handleSendForm = e => {
    e.preventDefault()

    try {
      window.open('https://tinyletter.com/peiscof', 'popupwindow', 'scrollbars=yes,width=800,height=600')
      return true
    } catch(error) {
      window.alert('Ocurrió un error y no se realizó la suscripción al newsletter 🤦🏼‍♂️')
      return false
    }
  }

  return (
    <section className="Newsletter">
      <h3>¡Suscríbete al newsletter!</h3>
      <p>Recibe las últimas noticias de Peiscof en tu correo 💌</p>
      <form 
        className="Newsletter-form"
        action="https://tinyletter.com/peiscof" 
        method="post" target="popupwindow" 
        onSubmit={() => handleSendForm}
      >
        <input type="text" name="email" placeholder="Tu correo electrónico*" required />
        <button type="submit" value="Subscribe">Suscribirse</button>
      </form>
      <span>Nunca enviaremos spam</span>
    </section>
  )
}