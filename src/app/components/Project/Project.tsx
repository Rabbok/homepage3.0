type ProjectBlockProps = {
    title: string;
    text: string;
};

const Project = ({ title, text}: ProjectBlockProps) => {
    return (
        <div className="min-h-40 w-full mb-8 flex justify-center gap-6 p-5 rounded-l hover:bg-white-10">
            <div className="bg-red-300 mt-1 w-full h-10"></div>
            {/* <img src="" alt="" /> */}
            <div>
                <p className="text-white font-medium text-xl mb-3">{title}</p>
                <p className="text-gray-500 text-l font-medium">{text}</p>
            </div>
        </div>
    )
}

export default Project;