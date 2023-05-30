import { PropsWithChildren } from "react";

interface FaceIconProps extends PropsWithChildren {
  color?: string;
  width?: string;
  height?: string;
}

export const FaceIcon = ({
  color = "none",
  width = "24",
  height = "24",
}: FaceIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.46387 12C3.46387 16.7073 7.29314 20.5366 12.0005 20.5366C16.7078 20.5366 20.537 16.7073 20.537 12C20.537 7.29265 16.7078 3.46338 12.0005 3.46338C7.29314 3.46338 3.46387 7.29265 3.46387 12ZM2 12C2 6.48585 6.48585 2 12 2C17.5141 2 22 6.48585 22 12C22 17.5141 17.5141 22 12 22C6.48585 22 2 17.5141 2 12ZM8.38835 13.9884C8.67517 13.8089 9.43322 13.762 12.0001 13.762C14.3601 13.762 15.3132 13.7864 15.6118 13.9884C15.9113 14.1913 15.9883 14.5454 15.8079 14.8313C14.9659 16.1571 13.5503 16.9415 11.9962 16.9415C10.442 16.9415 9.02639 16.1484 8.19225 14.8313C8.01274 14.5454 8.10249 14.1689 8.38835 13.9884ZM16.6519 10.4496C16.5202 10.4496 16.3876 10.3998 16.2783 10.3023L15.6676 9.75594C15.4022 9.51691 15.3544 9.07594 15.5612 8.76959C15.7671 8.46423 16.1495 8.40764 16.4159 8.64667L16.6519 8.85838L16.888 8.64667C17.1534 8.40667 17.5368 8.46423 17.7427 8.76959C17.9495 9.07594 17.9017 9.51691 17.6363 9.75594L17.0256 10.3023C16.9163 10.3998 16.7837 10.4496 16.6519 10.4496ZM6.9736 10.3018C7.08287 10.4003 7.21555 10.4491 7.34726 10.4491C7.47897 10.4491 7.61165 10.4003 7.72092 10.3018L8.33165 9.75545C8.59702 9.5174 8.64482 9.07643 8.43799 8.77008C8.23214 8.46374 7.8497 8.40716 7.58336 8.64618L7.34726 8.85789L7.11116 8.64618C6.84385 8.40716 6.46238 8.46472 6.25653 8.77008C6.0497 9.07643 6.09751 9.5174 6.36287 9.75545L6.9736 10.3018Z"
      />
    </svg>
  );
};
