import Image from "next/image";

export default function Footer(){
    return (
        <footer className="bg-white h-[66px] w-full absolute bottom-0 flex justify-center">
            <Image
             src="/sw-footer.svg"
             width={55}
             height={55}
             alt="Star Wars - Logo Footer"
            />
        </footer>
    )
}