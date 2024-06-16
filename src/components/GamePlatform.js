import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner'; // Make sure 'sonner' is correctly spelled and the package exists
import { Button } from '@nextui-org/react';

export const GamePlatform = () => {
  const [coins, setCoins] = useState(100);
  const [JowarCount, setJowarCount] = useState(0);
  const [CottonCount, setCottonCount] = useState(0);
  const [emergencyFund, setEmergencyFund] = useState(0);
  const [insuranceJowar, setInsuranceJowar] = useState(false);
  const [insuranceCotton, setInsuranceCotton] = useState(false);
  const [calamityStruck, setCalamityStruck] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [count, setCount] = useState(0);
  const [soilType, setSoilType] = useState('black'); // Default to black soil
  const [weatherCondition, setWeatherCondition] = useState('humid'); // Default to humid weather

  useEffect(() => {
    if (coins >= 100) {
        if (count !== 0 && count % 4 === 0) {
            toast.info("You have a lot of coins! Would you like to save 50 coins in your emergency fund?");
        }
        if (count !== 0 && count % 5 === 0) {
            calamityadd();
        }
        setShowButton(true);
    } else {
        setShowButton(false);
    }
  }, [coins, count]);

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
        setCalamityStruck(false);
        return;
    }

    let baseProfit = (soilType === "red" ? (JowarCount * 35) + (CottonCount * 15) : (JowarCount * 15) + (CottonCount * 35));
    let profit = baseProfit * (insuranceJowar || insuranceCotton ? 1.2 : 1);
    setCoins(coins + profit);
    setJowarCount(0);
    setCottonCount(0);
    toast.info('Harvested crops for ' + profit + ' coins!');
  };

  const buySeeds = (type) => {
    if (calamityStruck) {
      toast.error('Cannot buy seeds immediately after a calamity. Wait for the next season.');
      return;
    }
    let cost = 20; // Simplified cost logic
    if (coins >= cost) {
      if (type === 'Jowar') {
        setJowarCount(JowarCount + 1);
      } else if (type === 'Cotton') {
        setCottonCount(CottonCount + 1);
      }
      setCoins(coins - cost);
    } else {
      toast.info('Not enough coins!');
    }
  };

  const applyInsurance = () => {
    let totalCost = (insuranceJowar ? 3 : 0) + (insuranceCotton ? 2 : 0);
    if (coins >= totalCost) {
      setCoins(coins - totalCost);
      setInsuranceJowar(true);
      setInsuranceCotton(true);
      toast.info("Insurance applied for all crops.");
    } else {
      toast.error("Not enough coins to apply for insurance!");
    }
  };

  const calamityadd = () => {
    if (count % 5 === 0) {
      if (!insuranceJowar) setJowarCount(0);
      if (!insuranceCotton) setCottonCount(0);
      setCalamityStruck(true);
      if (!insuranceJowar && !insuranceCotton);
      toast.error('A natural calamity has struck your farm, all crops are lost!');
      setInsuranceJowar(false);
      setInsuranceCotton(false);
    }
  };

  return (
    <div className="text-gray-800 p-4 text-center">
      <header className="bg-green-600 text-white py-4 rounded-xl">
        <h1 className='font-bold'>DHAN GROW!</h1>
      </header>
      <div id="google_translate_element"></div>
      <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  

      <main className="w-11/12 max-w-xl mx-auto mt-8 text-center">
        <section id="farmStatus" className="bg-white border border-gray-300 p-4 mb-6 bg-opacity-20 relative" style={{
          backgroundImage: 'url("https://miro.medium.com/max/4000/1*JH9wzpfDHmuZdaEwCMGa7w.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="bg-white bg-opacity-85 p-4">
              <h2 className="text-xl font-semibold mb-2">Farm Status</h2>
              <p>🪙 : <span id="coins">{coins}</span></p>
              <p>🌾 : <span id="JowarCount">{JowarCount}</span> plots</p>
              <p>🥕 : <span id="CottonCount">{CottonCount}</span> plots</p>
          </div>
        </section>
        <section id="actions" className="bg-white border border-gray-300 p-4">
          <h2 className="text-xl font-semibold mb-2">Manage Your Farm</h2>
          <div className="mt-4">
              <label htmlFor="soilType" className="mr-2">Soil Type:</label>
              <select id="soilType" className="border border-gray-400 p-1 rounded" onChange={(e) => setSoilType(e.target.value)}>
                  <option value="black">Black Soil</option>
                  <option value="red">Red Soil</option>
              </select>
          </div>
          <div className="mt-4">
              <label htmlFor="climate" className="mr-2">Climate:</label>
              <select id="climate" className="border border-gray-400 p-1 rounded" onChange={(e) => setWeatherCondition(e.target.value)}>
                  <option value="humid">Humid</option>
                  <option value="hot">Hot</option>
              </select>
          </div>
          <Button variant='shadow' color='success' className='m-2' onClick={() => handleButtonClick(() => buySeeds('Jowar'))}>Buy Jowar Seeds (20 coins)</Button>
          <Button variant='shadow' color='success' className='m-2' onClick={() => handleButtonClick(() => buySeeds('Cotton'))}>Buy Cotton Seeds (20 coins)</Button>
          <Button variant='shadow' color='success' className='m-2' onClick={() => { calamityadd(); handleButtonClick(harvest); }}>Harvest Crops</Button>
          <h1>Emergency Fund : {emergencyFund} Coins</h1>
          <h1>Jowar Insurance : 3 coins </h1>
          <h1>Cotton Insurance: 2 coins</h1>
          <Button variant='shadow' color='success' className='m-2' onClick={() => handleButtonClick(applyInsurance)}>Apply for Insurance</Button>
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
