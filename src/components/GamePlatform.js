import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { Button } from '@nextui-org/react';

export const GamePlatform = () => {
  const [coins, setCoins] = useState(500);
  const [wheatCount, setWheatCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  const [emergencyFund, setEmergencyFund] = useState(0);
  const [infrastructerStatus, setInfrastructerStatus] = useState('Basic');
  const [calamityStruck, setCalamityStruck] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    if (coins >= 100){
        toast.info("You have a lot of coins! Would you like to save 50 coins in your emergency fund?")
        setShowButton(true)
    }else{
        setShowButton(false)
    }
  }, [coins])
  

  const harvest = () =>{
    if (calamityStruck) {
        toast.warning("No crops to harvest due to recent calamity.");
        setCalamityStruck(false)  // Reset calamity status for next season
        return;
    }

    let baseProfit = (wheatCount * 15) + (vegCount * 35);
    let profit = infrastructerStatus ? baseProfit * 1.2 : baseProfit;  // 20% more profit if infrastructure is improved
    setCoins(coins + profit)
    setWheatCount(0)
    setVegCount(0)
    toast.info('Harvested crops for ' + profit + ' coins!');
  }

  const buySeeds = (type) => {
    if (calamityStruck){
      toast.error('Cannot buy seeds immediately after a calamity. Wait for the next season.');
      return;
    }
    if (type === 'wheat' && coins >= 10) {
        setWheatCount( wheatCount + 1)
        setCoins( coins - 10)
    } else if (type === 'vegetables' && coins >= 20) {
        setVegCount(vegCount + 1)
        setCoins( coins - 20)
    } else {
        toast.info('Not enough coins!');
    }
  }

  const investInInfrastructure = () => {
    if (!infrastructerStatus && coins >= 150) {
        setCount(count + 1)
        toast.info("Would you like to invest 200 coins in better irrigation systems, acting as insurance against bad weather?");
        if (count === 2) {
            setCoins(coins - 200)
            setInfrastructerStatus(true)
            setCount(0)
            toast.info("Investing in infrastructure like irrigation systems helps reduce the risk of losing crops due to unfavorable weather conditions.");
        }
    } else if (infrastructerStatus) {
        toast.info("You already have improved infrastructure!");
    } else {
        toast.error("Not enough coins to invest in infrastructure!");
    }
  }

  return (
    <div className=" text-gray-800 p-4 text-center">
      <header className="bg-green-600 text-white py-4 rounded-xl">
        <h1 className='font-bold' >Welcome to Investment Farm!</h1>
      </header>
      <main className="w-11/12 max-w-xl mx-auto mt-8 text-center">
        <section id="farmStatus" className="bg-white border border-gray-300 p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Farm Status</h2>
          <p>🪙 : <span id="coins">{coins}</span></p>
          <p>🌾 : <span id="wheatCount">{wheatCount}</span> plots</p>
          <p>🥕 : <span id="vegCount">{vegCount}</span> plots</p>
        </section>
        <section id="actions" className="bg-white border border-gray-300 p-4">
          <h2 className="text-xl font-semibold mb-2">Manage Your Farm</h2>
          <Button variant='shadow' color='success' className='m-2' onClick={()=>{buySeeds('wheat')}}>Buy Wheat Seeds (10 Coins)</Button>
          <Button variant='shadow' color='success' className='m-2' onClick={()=>{buySeeds('vegetables')}}>Buy Vegetable Seeds (20 Coins)</Button>
          <Button variant='shadow' color='success' className='m-2' onClick={harvest}>Harvest Crops</Button>
          <h1>Emergency Fund : {emergencyFund} Coins</h1>
          <h1>Infrastructure : {infrastructerStatus}</h1>
          <Button variant='shadow' color='success' className='m-2' onClick={investInInfrastructure}>Invest in infrastructure</Button>
          <h1>Calamity status : {calamityStruck?"Crop Lost":" No recent Calamity"}</h1>
        </section>
        {showButton && <Button className='m-5' color='danger' onClick={()=>{
            setCoins(coins - 50)
            setEmergencyFund(vegCount + 50)
            toast.info("Saving money helps you manage unexpected expenses in the future. Well done!");
        }}>Click to agree the emergency fund</Button>}
      </main>
      <Toaster richColors/>
    </div>
  );
};