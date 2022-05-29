import * as React from 'react';

export const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="container mx-auto my-48 max-w-5xl">
      <div className="rounded-lg border border-grey-800 bg-[url('/images/newsletter/mailart@2x.jpg')] bg-contain bg-right bg-no-repeat py-12 px-16">
        <div className="py-2">
          <h3 className="my-4 text-6xl font-medium">Stay tuned</h3>
          <p className="max-w-lg text-lg">
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
      <fieldset className="m-0 flex flex-row">
        <label htmlFor="nl-email" aria-label="Your email address">
          <input
            id="nl-email"
            className="w-72 rounded-l-lg border border-grey-700 bg-grey-900 p-4 text-white"
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
          className="rounded-r-lg bg-grey-700 px-8 text-white hover:bg-grey-800"
          value="Sign up"
        />
      </fieldset>
    </form>
  );
};
