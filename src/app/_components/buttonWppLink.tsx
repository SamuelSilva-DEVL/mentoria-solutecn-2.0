export function ButtonWppLink({title}: {title?: string}) {
    return (
        <a
        data-aos="fade-up"
        data-aos-delay="500"
        target="_blank"
        href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações sobre a solutecn`}
        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
      >
        {/* <WhatsappLogo className='w-5 h-5' /> */}
        {title ? title : "Contato via WhatsApp"}
      </a>
    )
}