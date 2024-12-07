import axios from "axios";
import moment from "moment";

const getHomeData = async ({ deviceType }) => {
  try {
    const res = await axios.get(
      `https://www.aparatsport.com/api/fa/v1/sport/sport/get_home_data?device_type=${deviceType}`
    );
    console.log("res",res)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getNextDaysData = async ({ i, deviceType }) => {
  const currentDate = moment().add(i, "days").format("YYYY-MM-DD");
  try {
    const res = await axios.get(
      `https://www.aparatsport.com/api/fa/v1/sport/sport/get_match_list_data?date=${currentDate}&device_type=${deviceType}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getHomeData, getNextDaysData };
