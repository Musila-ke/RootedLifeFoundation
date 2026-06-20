import Link from "next/link";
import Logo from "@/components/Logo";

const FOOTER_LINKS = {
  Organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Programs", href: "/programs" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
  ],
  "Get Involved": [
    { label: "Volunteer", href: "/volunteer" },
    { label: "Donate", href: "/donate" },
    { label: "Events", href: "/events" },
    { label: "Partners", href: "/partners" },
  ],
  Resources: [
    { label: "Understanding SCD", href: "/understanding-scd" },
    { label: "Warrior Stories", href: "/warrior-stories" },
    { label: "Support Hub", href: "/support-hub" },
    { label: "Prevention", href: "/prevention" },
    { label: "Blog", href: "/blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-white">
      <div className="container-page py-8 md:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 md:gap-8">
          <div className="lg:col-span-2 text-center md:text-left">
            <Logo variant="footer" />
            <p className="mt-1 mx-auto md:mx-0 max-w-sm text-sm leading-relaxed text-neutral-400 md:mt-2">
              Advancing health equity for sickle cell warriors through education,
              support, advocacy, and environmental action.
            </p>
            <div className="mt-2 flex justify-center gap-3 md:mt-3 md:justify-start">
              {[
                { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "Instagram", path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.11 2.775c.636-.247 1.363-.416 2.427-.465C8.88 2.013 9.235 2 12.315 2zm0 1.802c-2.406 0-2.688.01-3.635.053-1.064.049-1.641.218-2.025.362-.507.19-.87.416-1.25.797-.38.38-.607.743-.797 1.25-.144.384-.313.961-.362 2.025-.043.947-.053 1.229-.053 3.635 0 2.406.01 2.688.053 3.635.049 1.064.218 1.641.362 2.025.19.507.416.87.797 1.25.38.38.743.607 1.25.797.384.144.961.313 2.025.362.947.043 1.229.053 3.635.053 2.406 0 2.688-.01 3.635-.053 1.064-.049 1.641-.218 2.025-.362.507-.19.87-.416 1.25-.797.38-.38.607-.743.797-1.25.144-.384.313-.961.362-2.025.043-.947.053-1.229.053-3.635 0-2.406-.01-2.688-.053-3.635-.049-1.064-.218-1.641-.362-2.025-.19-.507-.416-.87-.797-1.25-.38-.38-.743-.607-1.25-.797-.384-.144-.961-.313-2.025-.362-.947-.043-1.229-.053-3.635-.053zm0 4.788a4.09 4.09 0 100 8.18 4.09 4.09 0 000-8.18zm0 6.378a2.288 2.288 0 110-4.577 2.288 2.288 0 010 4.577zm3.566-6.174a.96.96 0 11-1.92 0 .96.96 0 011.92 0z" },
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              ].map((platform) => (
                <span
                  key={platform.label}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={platform.path} />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-4 sm:flex-row md:mt-8 md:pt-6">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Rooted Life Foundation. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-neutral-600">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
