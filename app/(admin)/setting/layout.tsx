export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return <div>
        admin-layout
        <div>{children}</div>
    </div>
}