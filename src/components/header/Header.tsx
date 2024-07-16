import { Button } from "@mui/material";
import Logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import * as React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const Header = () => {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng") || "ru";
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", flexDirection: "column", paddingTop: "20px" }}
        >
          <ListItemButton>
            <a className="text-[#666] text-[25px]" href="#main">
              {t("header.asosiy")}
            </a>
          </ListItemButton>
          <ListItemButton>
            <a className="text-[#666] text-[25px]" href="#about">
              {t("header.biz_aqimizda")}
            </a>
          </ListItemButton>
          <ListItemButton>
            <a className="text-[#666] text-[25px]" href="#service">
              {t("header.xizmatlar")}
            </a>
          </ListItemButton>
          <ListItemButton>
            <a className="text-[#666] text-[25px]" href="#faq">
              {t("header.faq")}
            </a>
          </ListItemButton>
          <ListItemButton>
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
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header className="px-7 sticky top-0 bg-[#fff] z-50">
      <div className="container mx-auto flex items-center justify-between py-[20px] gap-3">
        <div className="cursor-pointer">
          <img className="w-[250px]" src={Logo} alt="photo" />
        </div>
        <div className=" items-center gap-[40px] hidden sm:flex">
          <nav>
            <ul className="flex sm:items-center gap-[25px] ">
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
              <li className="">
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
        <div className="sm:hidden flex items-center gap-3 ss:gap-16">
          <div>
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
          </div>
          <div>
            <DensityMediumIcon
              onClick={toggleDrawer(true)}
              sx={{ cursor: "pointer", fontSize: "35px" }}
            />
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
