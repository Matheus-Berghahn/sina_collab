import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-4 bg-black text-white pt-6">
      <p className="text-sm">© 2024 Sina. Todos os direitos reservados.</p>
      <a 
        href="https://www.instagram.com/sina.collab/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-2"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default Footer;
