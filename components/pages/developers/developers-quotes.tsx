import Slider from 'react-slick';

export const DevelopersQuotes = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  return (
    <section className="container mx-auto my-24 max-w-3xl py-24 px-4" id="quotes">
      <Slider {...settings}>
        <DevelopersQuoteEntry author="Depth Hoar" imageUrl="/images/developers/quotes/depth.jpg">
          Working for Edgeware lets me choose my work while being part of a DAO of like-minded
          individuals, simultaneously learning and using my skills as a developer.
        </DevelopersQuoteEntry>
        <DevelopersQuoteEntry author="Filip" imageUrl="/images/developers/quotes/filip.png">
          Edgeware is the front runner of DAOs. A true community-operated autonomous network. Plus I
          get to work with my favourite programming language Rust.
        </DevelopersQuoteEntry>
        <DevelopersQuoteEntry author="Ramsey" imageUrl="/images/developers/quotes/ramsey.png">
          Edgeware has the grassroots values that allow for new ideas and paradigms to emerge.
        </DevelopersQuoteEntry>
        <DevelopersQuoteEntry author="Nimish" imageUrl="/images/developers/quotes/nimish.jpg">
          I think of Edgeware as a one of a kind blockchain network which is truly being developed
          by the community and not by some centralised entity.
        </DevelopersQuoteEntry>
      </Slider>
    </section>
  );
};

type DevelopersQuoteEntryProps = {
  children: React.ReactNode;
  author: string;
  imageUrl: string;
};

const DevelopersQuoteEntry = ({ children, author, imageUrl }: DevelopersQuoteEntryProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <img
        src={imageUrl}
        alt={author}
        loading="lazy"
        className="h-32 w-32 rounded-full border-4 border-white bg-white"
      />
      <blockquote className="text-xl md:text-2xl">
        <p className="my-4 text-xl leading-relaxed md:text-2xl">&ldquo;{children}&rdquo;</p>
        <cite className="text-normal non-italic mt-2 block text-primary-500">{author}</cite>
      </blockquote>
    </div>
  );
};
