import { GifIcon } from '../Gif'
import DoorModel from '../../model/DoorModel'
import styles from '../../styles/Door.module.css'
//import { Container, Frame, Content, NumberDoor, Knob, Selected, Floor } from './DoorStyles'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export const Door = (props: DoorProps): JSX.Element => {
    const door = props.value
    const selected = door.selected && !door.opening ? styles.selected : ''
    const changeSelected = (e: any) => props.onChange(door.changeSelected())
    const open = (e: any) => {
        e.stopPropagation()
        props.onChange(door.open())
    }

    function renderDoor() {
        return (
            <div className={styles.content}>
                <div className={styles.num}>{door.num}</div>
                <div className={styles.knob} onClick={open} />
            </div>
        )
    }

    return (
        <div className={styles.container} onClick={changeSelected}>
            <div className={`${styles.frame} ${selected}`}>
                {door.closed ? renderDoor() : door.haveGif ? <GifIcon /> : false}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}
