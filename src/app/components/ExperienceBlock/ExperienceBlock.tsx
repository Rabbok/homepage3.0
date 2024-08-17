type ExperienceBlockProps = {
    title: string;
    text: string;
    tags: string[];
};

const ExperienceBlock = ({ title, text, tags }: ExperienceBlockProps) => {
    return (
        <div className="min-h-40 w-full mb-8 flex justify-center gap-6 p-5 rounded-l hover:bg-white-10">
            <p className="text-gray-500 text-l font-medium w-40">2024 - PRESENT</p>
            <div>
                <p className="text-white font-medium text-xl mb-3">{title}</p>
                <p className="text-gray-500 text-l font-medium">{text}</p>
                <div className="flex justify-start">
                    {tags.map((tag: string, index: number) => (
                        <div key={index} className="bg-dark-green w-20 h-5 rounded-xl m-8 ml-0 mr-4 flex items-center justify-center">
                            <p className="text-sm text-light-green text-center font-bold">{tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceBlock;
