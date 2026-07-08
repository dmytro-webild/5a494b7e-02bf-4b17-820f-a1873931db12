import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarCentered from '@/components/ui/NavbarCentered';
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
        <NavbarCentered
      logo="Team Work Projects"
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
        <FooterSimpleCard
      brand="Team Work Projects"
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
