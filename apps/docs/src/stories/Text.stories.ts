import {Meta, StoryObj} from "@storybook/react"
import { Text, type textProps} from "@repo/ui/components";


const meta = {
  title: "typography/Text",
  component: Text,
  tags: ["autodocs"],
  parameters:{
    layout: "centered"
  },
  args: { 
    children: "Text",
    size: "md"
  },

  argTypes:{
    size: {
      control: "radio",
      options: ["sm" | "md" | "lg"]
    },
    fontWeight: {
      control: "radio",
      options: ["light" | "regular" | "medium" | "bold"]
    }
  }
}satisfies Meta<textProps>;

export default meta;

type Story = StoryObj <typeof meta>

export const Default: Story = {
  args:{},
};

export const Light: Story = {
  args:{
    fontWeight: "light"
  },
};

export const Regular: Story = {
  args:{
    fontWeight: "regular"
  },
};

export const Medium: Story = {
  args:{
    fontWeight: "medium"
  },
};

export const Bold: Story = {
  args:{
    fontWeight: "bold"
  },
};