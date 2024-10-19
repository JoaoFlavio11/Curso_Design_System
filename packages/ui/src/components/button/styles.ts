import {css, styled} from "styled-components"
import {colors, fontSize} from "../../tokens"

import {type buttonProps} from "./index"

const modifiers = {
    variant: {
        primary: () => css`
        background-color: ${colors.unisal500};
        color: ${colors.white};
        `,
        secondary: () => css`
        background-color: ${colors.unisal900};
        color: ${colors.white};
        `,
    }
}

export const StyledButton = styled.button<buttonProps>`
    background-color: ${colors.unisal500};
    display: flex;
    align-itens: center;
    justify-content: center;
    border: none;
    color: ${colors.white};
    padding: 8px 24px;
    cursor: pointer;
    border-radius:4px;

    ${({ variant }) => css`
        ${variant && modifiers.variant[variant]()}
    `}
`;