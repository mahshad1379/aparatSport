import React from "react";
import {
  HeaderStyle,
  RightPart,
  LeftPart,
  Menu,
  MenuItem,
  Search,
  MenuFrame3,
  MenuFrame3Text,
  Profile,
  ProfileText,
} from "./styles";

const Header = () => {
  return (
    <HeaderStyle>
      <RightPart>
        <svg
          width="129"
          height="32"
          viewBox="0 0 129 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M113.102 2.95693L110.541 2.19138C109.426 1.86602 108.233 1.96171 107.216 2.4976C106.2 3.03348 105.437 3.933 105.085 5.02391L104.342 7.39712C106.571 4.8708 109.719 3.28229 113.102 2.95693Z"
            fill="white"
          />
          <path
            d="M101.113 17.5791L100.389 19.8949C100.213 20.4308 100.155 20.9858 100.213 21.56C100.272 22.115 100.429 22.67 100.702 23.1485C100.976 23.6461 101.328 24.0863 101.778 24.4499C102.228 24.8136 102.736 25.0815 103.284 25.2346L105.747 25.981C103.166 23.8375 101.524 20.8327 101.113 17.5791Z"
            fill="white"
          />
          <path
            d="M125.734 6.76535L122.977 5.94238C124.326 7.05243 125.46 8.41128 126.281 9.94238C127.103 11.4735 127.592 13.1577 127.748 14.8802L128.628 12.1051C128.804 11.5692 128.863 11.0142 128.804 10.44C128.745 9.88497 128.589 9.32994 128.315 8.85147C128.041 8.35387 127.689 7.91367 127.24 7.55004C126.79 7.20554 126.281 6.9376 125.734 6.76535Z"
            fill="white"
          />
          <path
            d="M115.84 29.0239L118.46 29.8086C119.008 29.9809 119.575 30.0383 120.162 29.9809C120.729 29.9235 121.296 29.7704 121.785 29.5024C122.273 29.2345 122.743 28.89 123.114 28.4498C123.486 28.0096 123.76 27.512 123.916 26.9761L124.776 24.2393C122.567 26.9378 119.36 28.6412 115.84 29.0239Z"
            fill="white"
          />
          <path
            d="M111.421 12.9475L116.505 12.1245L118.93 16.469L115.214 20.1054L110.775 17.8279L111.421 12.9475Z"
            fill="#74C15C"
          />
          <path
            d="M118.049 11.2822L119.085 9.54053L122.586 9.77019L124.287 12.7558L122.371 16.3731L120.376 15.9137L118.049 11.2822Z"
            fill="#74C15C"
          />
          <path
            d="M123.094 17.2918L125.206 13.6172C125.323 14.0574 125.421 14.5167 125.479 14.976C125.616 15.9521 125.871 17.8086 125.088 19.8373C124.834 20.488 124.502 21.0813 124.111 21.6555C123.759 20.1818 123.426 18.7464 123.094 17.2918Z"
            fill="#74C15C"
          />
          <path
            d="M118.207 8.10518C117.19 7.10996 116.173 6.11475 115.156 5.13867C115.626 5.13867 116.095 5.17695 116.564 5.23437C117.562 5.36834 119.458 5.63628 121.238 6.89944C121.805 7.30135 122.313 7.77982 122.763 8.31571C121.238 8.23915 119.732 8.18173 118.207 8.10518Z"
            fill="#74C15C"
          />
          <path
            d="M108.036 10.0956L104.086 11.7607C104.262 11.3396 104.477 10.9186 104.712 10.5167C105.201 9.65541 106.159 8.02861 108.036 6.88029C108.623 6.51665 109.268 6.22957 109.933 6.01904L108.036 10.0956Z"
            fill="#74C15C"
          />
          <path
            d="M106.883 20.1625C107.02 21.5596 107.157 22.9568 107.294 24.3539C106.942 24.0477 106.59 23.7414 106.277 23.397C105.592 22.6697 104.302 21.2917 103.754 19.1864C103.578 18.5166 103.5 17.8276 103.5 17.1577C104.634 18.1529 105.768 19.1481 106.883 20.1625Z"
            fill="#74C15C"
          />
          <path
            d="M115.917 24.335L120.082 25.3685C119.672 25.5981 119.241 25.8086 118.811 25.9809C117.873 26.3637 116.113 27.0718 113.922 26.8804C113.218 26.8039 112.534 26.6699 111.869 26.4211L115.917 24.335Z"
            fill="#74C15C"
          />
          <path
            d="M107.92 20.3733L110.012 19.4546L114.158 21.3302L114.666 23.5503L111.909 25.2536L108.389 23.6843L107.92 20.3733Z"
            fill="#74C15C"
          />
          <path
            d="M104.907 12.2774L108.27 11.0908L109.698 12.5836L109.131 17.0047L106.843 18.3635L104.516 16.2966L104.907 12.2774Z"
            fill="#74C15C"
          />
          <path
            d="M110.638 6.82297L114.588 6L117.326 8.77512L116.563 10.2871L111.127 11.11L109.562 9.55981L110.638 6.82297Z"
            fill="#74C15C"
          />
          <path
            d="M116.778 23.0716L116.465 21.4448L120.141 17.8467L122.077 18.1146L122.84 21.5022L120.395 23.8945L116.778 23.0716Z"
            fill="#74C15C"
          />
          <path
            d="M75.7766 19.2634C75.7766 20.8136 74.8966 21.6748 73.1953 21.6748L74.8379 24.0672C75.7766 24.0672 78.3383 23.4165 78.3383 19.0528V12.1055L75.757 14.5935V19.2634H75.7766Z"
            fill="white"
          />
          <path
            d="M82.3064 20.756H86.3934C87.4493 20.756 88.2707 20.3924 88.8378 19.6651C89.3657 18.9952 89.6395 18.1723 89.6004 17.3302V12.6986L87.1169 15.0144V16.6412C87.1169 17.8086 86.7063 18.3828 85.8654 18.3828H81.7784C81.7784 18.3828 81.7979 17.1962 81.7979 16.5263V9.11963L79.3145 11.4546V17.8278C79.3145 19.7799 80.3118 20.756 82.3064 20.756Z"
            fill="white"
          />
          <path
            d="M90.7344 20.7557H93.1396V9.27246L90.7344 11.4543V20.7557Z"
            fill="white"
          />
          <path
            d="M91.8885 6.11475C88.1731 6.11475 87.1758 8.48795 87.1758 9.3492L89.6788 10.842C89.6788 9.27264 90.0895 8.50709 91.6734 8.50709H94.1374L96.66 6.13388H91.8885V6.11475Z"
            fill="white"
          />
          <path
            d="M87.5283 24.6601L89.6011 22.7845C89.5815 22.7653 89.562 22.727 89.5424 22.6888C88.9558 21.9998 88.154 21.6553 87.0981 21.6553C87.0981 21.6553 82.0333 21.6553 81.9551 21.6553L84.4777 23.9136H86.2767C86.531 23.9328 86.7852 23.9902 87.0003 24.1242C87.2154 24.2773 87.3914 24.4495 87.5283 24.6601Z"
            fill="white"
          />
          <path
            d="M84.7324 24.2583H86.2773C86.9617 24.2583 87.3137 24.8899 87.3137 24.8899L86.375 25.8277L84.7324 24.2583Z"
            fill="white"
          />
          <path
            d="M46.0898 11.6265V20.7557H48.3387V9.27246L46.0898 11.6265Z"
            fill="white"
          />
          <path
            d="M42.531 16.6222C42.531 18.7275 40.1648 18.4213 40.1648 18.4213H33.0468C31.5802 18.4213 31.2477 17.2921 31.2477 16.2394V14.7083L28.7838 16.6414L28.7642 16.6605C28.7642 17.828 28.3536 18.4021 27.5127 18.4021H22.2328V12.1055L19.6516 14.5935V19.2634C19.6516 20.8136 18.7716 21.6748 17.0703 21.6748L18.7129 24.0672C19.5147 24.0672 21.4898 23.6079 22.0568 20.7562H28.0211C28.8229 20.7562 29.5073 20.5457 30.0353 20.1055C30.7393 20.5648 31.7561 20.7562 33.0859 20.7562H41.1817C43.1959 20.7562 44.9754 19.3973 44.9754 17.4643V12.4117L42.5114 14.7275V16.6222H42.531Z"
            fill="white"
          />
          <path
            d="M27.553 21.6748C27.553 21.6748 22.4883 21.6748 22.4101 21.6748L24.9327 23.9332H26.7317C26.9859 23.9523 27.2402 24.0097 27.4553 24.1437C27.6704 24.2777 27.8464 24.4499 27.9833 24.6605L30.0561 22.7849C30.0365 22.7657 30.017 22.7274 29.9974 22.6892C29.4108 22.0193 28.609 21.6748 27.553 21.6748Z"
            fill="white"
          />
          <path
            d="M26.7323 24.2583H25.1875L26.8301 25.8277L27.7688 24.8899C27.7492 24.8899 27.3972 24.2583 26.7323 24.2583Z"
            fill="white"
          />
          <path
            d="M18.4991 17.4834V12.4116L16.0351 14.7274V16.6221C16.0351 18.7274 13.669 18.4212 13.669 18.4212H4.263C2.79637 18.4212 2.46394 17.292 2.46394 16.2394V14.7083L0 16.6221V17.1772C0 19.7992 1.32974 20.7561 4.32166 20.7561H14.7054C16.7 20.7561 18.4991 19.4164 18.4991 17.4834Z"
            fill="white"
          />
          <path
            d="M8.4878 12.1816H2.46484V14.708H10.8344L8.4878 12.1816Z"
            fill="white"
          />
          <path
            d="M67.1523 16.6221C67.1523 18.7274 64.7862 18.4212 64.7862 18.4212H55.3802C53.9136 18.4212 53.5811 17.292 53.5811 16.2394V14.7083L51.1172 16.6413V17.1963C51.1172 19.8375 52.4469 20.7753 55.4389 20.7753H65.8226C67.8368 20.7561 69.6163 19.4164 69.6163 17.4834V12.4116L67.1523 14.7274V16.6221Z"
            fill="white"
          />
          <path
            d="M70.9062 20.7557H73.1551V9.27246L70.9062 11.6265V20.7557Z"
            fill="white"
          />
          <path
            d="M59.605 12.1816H53.582V14.708H61.9516L59.605 12.1816Z"
            fill="white"
          />
        </svg>
      </RightPart>
      <LeftPart>
        <Menu>
          <MenuItem>دانلود اپلیکیشن</MenuItem>
          <MenuFrame3>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="5" fill="#78C248" fill-opacity="0.3" />
              <circle cx="8" cy="8" r="2" fill="#78C248" fill-opacity="0.3" />
            </svg>
            <MenuFrame3Text>پخش زنده</MenuFrame3Text>
          </MenuFrame3>
          <MenuItem>برنامه پخش</MenuItem>
          <MenuItem>ویدیوها</MenuItem>
          <Search>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.53711 8.53968C3.53711 5.7771 5.77662 3.5376 8.53919 3.5376C11.3018 3.5376 13.5413 5.7771 13.5413 8.53968C13.5413 9.90888 12.9911 11.1496 12.0999 12.0529C12.0904 12.0613 12.0812 12.07 12.0722 12.0791C12.0643 12.087 12.0567 12.0951 12.0493 12.1033C11.1463 12.9929 9.90687 13.5418 8.53919 13.5418C5.77662 13.5418 3.53711 11.3022 3.53711 8.53968ZM12.4958 13.3808C11.418 14.2627 10.0404 14.7918 8.53919 14.7918C5.08626 14.7918 2.28711 11.9926 2.28711 8.53968C2.28711 5.08675 5.08626 2.2876 8.53919 2.2876C11.9921 2.2876 14.7913 5.08675 14.7913 8.53968C14.7913 10.0412 14.262 11.4191 13.3797 12.4969L17.5239 16.6133C17.7688 16.8566 17.7701 17.2523 17.5269 17.4972C17.2836 17.7421 16.8879 17.7434 16.643 17.5002L12.4958 13.3808Z"
                fill="#A3A6BC"
              />
            </svg>
          </Search>
        </Menu>
        <Profile>
          <ProfileText>پروفایل کاربری</ProfileText>
        </Profile>
      </LeftPart>
    </HeaderStyle>
  );
};

export default Header;
