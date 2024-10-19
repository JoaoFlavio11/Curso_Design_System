import { css, styled } from "styled-components"
import { colors, fontSize, fontWeights } from "../../tokens"

import { textProps } from "./index"

const modifier ={
    size: {
        sm: () => css`
            fontSize: ${fontSize.sm}
        `,
        md: () => css`
            fontSize: ${fontSize.md}
        `,
        lg: () => css`
            fontSize: ${fontSize.lg}
        `
    },

    fontWeight: {
        "light": () => css`
            font-weight: ${fontWeights.light}
        `,
        "regular": () => css`
            font-weight: ${fontWeights.regular}
        `,
        "medium": () => css`
            font-weight: ${fontWeights.medium}
        `,
        "bold": () => css`
            font-weight: ${fontWeights.bold}
        `,
    }
}

export const Text = styled.p<textProps>`
    ${ ({ size, fontWeight })  => css`
        ${!!size && modifier.size[size]()}
        ${!!fontWeight && modifier.fontWeight[fontWeight]()}
    `}
    
    color: ${colors.black};
`