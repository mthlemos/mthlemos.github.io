type Props = {
    version: string
}

const Footer: React.FC<Props> = ({ version }) => {
    return (
        <div className="mt-16 py-10 w-full min-w-[62.5rem] box-border mx-0 border-gray-dark border-t-2 bg-gradient-to-b from-gray-card to-gray-light">
            <p className="text-off-white font-custom-sans text-center">Matheus Bastos Lemos Portfolio</p>
            <p className="text-off-white font-custom-sans text-center">Built by me © 2022</p>
            <p className="text-off-white font-custom-sans text-center">Powered by React, Tailwind CSS and Astro</p>
            <p className="text-xs text-gray-600 font-custom-mono text-center">{`v ${version}`}</p>
        </div>
    )
}

export default Footer;