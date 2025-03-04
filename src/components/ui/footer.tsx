import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const footerLinks = {
    courses: {
      title: "Courses",
      links: [
        { label: "Classroom courses", href: "/classroom-courses" },
        { label: "Virtual classroom courses", href: "/virtual-courses" },
        { label: "E-learning courses", href: "/elearning" },
        { label: "Video Courses", href: "/video-courses" },
        { label: "Offline Courses", href: "/offline-courses" },
      ],
    },
    community: {
      title: "Community",
      links: [
        { label: "Learners", href: "/learners" },
        { label: "Partners", href: "/partners" },
        { label: "Developers", href: "/developers" },
        { label: "Transactions", href: "/transactions" },
        { label: "Blog", href: "/blog" },
        { label: "Teaching Center", href: "/teaching-center" },
      ],
    },
    quickLinks: {
      title: "Quick links",
      links: [
        { label: "Home", href: "/" },
        { label: "Professional Education", href: "/professional-education" },
        { label: "Courses", href: "/courses" },
        { label: "Admissions", href: "/admissions" },
        { label: "Testimonial", href: "/testimonial" },
        { label: "Programs", href: "/programs" },
      ],
    },
    more: {
      title: "More",
      links: [
        { label: "Press", href: "/press" },
        { label: "Investors", href: "/investors" },
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
        { label: "Help", href: "/help" },
        { label: "Contact", href: "/contact" },
      ],
    },
  };

  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Links */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">

              <span className="text-2xl font-bold">🐝 Edudu</span>

            </Link>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-primary">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-primary">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-primary">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-600 hover:text-primary text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t">
          <div className="text-sm text-gray-600">
            <p>©2020 Edudu.co</p>
            <p>Edudu is a registered Trademark of Edudu.co</p>
          </div>
        </div>
      </div>
    </footer>
  );
}