import styles from './MainNavigation.module.css';
import Link from 'next/link';
const MainNavigation = ()=>{
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All meetups</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup'>Add a new meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default MainNavigation;