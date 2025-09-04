import style from './Header.module.css'
import logo from '../../assets/logo.png'

export const Header = () => {
    return (
        <div className={style.containerPrincipal}>
            <div className={style.containerItem}>
                <p>Sobre Mí</p>
                <p>Tecnologías</p>
            </div>
            
            <div className={style.image}>
                <img src={logo} alt="" />
            </div>

            
            <div className={style.containerItem}>
                <p>Redes</p>
                <p>Proyectos</p>

            </div>
        </div>
    )
}