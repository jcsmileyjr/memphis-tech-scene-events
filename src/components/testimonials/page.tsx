'use client';
import { useEffect, useState } from "react";
import Testimonial from "./testimonial";
import { getTestimonials } from "@/server/testimonial.server";
import TestimonialInterface from "@/interfaces/testimonialInterface";
import { useMediaQuery } from 'react-responsive';

/**
 * Component that renders a section of testimonials. When the screen size is 
 * smaller than 1280px, only the first testimonial is rendered. Otherwise, all
 * testimonials are rendered. The testimonials are fetched from the server when
 * the component mounts.
 * 
 * @returns A section element containing the testimonials.
 */
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<TestimonialInterface[]>([]);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' });
    
    useEffect(() => {
        const fetchTestimonials = async () => {
            const fetchedTestimonials = await getTestimonials();
            console.log("testimonials", fetchedTestimonials);
            setTestimonials(fetchedTestimonials);
        };
        fetchTestimonials();
    }, []);
    
    return (
        <section className="flex flex-row flex-wrap justify-around gap-2 py-4">
        {isTabletOrMobile 
            ? <Testimonial key={testimonials[0].testimonialId} content={testimonials[0].content} name={testimonials[0].name} title={testimonials[0].title} community={testimonials[0].community} /> 
            : testimonials.map((testimonial) => (
                <Testimonial key={testimonial.testimonialId} content={testimonial.content} name={testimonial.name} title={testimonial.title} community={testimonial.community} />
            ))}
        </section>
    )
}

export default Testimonials;