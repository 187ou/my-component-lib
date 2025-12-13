import { createNotification } from './notification';
const Notification = ((options) => {
    return createNotification({ duration: 4500, ...options });
});
['success', 'warning', 'info', 'danger', 'loading'].forEach(type => {
    Notification[type] = (options) => {
        return Notification(typeof options === 'string'
            ? { message: options, type }
            : { ...options, type });
    };
});
export const LinNotification = Notification;
export default LinNotification;
