import type {Meta, StoryObj} from '@storybook/react';
import {FileRow} from './FileRow';

const meta: any = {
    title: 'FileRow',
    component: FileRow,
    tags: ['autodocs'],
} satisfies Meta<typeof FileRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};