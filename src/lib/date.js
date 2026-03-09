export const formateMyDate = (date) => {
    let options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    }
    const formatedDate = new Intl.DateTimeFormat("en-Us", options).format(date);
    return formatedDate;
}