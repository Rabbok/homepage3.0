interface StyledTextProps {
    children: React.ReactNode;
  }
  

const StyledText: React.FC<StyledTextProps> = ({ children}) => {
  return (
    <span className="text-white hover:text-teal-300 cursor-pointer">
      {children}
    </span>
  );
};

export default StyledText;