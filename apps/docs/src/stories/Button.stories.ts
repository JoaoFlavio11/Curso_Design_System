import {Meta, StoryObj} from "@storybook/react"
import { Button, buttonProps } from "@repo/ui/components";


const meta = {
  title: "form/Button",
  component: Button,
  tags: ["autodocs"],
  parameters:{
    layout: "centered"
  },
  args: {
    children: "button"
  }
}satisfies Meta<buttonProps>;

export default meta;

type Story = StoryObj <typeof meta>

export const Primary: Story = {
  args:{}
};