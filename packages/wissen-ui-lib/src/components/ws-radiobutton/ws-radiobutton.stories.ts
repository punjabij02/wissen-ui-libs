export default {
    title: 'Wissen UI/Design System/ws-radiobutton'
};
const LabelTemplate = (args) => `<ws-radiobutton value="${args.value}" label="${args.label}"></ws-radiobutton>`;

export const Default = LabelTemplate.bind({});
Default.args = {
    value: 'sample-text',
    label: 'Sample label',
};
