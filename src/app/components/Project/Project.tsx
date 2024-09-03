type ProjectBlockProps = {
    title: string;
    text: string;
    tags: string[];
    imageName: string;
};

const Project = ({ title, text, tags, imageName}: ProjectBlockProps) => {
    return (
        <div className="min-h-40 w-full max-w-2xl mb-8 flex flex-col lg:flex-row lg:justify-center gap-5 lg:gap-6 p-5 rounded-l hover:bg-[#1c1b29]/10 hover:shadow-[0_0_2px_1px_rgba(255,255,255,0.1),0_0_4px_2px_rgba(255,255,255,0.1)] group">
            <img className="hidden lg:block mt-1 lg:w-1/3 h-20 object-cover group-hover:bg-[#1c1b29]/10 group-hover:shadow-[0_0_2px_1px_rgba(255,255,255,0.1),0_0_4px_2px_rgba(255,255,255,0.1)]" src={`/img/${imageName}`} alt="icon" />
            <div className="lg:w-2/3">
                <p className="text-white font-medium text-lg md:text-xl mb-3 group-hover:text-teal-300">{title}</p>
                <p className="text-gray-500 text-base md:text-lg font-medium">{text}</p>
                <ul className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag: string, index: number) => (
                        <li key={index} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{tag}</li>
                    ))}
                </ul>
            </div>
            <img className="block lg:hidden lg:w-1/3 h-20 object-cover group-hover:bg-[#1c1b29]/10 group-hover:shadow-[0_0_2px_1px_rgba(255,255,255,0.1),0_0_4px_2px_rgba(255,255,255,0.1)]" src={`/img/${imageName}`} alt="icon" />
        </div>
    )
}

export default Project;