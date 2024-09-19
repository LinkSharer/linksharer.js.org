import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Gif: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Configure',
    Gif: require('@site/static/img/config.png').default,
    description: (
      <>
        Edit a single file to showcase all your links and resources.
        We&apos;ll think about the chores.
      </>
    ),
  },
  {
    title: 'Fully Customizable',
    Gif: require('@site/static/img/customize.png').default,
    description: (
      <>
        We offer some css templates you can use but you can always create your own!
      </>
    ),
  },
  {
    title: 'Powered by GitHub Pages',
    Gif: require('@site/static/img/gh-pages.png').default,
    description: (
      <>
        The website will be hosted on GitHub pages by default.
        You don't need to buy anything if you don't want to.
      </>
    ),
  },
];

function Feature({ title, Gif, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Gif} className={styles.featureSvg} alt="A feature" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
