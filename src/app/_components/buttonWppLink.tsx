import { FaWhatsapp } from "react-icons/fa";

type ButtonWppLinkProps = {
  title?: string;
};

export function ButtonWppLink({ title }: ButtonWppLinkProps) {
  return (
    <a
      data-aos="fade-up"
      data-aos-delay="500"
      target="_blank"
      href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações sobre a solutecn`}
      // className={`bg-[${color}] text-[${textColor}] px-5 py-3 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:opacity-50`}
      className="wpp-button-link w-fit px-5 py-5 flex gap-1.5"
    >
      <FaWhatsapp size={20}/>
      {title ? title : "Contato via WhatsApp"}
    </a>
  );
}
