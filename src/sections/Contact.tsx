import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { api } from "../services/api";
import Turnstile from "../components/Turnstile";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  turnstileToken: string;
};

function Contact() {
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSucceeded, setSubmitSucceeded] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onSubmit",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitMessage("");
    setSubmitSucceeded(false);

    try {
      await api.post("/contact", data);

      setSubmitSucceeded(true);
      setSubmitMessage("Consulta enviada correctamente.");
      reset();
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError<{ message?: string }>(error)) {
        setSubmitMessage(
          error.response?.data?.message ||
            "No pudimos enviar la consulta. Intenta nuevamente.",
        );
      } else {
        setSubmitMessage("No pudimos enviar la consulta. Intenta nuevamente.");
      }
    } finally {
      setValue("turnstileToken", "");
      setTurnstileKey((key) => key + 1);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div data-reveal="up" className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-between bg-[linear-gradient(145deg,#0f172a,#020617)] p-8 text-white sm:p-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Empecemos una conversación
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Conectemos tu empresa con nuevas oportunidades.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-300">
              Contanos qué necesitás. Nuestro equipo analizará tu consulta para
              acompañarte con una solución a medida.
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}assets/cgx-logo-international-clean.png`}
            alt="CGX International"
            className="mx-auto mt-10 w-40 opacity-95"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-slate-50 p-6 sm:p-10">
          <div className="mb-8 rounded-xl border border-amber-300/40 bg-amber-50 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
              Contacto directo
            </p>
            <p className="mt-3 leading-relaxed text-slate-700">
              Escribinos por WhatsApp o completá el siguiente formulario y nos
              pondremos en contacto con vos.
            </p>
            <a
              href="https://wa.me/542914421242"
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-lg shadow-green-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400/30"
            >
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="h-5 w-5 shrink-0 fill-current transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
              >
                <path d="M16.02 3C8.84 3 3 8.77 3 15.87c0 2.5.73 4.94 2.12 7.02L3.13 30l7.32-1.91a13.1 13.1 0 0 0 5.57 1.26h.01C23.2 29.35 29 23.58 29 16.48A12.9 12.9 0 0 0 16.02 3Zm0 23.92h-.01a10.7 10.7 0 0 1-5.44-1.49l-.42-.25-4.34 1.14 1.16-4.2-.27-.43a10.37 10.37 0 0 1-1.64-5.82c0-5.76 4.92-10.45 10.97-10.45 2.93 0 5.69 1.1 7.75 3.09a10.2 10.2 0 0 1 3.21 7.97c0 5.76-4.92 10.44-10.97 10.44Zm6.02-7.82c-.33-.16-1.96-.95-2.26-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.39-.5-2.65-1.61a9.86 9.86 0 0 1-1.83-2.24c-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.17-.19.22-.32.33-.54.11-.22.06-.41-.03-.57-.08-.16-.74-1.75-1.01-2.4-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.32-1.15 1.11-1.15 2.71s1.18 3.15 1.34 3.37c.17.22 2.32 3.5 5.63 4.9.79.34 1.4.54 1.88.69.79.25 1.51.21 2.08.13.63-.09 1.96-.79 2.23-1.55.28-.76.28-1.41.19-1.55-.08-.13-.3-.21-.63-.37Z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className={`w-full rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.name
                  ? "border-red-500"
                  : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              }`}
              {...register("name", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
              })}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Empresa"
              className={`w-full rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.company
                  ? "border-red-500"
                  : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              }`}
              {...register("company", {
                required: "La empresa es obligatoria",
                minLength: {
                  value: 2,
                  message: "La empresa debe tener al menos 2 caracteres",
                },
              })}
            />

            {errors.company && (
              <p className="mt-1 text-sm text-red-500">
                {errors.company.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Tu email"
              className={`w-full rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.email
                  ? "border-red-500"
                  : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              }`}
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Ingrese un email válido",
                },
              })}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              placeholder="Teléfono"
              className={`w-full rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.phone
                  ? "border-red-500"
                  : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              }`}
              {...register("phone", {
                required: "El teléfono es obligatorio",
                minLength: {
                  value: 3,
                  message: "Ingrese un número de teléfono válido",
                },
              })}
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Mensaje"
              rows={6}
              className={`w-full resize-none rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.message
                  ? "border-red-500"
                  : "border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              }`}
              {...register("message", {
                required: "El mensaje es obligatorio",
                minLength: {
                  value: 10,
                  message: "El mensaje debe tener al menos 10 caracteres",
                },
              })}
            />

            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <Turnstile
              key={turnstileKey}
              onTokenChange={(token) =>
                setValue("turnstileToken", token, { shouldValidate: true })
              }
            />
            <input
              type="hidden"
              {...register("turnstileToken", {
                required: "Confirma que no eres un robot",
              })}
            />
            {errors.turnstileToken && (
              <p className="mt-1 text-sm text-red-500">
                {errors.turnstileToken.message}
              </p>
            )}
          </div>

          {submitMessage && (
            <div
              role="status"
              className={`mb-4 rounded-md border px-4 py-3 text-sm font-medium ${
                submitSucceeded
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-red-500 bg-red-50 text-red-700"
              }`}
            >
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-slate-950 px-6 py-3 font-bold text-amber-300 transition hover:bg-amber-500 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
