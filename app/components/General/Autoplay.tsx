import type { ReactNode } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  children: ReactNode;
};

export default function AutoPlay({ children }: Props) {

  return (
    <div className="w-full overflow-hidden py-10">
    </div>
  );
}