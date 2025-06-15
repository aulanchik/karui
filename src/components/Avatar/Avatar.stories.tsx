import type { Meta, StoryObj } from '@storybook/react-vite';
import Avatar from './Avatar';

const sampleImage = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'The size of the avatar',
        },
        image: {
            control: { type: 'text' },
            description: 'URL for the avatar image',
        },
        credentials: {
            control: { type: 'text' },
            description: 'Name to extract initials from',
            defaultValue: 'John Doe',
        },
        alt: {
            control: { type: 'text' },
            description: 'Alt text for accessibility',
            defaultValue: 'avatar',
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

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        size: 'medium',
        credentials: 'John Doe',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex gap-4 items-center">
            <Avatar credentials="John Doe" size="small" />
            <Avatar credentials="John Doe" size="medium" />
            <Avatar credentials="John Doe" size="large" />
        </div>
    ),
};

export const ImageSizes: Story = {
    render: () => (
        <div className="flex gap-4 items-center">
            <Avatar credentials="John Doe" size="small" image={sampleImage} />
            <Avatar credentials="John Doe" size="medium" image={sampleImage} />
            <Avatar credentials="John Doe" size="large" image={sampleImage} />
        </div>
    ),
};

export const BrokenImage: Story = {
    args: {
        credentials: 'John Doe',
        size: 'medium',
        image: 'https://invalid-url.com/broken.jpg',
        alt: 'Broken image avatar',
    },
};
