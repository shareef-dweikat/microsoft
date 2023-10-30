type props = {
  children: string;
  color?: string;
  id?: string;
  className?: string;
};

function Title({ children, color, id, className }: props): JSX.Element {
  //Note that inline styles usage is not recommended.
  //I am using it here to prove the concept of the component
  return (
    <h3 id={id} className={className} style={{ color: color }}>
      {children}
    </h3>
  );
}

export default Title;
