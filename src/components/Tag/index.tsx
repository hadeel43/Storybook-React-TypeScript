import React, {FC} from "react";
interface TagProps {
	title?: string;
}
const Tag: FC<TagProps> = ({title}) => {
	return <div>{title}</div>;
};
export default Tag;
