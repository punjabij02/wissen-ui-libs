export default {
    title: 'Wissen UI/Design System/ws-label'
};
const LabelTemplate = (args) => `<ws-label value="${args.value}"></ws-label>`;

export const Default = LabelTemplate.bind({});
Default.args = {
    value: 'sample-text',
};
