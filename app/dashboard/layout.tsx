

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'DashBoard',
}


export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return <div style={{ background: 'yellow' }}>
        DashboardLayout
        {children}
    </div>
}