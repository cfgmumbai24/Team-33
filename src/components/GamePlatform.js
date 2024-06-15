import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { Button } from '@nextui-org/react';

export const GamePlatform = () => {
  const [coins, setCoins] = useState(100);
  const [wheatCount, setWheatCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  const [emergencyFund, setEmergencyFund] = useState(0);
  const [infrastructerStatus, setInfrastructerStatus] = useState('Basic');
  const [calamityStruck, setCalamityStruck] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (coins >= 100) {
        // const EmergencyIteration = Math.floor(Math.random() * 3) + 4; 
        if (count % 4 === 0) {
        toast.info("You have a lot of coins! Would you like to save 50 coins in your emergency fund?");

        }
        if (count % 5 === 0) {
          setWheatCount(0);
          setVegCount(0);
          setCalamityStruck(true);
          toast.error('A natural calamity has struck your farm, all crops are lost!');
          setCalamityStruck(false);
        }
        //toast.info("You have a lot of coins! Would you like to save 50 coins in your emergency fund?");
        setShowButton(true);
    } else {
        setShowButton(false);
    }
  }, [coins]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleButtonClick = (action) => {
    incrementCount();
    action();
  };

  const harvest = () => {
    if (calamityStruck) {
        toast.warning("No crops to harvest due to recent calamity.");
        setCalamityStruck(false);  // Reset calamity status for next season
        return;
    }

    let baseProfit = (wheatCount * 15) + (vegCount * 35);
    let profit = infrastructerStatus === 'Basic' ? baseProfit : baseProfit * 1.2;  // 20% more profit if infrastructure is improved
    setCoins(coins + profit);
    setWheatCount(0);
    setVegCount(0);
    toast.info('Harvested crops for ' + profit + ' coins!');
  };

  const buySeeds = (type) => {
    if (calamityStruck) {
      toast.error('Cannot buy seeds immediately after a calamity. Wait for the next season.');
      return;
    }
    if (type === 'wheat' && coins >= 10) {
        setWheatCount(wheatCount + 1);
        setCoins(coins - 10);
    } else if (type === 'vegetables' && coins >= 20) {
        setVegCount(vegCount + 1);
        setCoins(coins - 20);
    } else {
        toast.info('Not enough coins!');
    }
  };

  const investInInfrastructure = () => {
    if (infrastructerStatus === 'Basic' && coins >= 200) {
        setCoins(coins - 200);
        setInfrastructerStatus('Advanced');
        toast.info("Investing in infrastructure like irrigation systems helps reduce the risk of losing crops due to unfavorable weather conditions.");
    } else if (infrastructerStatus === 'Advanced') {
        toast.info("You already have improved infrastructure!");
    } else {
        toast.error("Not enough coins to invest in infrastructure!");
    }
  };

  const calamityadd = () => {
    // const calamityIteration = Math.floor(Math.random() * 3) + 4; // Random number between 4, 5, and 6
    if (count % 5 == 0) {
      setWheatCount(0);
      setVegCount(0);
      setCalamityStruck(true);
      toast.error('A natural calamity has struck your farm, all crops are lost!');
    }
  };

  return (
    <div className="text-gray-800 p-4 text-center">
      <header className="bg-green-600 text-white py-4 rounded-xl">
        <h1 className='font-bold'>Welcome to Investment Farm!</h1>
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
          <Button variant='shadow' color='success' className='m-2' onClick={() => handleButtonClick(() => buySeeds('wheat'))}>Buy Wheat Seeds (10 Coins)</Button>
          <Button variant='shadow' color='success' className='m-2' onClick={() => handleButtonClick(() => buySeeds('vegetables'))}>Buy Vegetable Seeds (20 Coins)</Button>
          <Button variant='shadow' color='success' className='m-2' onClick={() => { calamityadd(); handleButtonClick(harvest); }}>Harvest Crops</Button>
          <h1>Emergency Fund : {emergencyFund} Coins</h1>
          <h1>Infrastructure : {infrastructerStatus}</h1>
          <Button variant='shadow' color='success' className='m-2' onClick={() => handleButtonClick(investInInfrastructure)}>Invest in infrastructure</Button>
          <h1>Calamity status : {calamityStruck ? "Crop Lost" : "No recent Calamity"}</h1>
        </section>
        <div className="flex justify-center items-center space-x-4 mt-4">
    <Button className='p-3 bg-danger text-white rounded-lg shadow-lg hover:bg-red-700'
        onClick={() => handleButtonClick(() => {
            setCoins(coins - 50);
            setEmergencyFund(emergencyFund + 50);
            toast.info("Saving money helps you manage unexpected expenses in the future. Well done!");
        })}
    >
        Add 50 to emergency fund
    </Button>

    <Button className='p-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600'
        onClick={() => handleButtonClick(() => {
            setCoins(coins+emergencyFund);
            setEmergencyFund(0);
            toast.info("Flex button clicked!");
        })}
    >
        Redeem
    </Button>
</div>

      </main>
      <Toaster richColors/>
    </div>
  );
};
