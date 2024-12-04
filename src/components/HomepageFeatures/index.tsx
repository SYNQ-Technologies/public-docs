import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  href?: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'OrderUp',
    href: 'docs/category/orderup',
    Svg: require('@site/static/img/order-up.svg').default,
    description: (
      <>
        {/* Digitally request high friction items */}
        Address locking showcase and display-only friction by empowering in-store customers to digitally request high-cube and high-value items for efficient and secure delivery during checkout.
      </>
    ),
  },
  {
    title: 'Digital Call Buttons',
    href: 'docs/call-for-help/digital-call-buttons',
    Svg: require('@site/static/img/call-buttons.svg').default,
    description: (
      <>
        {/* Send context specific help requests */}
        Give your customers a better way to get the help they need in-store. Instead of a clunky, expensive button with no accountability, opt for a digital alternative that provides customers trip assurance and streamlines store operations.
      </>
    ),
  },
  {
    title: 'SYNQ IOT Pulse',
    href: 'docs/call-for-help/pulse-iot-devices',
    Svg: require('@site/static/img/iot.svg').default,
    description: (
      <>
        {/* Turn physical inputs into digital notifications */}
        Discover the first-ever commercially available IoT device for Microsoft Teams. SYNQ Pulse IoT leverages real-time notifications and automatic escalations to streamline the frontline worker experience.
      </>
    ),
  },
  {
    title: 'Curbside Pickup',
    href: 'docs/category/curbside',
    Svg: require('@site/static/img/curbside.svg').default,
    description: (
      <>
        {/* Give customers a digital last mile */}
        Why are we giving digital customers an analog last mile? Instead, we leverage modern technology and communication tools for fast, efficient, and secure pickup of BOPIS orders.
      </>
    ),
  },
  {
    title: 'Text For Help',
    href: 'docs/category/text-for-help',
    Svg: require('@site/static/img/text-for-help.svg').default,
    description: (
      <>
        {/* Assist multiple customers simultaneously */}
        Most customers want to interact with businesses via text, but most don't provide that option. Text for Help allows customers to interact with your associates via text and get the help they need in the most efficient way.
      </>
    ),
  },
  {
    title: 'Touchless Lockers',
    href: 'docs/category/lockers',
    Svg: require('@site/static/img/lockers.svg').default,
    description: (
      <>
        {/* Secure, contactless pickup and drop off */}
        Keep things secure without running a prison for revenue. Our touchless lockers are fun, interactive, futuristic... and you'll enjoy huge cost savings with improved efficiencies.
      </>
    ),
  },
];

function Feature({ title, href, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" color='rgb(89, 89, 89)' />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{href ? <Link  href={href}>{title}</Link> : title}</Heading>
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
