import { ComponentProps } from "react"

type ItemSuggestionProps = ComponentProps<'button'> & {
    title: string
}

export function ItemSuggestion({ title, ...props }: ItemSuggestionProps) {
    return (
        <button{...props} style={{ cursor: 'pointer' }}>{title}</button>
    )
}