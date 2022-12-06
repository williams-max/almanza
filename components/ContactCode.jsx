import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'almanza',
    href: 'https://cv-almanza.herokuapp.com/',
  },
  {
    social: 'email',
    link: 'almanzaisrael75@gmail.com',
    href: 'almanzaisrael75@gmail.com',
  },
  {
    social: 'github',
    link: 'Israel Almanza williams-max',
    href: 'https://github.com/williams-max',
  },
  {
    social: 'gitLab',
    link: 'Israel Almanza',
    href: 'https://gitlab.com/Willimams',
  },
  {
    social: 'linkedin',
    link: 'Israel Almanza',
    href: 'https://www.linkedin.com/in/israel-almanza-a4927b183/',
  },

  {
    social: 'instagram',
    link: '@israel_a_fff',
    href: 'https://www.instagram.com/israel_a_fff/',
  },
  {
    social: 'telegram',
    link: '---',
    href: '',
  },
  {
    social: 'codepen',
    link: '---',
    href: '',
  },
  {
    social: 'codesandbox',
    link: '---',
    href: '',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
