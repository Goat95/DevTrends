import * as React from "react";
import { SVGProps } from "react";
const SvgHeartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5.862C10.342 1.364 2 2.032 2 8.835c0 3.39 2.55 7.9 10 12.495 7.45-4.596 10-9.106 10-12.495 0-6.764-8.333-7.498-10-2.973Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeartFill;
