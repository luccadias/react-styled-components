import styled from 'styled-components'
import { FadeInAnimation, Animation } from '../../styled/animations'

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Container = styled(Center)`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background.primary};
`

export const FadeIn = styled(Animation)`
    animation-name: ${FadeInAnimation}
`
