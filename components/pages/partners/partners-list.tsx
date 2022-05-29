import { AllPartnersData } from 'lib/api/partners';
import slugify from 'slugify';
import { PartnerCard } from './partners-list-card';

type PartnersListProps = {
  allPartnersByCategory: AllPartnersData;
};

export const PartnersList = ({ allPartnersByCategory }: PartnersListProps) => {
  return (
    <section className="container mx-auto max-w-6xl">
      <h2 className="text-center text-5xl">Our Partners</h2>
      <PartnersListNav items={allPartnersByCategory.map((g) => g.category)} />
      <div className="my-8">
        {allPartnersByCategory.map((partnerGroup) => (
          <PartnerCategory
            key={partnerGroup.category}
            categoryName={partnerGroup.category}
            id={slugify(partnerGroup.category, { lower: true })}
          >
            {partnerGroup.partners.map((partner) => (
              <PartnerCard {...partner} key={partner.name} />
            ))}
          </PartnerCategory>
        ))}
      </div>
    </section>
  );
};

type PartnersListNavProps = {
  items: string[];
};

const PartnersListNav = ({ items }: PartnersListNavProps) => {
  return (
    <nav className="my-8 mx-auto flex max-w-4xl flex-row flex-wrap items-center justify-center">
      {items.map((cat) => (
        <a
          className="my-2 mx-4 rounded-md bg-grey-800 px-8 py-2 hover:bg-grey-500 hover:text-white"
          href={`#category-${slugify(cat, { lower: true })}`}
          key={cat}
        >
          {cat}
        </a>
      ))}
    </nav>
  );
};

type PartnerCategoryProps = {
  children: React.ReactNode;
  categoryName: string;
  id: string;
};

export const PartnerCategory = ({ categoryName, id, children }: PartnerCategoryProps) => {
  return (
    <div className="my-8" id={`category-${id}`}>
      <div className="text-center">
        <h3 className="my-4 text-2xl">{categoryName}</h3>
      </div>
      <div className="flex flex-row flex-wrap justify-center">{children}</div>
    </div>
  );
};
