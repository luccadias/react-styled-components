import styled from 'styled-components'

export const Paragraph = styled.p`
    font-size: ${props => props.size || props.theme.size.general[0]}px;
    color: ${props => props.theme.color.primary};
    width: 500px;
`
