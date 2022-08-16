const ErrorComponent = (props) => {
  return (
    <div>
      <h1 className="text-center">{props.errorMsg}</h1>
    </div>
  );
};

export default ErrorComponent;
