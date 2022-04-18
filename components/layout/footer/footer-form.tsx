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
      <fieldset className="m-0 p-0 border-0">
        <label
          className="flex flex-row"
          htmlFor="nl-footer-email"
          aria-label="Your email address"
          aria-hidden="true"
        >
          <input
            id="nl-footer-email"
            className="p-3 px-4 rounded-l-lg text-base bg-transparent border-1 border-slate-600 outline-none"
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
            className="border-0 p-3 bg-slate-600 text-gray-400 text-xl cursor-pointer rounded-r-lg "
          >
            →
          </button>
        </label>
      </fieldset>
    </form>
  );
};
