const Button = ({ children }) => {
  return (
    <button className="p-3 bg-secondary-bg rounded-full shadow-md">
      {children}
    </button>
  );
};

export default Button;
