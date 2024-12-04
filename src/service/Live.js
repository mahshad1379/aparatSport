import axios from "axios";

const getLiveData = async ({deviceType , id}) => {
  console.log('res')

  try {
    const res = await axios.get(
      `https://www.aparatsport.com/api/fa/v1/sport/sport/get_match_with_uuid?uuid=${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getTodayMatchData = async ({deviceType , id}) => {
  console.log("id in today match", id)

    try {
      const res = await axios.get(
        `https://www.aparatsport.com/api/fa/v1/sport/sport/get_today_match_data?uuid=${id}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

export { getLiveData , getTodayMatchData };
