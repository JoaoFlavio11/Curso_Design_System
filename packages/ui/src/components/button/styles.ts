import {css, styled} from "styled-components"
import {colors, fontSize} from "../../tokens"

import {buttonProps} from "./Index"

const modifiers = {
    variant: {
        primary: () => css`
        background-color: ${colors.gray500};
        color: ${colors.white};
        `,
        secondary: () => css`
        background-color: ${colors.gray400};
        color: ${colors.white};
        `,
    }
}

export const Button = styled.button<buttonProps>`
    background-color: ${colors.unisal300};
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
`;modifiers