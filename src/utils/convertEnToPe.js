export default (input) => {
    const englishToPersian = {
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹'
    };
    const safeInput = typeof input === "number" ? input.toString() : input || "";
    return safeInput?.replace(/\d/g, (digit) => englishToPersian[digit] || digit);
}