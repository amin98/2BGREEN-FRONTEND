const SectionLayout = ({ children, className }) => (
  <div
    className={`flex flex-col justify-center items-center h-full text-center p-4 ${className}`}
  >
    {children}
  </div>
);

export default SectionLayout;
