import style from './Header.module.css'
import logo from '../../assets/logo.png'
import { useStoreItems } from '../../store/useStoreItems'
import { useState } from 'react'

export const Header = () => {

    const {setItem} = useStoreItems()
    const [menu, setMenu] = useState<boolean>(false) // Estado que controla el menu interactivo

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

            {/* Menu responsivo */}
            <div className={style.responsiveMenu}>
                <span onClick={() => setMenu(true)} className="material-symbols-outlined">menu</span>
            </div>

            {
                menu ? 
                    <div className={style.backdrop}>

                        <div className={style.menu}>
                            <p onClick={() => setItem('aboutMe')}>Sobre Mí</p>
                            <p onClick={() => setItem('technologies')}>Tecnologías</p>
                            <p onClick={() => setItem('contact')}>Redes</p>
                            <p onClick={() => setItem('projects')}>Proyectos</p>
                            <button onClick={() => setMenu(false)}>Cerrar</button>
                        </div>
                    </div>
                    : 
                    null
            }
        </div>
    )
}