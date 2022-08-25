
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import Web3 from 'web3';
import Claim from "./ClaimPage";


function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}


function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Claim />
    </Web3ReactProvider>
  )
}

export default App;
