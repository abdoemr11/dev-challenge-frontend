import Button from '@/components/Button';
export default function Playground() {
    return (
        <div style={{
            margin: '10rem auto',
            width: "100%",

        }}>
            <h2>Variants</h2>
            <Row>
                <Button >Default</Button>
                <Button variant='text'>Default</Button>
                <Button variant='outline'>Default</Button>
            </Row>
            <h2>Disabled</h2>

            <Row>
                <Button disabled>Disabled</Button>
                <Button disabled variant='text'>Disabled</Button>
                <Button disabled variant='outline'>Disabled</Button>
            </Row>

            <h2>icon</h2>

            <Row>
                <Button startIcon='home'>Default</Button>
                <Button endIcon='home'>Default</Button>
            </Row>
            <h2>various sizes</h2>

            <Row>
                <Button disabled size="sm" color='primary'>Disabled</Button>
                <Button disabled size="md">Disabled</Button>
                <Button disabled size="lg">Disabled</Button>
            </Row>
            <h2>Colors</h2>
            <Row>
                <Button color="default">Default</Button>
                <Button color="primary">Default</Button>
                <Button color="secondary">Default</Button>
                <Button color="danger">Default</Button>

            </Row>
            <h2>Colors with Outline</h2>
            <Row>
                <Button color="default" variant='outline'>Default</Button>
                <Button color="primary" variant='outline'>Default</Button>
                <Button color="secondary" variant='outline'>Default</Button>
                <Button color="danger" variant='outline'>Default</Button>

            </Row>
            <h2>Colors with text</h2>
            <Row>
                <Button color="default" variant='text'>Default</Button>
                <Button color="primary" variant='text'>Default</Button>
                <Button color="secondary" variant='text'>Default</Button>
                <Button color="danger" variant='text'>Default</Button>

            </Row>
        </div>
    )
}

function Row({ children }: { children: React.ReactNode }) {
    return <section style={{
        display: 'flex',
        gap: '4rem',
        marginBottom: '4rem'
    }}>
        {children}
    </section>
}