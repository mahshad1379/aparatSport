import * as shamsi from 'shamsi-date-converter';

export const CONVERTTIME = (time) => {
    const gameTime = String(String(time).split(" ")[1]).split(":")[0] +":" +String(String(time).split(" ")[1]).split(":")[1];
    return gameTime;
}

export const CONVERTDATE = (time) => {
    const gameDate = shamsi.gregorianToJalali(String(time).split(" ")[0]);
    const [gameDateyear, gameDateMonth, gameDateDay ] = gameDate;

    let months = "";
    switch (String(gameDateMonth)) {
        case "1":
        months = "فروردین";
        break;
        case "2":
        months = "اردیبهشت";
        break;
        case "3":
        months = "خرداد";
        break;
        case "4":
        months = "نیر";
        break;
        case "5":
        months = "مرداد";
        break;
        case "6":
        months = "شهریور";
        break;
        case "7":
        months = "مهر";
        break;
        case "8":
        months = "آبان";
        break;
        case "9":
        months = "آذر";
        break;
        case "10":
        months = "دی";
        break;
        case "11":
        months = "بهمن";
        break;
        case "12":
        months = "اسفند";
        break;
    }
    let FullGameDate = gameDateDay + " " + months + " " + gameDateyear;
    
    return FullGameDate
}
