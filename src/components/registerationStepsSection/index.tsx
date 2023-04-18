import { Register } from './register';
import { RegisterationSteps } from './steps';

export const RegisterationSection = () => {
    return (
        <div className="mt-20">
            <Register />
            <RegisterationSteps />
        </div>
    );
};
