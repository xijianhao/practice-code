"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AdminSetting from '../(admin)/setting/page'

export default function Page() {
    const pathname = usePathname()
    return <div>
        <h1>hi dashboard!</h1>
        <AdminSetting />
        <Link href="/">Go Home</Link>

    </div>
}