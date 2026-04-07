export default function Heading({ title,description  }) {
    return(
        <div className="py-1">
            <h2 className=" text-2xl font-col text-[#0B132A] leading-[100%] mb-2">{title}</h2>
            <p className="md:text-sm text-[#4F5665] mb-3.5">{description}</p>
        </div>
    );
}