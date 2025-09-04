import style from './AboutMe.module.css'
import image from '../../assets/imagen_protfolio.jpeg'

export const AboutMe = () => {
    return (
        <div className={style.containerPrincipal}>
            
            <h1 className={style.title}>Sobre Mí</h1>

            <div className={style.image}>
                <img src={image} alt="" />
            </div>

            <div className={style.paragraph}>    
                <p>
                    ¡Hola! Soy Mauro Garzia, un apasionado programador con experiencia en React, y TypeScript, tengo 22 años y vivo en Argentina, me encanta transformar ideas en soluciones digitales eficientes y funcionales, priorizando siempre la calidad del código y la experiencia del usuario.
                </p>
                <p>
                    He trabajado en proyectos personales que incluyen el desarrollo de aplicaciones web interactivas, automatización de procesos e integración de API's robustas". Mi enfoque combina creatividad y análisis para resolver problemas complejos de manera efectiva.
                    Actualmente, estoy enfocado en pulir mis habilidades en React y aprender Tailwind. Además, disfruto colaborar en equipos dinámicos y aprender constantemente de los desafíos tecnológicos.
                    Cuando no estoy programando, me podes encontrar jugando videojuegos, jugando a la pelota o en el gimnasio.
                </p>
                <p>
                    He trabajado en proyectos personales que incluyen el desarrollo de aplicaciones web interactivas, automatización de procesos e integración de API's robustas". Mi enfoque combina creatividad y análisis para resolver problemas complejos de manera efectiva.
                    Actualmente, estoy enfocado en pulir mis habilidades en React y aprender Tailwind. Además, disfruto colaborar en equipos dinámicos y aprender constantemente de los desafíos tecnológicos.
                    Cuando no estoy programando, me podes encontrar jugando videojuegos, jugando a la pelota o en el gimnasio.
                </p>
            </div>

            <h1 className={style.title}>Estudios</h1>
            <div className={style.paragraph}>
                <h2>Secundarios</h2>
                <p>
                    Estudié en la escuela 4-097 Gilda Cosma de Lede, de la cual me egresé con un título de Bachiller en Economía.
                </p>

                <h2>Universitarios</h2>
                <p>
                    Estudio en la Universidad Tecnológica Nacional, en la Tecnicatura Universitaria en Programación. Ingresé en 2023 y estoy por recibirme a falta de las prácticas profesionales. Además cursé 2 años en Ingeniería en Sistemas de Inforrmación en la misma universidad
                </p>

                <h2>Cursos Realizados</h2>
                <p>
                    Realice el curso de Armado, reparación y mantenimiento de computadoras, dictado y evaluado por la Fundación Saber & Excelencia Integral
                </p>
            </div>
        </div>  
    )
}