import style from './Header.module.css'
import logo from '../assets/logo.png'

export function Header() {

    return (
        <>
            <div className={style.header}>
                <img src={logo} alt="Logo" />
            </div>
        </>
    )
}