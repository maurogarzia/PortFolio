import style from './Technologies.module.css'

export const Technologies = () => {
    return (
        <div className={style.containerPrincipal}>
            <h1>Tecnologías</h1>

            <div className={style.containerTechnologies}>
                
                <div className={style.target}>
                    <div className={style.logo}>
                        <span className="fab fa-java" style={{ "fontSize": "55px" }}></span>
                    </div>
                    <p>Java</p>
                </div>

                <div className={style.target}>
                    <div className={style.logo}>
                        <span className="fab fa-js-square" style={{ "fontSize": "55px", "color": "#F7DF1E" }}></span>
                    </div>
                    <p>Javascript</p>
                </div>

                <div className={style.target}>
                    <div className={style.logo}>
                        <span className="fab fa-python" style={{ "fontSize": "55px", "color": "#3572A5" }}></span>
                    </div>
                    <p>Python</p>
                </div>

                <div className={style.target}>
                    <div className={style.logo}>
                        <span className="fab fa-git-alt" style={{ "fontSize": "55px", "color": "#F05032" }}></span>
                    </div>
                    <p>Git</p>
                </div>

                <div className={style.target}>
                    <div className={style.logo}>
                        <span className="fab fa-react" style={{ "fontSize": "55px", "color": "#61DAFB" }}></span>
                    </div>
                    <p>React</p>
                </div>

                <div className={style.target}>
                    <div className={style.logo}>
                        <span className="fas fa-leaf" style={{ "fontSize": "55px", "color": "#6DB33F" }}></span>
                    </div>
                    <p>Springboot</p>
                </div>

                <div className={style.target}>
                    <div className={style.logo}>
                        <span className="fab fa-css3-alt" style={{ "fontSize": "55px", "color": "#38B2AC" }}></span>
                    </div>
                    <p>Tailwind</p>
                </div>
            </div>
            
        </div>
    )
}