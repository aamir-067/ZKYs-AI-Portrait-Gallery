import './App.css';
import { ethers } from 'ethers';
import Hero from './Hero';
import { useEffect, useState } from 'react';
import artifacts from './Zakeriya.json';
const contractAddress = "0x6a2549b617B00C38b60A87CE0749e91f93fA8d75";
const uri = "https://bafkreib72rzv5buzcpdkipqtihxsn5vk5joyppowj5t2pm2oswffxgnpki.ipfs.w3s.link/?filename=metadata.json"

function App() {
  const [web3Api, setWeb3Api] = useState({ provider: null, contract: null, signer: null });
  useEffect(() => {
    const ini = async () => {
      try {
        if (window.ethereum) {
          // events to handle the account and network changing.
          window.ethereum.on('chainChanged', () => {
            ini();
          });
          window.ethereum.on('accountsChanged', () => {
            ini();
          });
          console.log(window.ethereum);
          const provider = await new ethers.BrowserProvider(window.ethereum);
          console.log(provider);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(contractAddress, artifacts.abi, signer);
          setWeb3Api({ provider, contract, signer });
        } else {
          console.log('meta not installed');
        }

      } catch (e) {
        console.error(e);
      }
    }
    ini();
  }, []);

  const mint = async () => {
    try {
      console.log(web3Api.signer.address);
      const res = await web3Api.contract.minNft(web3Api.signer.address, uri);
      await res.wait();
      console.log('minted on token id : ', res, 'at contract address : ', web3Api.contract);
    } catch (e) {
      console.error(e);
    }
  }




  return (
    <div className="min-w-screem">
      {/* <button onClick={() => { mint() }}>Submit</button> */}
      <Hero />
    </div>
  );
}

export default App;
