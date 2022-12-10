import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiMailSend } from "react-icons/bi";
import { Spinner } from "../Spinner/Spinner";
import { useAddCommentMutation } from "../../redux/commentApi";
import styles from "./Form.module.css";

export const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addComment, { isLoading }] = useAddCommentMutation();

  const onSubmit = (data) => {
    addComment(data);
    reset();
  };
  console.log(isLoading);

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <span className={styles.labelName}>Full name</span>
          <input
            className={styles.input}
            type="text"
            {...register("author", { required: true })}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Your comment</span>
          <textarea
            className={styles.input}
            rows="5"
            {...register("content", { required: true })}
          ></textarea>
        </label>

        <button className={styles.formBtn} type="submit">
          {isLoading ? (
            <Spinner size="sm" />
          ) : (
            <>
              <BiMailSend className={styles.icon} />
              Send
            </>
          )}
        </button>
      </form>
    </div>
  );
};
