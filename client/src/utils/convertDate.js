export default function convertDate(timestamp){
    const date = new Date(timestamp);

    const formattedDate = date.toLocaleDateString("en-GB", {day: "2-digit", month: "short", year: "numeric"});
    return formattedDate;
}