import { Container, GifIconStyles } from './'
import styles from '@styles/Door.module.css'

export const Gif = (): JSX.Element => {
    return (
        <Container className={styles.containerGif}>
            <GifIconStyles />
        </Container>
    )
}
