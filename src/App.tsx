import NavBar from './components/navbar';
import { ClaimDomainSection } from './components/claimBTCSection';
import { RegisterationSection } from './components/registerationStepsSection';
import { LightningSection } from './components/lightningSection';
import { GoldSection } from './components/goldSection';
import { JoinMovementSection } from './components/joinMovementSection';
import { FAQSection } from './components/faqSection';
import { SocialSection } from './components/socialSection';
import { Footer } from './components/footerSection';
import { HamBurgerMenuContext } from './context/hamBurgerMenu/context';

function App() {
    return (
        <div id="app" className="bg-main bg-cover bg-center h-full w-full font-serif">
            <HamBurgerMenuContext>
                <NavBar />
            </HamBurgerMenuContext>
            <ClaimDomainSection />
            <RegisterationSection />
            <LightningSection />
            <GoldSection />
            <JoinMovementSection />
            <FAQSection />
            <SocialSection />
            <Footer />
        </div>
    );
}

export default App;
