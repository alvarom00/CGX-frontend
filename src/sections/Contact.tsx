import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { api } from "../services/api";
import Turnstile from "../components/Turnstile";
import { useLanguage } from "../context/language";

type ContactFormData = {
  nameOrCompany: string;
  fiscalCondition: "Responsable inscripto" | "Monotributista";
  email: string;
  phone: string;
  message: string;
  turnstileToken: string;
};

function Contact() {
  const { language } = useLanguage();
  const es = language === "es";
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
      setSubmitMessage(es ? "Consulta enviada correctamente." : "Message sent successfully.");
      reset();
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError<{ message?: string }>(error)) {
        setSubmitMessage(
          es
            ? error.response?.data?.message ||
                "No pudimos enviar la consulta. Intentá nuevamente."
            : "We could not send your message. Please try again.",
        );
      } else {
        setSubmitMessage(es ? "No pudimos enviar la consulta. Intentá nuevamente." : "We could not send your message. Please try again.");
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              {es ? "Empecemos una conversación" : "Let's start a conversation"}
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              {es ? "Conectemos tu empresa con nuevas oportunidades." : "Let's connect your business with new opportunities."}
            </h2>
            <p className="mt-6 leading-relaxed text-slate-300">
              {es ? "Contanos qué necesitás. Nuestro equipo analizará tu consulta para acompañarte con una solución a medida." : "Tell us what you need. Our team will review your inquiry and provide a tailored solution."}
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}assets/cgx-logo-international-clean.png`}
            alt="CGX International"
            className="mx-auto mt-10 w-40 opacity-95"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-slate-50 p-6 sm:p-10">
          <div className="mb-8 rounded-xl border border-gold/40 bg-gold/10 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              {es ? "Contacto directo" : "Direct contact"}
            </p>
            <p className="mt-3 leading-relaxed text-slate-700">
              {es ? "Escribinos por WhatsApp o completá el siguiente formulario y nos pondremos en contacto con vos." : "Message us on WhatsApp or complete the form below and we will contact you."}
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
              {es ? "Escribinos por WhatsApp" : "Message us on WhatsApp"}
            </a>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder={es ? "Nombre / Empresa" : "Name / Company"}
              className={`w-full rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.nameOrCompany
                  ? "border-red-500"
                  : "border-slate-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
              }`}
              {...register("nameOrCompany", {
                required: es ? "El nombre o empresa es obligatorio" : "Name or company is required",
                minLength: {
                  value: 2,
                  message: es ? "Debe tener al menos 2 caracteres" : "Must contain at least 2 characters",
                },
              })}
            />

            {errors.nameOrCompany && (
              <p className="mt-1 text-sm text-red-500">
                {errors.nameOrCompany.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <select
              aria-label={es ? "Condición fiscal" : "Tax status"}
              defaultValue=""
              className={`w-full rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.fiscalCondition
                  ? "border-red-500"
                  : "border-slate-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
              }`}
              {...register("fiscalCondition", {
                required: es ? "La condición fiscal es obligatoria" : "Tax status is required",
              })}
            >
              <option value="" disabled>
                {es ? "Condición fiscal" : "Tax status"}
              </option>
              <option value="Responsable inscripto">
                {es ? "Responsable inscripto" : "Registered taxpayer"}
              </option>
              <option value="Monotributista">{es ? "Monotributista" : "Simplified taxpayer"}</option>
            </select>

            {errors.fiscalCondition && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fiscalCondition.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder={es ? "Tu email" : "Your email"}
              className={`w-full rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.email
                  ? "border-red-500"
                  : "border-slate-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
              }`}
              {...register("email", {
                required: es ? "El email es obligatorio" : "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: es ? "Ingresá un email válido" : "Enter a valid email",
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
              placeholder={es ? "Teléfono" : "Phone"}
              className={`w-full rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.phone
                  ? "border-red-500"
                  : "border-slate-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
              }`}
              {...register("phone", {
                required: es ? "El teléfono es obligatorio" : "Phone is required",
                minLength: {
                  value: 3,
                  message: es ? "Ingresá un número de teléfono válido" : "Enter a valid phone number",
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
              placeholder={es ? "Mensaje" : "Message"}
              rows={6}
              className={`w-full resize-none rounded-md border bg-white px-4 py-3 outline-none transition ${
                errors.message
                  ? "border-red-500"
                  : "border-slate-300 focus:border-gold focus:ring-2 focus:ring-gold/20"
              }`}
              {...register("message", {
                required: es ? "El mensaje es obligatorio" : "Message is required",
                minLength: {
                  value: 10,
                  message: es ? "El mensaje debe tener al menos 10 caracteres" : "Message must contain at least 10 characters",
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
              key={`${turnstileKey}-${language}`}
              language={language}
              onTokenChange={(token) =>
                setValue("turnstileToken", token, { shouldValidate: true })
              }
            />
            <input
              type="hidden"
              {...register("turnstileToken", {
                required: es ? "Confirmá que no sos un robot" : "Confirm that you are not a robot",
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
            className="w-full rounded-md bg-slate-950 px-6 py-3 font-bold text-gold transition hover:bg-gold hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (es ? "Enviando..." : "Sending...") : (es ? "Enviar" : "Send")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
