import styled, { keyframes } from 'styled-components'

export const FadeInAnimation = keyframes`
    from { opacity: 0; }
    to { opacity: 1}
`

export const Animation = styled.div`  
  animation-duration: ${props => props.duration};  
  animation-timing-function: ${props => props.timingFunction};
`;

Animation.defaultProps = {  
    duration: '2s',
    timingFunction: 'ease',
};