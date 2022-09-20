export default {
    title: 'Wissen UI/Design System/ws-input'
};
const LabelTemplate = (args) => `<ws-input value="${args.value}" label="${args.label}"></ws-input>`;

export const Default = LabelTemplate.bind({});
Default.args = {
    value: 'sample-text',
    label: 'Sample label',
};
