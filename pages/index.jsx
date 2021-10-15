import Layout from "../components/Layout";
import styles from '../styles/index.module.scss';

const Index = () => {
    return <Layout className={styles.main} pageTitle={"David Golden"}>
        <h1>David Golden</h1>
        <h2>Senior Web Engineer
            in Durango, CO</h2>
        <main>
            <p>
                Welcome to my landing page! I'm a senior web engineer at SchoolBlocks. I try to spend as much time
                outdoors (in the summer) as possible,
                love long runs in the mountains, and my current obsession is beer and homebrewing.
            </p>
        </main>
    </Layout>
};

export default Index
