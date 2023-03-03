import clsx from 'clsx'
import styles from './Button.module.css'

export const Button = ({ children, click, type }) => {
    return (
        <button className={clsx(styles.btn, type && styles[type])} onClick={click}>
            {children}
        </button>
    )
}
