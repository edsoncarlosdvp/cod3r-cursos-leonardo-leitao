import styled from 'styled-components'
import CardGiftcard from '@material-ui/icons/CardGiftcard'

const Container = styled.div`
    background-color: red;
`

const GifIconStyles = styled(CardGiftcard)`
        width: 5rem !important;
        height: 5rem !important;
        color: yellow;
`

export { Container, GifIconStyles }
