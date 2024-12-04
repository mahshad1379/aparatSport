import axios from "axios";

const getLiveData = async ({deviceType , uuid}) => {
  console.log('res')

  try {
    const res = await axios.get(
      `https://www.aparatsport.com/api/fa/v1/sport/sport/get_match_with_uuid?uuid=${uuid}&device_type=${deviceType}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getTodayMatchData = async ({deviceType , uuid}) => {
    try {
      const res = await axios.get(
        `https://www.aparatsport.com/api/fa/v1/sport/sport/get_today_match_data?uuid=${uuid}&device_type=${deviceType}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

export { getLiveData , getTodayMatchData };
