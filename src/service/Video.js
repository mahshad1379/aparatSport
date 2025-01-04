import axios from "axios";

const getVideoData = async () => {

  try {
    const res = await axios.get(
      `https://libpanel.sabademo.ir/api/user-lists/37`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getVideoData };
