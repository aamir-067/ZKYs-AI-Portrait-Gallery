import './App.css';
import { ethers } from 'ethers';
import Hero from './Hero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import artifacts from './Zakeriya.json';
const contractAddress = "0x7B7fD2633F107b52d5FBDEC76596bDA1F23e5f26";
// const uri = "https://bafkreib72rzv5buzcpdkipqtihxsn5vk5joyppowj5t2pm2oswffxgnpki.ipfs.w3s.link/?filename=metadata.json"

function App() {
  const [web3Api, setWeb3Api] = useState({ provider: null, contract: null, signer: null });
  const [totalTokens, setTotalTokens] = useState(0);
  const [myToken, setMyToken] = useState(0);


  const getCurrentTokenId = async ({ contract }) => {
    try {
      // console.log(contract);
      const res = await contract.current();
      // console.log('total tokens : ', res)
      return ethers.toNumber(res);
    } catch (e) {
      console.error(e);
    }
  }
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
        // console.log(window.ethereum);
        const provider = await new ethers.BrowserProvider(window.ethereum);
        // console.log(provider);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, artifacts.abi, signer);
        let temp = await getCurrentTokenId({ contract });
        setTotalTokens(ethers.toNumber(temp));
        await contract.on('MetadataUpdate', (res) => {
          setTotalTokens(ethers.toNumber(res));
        })
        setWeb3Api({ provider, contract, signer });
        // for next time so that i will connect it automatically.
        Cookies.set('isOnline', JSON.stringify({ value: true }), { expires: 1 / 24 });
      } else {
        console.error('meta not installed');
      }

    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const initialize = async () => {
      await ini();
    }
    const res = Cookies.get('isOnline');
    if (res) {
      const isOnline = JSON.parse(Cookies.get('isOnline'));
      isOnline.value && initialize();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const mint = async ({ address, uri }) => {
    try {
      console.log(address);
      const res = await web3Api.contract.minNft(address, uri);
      await res.wait();
      const mytoken = await getCurrentTokenId({ contract: web3Api.contract });
      setMyToken(mytoken);
    } catch (e) {
      console.error(e);
    }
  }




  return (
    <div className="min-w-screem">
      {/* <button onClick={() => { mint() }}>Submit</button> */}
      <Hero web3Api={web3Api} getTokens={getCurrentTokenId} setWeb3Api={setWeb3Api} ini={ini} />
      <Hero2 totalTokens={totalTokens} myToken={myToken} contractAddress={contractAddress} />
      <Hero3 mint={mint} web3Api={web3Api} />
    </div>
  );
}

export default App;
