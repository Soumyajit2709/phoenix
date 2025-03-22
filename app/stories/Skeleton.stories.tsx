import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Flex, Skeleton } from "@phoenix/components";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
};

export const Circular: Story = {
  args: {
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
};

export const Rectangular: Story = {
  args: {
    width: 200,
    height: 100,
    borderRadius: 0,
  },
};

export const TextBlock: Story = {
  render: () => (
    <Flex direction="column" gap="size-100" width="300px">
      <Skeleton height={24} />
      <Skeleton height={24} />
      <Skeleton height={24} width="60%" />
    </Flex>
  ),
};

export const Card: Story = {
  render: () => (
    <Flex direction="column" gap="size-100" width="300px">
      <Skeleton height={200} borderRadius={8} />
      <Skeleton height={24} width="80%" />
      <Skeleton height={16} width="60%" />
    </Flex>
  ),
};
