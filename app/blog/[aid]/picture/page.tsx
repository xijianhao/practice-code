"use client"
import Link from 'next/link'
import { useEffect } from 'react'
export default function Page({ params }: any) {

    useEffect(() => {
        console.log(params, "params")
    }, [params])

    return <div>
        {`picture-${params.aid}`}
    </div>
}