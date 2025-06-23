import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import RadioButton, { type RadioButtonProps } from "./RadioButton";
import { action } from "storybook/actions";

const meta: Meta<typeof RadioButton> = {
    title: 'Components/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'The label text for the radio button',
        },
        value: {
            control: 'text',
            description: 'The value of the radio button',
        },
        name: {
            control: 'text',
            description: 'The name attribute to group radio buttons',
        },
        checked: {
            control: 'boolean',
            description: 'Whether the radio button is checked',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the radio button is disabled',
        },
        onChange: {
            action: 'onChange',
            description: 'Callback when radio button is selected',
        },
    },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

const InteractiveRadioGroup = (args: RadioButtonProps) => {
    const [selectedValue, setSelectedValue] = useState<string>('option1');

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    return (
        <div className="space-y-2">
            {options.map((option) => (
                <RadioButton
                    key={option.value}
                    {...args}
                    label={option.label}
                    value={option.value}
                    name="interactive-group"
                    checked={selectedValue === option.value}
                    onChange={(value) => {
                        setSelectedValue(value);
                        args.onChange(value);
                    }}
                />
            ))}
        </div>
    );
};

export const Interactive: Story = {
    render: (args) => <InteractiveRadioGroup {...args} />,
    args: {
        name: 'interactive-group',
        onChange: action('onChange'),
    },
};

export const Default: Story = {
    args: {
        label: 'Default Radio Button',
        value: 'default',
        name: 'default-group',
        checked: false,
        onChange: action('onChange'),
    },
};

export const Checked: Story = {
    args: {
        label: 'Checked Radio Button',
        value: 'checked',
        name: 'checked-group',
        checked: true,
        onChange: action('onChange'),
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Radio Button',
        value: 'disabled',
        name: 'disabled-group',
        checked: false,
        disabled: true,
        onChange: action('onChange'),
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled Checked Radio Button',
        value: 'disabled-checked',
        name: 'disabled-checked-group',
        checked: true,
        disabled: true,
        onChange: action('onChange'),
    },
};
