import {useState, useEffect} from 'react';
import Head from 'next/head'
import styles from "../styles/index.module.scss";

export default function Layout({children, pageTitle, ...htmlPageProps}) {
    const [checked, setChecked] = useState(null);

    useEffect(() => {
        if (typeof checked === "boolean") {
            console.log("Did you think that was going to do something?");
        }
    }, [checked]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" href={"/favicon.png"} type="image/x-icon" />
                <title>{pageTitle}</title>
            </Head>
            <section className={styles.main}>
                <div className={`${styles.switch} ${checked ? styles.on : ""}`} onClick={() => setChecked(v => !v)}>
                    <div className={styles.toggle} />
                </div>
                <div className="content" {...htmlPageProps}>{children}</div>
            </section>
        </>
    )
}
