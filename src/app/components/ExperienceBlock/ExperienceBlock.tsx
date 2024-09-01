type ExperienceBlockProps = {
    title: string;
    text: string;
    date: string;
};

const ExperienceBlock = ({ title, text, date}: ExperienceBlockProps) => {
    return (
        <div className="flex cursor-pointer relative min-h-40 w-full max-w-4xl mb-8 p-5 flex-col lg:flex-row lg:justify-center lg:gap-6 lg:p-5 rounded-l hover:bg-[#1c1b29]/10 hover:shadow-[0_0_2px_1px_rgba(255,255,255,0.1),0_0_4px_2px_rgba(255,255,255,0.1)] group">
            <p className="text-gray-500 text-base lg:text-lg font-medium lg:w-1/3 mb-1">{date}</p>
            <div className="lg:w-2/3">
                <p className="text-white font-medium text-lg lg:text-xl mb-1 lg:mb-3 group-hover:text-teal-300">{title}</p>
                <p className="text-gray-500 text-base lg:text-lg font-medium">{text}</p>
            </div>
        </div>
    );
};

export default ExperienceBlock;
