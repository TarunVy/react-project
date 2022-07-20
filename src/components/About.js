import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si'
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard';
const About = () => {
    return (
        <div className='w-full  bg-black text-white text-center'>
            <div className=" max-w-[1240px] mx-auto px-4 py-16">
                <h1 className="py-4">A Growing Protocol Ecosystem</h1>
                <p className="py-4 text-xl">The Defi protocol system empowers developers, liquidity providers and traders to particulate in a financial marketplace that is open ans accessible to all </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                   <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Reliable,tamper-proof network' text='Use decentralisation trusted nodes,premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract'/>
                    <AboutCard icon={<SiFsecure size={40}/>} heading='Seamless connection to any API' text='Build on an flexible framework that can retrieve data from any API,connect with existing systems,and integrate with any current or future blockchain'/>
                    <AboutCard icon={<SiStrapi size={40}/>} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market leading decentrailsed applications' />
                    <AboutCard icon={<VscServerProcess size={40} />} heading='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'  />
                </div>
            </div>
        </div>
    );
}

export default About;