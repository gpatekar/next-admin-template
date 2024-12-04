"use client"

interface IContainerProps {
    children:  React.ReactNode
}

export default function Container({children}: Readonly<IContainerProps>) {
    return <div className="mx-auto">{children}</div> 
}