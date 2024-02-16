"use client";

import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import styles from "./auth-form.module.css";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER"; // union type of strings (variant can only be LOGIN or REGISTER) | it will be used for useState hook of variant and setVariant

const AuthForm = () => {
  // declare state variables
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  // change variant from LOGIN to REGISTER and vice versa
  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === "LOGIN" ? "REGISTER" : "LOGIN"));
  }, [variant]);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    router.push("/admin");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              type="text"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={styles.button}
            >
              {variant === "LOGIN" ? "Sign in" : "Sign Up"}
            </button>
          </div>
        </form>

        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                alignItems: "center",
              }}
            >
              <div style={{ border: "1px solid $D1D5DB", width: "100%" }}></div>
            </div>
            <div
              style={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
              }}
            >
              <span
                style={{
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  color: "#6B7280",
                  backgroundColor: "#ffffff",
                }}
              >
                Or Continue with
              </span>
            </div>
          </div>

          <div className={styles.socialButtonCover}>
            <button type="button" className={styles.socialButton}>
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ marginRight: "0.5rem" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M12 22a10 10 0 0 1-7.1-3A9.9 9.9 0 0 1 5 4.8C7 3 9.5 2 12.2 2h.2c2.4 0 4.8 1 6.6 2.6l-2.5 2.3a6.2 6.2 0 0 0-4.2-1.6c-1.8 0-3.5.7-4.8 2a6.6 6.6 0 0 0-.1 9.3c1.2 1.3 2.9 2 4.7 2h.1a6 6 0 0 0 4-1.1c1-.9 1.8-2 2.1-3.4v-.2h-6v-3.4h9.6l.1 1.9c-.1 5.7-4 9.6-9.7 9.6H12Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Google</span>
            </button>
          </div>
        </div>

        <div className={styles.footer}>
          <div>
            {variant === "LOGIN"
              ? "New to Strive?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className={styles.link}>
            {variant === "LOGIN" ? "Create an account" : "Sign in"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
