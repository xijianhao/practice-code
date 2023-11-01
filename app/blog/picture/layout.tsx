import React from "react";
import { Suspense } from "react";
import Loading from './loading'
import Link from "next/link";
export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        blog-picture-layout
        <Suspense fallback={<Loading />}>
            <div>{children}</div>
        </Suspense>
        <div>
            <Link href="/">go home</Link>
        </div>
    </div>
}