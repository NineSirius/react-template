import clsx from 'clsx'
import React from 'react'
import { Overlay } from '../Overlay'
import styles from './Drawer.module.css'

export const Drawer = ({ children, show, close }) => {
    return (
        <>
            <div className={clsx(styles.drawer, show && styles.active)}>{children}</div>
            <Overlay show={show} close={close} />
        </>
    )
}
