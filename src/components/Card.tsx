import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl sm:max-w-none">
      {children}
    </div>
  );
}

export default Card;
