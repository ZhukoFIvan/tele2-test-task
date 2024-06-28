import { User } from 'lucide-react'
import Search from '../../Search/Search'
import styles from './Header.module.scss'
const Header = ({searchValue, setSearchValue}) => {
	return (
		<header>
			<div className={styles.left}>
				<span>TELE</span>2
			</div>
			<div className={styles.center}>
				<Search searchValue={searchValue} setSearchValue={setSearchValue}/>
			</div>
			<div className={styles.right}>
				<button>
					<User />
				</button>
				<button>Корзина</button>
			</div>
		</header>
	)
}

export default Header
