import { Button } from "@mui/material";
import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng") || "ru";
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <header className="px-7 sticky top-0 bg-[#fff] z-50">
      <div className="container mx-auto flex items-center justify-between py-[20px] ">
        <div className="cursor-pointer">
          <img className="w-[250px]" src={Logo} alt="photo" />
        </div>
        <div className="flex items-center gap-[40px]">
          <nav>
            <ul className="flex items-center gap-[25px]">
              <li className="text-[#666] text-[20px] cursor-pointer">
                <a href="#main">{t("header.asosiy")}</a>
              </li>
              <li className="text-[#666] text-[20px] cursor-pointer">
                <a href="#about">{t("header.biz_aqimizda")}</a>
              </li>
              <li className="text-[#666] text-[20px] cursor-pointer">
                <a href="#service">{t("header.xizmatlar")}</a>
              </li>
              <li className="text-[#666] text-[20px] cursor-pointer">
                <a href="#faq">{t("header.faq")}</a>
              </li>
              <li>
                <select
                  className="border-[2px] border-[#0000007a] px-[7px] py-[5px] rounded-[10px] text-[#666] text-[20px] font-[600]"
                  name="Lng"
                  id="lng"
                  onChange={handleChange}
                  value={language}
                >
                  <option value="ru">Русский</option>
                  <option value="uz">Ўзбекча</option>
                </select>
              </li>
            </ul>
          </nav>
          <a href="#message">
          <Button
            variant="contained"
            sx={{
              width: "200px",
              height: "60px",
              borderRadius: "25px",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            {t("boglanish")}
          </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
