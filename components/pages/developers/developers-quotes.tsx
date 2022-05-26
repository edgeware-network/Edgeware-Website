export const DevelopersQuotes = () => {
  return (
    <div className="container mx-auto max-w-xl py-24">
      <div>
        <DevelopersQuoteEntry author="Depth Hoar">
          Working for Edgeware lets me choose my work while being part of a DAO of like-minded
          individuals, simultaneously learning and using my skills as a developer.
        </DevelopersQuoteEntry>
      </div>
    </div>
  );
};

type DevelopersQuoteEntryProps = {
  children: React.ReactNode;
  author: string;
};

const DevelopersQuoteEntry = ({ children, author }: DevelopersQuoteEntryProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="h-24 w-24 rounded-full bg-white"></div>
      <blockquote className="text-lg">
        <p>&ldquo;{children}&rdquo;</p>
        <cite className="text-normal non-italic mt-2 block text-primary-500">{author}</cite>
      </blockquote>
    </div>
  );
};
