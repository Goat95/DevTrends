import * as React from "react";
import { SVGProps } from "react";
const SvgHeartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.233 4.666C9.93 4.667 11.377 7.575 12 8.858c.625-1.289 2.057-4.183 4.772-4.183 1.715 0 3.561 1.09 3.561 3.484 0 2.868-3.953 6.541-8.333 10.831C7.618 14.7 3.667 11.026 3.667 8.16c0-2.23 1.637-3.494 3.566-3.494ZM7.234 3C4.582 3 2 4.822 2 8.16c0 3.883 4.642 7.854 10 13.17 5.358-5.316 10-9.287 10-13.17 0-3.343-2.58-5.152-5.228-5.152-1.837 0-3.705.869-4.772 2.698C10.93 3.868 9.065 3 7.234 3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeartOutline;
