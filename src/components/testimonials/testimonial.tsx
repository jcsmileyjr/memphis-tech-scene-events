

const Testimonial = ({content, name, title,community}:{content:string,name:string,title:string,community:string}) => {
    const profile = `${name} — ${title}, ${community}`
    return (
        <div className="font-quicksand font-normal w-full md:max-w-[45%]">
            <p>{content}</p>
            <div className="font-bold">{profile}</div>
        </div>
    )
}

export default Testimonial