import Layout from "components/layouts/Layout";
import Container from "components/layouts/Container";
import Hero from "components/Hero";

export default function Home() {
    return (
        <Layout main={
            <main>
                <Hero backgroundImageUrl={"https://placeimg.com/1000/800/arch"}>
                    content
                </Hero>
                <Container>
                    content inside container
                </Container>
            </main>}>
        </Layout>
    );
}
