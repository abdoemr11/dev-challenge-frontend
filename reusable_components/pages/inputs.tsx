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
                <Input startIcon='phone' />
                <Input endIcon='lock' />
                <Input endIcon='home' startIcon='home' />
                <Input value='abdo' />
                <Input size="sm" />
                <Input size="md" />
                <Input size="md" fullwidth />
                <Input size="sm" fullwidth />
                <Input multiline row="4" column="10" />
                <Input multiline row="4" column="20" />

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