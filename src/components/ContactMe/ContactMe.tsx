import style from './ContactMe.module.css'

export const ContactMe = () => {

     //Datos de email
    const email = 'maurogarzia2@gmail.com'
    const subject = 'Consulta de Servicio'
    const body = 'Hola, estoy interesado en contratar el servicio'
    const encodeSubject = encodeURIComponent(subject)
    const encodeBody = encodeURIComponent(body)

    // Datos de numero
    const phoneNumber = 2616928706
    const message = 'Hola estoy interesado en contratar el servicio'
    const encodeMessage = encodeURIComponent(message)

    return (
        <div className={style.containerPrincipal}>
            <h1>Redes</h1>

            <div className={style.containerTargets}>

                <div className={style.target}>
                    <a className="target" href={`http://wa.me/${phoneNumber}?text=${encodeMessage}`} target="_blank">
                        <p>
                            <i className="fab fa-whatsapp" ></i>
                        </p>
                    </a>
                </div>

                <div className={style.target}>
                    <a className="target" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeSubject}&body=${encodeBody}`} target="_blank">
                        <p>
                            <span className="material-symbols-outlined">mail</span>
                        </p>
                    </a>
                </div>

                <div className={style.target}>
                    <a className="target" href="https://www.linkedin.com/in/mauro-garzia-65126135a/" target="_blank">
                        <p>
                            <i className="fab fa-linkedin"></i>
                        </p>
                    </a>
                </div>

                <div className={style.target}>
                    <a className="target" href="https://github.com/maurogarzia" target="_blank">
                        <p>
                            <i className="fab fa-github"></i>
                        </p>
                    </a>
                </div>
            </div>

        </div>
    )
}