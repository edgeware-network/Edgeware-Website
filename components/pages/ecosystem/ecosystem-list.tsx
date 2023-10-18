import { AllPartnersData } from 'lib/api/partners';
import slugify from 'slugify';
import { PartnerCard } from './ecosystem-list-card';

type EcosystemPartnersListProps = {
  allPartnersByCategory: AllPartnersData;
};

export const EcosystemPartnersList = ({ allPartnersByCategory }: EcosystemPartnersListProps) => {
  return (
    <section className="container mx-auto max-w-6xl">
      <h2 className="text-center text-5xl">Our Partners</h2>
      <EcosystemPartnersListNav items={allPartnersByCategory.map((g) => g.category)} />
      <div className="my-8">
        {allPartnersByCategory.map((partnerGroup) => (
          <EcosystemPartnersCategory
            key={partnerGroup.category}
            categoryName={partnerGroup.category}
            id={slugify(partnerGroup.category, { lower: true })}
          >
            {partnerGroup.partners.map((partner) => (
              <PartnerCard {...partner} key={partner.name} />
            ))}
          </EcosystemPartnersCategory>
        ))}
      </div>
    </section>
  );
};

type EcosystemPartnersListNavProps = {
  items: string[];
};

const EcosystemPartnersListNav = ({ items }: EcosystemPartnersListNavProps) => {
  return (
    <nav className="mx-auto my-8 flex max-w-4xl flex-row flex-wrap items-center justify-center">
      {items.map((cat) => (
        <a
          className="mx-4 my-2 rounded-md bg-grey-800 px-8 py-2 hover:bg-grey-500 hover:text-white"
          href={`#category-${slugify(cat, { lower: true })}`}
          key={cat}
        >
          {cat}
        </a>
      ))}
    </nav>
  );
};

type EcosystemPartnersCategoryProps = {
  children: React.ReactNode;
  categoryName: string;
  id: string;
};

export const EcosystemPartnersCategory = ({
  categoryName,
  id,
  children,
}: EcosystemPartnersCategoryProps) => {
  return (
    <div className="my-8" id={`category-${id}`}>
      <div className="text-center">
        <h3 className="my-4 text-2xl">{categoryName}</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-center">{children}</div>
    </div>
  );
};
