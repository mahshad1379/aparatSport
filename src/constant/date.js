import * as moment from 'jalali-moment';

const DATE = (i) =>  moment().add(i, 'days').locale('fa').format('D MMM YYYY');

export default DATE;