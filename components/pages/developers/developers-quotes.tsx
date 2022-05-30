export const DevelopersQuotes = () => {
  return (
    <section className="container mx-auto my-24 max-w-3xl py-24 px-4" id="quotes">
      <div>
        <DevelopersQuoteEntry
          author="Depth Hoar"
          imageUrl="https://pbs.twimg.com/profile_images/1483878672570454017/bW-vOqqN_400x400.jpg"
        >
          Working for Edgeware lets me choose my work while being part of a DAO of like-minded
          individuals, simultaneously learning and using my skills as a developer.
        </DevelopersQuoteEntry>
      </div>
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
