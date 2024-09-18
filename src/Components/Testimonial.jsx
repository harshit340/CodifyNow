/* eslint-disable react/prop-types */
import React from 'react';
import { Carousel } from 'antd';
import '../style/Testimonial.css';

const testimonials = [
    {
      rating: 5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
      name: "Henry Arthur",
      position: "CEO, Food Express",
    },
    {
      rating: 5,
      text: "Another example testimonial showcasing the carousel's ability to display multiple reviews in a seamless format.",
      name: "John Doe",
      position: "Manager, Some Company",
    },
    {
      rating: 5,
      text: "I've had an amazing experience with this company. Their product quality and customer service are outstanding!",
      name: "Emily Clark",
      position: "CTO, Tech Innovators",
    },
    {
      rating: 5,
      text: "The service exceeded my expectations. Their attention to detail and customer support was top-notch.",
      name: "Michael Brown",
      position: "Director, Creative Agency",
    },
    {
      rating: 5,
      text: "A game-changing experience. I would recommend their service to anyone looking for excellence.",
      name: "Sarah Johnson",
      position: "COO, Global Enterprises",
    },
    {
      rating: 5,
      text: "The experience was okay, but there were a few issues with the product that I hope they will improve on.",
      name: "David Wilson",
      position: "Analyst, Data Solutions",
    },
    {
      rating: 4,
      text: "Overall, a decent service, but there’s still room for improvement in terms of response time and customer care.",
      name: "Lisa White",
      position: "Freelancer",
    },
    {
      rating: 5,
      text: "Fantastic experience! I will definitely return. The quality of service was beyond what I expected.",
      name: "Samuel Green",
      position: "Founder, Startup Alpha",
    },
    {
      rating: 4,
      text: "Great product and service! Their team went above and beyond to ensure everything was perfect.",
      name: "Jessica Turner",
      position: "Marketing Lead, BrandCo",
    },
    {
      rating: 4,
      text: "It didn’t meet my expectations, but I hope they can improve in the future. The product quality was subpar.",
      name: "Daniel Harris",
      position: "Consultant, Harris Consulting",
    },
  ];
  

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-stars">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <span key={i} className="testimonial-star">⭐</span>
      ))}
    </div>
    <p className="testimonial-text">{testimonial.text}</p>
    <div className="testimonial-user">
      <img
        src="https://via.placeholder.com/50"
        alt="User"
        className="testimonial-avatar"
      />
      <div>
        <h4 className="testimonial-name">{testimonial.name}</h4>
        <p className="testimonial-position">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

export default function Testimonial() {
  return (
    <div className="carousel-container">
      <Carousel arrows infinite={true}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

