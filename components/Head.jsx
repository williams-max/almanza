import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Nitin Ranganath is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="nitin ranganath, nitin, ranganath, web developer portfolio, nitin web developer, nitin developer, mern stack, nitin ranganath portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Israel Almanza" />
      <meta
        property="og:description"
        content="Front End Web Developer
        and Unity Developer."
      />
      <meta property="og:image" content="https://drive.google.com/file/d/1lXqNUNpyoQz-WoDeirSqrqYmqLcR31JW/view?usp=sharing" />
      <meta property="og:url" content="https://cv-almanza.herokuapp.com/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Israel Almanza',
};
