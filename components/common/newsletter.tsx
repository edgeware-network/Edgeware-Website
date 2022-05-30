import * as React from 'react';

export const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="container mx-auto my-12 max-w-5xl px-4 md:my-24 lg:my-48">
      <div className="rounded-lg border border-grey-800 bg-[url('/images/newsletter/mailart@2x.jpg')] bg-cover bg-center bg-no-repeat py-3 px-3 md:bg-contain md:bg-right md:py-12 md:px-16">
        <div className="rounded bg-grey-900 p-4 md:rounded-none md:bg-transparent md:py-2 md:px-0">
          <h3 className="my-4 text-3xl font-medium md:text-4xl lg:text-6xl">Stay tuned</h3>
          <p className="max-w-lg md:text-lg">
            Subscribe to our newsletter and never miss updates, announcements and opportunities.{' '}
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

const NewsletterForm: React.FC = () => {
  return (
    <form
      action="https://edgewa.us19.list-manage.com/subscribe/post?u=04521a838ac5cb3bb4012c002&amp;id=77879892a3"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      className="my-8"
    >
      <fieldset className="m-0 flex flex-col md:flex-row">
        <label htmlFor="nl-email" aria-label="Your email address">
          <input
            id="nl-email"
            className="md:rounded-r-0 w-full rounded-lg border border-grey-700 bg-grey-900 p-4 text-white lg:w-72"
            type="email"
            name="EMAIL"
            placeholder="email@domain.com"
            required
          />
        </label>
        <div className="absolute left-[-9999rem]" aria-hidden="true">
          <input
            type="text"
            name="b_04521a838ac5cb3bb4012c002_77879892a3"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <input
          type="submit"
          className="md:rounded-l-0 mt-4 rounded-lg bg-grey-700 py-4 px-4 text-white hover:bg-grey-800 md:mt-0 md:px-8"
          value="Sign up"
        />
      </fieldset>
    </form>
  );
};
