import { Icon } from "@mui/material";

const DOWNLOAD_ITEM = [
  {
    id: 0,
    status: true,
    text: "دریافت اپلیکیشن اندروید",
    logo: (
      <Icon
        name={"android_logo"}
        width="28"
        height="16"
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
        width="20"
        height="24"
        viewBox="0 0 20 24"
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
        width="32"
        height="13"
        viewBox="0 0 32 13"
        fill="none"
      />
    ),
  },
];

export default Object.freeze(DOWNLOAD_ITEM);
