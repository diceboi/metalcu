"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Container from "./UI/Container";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import Image from "next/image";
import Link from "next/link";
import Smalltitle from "./UI/Typo/Smalltitle";
import Mainbutton from "./UI/Buttons/Mainbutton";
import mailformSchema from "../utils/email-validation/mail-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { motion } from "framer-motion";
import Par from "./UI/Typo/Par";

import { useForm } from "react-hook-form";

export default function KapcsolatInner({ sendMail }) {

  const searchParams = useSearchParams();
  const [productName, setProductName] = useState("");

  const { 
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }, // Destructure the formState object to get the errors and isSubmitting properties
  } = useForm({
    defaultValues: {
      product: "",
    },
    resolver: zodResolver(mailformSchema),
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    const result = await sendMail(formData);
    if (result.success) {
      toast.success("Az üzenetet sikeresen elküldtük!");
      reset();
    } else {  
      toast.error("Hiba történt az üzenet küldése során. Kérjük próbálja újra!");
    }
  };

  useEffect(() => {
    // Get the value of "termek" from the URL
    const termek = searchParams.get("termek");
    if (termek) {
      setProductName(termek);
      reset({ product: termek }); // Frissítjük a form értékeit
    }
  }, [searchParams, reset]);

  return (
    <section className="lg:w-8/12 w-full m-auto px-4 lg:-mt-[40vh] -mt-28">
      <div className="container m-auto border border-[--grey-border] relative lg:px-0 px-4 bg-[--lightgrey] z-10">
        <div className="flex flex-col gap-8 py-8 lg:px-8">
          <div className="flex lg:flex-row flex-col justify-start gap-8 items-baseline z-10 border-b border-[--grey-border]">
            <H2 classname={"text-center self-center"}>Írj nekünk</H2>
          </div>
          <div className="flex flex-col gap-8">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Név"
                name="name"
                className="border border-[--grey-border] bg-[--product-bg] p-4"
                {...register("name")}
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              <input
                type="phone"
                placeholder="Telefonszám"
                name="phone"
                className="border border-[--grey-border] bg-[--product-bg] p-4"
                {...register("phone")}
              />
              {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
              <input
                type="email"
                placeholder="E-mail cím"
                name="email"
                className="border border-[--grey-border] bg-[--product-bg] p-4"
                {...register("email")}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              <input
                type="text"
                placeholder="Termékek neve"
                name="product"
                className="border border-[--grey-border] bg-[--product-bg] p-4"
                {...register("product")}
              />
              <textarea
                type="text"
                placeholder="Üzenet"
                name="message"
                rows={10}
                className="border border-[--grey-border] bg-[--product-bg] p-4"
                {...register("message")}
              />
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}
              <Mainbutton type={"submit"} classname={"self-center"}>
                {isSubmitting ? "Küldés..." : "Küldés"}
              </Mainbutton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
