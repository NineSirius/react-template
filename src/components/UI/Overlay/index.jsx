import clsx from 'clsx'
import styles from './Overlay.module.css'

export const Overlay = ({ show, close }) => {
    return <div className={clsx(styles.overlay, show && styles.active)} onClick={close}></div>
}
