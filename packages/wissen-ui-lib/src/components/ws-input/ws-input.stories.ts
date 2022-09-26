import readme from './readme.md';

export default {
    title: 'Wissen UI/Design System/ws-input',
    parameters: {
        notes: readme
    }
};

const LabelTemplate = (args) => `<ws-input value="${args.value}" label="${args.label}"></ws-input>`;

export const Default = LabelTemplate.bind({});
Default.args = {
    value: 'sample-text',
    label: 'Sample label',
};
