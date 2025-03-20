import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formDataObject: Record<string, unknown> = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
  
    emailjs
      .send(
        "service_1t1ulcr", 
        "template_4swe4pi", 
        formDataObject, 
        "vRE_fs_iYheSIEcyc"
      )
      .then(
        (response) => {
          console.log("E-mail enviado com sucesso", response);
          setFormSubmitted(true);
        },
        (error) => {
          console.error("Erro ao enviar o e-mail", error);
        }
      );
  };

  return (
    <div className="relative w-full py-20 md:py-40 bg-black border-b flex items-center justify-center px-5 shadow-lg">
      <div className="flex flex-col md:flex-col xl:flex-row items-start justify-center w-full md:w-4/5 max-w-screen-xl">
        
        {/* Formulário */}
        <div className="w-full xl:w-1/2 md:pr-12">
          <motion.h2
            className="text-2xl text-center font-bold mb-10 text-white lexend-regular"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Fala com a gente e bora criar algo incrível!
          </motion.h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
            <div>
              <input
                type="text"
                placeholder="Nome"
                {...register("name", { required: "Nome é obrigatório", minLength: { value: 3, message: "Mínimo 3 caracteres" } })}
                className="w-full p-3 border bg-black border-gray-400 rounded-md"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { 
                  required: "Email é obrigatório", 
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" } 
                })}
                className="w-full p-3 border bg-black border-gray-400 rounded-md"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                placeholder="Mensagem"
                {...register("message", { required: "Mensagem é obrigatória", minLength: { value: 10, message: "Mínimo 10 caracteres" } })}
                className="w-full p-3 border bg-black border-gray-400 rounded-md h-32"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3  text-white font-bold bg-black border-gray-400 border-2 rounded-md hover:bg-white hover:text-gray-900 transition-colors cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 1 }}
            >
              Enviar
            </motion.button>
            {formSubmitted && <p className="text-green-500 mt-3">Mensagem enviada com sucesso!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
