export const toDateFormat = (dateStr: string) => {
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
    });
    return formattedDate;
};