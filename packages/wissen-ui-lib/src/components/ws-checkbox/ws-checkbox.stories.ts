export default {
    title: 'Wissen UI/Design System/ws-checkbox'
};
const LabelTemplate = (args) => `<ws-checkbox value="${args.value}" label="${args.label}"></ws-checkbox>`;

export const Default = LabelTemplate.bind({});
Default.args = {
    value: 'sample-text',
    label: 'Sample label',
};