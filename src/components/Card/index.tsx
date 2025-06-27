import Image from "next/image"
import Button from "../Button"

interface CardProps {
  src: string
  title: string
  description: string
}

const Card = ({ src, title, description }: CardProps) => (
  <div className="border-1 border-solid border-[#E7E7E7] flex flex-col rounded-lg overflow-hidden h-[380px] shadow-lg bg-white">
    <div className="relative w-full h-[200px]">
      <Image src={src} alt="Card" fill className="object-cover" />
    </div>
    <div className="p-[12px] flex flex-col flex-1">
      <div className="flex-1">
        <label className="text-left font-bold text-[14px] block">{title}</label>
        <label className="text-justify font-light text-[12px] block mt-[4px]">
          {description}
        </label>
      </div>
      <Button title="Entrar em contato" variant="secondary" />
    </div>
  </div>
)

export default Card
