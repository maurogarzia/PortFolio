import style from './Projects.module.css'

export const Projects = () => {
    return (
        <div className={style.containerPrincipal}>
            <h1>Proyectos</h1>

            <div className={style.containerProjects}>

                <div className={style.project}>
                    <h2>Tarjeta Interactiva</h2>

                    <div className={style.info}>

                        <p>Descripcion</p>
                        <div className={style.containerButton}>
                            <button>Repositorio</button>
                            <button>Ver</button>
                        </div>
                    </div>
                </div>

                <div className={style.project}>
                    <h2>TodoFood</h2>
                    
                    <div className={style.info}>
                        <p>Descripcion</p>
                        
                        <div className={style.containerButton}>
                            <button>Repositorio</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}