import { SvgIconComponent } from "@mui/icons-material";
import "./InputOption.css";

type InputOptionProps = {
  Icon: SvgIconComponent;
  title: string;
  color: string;
};

function InputOption({ Icon, title, color }: InputOptionProps) {
  return (
    <div className="input-option">
      <Icon style={{ color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
