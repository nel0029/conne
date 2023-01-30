import Link from 'next/link'
import React from 'react'

export default function textButton(props: any) {
    return (
        <div>
            <Link href={props.path}>
                {props.children}
            </Link>
        </div>
    )
}
