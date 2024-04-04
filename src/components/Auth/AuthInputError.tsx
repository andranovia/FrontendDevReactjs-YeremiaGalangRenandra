const AuthInputError = ({ messages, className }: any) => (
  <>
    <>
      <p className={`${className} text-sm text-red-600`}>{messages}</p>
    </>
  </>
);

export default AuthInputError;
