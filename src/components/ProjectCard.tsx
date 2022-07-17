
type Props = {
    title: string,
    description: string,
    url: string
}

const ProjectCard: React.FC<Props> = ({ title, description, url }) => {
    return (
        <a href={url}>
            <div className="rounded-sm sm:outline sm:outline-2 sm:outline-warm-orange sm:border-0 border-2 border-warm-orange w-[28rem] h-40 transition-all hover:outline-4">
                <div className="w-full bg-warm-orange h-16 p-2">
                    <p className="text-3xl font-bold font-custom-sans text-off-white">{title}</p>
                </div>
                <div className="relative h-24 p-1">
                    <p className="text-xl w-full font-normal font-custom-sans line-clamp-2 text-off-white ">{description}</p>
                    <p className="absolute bottom-1 align-bottom text-sm font-medium font-custom-mono text-gray-link underline" >{url}</p>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard;