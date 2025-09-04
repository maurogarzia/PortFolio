import { AboutMe } from '../../components/AboutMe/AboutMe'
import { Header } from '../../components/Header/Header'
import { useStoreItems } from '../../store/useStoreItems'
import style from './MainScreen.module.css'

export const MainScreen = () => {

    const {item} = useStoreItems()

    return (
        <div className={style.containerPrincipal}>
            <Header/>
            {item === 'aboutMe' && <AboutMe/>}

        </div>
    )
}