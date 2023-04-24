import NavBar from './components/navbar';
import { ClaimDomainSection } from './components/claimBTCSection';
import { RegisterationSection } from './components/registerationStepsSection';
import { LightningSection } from './components/lightningSection';
import { GoldSection } from './components/goldSection';
import { JoinMovementSection } from './components/joinMovementSection';
import { FAQSection } from './components/faq';

function App() {
    return (
        <div id="app" className="bg-main bg-cover bg-center h-full w-full">
            <NavBar />
            <ClaimDomainSection />
            <RegisterationSection />
            <LightningSection />
            <GoldSection />
            <JoinMovementSection />
            <FAQSection />
        </div>
    );
}

export default App;
