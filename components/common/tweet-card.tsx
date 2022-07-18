import TwitterFillIcon from 'remixicon/icons/Logos/twitter-fill.svg';

export type TweetCardProps = {
  text: string;
  date: string;
  name: string;
  handle: string;
  avatar: string;
  url?: string;
};

export const TweetCard = ({ name, handle, text, date, avatar, url }: TweetCardProps) => {
  const profileUrl = `https://twitter.com/${handle}`;

  return (
    <div className="mx-4 flex h-full flex-col rounded-md border border-grey-800 p-4">
      <div className="flex flex-row">
        <img src={avatar} className="h-16 w-16 rounded-full" alt={name} loading="lazy" />
        <span className="px-2">
          <strong className="">{name}</strong>
          <span className="block">
            <a href={profileUrl} className="link" target="_blank" rel="noopener noreferrer">
              {handle}
            </a>
          </span>
        </span>
        <TwitterFillIcon className="ml-auto h-5 w-5 fill-grey-600" />
      </div>
      <div className="text-md my-4 leading-relaxed">{text}</div>
      <div className="mt-auto pt-4 text-sm text-primary-500">
        {url ? (
          <a
            href={url}
            className="text-primary-500 hover:text-primary-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {date}
          </a>
        ) : (
          date
        )}
      </div>
    </div>
  );
};
