import Image from "next/image"

const Illustration = () => {
  return (
    <section className="lg:px-20 md:px-10 px-2 w-fit mx-auto">
        <Image className="" src="/assets/illustration.png" alt="illustration" width={1283} height={582} />
    </section>
  )
}

export default Illustration