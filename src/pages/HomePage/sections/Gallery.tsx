import FeaturesMediaGrid from '@/components/sections/features/FeaturesMediaGrid';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function GallerySection() {
  return (
    <div data-webild-section="gallery" id="gallery" id="gallery" data-section="gallery">
      <SectionErrorBoundary name="gallery">
        <FeaturesMediaGrid
          tag="Project Gallery"
          title="Our Recent Work"
          description="Browse through our portfolio of completed electrical, painting, tiling, and tree felling projects across Cape Town."
          primaryButton={{
            text: "Request an Estimate",
            href: "#contact",
          }}
          items={[
            {
              title: "Electrical Distribution Board",
              description: "Professional DB board installation and compliance certification.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508993-7j91lxbl.jpg?_wi=1",
            },
            {
              title: "Modern Ceiling Installation",
              description: "Custom ceiling design and lighting installation.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508994-0eccbbf2.jpg?_wi=1",
            },
            {
              title: "Pool Renovation",
              description: "Complete pool resurfacing and tiling project.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508994-0bmy1vkw.jpg?_wi=1",
            },
            {
              title: "Interior Painting",
              description: "High-quality interior painting and finishing.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508995-mdlqp5t6.jpg?_wi=1",
            },
          ]}
          textAnimation="slide-up"
        />
      </SectionErrorBoundary>
    </div>
  );
}