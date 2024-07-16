import { useTranslation } from "react-i18next";
import bgMan from "../../assets/bg-man-photo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

type FormValues = {
  text: string;
  number: string;
};

const MessageInfo: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    console.log(event);
    

    setOpen(false);
  };
  const { t } = useTranslation();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const token: string = "7334254772:AAEmPl7riyPEqOmXCh-zP2MwXS1fwUq0EBY";
    const chat_id: number = 717071146;
    const url: string = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `text: ${data.text} \nnumber: ${data.number}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        console.log(res);
        setOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section
      id="message"
      className="container mx-auto mb-[100px] bg-2 flex justify-center sm:justify-evenly items-center rounded-[12px] px-[24px] h-[550px]"
    >
      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            This is a success!
          </Alert>
        </Snackbar>
      </div>
      <form
        data-aos="fade-right"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[456px] h-[385px] bg-[#fff] rounded-[8px] p-[20px]"
      >
        <h6 className="text-[#242825] font-[700] text-[22px] xs:text-[32px]">
          {t("bg3.title")}
        </h6>
        <div className="relative">
          <input
            className={`px-[20px] rounded-[8px] outline-none bg-[#F2F2F2] text-[16px] font-[500] mt-[30px] text-[#242825] w-[100%] h-[50px] ${
              errors.text ? "border border-red-600" : ""
            }`}
            type="text"
            {...register("text", { required: "This is required" })}
            placeholder={t("bg3.input")}
          />
          {errors.text && (
            <div className="text-[10px] text-red-600 absolute bottom-[-18px]">
              {errors.text.message}
            </div>
          )}
        </div>
        <div className="relative">
          <input
            className={`px-[20px] rounded-[8px] outline-none bg-[#F2F2F2] text-[16px] font-[500] mt-[30px] text-[#242825] w-[100%] h-[50px] ${
              errors.text ? "border border-red-600" : ""
            }`}
            type="number"
            {...register("number", { required: "This is required" })}
            placeholder="998901234567"
          />
          {errors.text && (
            <div className="text-[10px] text-red-600 absolute bottom-[-18px]">
              {errors.text.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-[100%] h-[50px] bg-[#242825] text-[#fff] mt-[30px] rounded-[8px] font-[500]"
        >
          {t("bg3.button")}
        </button>
      </form>
      <div className="self-end hidden sm:block">
        <img src={bgMan} alt="photo" />
      </div>
    </section>
  );
};

export default MessageInfo;
