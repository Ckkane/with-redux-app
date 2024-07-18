import styles from '../styles/Authentication.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";

const Cart = () => {

    // const dispatch = useAppDispatch();
    // const items = useAppSelector(getCartitems);

    return (
        <div className={styles.container}>
            <div style={{backgroundColor:'#f7f5f5',width:'600px',height:'700px', borderRadius:'10px'}}>
                <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'space-between',height:'100%'}}>
                    <h1>Регистрация</h1>

                    <span>Заполните данные для регистрации нового пользователя</span>

                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center', height:'100%',width:'300px'}}>
                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                <span>Имя</span>
                            </div>
                            <input style={{padding:'10px'}} type="text" placeholder='Введите Имя' />
                        </div>
                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                <span>Фамилия</span>
                            </div>
                            <input style={{padding:'10px'}} type="text" placeholder='Введите Фамилию' />
                        </div>
                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                <span>Имя</span>
                            </div>
                            <input style={{padding:'10px'}} type="text" placeholder='Введите Имя' />
                        </div>
                        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
                            <div style={{padding:'10px 0px'}}>
                                <span>Имя</span>
                            </div>
                            <input style={{padding:'10px'}} type="text" placeholder='Введите Имя' />
                        </div>
                        <span>Уже есть аккаунт?<a>Войти</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Cart;