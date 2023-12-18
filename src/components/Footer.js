import Image from "next/image";
import { Lato } from 'next/font/google'

const lato = Lato({ 
    weight: '400',
    subsets: ['latin'] 
})

export default function Footer(){
    return (
        <footer className="bg-white h-[66px] w-full flex items-center justify-center mt-[89px]">
            <p className={`${lato.className} hidden lg:block text-[#343434] text-[14px]`}>
            STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados
            </p>
            <span className="w-[1px] h-[44px] mx-[59px] bg-[#000] hidden lg:block"></span>
            <Image
             src="/sw-footer.svg"
             width={55}
             height={55}
             alt="Star Wars - Logo Footer"
            />
        </footer>
    )
}