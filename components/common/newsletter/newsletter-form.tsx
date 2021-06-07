import * as React from 'react';

import styles from './newsletter-form.module.scss';

export const NewsletterForm: React.FC = () => {
  return (
    <form
      className={styles.form}
      action="https://edgewa.us19.list-manage.com/subscribe/post?u=04521a838ac5cb3bb4012c002&amp;id=77879892a3"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <fieldset className={styles.fieldset}>
        <div className={styles.formRow}>
          <label htmlFor="nl-email" aria-label="Your email address">
            <input
              id="nl-email"
              className={styles.input}
              type="email"
              name="EMAIL"
              placeholder="email@domain.com"
              required
            />
          </label>
          <div className={styles.honeypot} aria-hidden="true">
            <input
              type="text"
              name="b_04521a838ac5cb3bb4012c002_77879892a3"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <input type="submit" className={styles.button} value="Sign up" />
        </div>
      </fieldset>
    </form>
  );
};
