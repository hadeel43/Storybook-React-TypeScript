// Button.stories.ts|tsx

import React from "react";
import Button from "./index";

export default {
	title: "Button",
	component: Button,
} as any;

export const Primary = () => (
	<Button backgroundColor="#03de37" label="Button" />
);
export const Secondary = () => (
	<Button backgroundColor="#e44c62" label="😄👍😍💯" />
);

export const Tertiary = () => (
	<Button backgroundColor="#78d0e7" label="📚📕📈🤓" />
);
