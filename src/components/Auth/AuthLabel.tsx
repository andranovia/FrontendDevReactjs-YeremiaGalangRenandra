const AuthLabel = ({ className, children, ...props }: any) => (
  <label
    className={`${className} block font-medium text-lg text-gray-700`}
    {...props}
  >
    {children}
  </label>
);

export default AuthLabel;
