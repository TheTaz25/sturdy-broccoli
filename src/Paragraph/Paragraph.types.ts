export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>{
    children?: JSX.Element[] | JSX.Element | string,
    align?: 'left' | 'center' | 'right',
    block?: Boolean,
    lineSpacing?: 'default' | 'large',
}
