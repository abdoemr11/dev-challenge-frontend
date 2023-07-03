import Button from '@/components/Button';
import Input from '@/components/Input';
export default function inputs() {
    return (
        <div style={{
            margin: '10rem auto',
            width: "100%",

        }}>
            <h2>Variants</h2>
            <Row>
                <Input />
                <Input error />
                <Input disabled />
                <Input error />
                <Input helperText='Write here you fool' />
                <Input helperText='Write here you fool' error />
            </Row>

        </div>
    )
}

function Row({ children }: { children: React.ReactNode }) {
    return <section style={{
        display: 'flex',
        gap: '4rem',
        marginBottom: '4rem',
        flexWrap: 'wrap'
    }}>
        {children}
    </section>
}