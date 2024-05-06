import React from "react";
import { TickCircle } from "iconsax-react";
import { useEffect } from "react";
function Success() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  }, []);
  return (
    <div className="m-2 flex flex-col items-center justify-center gap-10">
      <div className="m-3 flex flex-row items-center justify-between w-[98%]">
        <h1 className=" ">
          <svg
            width="120"
            height="40"
            viewBox="0 0 129 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 1261155216">
              <path
                id="Vector"
                d="M43.2621 18.7611C44.6781 17.5406 46.224 16.5722 49.5571 16.2332V21.9569L47.4347 22.296C44.3511 22.8435 43.4284 23.2999 43.4284 26.0815V38.4384H37.0051V16.4436H43.2626V18.7611H43.2621ZM65.2149 30.1552C65.1663 31.3376 65.1242 32.428 63.7512 33.2662C62.7914 33.8162 61.9143 33.8162 61.5417 33.8162C60.2478 33.8162 59.3712 33.226 58.996 32.7228C58.4971 32.0447 58.4971 31.0814 58.4971 30.1176V16.4904H52.0373V30.2772C52.0373 33.8553 52.2452 35.1572 53.3672 36.7594C54.8695 38.8613 57.4958 39.0713 58.9133 39.0713C60.335 39.0713 61.7475 38.7276 63.0419 38.0653C64.2075 37.4751 64.5832 37.0537 65.2144 36.3385V38.4389H71.6356V16.4904H65.2144V30.1552H65.2149ZM21.113 33.0568C23.574 33.0105 26.7839 32.9292 26.7839 29.5269C26.7839 25.9473 23.8625 25.9071 22.3633 25.865H15.9882V33.0568H21.113ZM32.6251 25.6987C33.667 26.8308 34.2526 28.4656 34.2526 30.1568C34.2526 32.4686 33.0429 35.7031 29.3721 37.343C27.1621 38.3128 24.7817 38.4379 21.404 38.4379H8.98037V20.4442L21.5303 20.4782C23.1978 20.4391 25.9093 20.3577 25.9093 17.2854C25.9093 14.4251 23.4498 14.3005 22.0307 14.3005L12.4787 14.2746L7 8.75012H20.3652C23.4498 8.75012 26.2454 8.87568 28.0402 9.46636C31.6648 10.6406 33.1255 13.5462 33.1255 16.3633C33.1255 17.9564 32.7067 18.9288 32.5835 19.2161C31.2491 22.2462 28.4104 22.8353 26.8305 23.1708C28.6233 23.4657 30.9966 23.8484 32.6251 25.6987ZM82.0333 16.5295H75.5736V38.4394H81.9948V26.5858C81.9948 23.8484 81.9948 21.1146 85.374 21.1146C86.6238 21.1146 87.7483 21.625 88.2492 22.7947C88.4971 23.3869 88.5407 24.0985 88.5407 26.083V38.4399H94.9194V23.428C94.9194 20.0228 94.3379 18.0444 92.0437 16.8229C90.9156 16.1966 89.4554 15.948 88.1646 15.948C86.6238 15.948 85.2026 16.3206 84.2043 16.7425C83.0808 17.2859 82.659 17.7917 82.0333 18.4678V16.5295ZM103.81 24.7461C104.016 23.8215 104.227 22.8089 105.107 21.8421C105.728 21.1701 106.814 20.4132 108.355 20.4132C109.485 20.4132 110.694 20.8335 111.489 21.6377C112.401 22.6005 112.566 23.8215 112.691 24.7461H103.81ZM113.494 31.0529C113.154 32.2129 111.957 34.2457 108.454 34.2457C104.992 34.2457 103.729 31.5155 103.77 28.7807H119.326C119.237 26.3001 119.075 22.0103 116.232 18.94C113.447 15.9104 109.689 15.7925 108.393 15.7925C99.809 15.7925 97.2222 22.6 97.2222 27.8972C97.2222 35.0896 101.764 39.2492 108.227 39.2492C111.735 39.2492 114.563 37.9036 116.446 36.1443C117.569 35.0896 118.781 33.3257 119.036 31.0524H113.494V31.0529ZM128 8.75419H121.577V38.4389H128V8.75419Z"
                fill="#333333"
              />
            </g>
          </svg>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-24 w-auto gap-12">
        <div className="flex flex-col items-center justify-center  gap-1">
          <TickCircle size="40" color="#28B246" variant="Bold" />
          <h2 className="text-green-600 font-semibold text-2xl lg:text-3xl">
            Success Submitted
          </h2>
          <p className="text-center text-zinc-900 text-[36px] lg:text-[48px] font-bold leading-[60.20px]">
            Congratulations
          </p>
        </div>
        <div className="w-[75%] lg:w-[45%] text-center text-neutral-500 text-xl lg:text-[27px] font-medium  leading-[35.10px]">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </div>
      </div>
      <div className="w-fit text-center mt-28">
        <span className="text-neutral-500  text-md lg:text-lg font-normal  leading-relaxed">
          Redirecting you to Homepage in
        </span>
        <span className="text-neutral-500  text-md lg:text-lg font-medium  leading-relaxed">
          {" "}
        </span>
        <span className="text-zinc-900  text-md lg:text-lg font-bold  leading-relaxed">
          5 Seconds
        </span>
      </div>
    </div>
  );
}

export default Success;
