import heroPhoto from "./assets/hero-photo.jpg";
import icon1 from "./assets/icon/about-icon-1.png";
import icon2 from "./assets/icon/about-icon-2.png";
import icon3 from "./assets/icon/about-icon-3.png";
import dezinfeksiya1 from "./assets/organic-photo.png";
import dezinfeksiya2 from "./assets/dezinyeksiya-1.png";
import dezinfeksiya3 from "./assets/derazatsiya-2.png";
import klaopi from "./assets/klopi.jpg";
import tarakan from "./assets/tarakan.jpg";
import scarpion from "./assets/skarpion.jpg";
import gruzini from "./assets/grizuni.jpg";
import bloxi from "./assets/bloxi.jpg";
import bg1 from "./assets/bg-photo-1.jpg";
import shield from "./assets/icon/shield.png";

import "./App.css";
import Header from "./components/header/Header";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Faq from "./components/faq/Faq";
import MessageInfo from "./components/message/MessageInfo";
import Footer from "./components/footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";


function App() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
                      
  const getStyles = () => {
    if (windowWidth < 490) {
      return {
        button: {
          maxWidth: '125px',
          fontSize: '16px',
          height: '50x',
          borderRadius: "25px",
          background: "linear-gradient(0deg, rgb(37, 33, 251) 0%, rgb(59, 105, 230) 100%)",
          fontWeight: "500",
          position: "absolute",
          bottom: "20px",
        }
      };
    } else {
      return {
        button: {
          maxWidth: '190px',
          fontSize: '22px',
          height: '50x',
          borderRadius: "25px",
          background: "linear-gradient(0deg, rgb(37, 33, 251) 0%, rgb(59, 105, 230) 100%)",
          fontWeight: "500",
          position: "absolute",
          bottom: "20px",
        },
      };
    }
  };
  const styles = getStyles();

  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div>
        <Header></Header>
        <main className="px-7">
          <section
            id="main"
            className="flex justify-between gap-5 container mx-auto items-center mt-[70px]"
          >
            <div className="bg-hero-photo rounded-[20px] bg-no-repeat p-4 w-[100%] bg-cover md:bg-none">
              <h1
                data-aos="fade-right"
                className="max-w-[650px] text-[30px] xs:text-[45px] text-[#fff] font-[500] mb-[50px] md:text-[#093fb3] ss:text-[60px] md:text-[70px]"
              >
                {t("asosiy.title")}
              </h1>
              <p
                data-aos="fade-right"
                className="max-w-[400px] text-[15px] xs:text-[18px] ss:text-[20px]  text-[#ffffe8] font-[500] mb-[20px] md:text-[#272121] md:mb-[80px]"
              >
                {t("asosiy.text")}
              </p>
              <a href="#message">
                <Button
                  data-aos="fade-right"
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "60px",
                    borderRadius: "25px",
                    background:
                      "linear-gradient(0deg, rgb(37, 33, 251) 0%, rgb(59, 105, 230) 100%)",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  {t("boglanish")}
                </Button>
              </a>
            </div>
            <div className="hidden md:block">
            <img
                className="h-[700px] w-[1000px]  rounded-[8px]"
                src={heroPhoto}
                alt="photo"
              />
            </div>
          </section>
          <section
            id="about"
            className="container mx-auto mt-[100px] py-[50px]"
          >
            <h3 className="w-[100%] text-[#020c31] pb-[30px] text-[30px] font-[700] border-b border-[#020c3154]">
              {t("bizHaqimizda.title")}
            </h3>
            <div
              data-aos="fade-right"
              className="flex flex-wrap justify-between gap-y-5 py-[30px] "
            >
              <div className="border-[2px] border-[#cccccc93] rounded-[15px] p-[14px] w-full  md:max-w-[400px] md:h-[350px]">
                <div className="mb-[20px]">
                  <img src={icon1} alt="photo" />
                </div>
                <h6 className="max-w-[360px] text-[#020c31] text-[20px] xs:text-[24px] font-[600] mb-[20px]">
                  {t("bizHaqimizda.tez_xizmat_kursatish.title")}
                </h6>
                <p className="md:max-w-[300px] w-[100%] text-[#676d83] text-[14px]">
                  {t("bizHaqimizda.tez_xizmat_kursatish.text")}
                </p>
              </div>
              <div className="border-[2px] border-[#cccccc93] rounded-[15px] p-[14px] w-full md:max-w-[400px] md:h-[350px]">
                <div className="mb-[20px]">
                  <img src={icon2} alt="photo" />
                </div>
                <h6 className="max-w-[360px] text-[#020c31] text-[20px] xs:text-[24px] font-[600] mb-[20px]">
                  {t("bizHaqimizda.yetuk_mutaxassislar.title")}
                </h6>
                <p className="md:max-w-[300px] w-[100%] text-[#676d83] text-[14px]">
                  {t("bizHaqimizda.yetuk_mutaxassislar.text")}
                </p>
              </div>
              <div className="border-[2px] border-[#cccccc93] rounded-[15px] p-[14px] w-full md:max-w-[400px] md:h-[350px]">
                <div className="mb-[20px]">
                  <img src={icon3} alt="photo" />
                </div>
                <h6 className="max-w-[360px] text-[#020c31] text-[20px] xs:text-[24px] font-[600] mb-[20px]">
                  {t("bizHaqimizda.maqul_vaqt.title")}
                </h6>
                <p className="md:max-w-[300px] w-[100%] text-[#676d83] text-[14px]">
                  {t("bizHaqimizda.maqul_vaqt.text")}
                </p>
              </div>
            </div>
          </section>
          <section
            className={`container pl-[20px] sm:pl-[80px] mb-[60px] mx-auto bg-custom-gradient bg-cover rounded-[20px] w-[100%] h-[600px] flex items-center bg-no-repeat`}
          >
            <div>
              <h4
                data-aos="fade-right"
                className="max-w-[558px] text-[#fafafa] sm:text-[40px] font-[700] mb-[20px] text-[30px]"
              >
                {t("bg1.title")}
              </h4>
              <p
                data-aos="fade-right"
                className="max-w-[310px] text-[#fff] mb-[60px]"
              >
                {t("bg1.text")}
              </p>
              <a href="#message">
                <Button
                  data-aos="fade-right"
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "60px",
                    borderRadius: "25px",
                    background:
                      "linear-gradient(0deg, rgb(37, 33, 251) 0%, rgb(59, 105, 230) 100%)",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  {t("boglanish")}
                </Button>
              </a>
            </div>
          </section>
          <section id="service" className="container mx-auto py-[70px]">
            <div>
              <h3 className="w-[100%] mb-[15px] text-[#020c31] text-[40px] sm:text-[52px] font-[700] ">
                {t("header.xizmatlar")}
              </h3>
              <p className="max-w-[335px] mb-[40px] text-[#666] text-[16px] sm:text-[18px]">
                {t("xizmatlar.text0")}
              </p>
              <div>
                <div
                  data-aos="fade-right"
                  className="w-[100%] border-[2px] gap-y-8 border-[#020c315d] mb-[30px] rounded-[20px] py-[20px] px-[10px] flex items-center justify-around flex-col sm:flex-row"
                >
                  <div>
                    <img
                      className="w-[300px] h-[300px]"
                      src={dezinfeksiya1}
                      alt="photo"
                    />
                  </div>
                  <div className="max-w-[900px] ml-[20px]">
                    <h5 className="text-[#020c31] text-[22px] xs:text-[26px] font-[700] px-[10px] max-w-[900px]">
                      {t("xizmatlar.title1")}
                    </h5>
                    <p className="text-[#495157] text-[14px] xs:text-[16px] font-[300] mt-[20px] px-[10px] max-w-[900px] ">
                      {t("xizmatlar.text1")}
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  className="w-[100%] gap-y-8 mb-[30px] border-[2px] border-[#020c315d] rounded-[20px] py-[20px] px-[10px] flex items-center justify-around flex-col sm:flex-row"
                >
                  <div>
                    <img
                      className="w-[300px] h-[300px]"
                      src={dezinfeksiya2}
                      alt="photo"
                    />
                  </div>
                  <div className="max-w-[900px] ml-[20px]">
                    <h5 className="text-[#020c31] text-[22px] xs:text-[26px] font-[700] px-[10px] max-w-[900px] ">
                      {t("xizmatlar.title2")}
                    </h5>
                    <p className="text-[#495157] text-[14px] xs:text-[16px] font-[300] mt-[20px] px-[10px] max-w-[900px] ">
                      {t("xizmatlar.text2")}
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  className="w-[100%] gap-y-8 border-[2px] border-[#020c315d] rounded-[20px] py-[20px] px-[10px] flex items-center justify-around flex-col sm:flex-row"
                >
                  <div>
                    <img
                      className="w-[300px] h-[300px]"
                      src={dezinfeksiya3}
                      alt="photo"
                    />
                  </div>
                  <div className="max-w-[900px] ml-[20px]">
                    <h5 className="text-[#020c31] text-[22px] xs:text-[26px] font-[700] px-[10px] max-w-[900px] ">
                      {t("xizmatlar.title3")}
                    </h5>
                    <p className="text-[#495157] font-[300] mt-[20px] text-[14px] xs:text-[16px] px-[10px] max-w-[900px] ">
                      {t("xizmatlar.text3")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container mx-auto">
            <h3 className="w-[100%] mb-[40px] text-[#020c31] text-[30px] sm:text-[52px] font-[700] ">
              {t("xizmat_turi.title0")}
            </h3>
            <div className="flex flex-wrap gap-[15px]">
              <div
                data-aos="fade-right"
                className="w-[100%] sm:max-w-[443px] h-[450px] p-[20px] bg-[#F3F6F6] rounded-[12px] relative"
              >
                <div>
                  <h6 className="text-[25px] xs:text-[32px] text-[#020c31] font-[700]">
                    {t("xizmat_turi.title1")}
                  </h6>
                  <p className="text-[#495157] mt-[20px] font-[300] text-[14px] xs:text-[16px]">
                    {t("xizmat_turi.text1")}
                  </p>
                </div>
                <a href="#message">
                  <Button
                    variant="contained"
                    sx={styles.button}
                  >
                    {t("boglanish")}
                  </Button>
                </a>
                <img
                  className="rounded-[50%] right-[20px] absolute bottom-[20px] w-[130px] h-[130px] xs:w-[150px] xs:h-[150px]"
                  src={klaopi}
                  alt="photo"
                />
              </div>
              <div
                data-aos="fade-right"
                className="w-[100%] sm:max-w-[443px] h-[450px] p-[20px] bg-[#F3F6F6] rounded-[12px] relative"
              >
                <div>
                  <h6 className="text-[25px] xs:text-[32px] text-[#020c31] font-[700]">
                    {t("xizmat_turi.title2")}
                  </h6>
                  <p className="text-[#495157] mt-[20px] font-[300] text-[14px] xs:text-[16px]">
                    {t("xizmat_turi.text2")}
                  </p>
                </div>
                <a href="#message">
                  <Button
                    variant="contained"
                    sx={styles.button}
                  >
                    {t("boglanish")}
                  </Button>
                </a>
                <img
                  className="rounded-[50%] right-[20px] absolute bottom-[20px] w-[130px] h-[130px] xs:w-[150px] xs:h-[150px]"
                  src={tarakan}
                  alt="photo"
                />
              </div>
              <div
                data-aos="fade-right"
                className="w-[100%] sm:max-w-[443px] h-[450px] p-[20px] bg-[#F3F6F6] rounded-[12px] relative"
              >
                <div>
                  <h6 className="text-[25px] xs:text-[32px] text-[#020c31] font-[700]">
                    {t("xizmat_turi.title3")}
                  </h6>
                  <p className="text-[#495157] mt-[20px] font-[300] text-[14px] xs:text-[16px]">
                    {t("xizmat_turi.text3")}
                  </p>
                </div>
                <a href="#message">
                  <Button
                    variant="contained"
                    sx={styles.button}
                  >
                    {t("boglanish")}
                  </Button>
                </a>
                <img
                  className="rounded-[50%] right-[20px] absolute bottom-[20px] w-[130px] h-[130px] xs:w-[150px] xs:h-[150px]"
                  src={scarpion}
                  alt="photo"
                />
              </div>
              <div
                data-aos="fade-right"
                className="w-[100%] sm:max-w-[443px] h-[450px] p-[20px] bg-[#F3F6F6] rounded-[12px] relative"
              >
                <div>
                  <h6 className="text-[25px] xs:text-[32px] text-[#020c31] font-[700]">
                    {t("xizmat_turi.title4")}
                  </h6>
                  <p className="text-[#495157] mt-[20px] font-[300] text-[14px] xs:text-[16px]">
                    {t("xizmat_turi.text4")}
                  </p>
                </div>
                <a href="#message">
                  <Button
                    variant="contained"
                    sx={styles.button}
                  >
                    {t("boglanish")}
                  </Button>
                </a>
                <img
                  className="rounded-[50%] right-[20px] absolute bottom-[20px] w-[130px] h-[130px] xs:w-[150px] xs:h-[150px]"
                  src={gruzini}
                  alt="photo"
                />
              </div>
              <div
                data-aos="fade-right"
                className="w-[100%] sm:max-w-[443px] h-[450px] p-[20px] bg-[#F3F6F6] rounded-[12px] relative"
              >
                <div>
                  <h6 className="text-[25px] xs:text-[32px] text-[#020c31] font-[700]">
                    {t("xizmat_turi.title5")}
                  </h6>
                  <p className="text-[#495157] mt-[20px] font-[300] text-[14px] xs:text-[16px]">
                    {t("xizmat_turi.text5")}
                  </p>
                </div>
                <a href="#message">
                  <Button
                    variant="contained"
                    sx={styles.button}
                  >
                    {t("boglanish")}
                  </Button>
                </a>
                <img
                  className="rounded-[50%] right-[20px] absolute bottom-[20px] w-[130px] h-[130px] xs:w-[150px] xs:h-[150px]"
                  src={bloxi}
                  alt="photo"
                />
              </div>
            </div>
          </section>
          <section className="bg-1 flex gap-[20px] sm:justify-around w-[100%] mt-[130px] min-h-[585px] container mx-auto bg-[#33A9FF] px-5 rounded-[16px] items-center">
            <div data-aos="fade-right">
              <img
                className="rounded-[20px] sm:block hidden"
                src={bg1}
                alt="photo"
              />
            </div>
            <div>
              <div data-aos="fade-right" className="rounded-[30px]">
                <img src={shield} alt="photo" />
              </div>
              <h4
                data-aos="fade-right"
                className="max-w-[643px] text-[#fafafa] text-[22px] xs:text-[27px] sm:text-[32px] font-[700] mt-[12px] mb-[50px]"
              >
                {t("bg2.title")}
              </h4>
              <a  href="#message">
              <Button data-aos="fade-right"
                variant="contained"
                sx={{
                  width: "200px",
                    height: "60px",
                    borderRadius: "25px",
                    background:
                      "linear-gradient(0deg, rgb(37, 33, 251) 0%, rgb(59, 105, 230) 100%)",
                    fontSize: "20px",
                    fontWeight: "500",
                }}
              >
                {t("boglanish")}
              </Button>
              </a>
            </div>
          </section>
          <Faq></Faq>
          <MessageInfo></MessageInfo>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
