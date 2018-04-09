import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';
import css from "../styles/styles.scss";

const Index = (props) => (
    <Layout>
        <div className="example">
            <h1>Welcome to BitzPrice</h1>
            <p>Check current Bitcoin Rate</p>
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    };
};

export default Index;