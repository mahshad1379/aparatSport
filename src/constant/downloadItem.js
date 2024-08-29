import Icon from "../Icon/index";

const DOWNLOAD_ITEM = [
  {
    id: 0,
    status: true,
    text: "دریافت اپلیکیشن اندروید",
    logo: (
      <Icon
        name={"android_logo"}
        width="28px"
        height="16px"
        viewBox="0 0 28 16"
        fill="none"
      />
    ),
  },
  {
    id: 1,
    status: false,
    text: "دریافت اپلیکیشن ios",
    logo: (
      <Icon
        name={"ios_logo"}
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        fill="none"
      />
    ),
  },
  {
    id: 2,
    status: false,
    text: "دریافت وب اپلیکیشن",
    logo: (
      <Icon
        name={"webApp_logo"}
        width="32px"
        height="13px"
        viewBox="0 0 32 13"
        fill="none"
      />
    ),
  },
];

export default Object.freeze(DOWNLOAD_ITEM);
