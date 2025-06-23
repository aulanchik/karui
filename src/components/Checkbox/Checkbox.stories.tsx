import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Checkbox, { type CheckboxProps } from './Checkbox';
import { action } from 'storybook/actions';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'The label text for the checkbox',
        },
        checked: {
            control: 'boolean',
            description: 'Whether the checkbox is checked',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the checkbox is disabled',
        },
        onChange: {
            action: 'onChange',
            description: 'Callback when checkbox state changes',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const InteractiveCheckbox = (args: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    return (
        <Checkbox
            {...args}
            checked={isChecked}
            onChange={(checked) => {
                setIsChecked(checked);
                args.onChange(checked);
            }}
        />
    );
};

export const Interactive: Story = {
    render: (args) => <InteractiveCheckbox {...args} />,
    args: {
        label: 'Checkbox Label',
        checked: false,
        onChange: action('onChange'),
    },
};

export const Default: Story = {
    args: {
        label: 'Checkbox Label',
        checked: false,
        onChange: action('onChange'),
    },
};

export const Checked: Story = {
    args: {
        label: 'Checkbox Label',
        checked: true,
        onChange: action('onChange'),
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Checkbox',
        checked: false,
        disabled: true,
        onChange: action('onChange'),
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled Checked Checkbox',
        checked: true,
        disabled: true,
        onChange: action('onChange'),
    },
};
