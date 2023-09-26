import './App.css';
import { ethers } from 'ethers';
import Hero from './Hero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import { useState, useEffect } from 'react';
import artifacts from './Zakeriya.json';
const contractAddress = "0x6a2549b617B00C38b60A87CE0749e91f93fA8d75";
// const uri = "https://bafkreib72rzv5buzcpdkipqtihxsn5vk5joyppowj5t2pm2oswffxgnpki.ipfs.w3s.link/?filename=metadata.json"

function App() {
  const [web3Api, setWeb3Api] = useState({ provider: null, contract: null, signer: null });
  const [currentTokenId, setCurrentTokenId] = useState(0);

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
        await contract.on('MetadataUpdate', (res) => {
          console.log('New Token Minted at id : ', res, 'and the contract address : ', contract.target);
          setCurrentTokenId(ethers.toNumber(res));
        })
        setWeb3Api({ provider, contract, signer });
      } else {
        console.log('meta not installed');
      }

    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    console.log('Token minted successfully at id :', currentTokenId);
  }, [currentTokenId]);

  const mint = async ({ address, uri }) => {
    try {
      console.log(address);
      const res = await web3Api.contract.minNft(address, uri);
      await res.wait();
      console.log('minted at contract address : ', web3Api.contract);
    } catch (e) {
      console.error(e);
    }
  }




  return (
    <div className="min-w-screem">
      {/* <button onClick={() => { mint() }}>Submit</button> */}
      <Hero web3Api={web3Api} setWeb3Api={setWeb3Api} ini={ini} />
      <Hero2 />
      <Hero3 mint={mint} web3Api={web3Api} />
    </div>
  );
}

export default App;
