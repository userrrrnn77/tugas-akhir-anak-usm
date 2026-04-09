import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Tarik paksa ke pojok kiri atas, sat-set-wat-wet!
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini kaga ngerender apa-apa, cuma logic doang, bgsd!
};

export default ScrollToTop;
