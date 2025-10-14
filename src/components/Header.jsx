

export default function Header({title, description}) {

    return <div className="flex text-center flex-col gap-2">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="opacity-60">{description}</div>
    </div>
}