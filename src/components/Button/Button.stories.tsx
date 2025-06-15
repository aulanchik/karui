import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FaStar, FaArrowRight } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'The size of the button',
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'danger', 'outline', 'ghost'],
            description: 'The visual style of the button',
        },
        isLoading: {
            control: { type: 'boolean' },
            description: 'Shows a loading spinner when true',
        },
        isFullWidth: {
            control: { type: 'boolean' },
            description: 'Makes the button full-width',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Disables the button',
        },
        iconLeft: {
            control: { type: 'boolean' },
            description: 'Displays an icon on the left (controlled via story)',
            table: { disable: true },
        },
        iconRight: {
            control: { type: 'boolean' },
            description: 'Displays an icon on the right (controlled via story)',
            table: { disable: true },
        },
        children: {
            control: { type: 'text' },
            description: 'Button label',
            defaultValue: 'Click me',
        },
        className: {
            control: { type: 'text' },
            description: 'Additional Tailwind classes',
        },
        onClick: { action: 'clicked', description: 'Click handler' },
    },
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </div>
    ),
};

export const Loading: Story = {
    args: {
        children: 'Loading',
        variant: 'primary',
        size: 'medium',
        isLoading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        variant: 'primary',
        size: 'medium',
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        children: 'Full Width',
        variant: 'primary',
        size: 'medium',
        isFullWidth: true,
    },
    parameters: {
        layout: 'padded',
    },
};

export const WithIcons: Story = {
    args: {
        children: 'With Icons',
        variant: 'primary',
        size: 'medium',
        iconLeft: <FaStar />,
        iconRight: <FaArrowRight />,
    },
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
        </div>
    ),
};
