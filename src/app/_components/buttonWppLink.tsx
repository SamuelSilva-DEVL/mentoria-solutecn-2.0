import { FaWhatsapp } from "react-icons/fa";

type ButtonWppLinkProps = {
  title?: string;
  disabled?: boolean;
};

export function ButtonWppLink({ title, disabled = false }: ButtonWppLinkProps) {
  return (
    <a
      data-aos="fade-up"
      data-aos-delay="500"
      target={!disabled ? "_blank" : ""}
      href={!disabled ? `https://wa.me/5588994822506?text=Olá vim pelo site e gostaria de mais informações sobre a solutecn` : ""}
      // className={`bg-[${color}] text-[${textColor}] px-5 py-3 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:opacity-50`}
      className="wpp-button-link w-fit px-5 py-5 flex gap-1.5 text-[12px] uppercase md:text-[16px]"
    >
      <FaWhatsapp size={20}/>
      {title ? title : "Contato via WhatsApp"}
    </a>
  );
}
