import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ProcessSection() {
  return (
    <div data-webild-section="process" id="process" id="process" data-section="process">
      <SectionErrorBoundary name="process">
        <FeaturesDetailedSteps
          tag="Our Process"
          title="How We Work"
          description="From your first call to project completion, we ensure a smooth, transparent, and professional experience."
          primaryButton={{
            text: "Get a Free Quote",
            href: "#contact",
          }}
          steps={[
            {
              tag: "Step 1",
              title: "Contact & Consultation",
              subtitle: "Reach out to us",
              description: "Call, WhatsApp, or fill out our online form. We'll discuss your needs and schedule a site visit if necessary.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508993-7j91lxbl.jpg?_wi=1",
            },
            {
              tag: "Step 2",
              title: "Detailed Estimate",
              subtitle: "Transparent pricing",
              description: "We provide a comprehensive, no-obligation quote outlining the scope of work and costs involved.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508994-0eccbbf2.jpg?_wi=1",
            },
            {
              tag: "Step 3",
              title: "Expert Execution",
              subtitle: "Professional workmanship",
              description: "Our skilled tradesmen complete the work efficiently, safely, and to the highest standards.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508994-0bmy1vkw.jpg?_wi=1",
            },
            {
              tag: "Step 4",
              title: "Final Inspection",
              subtitle: "Quality assurance",
              description: "We review the completed project with you to ensure your complete satisfaction before signing off.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508995-mdlqp5t6.jpg?_wi=1",
            },
          ]}
          textAnimation="slide-up"
        />
      </SectionErrorBoundary>
    </div>
  );
}