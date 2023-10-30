

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'dashboard',
}


export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return <div>
        DashboardLayout
        {children}
    </div>
}