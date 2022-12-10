import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiMailSend } from "react-icons/bi";
import styles from "./Form.module.css";

export const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <span className={styles.labelName}>Full name</span>
          <input className={styles.input} type="text" {...register("name")} />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Your comment</span>
          <textarea
            className={styles.input}
            rows="5"
            {...register("text")}
          ></textarea>
        </label>

        <button className={styles.formBtn} type="submit">
          <BiMailSend className={styles.icon} />
          Send
        </button>
      </form>
    </div>
  );
};
