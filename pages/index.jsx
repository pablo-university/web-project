import Layout from "components/layouts/Layout";
import Container from "components/layouts/Container";
import Hero from "components/Hero";

export default function Home() {
    return (
        <Layout>
            <Container>
                <Hero backgroundImageUrl={"https://placeimg.com/1000/800/arch"}>
                    content
                </Hero>
            </Container>
        </Layout>
    );
}
