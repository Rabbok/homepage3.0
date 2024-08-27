type ExperienceBlockProps = {
    title: string;
    text: string;
    date: string;
};

const ExperienceBlock = ({ title, text, date}: ExperienceBlockProps) => {
    return (
        <div className="cursor-pointer relative min-h-40 w-full max-w-4xl mb-8 flex justify-center gap-6 p-5 rounded-l hover:bg-[#1c1b29]/10 hover:shadow-[0_0_2px_1px_rgba(255,255,255,0.1),0_0_4px_2px_rgba(255,255,255,0.1)] group">
            <p className="text-gray-500 text-l font-medium w-1/3">{date}</p>
            <div className="w-2/3">
                <p className="text-white font-medium text-xl mb-3 group-hover:text-teal-300">{title}</p>
                <p className="text-gray-500 text-l font-medium">{text}</p>
            </div>
        </div>
    );
};

export default ExperienceBlock;
