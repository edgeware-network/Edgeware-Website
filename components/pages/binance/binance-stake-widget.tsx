// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect } from 'react';
import Script from 'next/script';

const widgetStyles = `
  .srw-container {
    border-color: var(--grey-700);
    font-family: var(--ff-text);
    padding: var(--spacing-m) var(--spacing-m) 12px var(--spacing-m);
  }

  .srw-content {
    display: flex;
    flex-direction: column;
  }

  .srw-container.desktop .srw-content {
    padding: 0 0 var(--spacing-m) 0;
    border-color: var(--grey-700);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .srw-container.desktop .srw-content-left {
    width: 45%;
  }

  .srw-container.desktop .srw-content-right {
    width: 50%;
  }

  /* Left column */

  /* Left column: Currency */
  .srw-input-currency-wrapper {
    border: 1px solid var(--grey-700);
    border-radius: var(--br-s);
    position: relative;
    margin-left: 0;
  }


  .srw-input-currency-wrapper::after {
    content: '';
    position: absolute;
    right: 20px;
    top: 18px;
    width: 0;
    height: 0;
    display: block;
    padding: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 12px solid var(--secondary-500);
    z-index: 2;
  }

  .srw-container.desktop .srw-input-currency-wrapper::after {
        right: 32px;
    top: 45px;
  }

  .srw-input-wrapper {
    border: none;
    padding-right: var(--spacing-s);
  }

  .srw-input {
    font-family: var(--ff-text);
    font-weight: var(--fw-normal);
    background: none;
  }

  .srw-select-currency {
    font-family: var(--ff-text);
    font-weight: var(--fw-normal);
    border: none;
    background: var(--grey-800);
    position: relative;
    z-index: 1;
    cursor: pointer;
  }

  /* Left column: Value and compound */
  .srw-container .srw-exchange-value {
    font-size: var(--fs-text-lg);
    font-weight: var(--fw-normal);
    font-family: var(--ff-text);
  }

  .srw-container .srw-exchange-toggle {
    flex-basis: unset;
  }

  .srw-container .srw-toggle-compound-wrapper {
    flex-basis: unset;
  }

  .srw-compound-label {
    font-weight: normal;
    font-size: var(--fs-text-md);
    font-family: var(--ff-text);
    color: var(--grey-400);
  }

  .srw-toggle-checkbox:checked + .srw-toggle-label {
    background-color: var(--secondary-500);
  }

  /* Right column */

  .srw-earning-label,
  .srw-earning-result1,
  .srw-earning-result2 {
    font-weight: normal;
    font-size: var(--fs-text-md);
    font-family: var(--ff-text);
    line-height: 1.2;
  }

  .srw-earning-result2 {
    color: var(--grey-400);
  }

  .srw-earning-reward-compound.text-active {
    color: var(--secondary-500);
  }

  /* Footer */
  .srw-footer-link {
    font-weight: normal;
    font-size: var(--fs-text-md);
    font-family: var(--ff-text);
    color: var(--secondary-500);
  }
`;

function mountStyles() {
  const style = document.createElement('style');
  style.innerHTML = widgetStyles;

  const host = document.querySelector('sr-basic-widget');
  host.shadowRoot.appendChild(style);
}

export const StakingRewardsWidget = () => {
  useEffect(() => {
    mountStyles();
  }, []);

  return (
    <div className="widget">
      <Script
        src="https://storage.googleapis.com/stakingrewards-widget/sr-basic-widget.js"
        strategy="beforeInteractive"
      />
      <sr-basic-widget
        apikey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJJQWpSdG1ra1VPWDRmbWdPdFNFVXg5enpxZDEzIiwiaWF0IjoxNjMzNTU0MzIyLCJpc3MiOiJTdGFraW5ncmV3YXJkcyBQdWJsaWMgQVBJIn0.i6jrAvba9LrVcj7QfuMWwlPM9ZfC2X377Bke7iyxM2U"
        asset="edgeware"
        headline="false"
        compound="true"
        commission="0.1"
        currency="usd"
        input="1000"
        lang="en"
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `

            `,
          }}
        />
      </sr-basic-widget>
    </div>
  );
};
