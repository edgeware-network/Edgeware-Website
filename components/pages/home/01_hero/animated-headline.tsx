import * as React from 'react';
import ReactTypingEffect from 'react-typing-effect';

interface AnimatedHeadlineProps {
  headline: string;
  highlightWords: string[];
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({ headline, highlightWords }) => {
  const headlinePart = headline.replace('###?', '');

  const effectConfig = React.useMemo(
    () => ({
      speed: 100,
      eraseSpeed: 50,
      eraseDelay: 2000,
      typingDelay: 500,
      text: highlightWords.map((w) => w + '?'),
    }),
    [highlightWords]
  );

  return (
    <>
      {headlinePart}
      <em>
        <ReactTypingEffect {...effectConfig} />
      </em>
    </>
  );
};

export default AnimatedHeadline;
