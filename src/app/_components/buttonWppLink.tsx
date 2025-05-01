export function ButtonWppLink({title}: {title?: string}) {
    return (
        <a
        data-aos="fade-up"
        data-aos-delay="500"
        target="_blank"
        href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações sobre a solutecn`}
        className="bg-[#222222] px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:opacity-50" 
      >
        {/* <WhatsappLogo className='w-5 h-5' /> */}
        {title ? title : "Contato via WhatsApp"}
      </a>
    )
}