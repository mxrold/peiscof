import { useState } from 'react';
import Router from 'next/router';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';

export default function Modal({ isModal, setIsModal }) {
  const [data, setData] = useState(() => {
    if(isModal.response === 'result') {
      return { 
        title: '¡Correo enviado!',
        description: 'Tu mensaje ha sido enviado. Te responderemos lo más pronto posible.',
        logo: <BsFillCheckCircleFill color="#10B981" />,
        textBtn: 'Cerrar',
        borderBox: 'green'
       }
    } else {
      return { 
        title: 'Error en el envió',
        description: 'No se pudo enviar el correo, intenta nuevamente. Si el problema persiste, envíanos un mensaje a través de nuestras redes sociales.',
        logo: <MdOutlineCancel color="#EF4444" />,
        textBtn: 'Volver atras',
        borderBox: 'red'
      }
    }
  })
  
  const handleResponse = () => isModal.response === 'result' ? Router.push('/') : setIsModal(!open);

  return (
    <div className="Modal">
      <div className={`Modal__data Modal__data--${data.borderBox}`}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <span>{data.logo}</span>
        <button onClick={handleResponse}>{data.textBtn}</button>
      </div>
    </div>
  );
}