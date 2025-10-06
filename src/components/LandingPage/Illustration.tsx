import Image from "next/image"

const Illustration = () => {
  return (
    <section className="lg:px-20 md:px-10 px-2 w-fit mx-auto">
        {/* <Image className="" src="/assets/illustration.png" alt="illustration" width={1283} height={582} /> */}
    
    <video width="1282" height="582" autoPlay muted controls>
  <source src="https://res.cloudinary.com/chiaka/video/upload/v1759787004/WhatsApp_Video_2025-10-06_at_4.42.55_PM_tmdlds.mp4" type="video/mp4" />
  
  Your browser does not support the video tag.
</video>
</section>
  )
}

export default Illustration