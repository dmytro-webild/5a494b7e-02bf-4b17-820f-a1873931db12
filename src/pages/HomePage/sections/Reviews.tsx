import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ReviewsSection() {
  return (
    <div data-webild-section="reviews" id="reviews" id="reviews" data-section="reviews">
      <SectionErrorBoundary name="reviews">
        <TestimonialMarqueeCards
          tag="Customer Reviews"
          title="What Cape Town Says About Us"
          description="Don't just take our word for it. Read what our satisfied clients have to say about our electrical, painting, and maintenance services."
          primaryButton={{
            text: "Get Your Free Quote",
            href: "#contact",
          }}
          testimonials={[
            {
              name: "Thabo M.",
              role: "Homeowner, Bellville",
              quote: "Team Work Projects rewired my entire house. Professional, on time, and the compliance certificate was issued without any hassle. Highly recommended!",
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-defocused-man_23-2148336875.jpg",
            },
            {
              name: "Sarah J.",
              role: "Business Owner, CBD",
              quote: "We used them for a complete office repaint and some electrical upgrades. The team was efficient and worked around our business hours. Great service.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-cheerful-manager-with-big-smile-outside-office_1139-337.jpg",
            },
            {
              name: "David K.",
              role: "Property Manager, Sea Point",
              quote: "I rely on Team Work Projects for all maintenance across my properties. Whether it's a burst pipe, a faulty DB board, or tree felling, they always deliver.",
              imageSrc: "http://img.b2bpic.net/free-photo/confident-cheerful-businesswoman_1262-21021.jpg",
            },
            {
              name: "Lerato N.",
              role: "Homeowner, Claremont",
              quote: "The tiling job they did in my bathroom is flawless. The attention to detail is impressive, and they cleaned up perfectly afterwards.",
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-senior-business-man-relaxing_1262-2369.jpg",
            },
            {
              name: "Michael R.",
              role: "Resident, Constantia",
              quote: "Had a large tree that needed felling close to the house. They handled it safely and professionally. Very impressed with their expertise.",
              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-multiracial-business-team_1262-21007.jpg",
            },
            {
              name: "Nomsa V.",
              role: "Homeowner, Mitchells Plain",
              quote: "Fast response when we had an electrical emergency over the weekend. The electrician was friendly and sorted the problem quickly.",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businesspeople-with-luggage-standing-front-escalator_107420-95768.jpg",
            },
          ]}
          textAnimation="slide-up"
        />
      </SectionErrorBoundary>
    </div>
  );
}