import React from "react";
import { ButtonText, Button, ButtonContainer, BazarText } from "./styles.js";

const DownloadButton = ({ show }) => {
  return (
    <ButtonContainer show={show}>
      <Button>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_139)">
            <path
              d="M5.09239 6.18188V14.839C5.09239 15.5151 5.4984 16.0455 6.19426 16.0455H7.10267C7.07149 16.0455 7.00149 16.2749 7.00149 16.3876V18.8395C7.00149 19.4803 7.6159 19.9999 8.27421 19.9999C8.93285 19.9999 9.54694 19.4803 9.54694 18.8395V16.3876C9.54694 16.2749 9.42412 16.0455 9.3939 16.0455H11.6097C11.5795 16.0455 11.456 16.2749 11.456 16.3876V18.8395C11.456 19.4803 12.0692 19.9999 12.7275 19.9999C13.3874 19.9999 14.0015 19.4803 14.0015 18.8395V16.3876C14.0015 16.2749 13.9318 16.0455 13.9006 16.0455H14.8103C15.5062 16.0455 15.9106 15.5151 15.9106 14.839V6.18188H5.01953H5.09239Z"
              fill="#57C927"
            />
            <path
              d="M2.86452 6.323C2.20557 6.323 1.5918 6.84291 1.5918 7.48341V12.4518C1.5918 13.0926 2.20557 13.6122 2.86452 13.6122C3.52316 13.6122 4.13725 13.0926 4.13725 12.4518V7.48373C4.13725 6.84291 3.52316 6.323 2.86452 6.323Z"
              fill="#57C927"
            />
            <path
              d="M13.2401 1.67272L13.4622 1.3469L13.6846 1.0249L14.18 0.301037C14.2421 0.21131 14.2163 0.0916734 14.125 0.0328097C14.0346 -0.0273267 13.9096 -0.0021903 13.8504 0.0869006L13.0941 1.18876L12.8666 1.52063C12.1478 1.2489 11.3469 1.09745 10.5009 1.09745C9.65675 1.09745 8.85429 1.24922 8.13552 1.52063L7.90929 1.18908L7.68561 0.863583L7.15425 0.087537C7.09284 -0.00187211 6.96938 -0.0254176 6.87775 0.0334461C6.78706 0.0926279 6.76193 0.212264 6.82238 0.301673L7.31747 1.02586L7.53988 1.34817L7.76325 1.67304C6.07561 2.43827 4.93365 3.95472 4.93365 5.54563H16.0684C16.0684 3.95472 14.9268 2.43827 13.2401 1.67272ZM8.11484 4.00086C7.78425 4.00086 7.51793 3.7409 7.51793 3.41986C7.51793 3.09881 7.78425 2.84013 8.11484 2.84013C8.44447 2.84013 8.71143 3.09881 8.71143 3.41986C8.71143 3.7409 8.44479 4.00086 8.11484 4.00086ZM12.8876 4.00086C12.5573 4.00086 12.2903 3.7409 12.2903 3.41986C12.2903 3.09881 12.5573 2.84013 12.8876 2.84013C13.2172 2.84013 13.4842 3.09881 13.4842 3.41986C13.4842 3.7409 13.2172 4.00086 12.8876 4.00086Z"
              fill="#57C927"
            />
            <path
              d="M2.92116 8.91666C2.42512 8.91666 1.90998 8.44862 1.5918 7.7063V12.452C1.5918 13.0928 2.20557 13.6124 2.86452 13.6124C3.52316 13.6124 4.13725 13.0928 4.13725 12.452V7.95384C3.81907 8.55012 3.35898 8.91666 2.92116 8.91666Z"
              fill="#1CB71C"
            />
            <path
              d="M18.136 6.323C17.4771 6.323 16.8633 6.84291 16.8633 7.48341V12.4518C16.8633 13.0926 17.4771 13.6122 18.136 13.6122C18.7946 13.6122 19.4087 13.0926 19.4087 12.4518V7.48373C19.4087 6.84291 18.7946 6.323 18.136 6.323Z"
              fill="#57C927"
            />
            <path
              d="M18.1946 8.91691C17.6986 8.91691 17.1834 8.44886 16.8652 7.70654V12.4522C16.8652 13.093 17.479 13.6126 18.138 13.6126C18.7966 13.6126 19.4107 13.093 19.4107 12.4522V7.95409C19.0925 8.55036 18.6324 8.91691 18.1946 8.91691Z"
              fill="#1CB71C"
            />
            <path
              d="M10.5008 7.13275C7.98401 7.13275 5.7281 6.84161 5.09174 6.4283V14.8391C5.09174 15.5153 5.49774 16.0457 6.1936 16.0457H7.10201C7.07083 16.0457 7.00083 16.2751 7.00083 16.3877V18.8396C7.00083 19.4804 7.61524 20 8.27355 20C8.93219 20 9.54628 19.4804 9.54628 18.8396V16.3877C9.54628 16.2751 9.42346 16.0457 9.39324 16.0457H11.6091C11.5788 16.0457 11.4554 16.2751 11.4554 16.3877V18.8396C11.4554 19.4804 12.0685 20 12.7268 20C13.3867 20 14.0008 19.4804 14.0008 18.8396V16.3877C14.0008 16.2751 13.9311 16.0457 13.9 16.0457H14.8096C15.5055 16.0457 15.9099 15.5153 15.9099 14.8391V6.42798C15.2736 6.8413 13.018 7.13275 10.5008 7.13275Z"
              fill="#1CB71C"
            />
            <path
              d="M13.4841 3.41959C13.4841 3.74063 13.2171 4.00059 12.8875 4.00059C12.5572 4.00059 12.2903 3.74063 12.2903 3.41959C12.2903 3.24554 12.3701 3.09186 12.4946 2.98559C11.8655 2.88059 11.1964 2.823 10.5008 2.823C9.80528 2.823 9.13646 2.88059 8.5071 2.98559C8.63182 3.09154 8.71169 3.24554 8.71169 3.41959C8.71169 3.74063 8.44473 4.00059 8.11509 4.00059C7.7845 4.00059 7.51819 3.74063 7.51819 3.41959C7.51819 3.3375 7.53632 3.25954 7.56782 3.18859C6.61391 3.43932 5.79428 3.80523 5.17573 4.25482C5.01982 4.66432 4.93359 5.2275 4.93359 5.54568H16.0684C16.0684 5.2275 15.9821 4.66464 15.8266 4.25545C15.2083 3.80523 14.3884 3.43868 13.4351 3.18795C13.4663 3.25891 13.4841 3.33782 13.4841 3.41959Z"
              fill="#1CB71C"
            />
            <path
              d="M10.5009 10.453C8.3573 10.453 6.36452 10.0302 5.0918 9.33716V14.8392C5.0918 15.5153 5.4978 16.0457 6.19366 16.0457H7.10207C7.07089 16.0457 7.00089 16.2751 7.00089 16.3878V18.8397C7.00089 19.4805 7.6153 20.0001 8.27362 20.0001C8.93225 20.0001 9.54634 19.4805 9.54634 18.8397V16.3878C9.54634 16.2751 9.42353 16.0457 9.3933 16.0457H11.6091C11.5789 16.0457 11.4554 16.2751 11.4554 16.3878V18.8397C11.4554 19.4805 12.0686 20.0001 12.7269 20.0001C13.3868 20.0001 14.0009 19.4805 14.0009 18.8397V16.3878C14.0009 16.2751 13.9312 16.0457 13.9 16.0457H14.8097C15.5056 16.0457 15.91 15.5153 15.91 14.8392V9.33716C14.6373 10.0305 12.6445 10.453 10.5009 10.453Z"
              fill="#049E42"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_139">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <ButtonText>دریافت مستقیم</ButtonText>
      </Button>
      <Button>
        <img
          className="bazarLogo"
          src="/img/main-page/Cafe_Bazaar_logo 2.png"
          alt="bazar"
        />
        <ButtonText>دریافت از </ButtonText>
        <BazarText src="/img/main-page/Cafe_Bazaar_logo1 2.png" alt="bazar" />
      </Button>
    </ButtonContainer>
  );
};

export default DownloadButton;