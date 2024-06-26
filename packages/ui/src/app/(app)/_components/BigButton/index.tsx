import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";
import Spinner from "@app/(app)/_components/Spinner";
interface BigButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
}

export default function BigButton({
  className,
  text,
  isLoading,
  ...rest
}: BigButtonProps) {
  const spinner = isLoading ? <Spinner type="light" /> : null;
  return (
    <button className={clsx(className, styles.button, "p-bold")} {...rest}>
      {spinner}
      {text}
    </button>
  );
}
