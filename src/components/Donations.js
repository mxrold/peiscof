export default function Donations() {
  return (
    <div className="Donations">
      <p>Ayudanos a seguir creando contenido 🚀</p>
        <a className="Buy-coffee" target="_blank" rel='noopener'href="https://www.buymeacoffee.com/peiscof">
          <img
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy me a coffee"
          />
          <span>Buy me a coffee</span>
        </a>
        <a href='https://cafecito.app/peiscof' rel='noopener' target='_blank'>
            <img srcset='https://cdn.cafecito.app/imgs/buttons/button_6.png 1x, https://cdn.cafecito.app/imgs/buttons/button_6_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_6_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_6.png' alt='Invitame un café en cafecito.app' />
        </a>
    </div>
  )
}