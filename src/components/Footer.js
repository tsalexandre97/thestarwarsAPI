import Image from "next/image";

export default function Footer(){
    return (
        <footer className="bg-white h-[66px] w-full flex justify-center mt-[89px]">
            <Image
             src="/sw-footer.svg"
             width={55}
             height={55}
             alt="Star Wars - Logo Footer"
            />
        </footer>
    )
}