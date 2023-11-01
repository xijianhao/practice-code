export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return <div style={{ background: '#eee' }}>
        {children}
    </div>
}