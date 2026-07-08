import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="Available 24/7"
      title="Trusted Trades Available 24/7 Cape Towns Choice"
      description="From electrical installations and compliance certificates to painting, tiling, and tree felling—Team Work Projects delivers premium workmanship when you need it Available around the clock, every day"
      primaryButton={{
        text: "Request a Free Quote",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Call Now: 061 096 7678",
        href: "tel:0610967678",
      }}
      leftItems={[
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508992-jc7ko550.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508993-7j91lxbl.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508994-0eccbbf2.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508994-0bmy1vkw.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508995-mdlqp5t6.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-steel-worker-analyzing-finished-products-while-working-factory_637285-4742.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/service-maintenance-worker-repairing_23-2149176718.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508995-mdlqp5t6.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508994-0bmy1vkw.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508994-0eccbbf2.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508993-7j91lxbl.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508992-jc7ko550.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="About Us"
      title="Expertise You Can Trust"
      description="Team Work Projects is dedicated to providing high-quality trade services in Cape Town. We blend professional reliability with the convenience of a 24/7 service model to ensure your home or business runs smoothly at all times."
      imageSrc="http://img.b2bpic.net/free-photo/cardboard-house-with-tools-top-view_23-2148393088.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedCards
      tag="Our Expertise"
      title="Multiservice Excellence"
      description="Whether it's a minor repair or a major renovation, our team brings professionalism and precision to every project."
      items={[
        {
          title: "Electrical Services",
          description: "Professional installations, maintenance, and compliance certificates for your safety.",
          tags: [
            "Electrical",
            "Compliance",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-overalls-focused-work-switchboard-with-fuses-using-tablet_169016-66542.jpg",
        },
        {
          title: "Painting Services",
          description: "Interior and exterior painting to breathe new life into your property.",
          tags: [
            "Painting",
            "Finish",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-foreman-orange-work-clothes-yellow-hardhat-standing-ladder-with-measuring-tape-hand-happily-looking-camera-work_574295-1530.jpg",
        },
        {
          title: "Tiling",
          description: "Expert floor and wall tiling for modern residential and commercial spaces.",
          tags: [
            "Tiling",
            "Flooring",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/tiler-working-renovation-apartment_23-2149278593.jpg",
        },
        {
          title: "Tree Felling",
          description: "Safe, professional tree removal and garden clearing for property maintenance.",
          tags: [
            "Outdoors",
            "Safety",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-having-game-golf-outdoors-field_23-2150551612.jpg",
        },
        {
          title: "Property Maintenance",
          description: "General repairs and upkeep for residential and commercial properties.",
          tags: [
            "General",
            "Repair",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-men-working-together_23-2148751979.jpg",
        },
        {
          title: "24/7 Emergency Support",
          description: "Around-the-clock availability for urgent electrical or home maintenance needs.",
          tags: [
            "Emergency",
            "Support",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-worker-yellow-uniform-with-clocks-blue_179666-30267.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="projects" data-section="projects">
    <SectionErrorBoundary name="projects">
          <FeaturesRevealCardsBento
      tag="Recent Work"
      title="Portfolio Highlights"
      description="A glimpse into our recent craftsmanship and professional successes across Cape Town."
      items={[
        {
          title: "Electrical Refurb",
          description: "Panel board replacement and full certification.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-electrical-technician-working-switchboard_169016-65750.jpg",
        },
        {
          title: "Interior Painting",
          description: "High-end finish for a modern luxury home.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-painting-walls_23-2149344041.jpg",
        },
        {
          title: "Kitchen Tiling",
          description: "Modern patterned tiles installed with precision.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/tiler-working-renovation-apartment_23-2149278591.jpg",
        },
        {
          title: "Garden Clearing",
          description: "Safe tree felling in a confined residential space.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/trowels-near-fence_23-2147714873.jpg",
        },
        {
          title: "Ceiling Install",
          description: "Custom ceiling panels for a garage workshop.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/installing-ceramic-floor-tiles-construction-site-construction-workers-workers-laying-tiles-floor-with-cement-adhesive-renovating-floor_166373-2132.jpg",
        },
        {
          title: "Outdoor Tiling",
          description: "Durable finishes for a modern pool area.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/focus-wood-shaper-used-by-carpenter-smoothing-out-panels_482257-89312.jpg",
        },
        {
          title: "Emergency Electrical",
          description: "Rapid response troubleshooting for a local business.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-employee-talking-landline-phone_482257-96280.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Impact"
      title="Professional Standards"
      description="We stand by our work with clear commitments to quality and responsiveness."
      metrics={[
        {
          value: "24/7",
          title: "Always On",
          features: [
            "Anytime emergency support",
            "Ready to deploy",
            "Fast response times",
          ],
        },
        {
          value: "100%",
          title: "Workmanship",
          features: [
            "Qualified technicians",
            "Quality-assured results",
            "Compliance certified",
          ],
        },
        {
          value: "Cape Town",
          title: "Local Service",
          features: [
            "Deep local knowledge",
            "Fast arrival",
            "Community focused",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Testimonials"
      title="Client Voices"
      description="See why Cape Town homeowners and property managers trust Team Work Projects."
      testimonials={[
        {
          name: "Sarah Johnson",
          role: "Homeowner",
          quote: "The electrical team responded so quickly when I had an urgent power failure. Exceptional service.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrat-young-man-laughing_23-2148560405.jpg",
        },
        {
          name: "Mark Stevens",
          role: "Property Manager",
          quote: "They are now our go-to for all electrical and tiling maintenance across our portfolio.",
          imageSrc: "http://img.b2bpic.net/free-photo/he-is-satisfied-from-his-life_329181-2789.jpg",
        },
        {
          name: "Linda M.",
          role: "Homeowner",
          quote: "Beautiful tiling job in our kitchen. They were professional, clean, and quick.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-woman-sitting-sofa-home-portrait-comfortable-woman-winter-clothes-relaxing_657921-462.jpg",
        },
        {
          name: "David W.",
          role: "Real Estate Investor",
          quote: "Reliability is key for me, and Team Work Projects has never let me down.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-holding-big-flower-pot_23-2148396845.jpg",
        },
        {
          name: "Claire P.",
          role: "Small Business Owner",
          quote: "Professional, on time, and knowledgeable. Highly recommend their painting services.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-construction_23-2149366626.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Support"
      title="Common Questions"
      description="Find answers to help you get started with our services."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "What areas do you cover?",
              answer: "We serve all areas across Cape Town.",
            },
            {
              question: "Are you open on weekends?",
              answer: "Yes, we provide 24/7 service all year round.",
            },
            {
              question: "How do I get a quote?",
              answer: "Request a free quote through our contact form.",
            },
          ],
        },
        {
          name: "Electrical",
          items: [
            {
              question: "Do you provide COC certificates?",
              answer: "Yes, we are fully licensed for electrical compliance.",
            },
            {
              question: "Do you handle emergency electrical issues?",
              answer: "We offer 24-hour rapid response for emergencies.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contact Us"
      text="Ready to get started on your next home improvement or electrical project? Reach out for a free, no-obligation quote today."
      primaryButton={{
        text: "Request a Free Quote",
        href: "#",
      }}
      secondaryButton={{
        text: "Call Now: 061 096 7678",
        href: "tel:0610967678",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
