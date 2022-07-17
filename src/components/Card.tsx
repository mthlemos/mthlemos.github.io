import { ReactNode } from "react";

type Props = {
    children: ReactNode | ReactNode[];
}

const Card = ({ children }) => {
    return (
        <div className="w-[62.5rem] mx-auto mt-16 p-10 bg-gray-card rounded drop-shadow-lg">
            {children}
        </div>
    )
}

export default Card;