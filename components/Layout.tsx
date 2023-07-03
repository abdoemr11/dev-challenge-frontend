import NavLink from 'next/link'
export default function Layout({ children, className }: { children: React.ReactNode, className: string }) {

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr'
        }} className={className}>
            <nav style={{
                display: 'flex',
                gap: '2rem',
                flexDirection: 'column',
                background: '#FAFBFD',
                padding: '2rem'
            }}>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/buttons' >Buttons</NavLink>
                <NavLink href='/inputs' >Inputs</NavLink>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}