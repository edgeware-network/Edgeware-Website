import { FooterCopyright } from './footer-copyright';
import { FooterForm } from './footer-form';
import { FooterNav } from './footer-nav';
import { FooterSocial } from './footer-social';

import { footerLinks } from './footer-nav-items';

export const Footer = () => {
  return (
    <footer className="relative z-10 py-6 text-white sm:mt-12 md:mt-24 md:py-12 lg:mt-48 lg:py-24 lg:pt-12 lg:pb-24">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col justify-between p-4 md:flex-row md:flex-wrap">
          {footerLinks.map((group, index) => (
            <div className="mb-4 md:mb-8 md:basis-1/3 lg:basis-1/6" key={`group-${index}`}>
              <strong className="mb-4 block">{group.headline}</strong>
              <FooterNav items={group.items} />
            </div>
          ))}

          <div className="mb-4 md:mb-8 md:basis-1/3 lg:basis-1/5">
            <div>
              <strong className="mb-4 block">Sign up for our updates</strong>
              <FooterForm />
            </div>
            <div>
              <strong className="mb-4 block">Find us on</strong>
              <FooterSocial />
            </div>
          </div>
        </div>

        <div className="m-4">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};
