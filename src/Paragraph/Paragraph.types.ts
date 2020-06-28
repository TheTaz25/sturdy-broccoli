export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>{
    align?: 'left' | 'center' | 'right',
    block?: Boolean,
    lineSpacing?: 'default' | 'large',
}
