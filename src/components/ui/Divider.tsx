
export default function Divider({className}: {className: string}) {
    const width = className.match(/w-\[(.+?)\]/)?.[1];
    return (
        <div className={`h-0.5 w-[${width}] bg-black/10 ${className}`}></div>
    )
}
