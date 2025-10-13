import style from './Projects.module.css'

export const Projects = () => {
    return (
        <div className={style.containerPrincipal}>
            <h1>Proyectos</h1>

            <div className={style.containerProjects}>

                <div className={style.project}>
                    <h2>Tarjeta Interactiva</h2>

                    <div className={style.info}>

                        <p>Tarjeta de presentación interactiva diseñada para mostrar el perfil de un programador web de manera dinámica y profesional.</p>
                        <div className={style.containerButton}>

                                <a href="https://github.com/maurogarzia/tarjetaPresentacion" target='blank'>
                                    <button>
                                        Repositorio
                                    </button>
                                </a>
                                <a href="https://tarjeta-presentacion-pntv.vercel.app/" target='blank'>
                                    <button>
                                        Ver
                                    </button>
                                </a>
                        </div>
                    </div>
                </div>

                <div className={style.project}>
                    <h2>WeatherApp</h2>

                    <div className={style.info}>
                        <p>Página del clima para conocer el clima en cada ciudad en ese momento </p>

                        <div className={style.containerButton}>
                            <a href="https://github.com/maurogarzia/WeatherApp" target='blank'>
                                <button>Repositorio</button>
                            </a>
                            <a href="http://weather-app-ivory-nine-68.vercel.app" target='blank'>
                                <button>Ver</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={style.project}>
                    <h2>TodoFood</h2>
                    
                    <div className={style.info}>
                        <p>Página para hamburgueseria de tipo E-commerce</p>
                        
                        <div className={style.containerButton}>
                            <a href="https://github.com/maurogarzia/FrontEndTodoFood" target='blank'>
                                <button>Repositorio Frontend</button>
                            </a>
                            <a href="https://github.com/maurogarzia/BackEndTodoFood" target='blank'>
                                <button>Respositorio Backend</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div className={style.project}>
                    <h2>Dashboard de Finzanzas</h2>

                    <div className={style.info}>
                        <p>
                            Página para gestionar la contabilidad y llevar los movimientos financieros, ademas cuenta
                            con un app móvil para android desarrollada en react-native
                        </p>

                        <div className={style.containerButtonFinance}>
                            <a href="https://github.com/maurogarzia/financeDashboard" target='blank'>
                                <button>Repositorio de Página web</button>
                            </a>
                            <a href="https://github.com/maurogarzia/AppFinanzas" target='blank'>
                                <button>Repositorio de app móvil</button>
                            </a>
                            <a href="https://finance-dashboard-ten-ruby.vercel.app/" target='blank'>
                                <button>Ver</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}