import Head from 'next/head';
import { AppConfig } from '../utils/AppConfig';
import { Metadata } from 'next';

type Props = {
  title: string;
  description: string;
  canonical?: string;
};

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const Meta = (props: Props) => {
  // const router = useRouter();

  return (
    <>
      <Head>
        {/* <meta charSet="UTF-8" key="charset" /> */}
        {/* <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        /> */}
        {/* <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        /> */}
      </Head>
      {/* <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      /> */}
    </>
  );
};

export { Meta };
