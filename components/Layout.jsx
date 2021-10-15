import Head from 'next/head'
import Header from './Header'

export default function Layout({children, pageTitle, ...htmlPageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{pageTitle}</title>
            </Head>
            <section className="layout">
                {/*<Header/>*/}
                <div className="content" {...htmlPageProps}>{children}</div>
            </section>
        </>
    )
}
