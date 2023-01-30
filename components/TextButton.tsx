import Link from 'next/link'
import React from 'react'

export default function TextButton(props: any) {
    return (
        <div>
            <Link href={props.path}>
                {props.children}
            </Link>
        </div>

    )
}
