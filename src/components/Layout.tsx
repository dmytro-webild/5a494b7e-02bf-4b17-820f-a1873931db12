import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Our Services",
    "href": "#services"
  },
  {
    "name": "Why Choose Us",
    "href": "#about"
  },
  {
    "name": "Recent Projects",
    "href": "#projects"
  },
  {
    "name": "Contact Us",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="default" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Team Work Projects"
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508992-jc7ko550.jpg"
      ctaButton={{
        text: "Call Now: 061 096 7678",
        href: "tel:0610967678",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Team Work Projects"
      imageSrc="https://storage.googleapis.com/webild/users/user_3G8pr39VQA8qyoH5BQldYgFWqm6/uploaded-1783497508992-jc7ko550.jpg"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Electrical",
              href: "#services",
            },
            {
              label: "Painting",
              href: "#services",
            },
            {
              label: "Tiling",
              href: "#services",
            },
            {
              label: "Tree Felling",
              href: "#services",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Call: 061 096 7678",
              href: "tel:0610967678",
            },
            {
              label: "Email: teamworkprojectsonline@gmail.com",
              href: "mailto:teamworkprojectsonline@gmail.com",
            },
            {
              label: "Cape Town, South Africa",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Team Work Projects. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
