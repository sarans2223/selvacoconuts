import Link from "next/link";
import { Sprout, Twitter, Linkedin, Facebook } from "lucide-react";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">
                Selva AgriExports
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium Thanga Naaru & Coir Solutions for a Greener Planet.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <address className="text-sm not-italic text-muted-foreground space-y-2">
              <p>SELVA ADHITIYA COIRS AND PITH BLOCKS</p>
              <p>S.F.No.: 63/7, Therkkuthottam,</p>
              <p>Kuppampalayam, Sankaramanallur,</p>
              <p>MADATHUKULAM - 642 204.</p>
              <p>GSTIN: 33BCAPT9142F1ZN</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+919626946238"
                  className="hover:text-primary transition-colors"
                >
                  +91 96269 46238
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:exports@selvaadhitiya.com"
                  className="hover:text-primary transition-colors"
                >
                  exports@selvaadhitiya.com
                </a>
              </p>
            </address>
          </div>

          <div>
             <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Selva AgriExports. All Rights Reserved.</p>
          <p className="mt-2">A commitment to environmental conservation and rural empowerment.</p>
        </div>
      </div>
    </footer>
  );
}
