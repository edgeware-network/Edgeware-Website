import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const discord: React.FC = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const message = (router.query.message as string) || 'Redirecting...';

  // Function to decrement countdown and redirect when it reaches 0
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        router.push('https://discord.com/invite/4pnzjWTJ9b');
      }
    }, 1000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [countdown, router]);

  return (
    <section className="flex h-1/2 items-center justify-center">
      <div className="flex flex-col gap-2 rounded-lg border border-white bg-[#262626] p-10 md:flex-row">
        <div className="flex h-80 w-80 items-center justify-center rounded-xl bg-[#7289d9] p-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M19.3034 5.33716C17.9344 4.71103 16.4805 4.2547 14.9629 4C14.7719 4.32899 14.5596 4.77471 14.411 5.12492C12.7969 4.89144 11.1944 4.89144 9.60255 5.12492C9.45397 4.77471 9.2311 4.32899 9.05068 4C7.52251 4.2547 6.06861 4.71103 4.70915 5.33716C1.96053 9.39111 1.21766 13.3495 1.5891 17.2549C3.41443 18.5815 5.17612 19.388 6.90701 19.9187C7.33151 19.3456 7.71356 18.73 8.04255 18.0827C7.41641 17.8492 6.82211 17.5627 6.24904 17.2231C6.39762 17.117 6.5462 17.0003 6.68416 16.8835C10.1438 18.4648 13.8911 18.4648 17.3082 16.8835C17.4568 17.0003 17.5948 17.117 17.7434 17.2231C17.1703 17.5627 16.576 17.8492 15.9499 18.0827C16.2789 18.73 16.6609 19.3456 17.0854 19.9187C18.8152 19.388 20.5875 18.5815 22.4033 17.2549C22.8596 12.7341 21.6806 8.80747 19.3034 5.33716ZM8.5201 14.8459C7.48007 14.8459 6.63107 13.9014 6.63107 12.7447C6.63107 11.5879 7.45884 10.6434 8.5201 10.6434C9.57071 10.6434 10.4303 11.5879 10.4091 12.7447C10.4091 13.9014 9.57071 14.8459 8.5201 14.8459ZM15.4936 14.8459C14.4535 14.8459 13.6034 13.9014 13.6034 12.7447C13.6034 11.5879 14.4323 10.6434 15.4936 10.6434C16.5442 10.6434 17.4038 11.5879 17.3825 12.7447C17.3825 13.9014 16.5548 14.8459 15.4936 14.8459Z"
              fill="rgba(251,251,251,1)"
            ></path>
          </svg>
        </div>
        <div className="message-card h-80 w-80 md:justify-center ">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">Discord</h1>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <p className="mt-4 mb-4 text-lg">
            You will be redirected to our Discord server in {countdown} seconds.
          </p>

          <p className="mt-5 flex items-center text-sm">
            If you are not redirected,{' '}
            <Link href="https://discord.com/invite/4pnzjWTJ9b">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline rounded-lg bg-[#7289d9] p-1 px-1 text-center text-sm"
              >
                Click here
              </a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default discord;
