import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Footer = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <footer className=" mb-[80px] pt-[70px] border-t-[2px] border-[rgba(11, 11, 77, .5)] ">
      <div className="px-7">
        <div className="container mx-auto flex flex-col sm:flex-row sm:gap-40 gap-9 sm:items-center">
          <div className="cursor-pointer">
            <a href="#">
              <img className="w-[250px]" src={Logo} alt="photo" />
            </a>
          </div>
          <div data-aos="fade-right">
            <div className="flex gap-5 items-center cursor-pointer">
              <a href="#" className="flex gap-5 items-center">
                <div className="w-[40px] h-[40px] border border-[#CCC] rounded-[8px] flex justify-center items-center">
                  <LocationOnOutlinedIcon />
                </div>
                <div className="text-[#242825cc] font-[500] text-[16px]">
                  {t("footer")}
                </div>
                <div>
                  <CallMadeOutlinedIcon />
                </div>
              </a>
            </div>
            <div className="flex gap-5 items-center mt-5 cursor-pointer">
              <div className="w-[40px] h-[40px] border border-[#CCC] rounded-[8px] flex justify-center items-center">
                <CallOutlinedIcon />
              </div>
              <div className="text-[#242825cc] font-[500] text-[16px]">
                +998 99 119 99 33
              </div>
              <div>
                <CallMadeOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
