"use client"
import React, { useEffect } from 'react';

export default function Page({ params }: any) {
    const [data, setData] = React.useState<any>([])

    useEffect(() => {
        console.log('enter-blog-picture-page')
        var arr = new Array();
        for (var i = 0; i < 200000; i++) {
            arr.push(i);
        }
        const animationRender = () => {
            if (arr.length !== 0) {
                window.requestAnimationFrame(() => {
                    var eee = arr.splice(0, 100)
                    setData((tmpdata: any) => {
                        return [...tmpdata, ...eee]
                    });
                    animationRender()
                })
            }
        }
        animationRender()

    }, [])
    return <div>
        {data.map((item: any) => (
            <div key={item}>{item}</div>
        ))}
    </div>
}