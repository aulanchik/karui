import type { Meta, StoryObj } from '@storybook/react-vite';
import Indicator from './Indicator';

const meta: Meta<typeof Indicator> = {
    title: 'Components/Indicator',
    component: Indicator,
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: 'text',
            description: 'Unique identifier for the lottery ball',
        },
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
            description: 'Value determining the ball’s shade and displayed number',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
    args: {
        id: 'default',
        value: 40,
    },
};

export const HighValue: Story = {
    args: {
        id: 'high',
        value: 90,
    },
};

export const LowValue: Story = {
    args: {
        id: 'low',
        value: 10,
    },
};

export const ZeroValue: Story = {
    args: {
        id: 'zero',
        value: 0,
    },
};
