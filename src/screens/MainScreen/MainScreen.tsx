import { AboutMe } from '../../components/AboutMe/AboutMe'
import { ContactMe } from '../../components/ContactMe/ContactMe'
import { Header } from '../../components/Header/Header'
import { Technologies } from '../../components/Technologies/Technologies'
import { useStoreItems } from '../../store/useStoreItems'
import style from './MainScreen.module.css'

export const MainScreen = () => {

    const {item} = useStoreItems()

    return (
        <div className={style.containerPrincipal}>
            <Header/>
            {item === 'aboutMe' && <AboutMe/>}
            {item === 'technologies' && <Technologies/>}
            {item === 'contact' && <ContactMe/>}
        </div>
    )
}