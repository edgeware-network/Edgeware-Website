import * as React from 'react';

import styles from './footer-form.module.scss';

export const FooterForm: React.FC = () => {
  return (
    <form
      className={styles.form}
      action="https://edgewa.us19.list-manage.com/subscribe/post?u=04521a838ac5cb3bb4012c002&amp;id=77879892a3"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <fieldset className={styles.fieldset}>
        <label
          className={styles.formRow}
          htmlFor="nlbig-email"
          aria-label="Your email address"
          aria-hidden="true"
        >
          <input
            id="nlbig-email"
            className={styles.input}
            name="EMAIL"
            type="email"
            placeholder="email@domain.com"
            required
          />
          <div className={styles.honeypot} aria-hidden="true">
            <input
              type="text"
              name="b_04521a838ac5cb3bb4012c002_77879892a3"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <button type="submit" className={styles.button}>
            →
          </button>
        </label>
      </fieldset>
    </form>
  );
};
