import styled from 'styled-components'

const GridContainer = styled.div `
    display:grid;
    grid-template-columns:repeat(12, 1fr);
    grid-column-gap: ${props => props.colGap}px;
    grid-row-gap: ${props => props.rowGap}px;
`

const ColContainer = styled.div `

    grid-column: span ${props => props.desktop || 12};

    @media (max-width: 768) {
        grid-column: span ${props => props.tablet || '8'}
    }
    @media (max-width: 480px) {
        grid-column: span ${props => props.mobile || '4'}
    }
`

export { GridContainer, ColContainer }