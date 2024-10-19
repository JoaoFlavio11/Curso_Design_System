import * as S from "./styles"

export interface textProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: "sm" | "md" | "lg"
    fontWeight?: "light"|"regular"|"medium"|"bold"
}

export const Text = ({ size = "md", fontWeight="regular", children, ...props }: textProps) => {
    return(
        <S.Text size={size} > {children} </S.Text>
    )
}