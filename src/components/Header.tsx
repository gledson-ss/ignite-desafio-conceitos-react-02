import '../styles/header.scss'

interface headerProps{
    title: string
}

export function Header({ title }: headerProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {title}</span></span>
        </header>
    )
}