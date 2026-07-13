"use client";

import { useFormStatus } from "react-dom";

type PendingSubmitButtonProps = {
  children: React.ReactNode;
  className: string;
  disabled?: boolean;
  pendingLabel?: string;
};

export function PendingSubmitButton({
  children,
  className,
  disabled = false,
  pendingLabel = "Saving...",
}: PendingSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${className} disabled:cursor-wait disabled:opacity-70`}
      disabled={disabled || pending}
      type="submit"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
