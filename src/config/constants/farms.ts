import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'GLIDE',
    lpAddresses: {
      20: '0xd39eC832FF1CaaFAb2729c76dDeac967ABcA8F27',
    },
    token: tokens.sugar,
    quoteToken: tokens.wela,
  },
  {
    pid: 1,
    lpSymbol: 'GLIDE-ELA LP',
    lpAddresses: {
      20: '0xbeeAAb15628329C2C89Bc9F403d34b31fbCb3085',
    },
    token: tokens.glide,
    quoteToken: tokens.wela,
  },
  {
    pid: 7,
    lpSymbol: 'GLIDE-USDC LP',
    lpAddresses: {
      20: '0x26aCE9c9da938fb2Db91B0d0E7703861c249bf08',
    },
    token: tokens.glide,
    quoteToken: tokens.usdc,
  },
  {
    pid: 2,
    lpSymbol: 'USDC-ELA LP',
    lpAddresses: {
      20: '0x6077b7990d3d0dfB5A50f1D207f67ac5955B999d',
    },
    token: tokens.usdc,
    quoteToken: tokens.wela,
  },
  {
    pid: 3,
    lpSymbol: 'ETH-ELA LP',
    lpAddresses: {
      20: '0xa86883c2405f4557D2242Df47b220C54d0D611e4',
    },
    token: tokens.eth,
    quoteToken: tokens.wela,
  }
]

export default farms
