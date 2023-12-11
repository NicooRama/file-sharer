import type {Meta, StoryObj} from '@storybook/react';
import {FileTable} from './FileTable';

const meta: any = {
    title: 'FileTable',
    component: FileTable,
    tags: ['autodocs'],
} satisfies Meta<typeof FileTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};