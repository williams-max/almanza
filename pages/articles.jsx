import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

import { getSkills } from './api/skills';

const ArticlesPage = ({ skills }) => {
  return (
    <>
      <h3>
        Skills {' '}
        <a
          href="https://play.google.com/store/apps/developer?id=Israel+Almanza+Flores&hl=es"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          Israel Almanza 
        </a>
      </h3>
         {/*<ArticleCard key={article.id} article={article} />*/}
      <div className={styles.container}>
        {skills.map((article) => (
       <ArticleCard key={article.id} article={article} />
      
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {

  const skills = getSkills();

  return {
    props: { title: 'Skills', skills },
  };
}

export default ArticlesPage;
