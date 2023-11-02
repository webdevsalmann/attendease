export default function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12) || 12;

    return `${day}/${month}/${year} at ${formattedHours}:${minutes}:${seconds} ${amOrPm}`;
}