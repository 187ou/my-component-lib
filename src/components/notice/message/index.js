import { createMessage } from './message';
const Message = ((options) => {
    if (typeof options === 'string') {
        options = { message: options };
    }
    return createMessage({ duration: 3000, type: 'info', ...options });
});
['success', 'warning', 'info', 'danger', 'loading'].forEach(type => {
    Message[type] = (message) => {
        return Message({
            ...(typeof message === 'string' ? { message } : message),
            type
        });
    };
});
export const LinMessage = Message;
export default LinMessage;
