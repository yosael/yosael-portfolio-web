import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '../components/hoc/WithAuth';

const Cv = () => {
    return (
        <BaseLayout>
            <BasePage>
                <h1>Hello CV</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(Cv);
