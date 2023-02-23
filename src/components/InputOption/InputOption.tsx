import { useState } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import "./InputOption.css";

type InputOptionProps = {
  Icon: SvgIconComponent;
  ActiveIcon?: any;
  title: string;
  color: string;
};

function InputOption({ Icon, ActiveIcon, title, color }: InputOptionProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (ActiveIcon) {
      setIsActive(!isActive)
    }
  };

  return (
    <div className="input-option" onClick={handleClick}>
      {isActive ? <ActiveIcon style={{ color }} /> : <Icon style={{ color }} /> }
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
