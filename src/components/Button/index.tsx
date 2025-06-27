interface ButtonProps {
    title: string;
    variant?: string;
}

const Button = ({ title, variant }: ButtonProps) => {
    const baseClasses = "font-bold text-[14px] text-white px-[24px] py-[16px]";
    const bgColor = variant === "secondary" ? "bg-[#BC090D] rounded-md" : "bg-black";

    return <button className={`${bgColor} ${baseClasses}`}>{title}</button>;
};

export default Button;
