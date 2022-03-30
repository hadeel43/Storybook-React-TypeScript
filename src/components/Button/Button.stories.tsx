// Button.stories.ts|tsx

import React from "react";
import Button from "./index";
import {ComponentStory, ComponentMeta} from "@storybook/react";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
	<Button backgroundColor="#03de37" label="Button" />
);
export const Secondary = () => (
	<Button backgroundColor="#e44c62" label="😄👍😍💯" />
);

export const Tertiary = () => (
	<Button backgroundColor="#78d0e7" label="📚📕📈🤓" />
);
