import Layout from "components/layouts/Layout";
import Container from "components/layouts/Container";
import Hero from "components/Hero";
import coverMaria from "img/cover-maria.jpg";

export default function Home() {
    console.log(coverMaria);
    return (
        <Layout main={
            <main>
                <Hero backgroundImageUrl={coverMaria.src || "https://placeimg.com/1000/800/arch"}>
                    content
                </Hero>
                <Container>
                    content inside container
                </Container>
            </main>}>
        </Layout>
    );
}
