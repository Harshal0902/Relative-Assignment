import React from 'react'
import { cardTypes } from '../types/types'
import { motion } from "framer-motion"
export default function Cards() {

  const CardInfo: cardTypes[] = [
    {
      name: "Bitcoin (BTC)",
      cardImg: "bitcoin",
      price: 31812.80,
      riseOrFall: +10,
      tvl: 60000,
      crypto_type: ["solana", "eth", "binanceCoin"]
    },
    {
      name: "Solana (SOL)",
      cardImg: "solana",
      price: 32.83,
      riseOrFall: -12.32,
      tvl: 60000,
      crypto_type: ["bitcoin", "eth", "binanceCoin"]
    },
    {
      name: "Ethereum (ETH)",
      cardImg: "eth",
      price: 1466.45,
      riseOrFall: -11.93,
      tvl: 60000,
      crypto_type: ["solana", "bitcoin", "binanceCoin"]
    },
    {
      name: "Binance USD (BUSD)",
      cardImg: "binanceCoin",
      price: 1.00,
      riseOrFall: 0.26,
      tvl: 60000,
      crypto_type: ["solana", "eth", "binanceCoin"]
    },
    {
      name: "Shiba Inu (SHIB)",
      cardImg: "ShibaINU",
      price: 0.00000001948,
      riseOrFall: -8.1,
      tvl: 60000,
      crypto_type: ["solana", "eth", "binanceCoin"]
    }
  ]

  // Framer Motion
  const fadeCard = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: .2,
      }
    }
  }

  const fadeCardItems = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        duration: 0.6,
        staggerChildren: .1
      }
    }
  }

  return (
    <motion.div variants={fadeCard} initial="hidden" animate="visible" className='flex flex-wrap flex-col-2 justify-around w-full pt-24 space-x-1 space-y-14 md:space-y-1 md:space-x-4'>
      {CardInfo.map((cardDetails) => (
        <motion.div variants={fadeCardItems} className='bg-gradient-to-b from-[#ECF0FF1A] to-[#2E314900] h-[19rem] w-[15.5rem] p-[1px] rounded-2xl relative backdrop-blur-2xl grid place-items-center'>

          <div className='absolute -top-12 p-2 rounded-full bg-[#14172b]'>
            <div className='bg-gradient-to-b from-[#ffffff1a] to-[#3B3F5700] p-[1px] rounded-full'>
              <div className='bg-gradient-to-b from-[#626A881A] to-[#EAB3000F] p-4 rounded-full'>
                <img src={require(`../assets/${cardDetails.cardImg}.svg`)} alt="BitcoinImg" className="w-12 h-12" />
              </div>
            </div>
          </div>

          <div className="grid place-items-center bg-gradient-to-b from-[#626A881A] to-[#2E31491A] h-[18.8rem] w-full rounded-2xl px-8">

            <p className='text-sm pt-14 text-[#737BAE]'>{cardDetails.name}</p>

            <div className='bg-[#14172B] border-t-[1px] border-[#3B3F57] flex flex-1 space-x-2 py-1 items-center justify-center rounded-2xl w-full'>
              <div className="text-white text-base">$ {cardDetails.price}</div>
              <div className={cardDetails.riseOrFall > 0 ? "text-green-500 text-xs font-semibold" : "text-red-500 text-xs font-semibold"}>{cardDetails.riseOrFall}%</div>
            </div>

            <p className='text-[#5A5F7D] text-sm'>Price</p>

            <div className='bg-[#14172B] border-t-[1px] border-[#3B3F57] flex flex-1 space-x-2 py-1 items-center justify-center rounded-2xl w-full'>
              <div className="text-white text-base">${cardDetails.tvl}</div>
            </div>

            <p className='text-[#5A5F7D] text-sm'>TLV</p>

            <div className='bg-[#14172B] border-t-[1px] border-[#3B3F57] flex flex-1 space-x-2 items-center justify-center rounded-2xl px-4 py-2'>
              {cardDetails.crypto_type.map((crypto) => (
                <img src={require(`../assets/${crypto}.svg`)} alt="SolanaImg" className="w-6 h-6" />
              ))}
            </div>

            <p className='text-[#5A5F7D] text-sm'>Popular Pairs</p>

          </div>
        </motion.div>
      ))}
    </motion.div>

  )
}
