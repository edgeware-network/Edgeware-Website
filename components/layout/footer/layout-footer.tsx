import { FooterCopyright } from './footer-copyright';
import { FooterForm } from './footer-form';
import { FooterNav } from './footer-nav';
import { FooterSocial } from './footer-social';

import { footerLinks } from './footer-nav-items';

export const Footer: React.FC = () => {
  return (
    <footer className="text-white py-16 mt-8 relative z-10 lg:pt-12 lg:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between md:flex-row md:flex-wrap p-4">
          {footerLinks.map((group, index) => (
            <div className="mb-4 md:mb-8 md:basis-1/3 lg:basis-1/6" key={`group-${index}`}>
              <strong className="block mb-4">{group.headline}</strong>
              <FooterNav items={group.items} />
            </div>
          ))}

          <div className="mb-4 md:mb-8 md:basis-1/3 lg:basis-1/5">
            <div>
              <strong className="block mb-4">Sign up for our updates</strong>
              <FooterForm />
            </div>
            <div>
              <strong className="block mb-4">Find us on</strong>
              <FooterSocial />
            </div>
          </div>
        </div>

        <div className="m-4 text-center">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};
