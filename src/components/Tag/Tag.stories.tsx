import React from "react";
import Tag from "./index";

export default {
	title: "Tag title",
	component: Tag,
} as any;

export const Primary = () => <Tag title="My first tag" />;

export const Second = () => <Tag title="My second tag" />;
