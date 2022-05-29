import { Button } from 'components/common/button';
import TwitterFillIcon from 'remixicon/icons/Logos/twitter-fill.svg';

export const PressIntro = () => {
  return (
    <section className="container mx-auto py-16 text-center">
      <h1 className="text-6xl font-medium">
        For the latest news follow
        <br />
        <em className="not-italic text-primary-500">@EdgewareDAO</em> on Twitter
      </h1>
      <p className="my-8 text-lg">
        Want to keep up to date with all our collectives and wonderings?
      </p>
      <Button href="https://twitter.com/EdgewareDAO" sizing="large" colorStyle="white">
        Follow us on Twitter
        <TwitterFillIcon className="ml-2 h-8 w-8" />
      </Button>
    </section>
  );
};
