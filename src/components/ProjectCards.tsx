import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import type ProjectsApi from '../types/ProjectsApi';

const ProjectCards: React.FC<{}> = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const doFetch = async () => {
            const result = await fetch('https://api.github.com/users/mthlemos/starred');
            const jsonResult = await result.json();
            setProjects(jsonResult);
            setIsLoading(false);
        }

        doFetch();
    }, []);

    type LoaderProps = {
        active: boolean
    };

    const Loader: React.FC<LoaderProps> = ({ active }) => {
        const visible = active ? "visible" : "hidden";

        return (
            <div className={`${visible} flex items-center justify-center mx-auto w-full`}>
                <img className={visible} src="/ball-triangle.svg" />
            </div>
        );
    }

    return (
        <div className={!isLoading ? "flex grow-0 flex-row justify-between flex-wrap gap-y-10" : ""}>
            <Loader active={isLoading} />
            {!isLoading && projects.map((project: ProjectsApi) => {
                return (
                    <ProjectCard key={project.name} title={project.name} description={project.description} url={project.html_url} />
                )
            })}
        </div >
    )
}

export default ProjectCards;