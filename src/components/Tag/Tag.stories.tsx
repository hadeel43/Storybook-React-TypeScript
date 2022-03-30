import React from 'react'
import Tag from './index'

export default {
  title: 'Tag title',
  component: Tag
} as any;

export const Primary = () =><Tag />

export const Second = () => (
  <Tag title="My second tag" />
)