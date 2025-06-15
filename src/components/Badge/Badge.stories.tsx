import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: { type: 'text' },
            description: 'Text content of the Badge',
            defaultValue: 'Badge',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'warning', 'error'],
            description: 'Visual style of the Badge',
        },
        isLoading: {
            control: false,
            description: 'Shows loading state',
        },
        isBordered: {
            control: { type: 'boolean' },
            description: 'Adds a border to the Badge',
        },
        className: {
            control: { type: 'text' },
            description: 'Additional Tailwind classes',
        },
    },
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        text: 'Badge',
        variant: 'default',
    },
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge text="Default" variant="default" />
            <Badge text="Primary" variant="primary" />
            <Badge text="Success" variant="success" />
            <Badge text="Warning" variant="warning" />
            <Badge text="Error" variant="error" />
        </div>
    ),
};

export const Bordered: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge text="Default" variant="default" isBordered />
            <Badge text="Primary" variant="primary" isBordered />
            <Badge text="Success" variant="success" isBordered />
            <Badge text="Warning" variant="warning" isBordered />
            <Badge text="Error" variant="error" isBordered />
        </div>
    ),
    argTypes: {
        isBordered: { control: false }
    },
};

export const Loading: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge text="Default" variant="default" isLoading />
            <Badge text="Primary" variant="primary" isLoading />
            <Badge text="Success" variant="success" isLoading />
            <Badge text="Warning" variant="warning" isLoading />
            <Badge text="Error" variant="error" isLoading />
        </div>
    ),
    argTypes: {
        variant: { control: false },
        isBordered: { control: false }
    },
};
