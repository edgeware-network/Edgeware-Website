import * as React from 'react';

import 'particles.js/particles';

// @ts-expect-error use globally exposed `winndow.particlesJS` module
const { particlesJS } = window;

import styles from './particles.module.scss';

export const Particles: React.FC = () => {
  React.useEffect(() => {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles', '/assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return <div id="particles" className={styles.container} />;
};

export default Particles;
