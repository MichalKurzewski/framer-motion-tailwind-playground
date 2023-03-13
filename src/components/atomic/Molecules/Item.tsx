interface IItemProps {
  children: string | JSX.Element | JSX.Element[];
  label: string;
  additionalStyling?: string;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const Item = (props: IItemProps): JSX.Element => {
  return (
    <div
      className={`relative ${props.onClick ? "cursor-pointer" : ""} ${
        props.additionalStyling
      }`}
      onClick={props.onClick}
    >
      {props.children}
      <div className="absolute-center txt-color-invert">{props.label}</div>
    </div>
  );
};

export default Item;
