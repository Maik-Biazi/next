import React from 'react'
import Link from  'next/link'

const Page = ({title,linkTo})=>{
    return(
        <div>
            <h2>Bem Vindoo{title} Page</h2>
            <Link href={linkTo.path}></Link>
        </div>
    )
}

export default Page