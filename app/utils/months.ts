export const title = (string: string) => {
    return string[0].toUpperCase() + string.slice(1);
};

export const getMonth = (monthNumber: number) => {

    switch (monthNumber) {
        case 0:
            return "january";
        case 1:
            return "february";
        case 2:
            return "march";
        case 3:
            return "april";
        case 4:
            return "may";
        case 5:
            return "june";
        case 6:
            return "july";
        case 7:
            return "august";
        case 8:
            return "september";
        case 9:
            return "october";
        case 10:
            return "november";
        case 11:
            return "december";
        default:
            return "Invalid input - Please enter a number from 0 to 11";
    }
}