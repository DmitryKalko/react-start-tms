import style from './styles/main.module.css'
import logo from './images/tms.jpeg';
const Main = (props) => {
    const {serverData} = props;
    return(
        <main className={style.main}>
            <p className={style.mainText}>это страница с контентом</p> 
            <img className={style.picture}
                // style={{display: 'none'}} // еще вариант стилизации - не брать за основной!
                src={process.env.PUBLIC_URL + 'logo512.png'}
                alt='top-scroll'
            />
            <img src={logo} alt="logo" />

            <h1>{serverData}</h1>
        </main> 
    )
}
export default Main;