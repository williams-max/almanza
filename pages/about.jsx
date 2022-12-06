const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>final year systems engineering student</p>
      <p>my hobby is training in the gym</p>
      <p>
        Israel Almanza Flores<br />
        Date of Birth: 01/02/1997 Age: 25<br />
        City: Cochabamba<br />
        Country: Bolivia<br />
        Cell: +591 67511387<br />
        Email: almanzaisrael75@gmail.com<br />
      </p>

      <br />
      <h3>Experience</h3>
      <p>
        Currently I have been working for 5 months in a software company <br /> in Bolivia 4 hours a day
        from the frond end part with technologies<br /> such as react js and next js, react native, quarkus
      </p>
      <p>

        Languages ​​<br />
        ● Intermediate English <br />
        ● Spanish <br />
        ● Intermediate Portuguese <br /><br />

        Administration of applications under operating systems <br />
        ●Windows<br /> ●Android (Only for video games in unity)<br /><br />
        Analysis tools and development methodology <br />
        ●Power Disager,<br />
        ●Taiga,<br />
        ● GitHub,<br />
        ● Gitlab<br />
        ● Scrum methodology<br /><br />
        Knowledge in IDS and development editors, gamers<br />
        ● Eclipse<br />
        ● NetBeans<br />
        ● Visual Studio Code<br />
        ● Visual Studio Community<br />
        ● Atom<br />
        ●Unity<br />
      </p>

    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
