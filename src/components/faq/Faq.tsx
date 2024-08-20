import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { useTranslation } from "react-i18next";
import React from "react";

const Faq = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <section id='faq' className="container gap-6 pb-[70px] mx-auto border-t mt-8 xs:mt-[120px] pt-[40px] border-[#cccc] flex justify-between md:flex-row flex-col ">
      <div>
        <h3 className="w-[100%] md:mb-[40px] text-[#020c31] text-[38px] xs:text-[48px] font-[700] ">
          {t("header.faq")}
        </h3>
      </div>
      <div>
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade as AccordionSlots["transition"] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
            maxWidth: '1100px'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{color: '#676d83', fontSize: '24px', fontWeight: '600'}}>{t("faq.title1")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{color: '#676d83', fontSize: '24px', fontWeight: '400'}}>
            {t("faq.text1")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{maxWidth: '1100px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{color: '#676d83', fontSize: '24px', fontWeight: '600'}}>{t("faq.title2")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{color: '#676d83', fontSize: '24px', fontWeight: '400'}}>
            {t("faq.text2")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
        sx={{maxWidth: '1100px'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{color: '#676d83', fontSize: '24px', fontWeight: '600'}}>{t("faq.title3")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{color: '#676d83', fontSize: '24px', fontWeight: '400'}}>
            {t("faq.text3")}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
