type ButtonPropsType = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ text, onClick }: ButtonPropsType) => {
  return (
    <button className="" onClick={onClick}>
      {text}
    </button>
  );
};
