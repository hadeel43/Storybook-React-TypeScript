import React, {FC} from "react";
interface TagProps {
	label?: string;
	backgroundColor?: string;
}
const Button: FC<TagProps> = ({label, backgroundColor}) => {
	return <button style={{backgroundColor: backgroundColor}}>{label}</button>;
};
export default Button;
