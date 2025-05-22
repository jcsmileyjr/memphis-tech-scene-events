interface TestimonialProps {
    content: string;
    name: string;
    title: string;
    community: string;
}

const Testimonial = ({ content, name, title, community }: TestimonialProps) => {
    const profile = `${name} — ${title}, ${community}`;
    return (
        <div className="font-quicksand font-normal w-full xl:max-w-[48%]">
            <p>{content}</p>
            <div className="font-bold">{profile}</div>
        </div>
    );
};

export default Testimonial;
