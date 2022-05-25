const FORM_ACTION =
  'https://edgewa.us19.list-manage.com/subscribe/post?u=04521a838ac5cb3bb4012c002&amp;id=77879892a3';

export const FooterForm = () => {
  return (
    <form
      className="p-0 pb-4"
      action={FORM_ACTION}
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <fieldset>
        <label
          className="flex flex-row"
          htmlFor="nl-footer-email"
          aria-label="Your email address"
          aria-hidden="true"
        >
          <input
            id="nl-footer-email"
            className="rounded-l-lg border border-grey-600 bg-transparent p-3 px-4 text-base outline-none"
            name="EMAIL"
            type="email"
            placeholder="email@domain.com"
            required
          />
          <div className="absolute -left-[5000px]" aria-hidden="true">
            <input
              type="text"
              name="b_04521a838ac5cb3bb4012c002_77879892a3"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer rounded-r-lg border-0 bg-grey-600 p-3 text-xl text-grey-400 "
          >
            →
          </button>
        </label>
      </fieldset>
    </form>
  );
};
