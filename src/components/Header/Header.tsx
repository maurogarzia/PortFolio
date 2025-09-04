import style from './Header.module.css'
import logo from '../../assets/logo.png'
import { useStoreItems } from '../../store/useStoreItems'

export const Header = () => {

    const {setItem} = useStoreItems()

    return (
        <div className={style.containerPrincipal}>
            <div className={style.containerItem}>
                <p onClick={() => setItem('aboutMe')}>Sobre Mí</p>
                <p onClick={() => setItem('technologies')}>Tecnologías</p>
            </div>
            
            <div className={style.image}>
                <img src={logo} alt="" />
            </div>

            
            <div className={style.containerItem}>
                <p onClick={() => setItem('contact')}>Redes</p>
                <p onClick={() => setItem('projects')}>Proyectos</p>

            </div>
        </div>
    )
}