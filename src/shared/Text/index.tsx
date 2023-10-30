type props = {
  children: string[] | string | undefined;
  color?: string;
  block?: boolean;
  id?: string;
};

function Text({ children, color, block, id }: props): JSX.Element {
  let display = "inline";
  if (block) display = "block";
  //Note that inline styles usage is not recommended. 
  //I am using it here to prove the concept of the component
  return (
    <span style={{ color: color, display: display }} id={id}>
      {children}
    </span>
  );
}

export default Text;
