export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return <div style={{ width: '300px', background: 'blue', height: '300px' }}>
        {children}
    </div>
}