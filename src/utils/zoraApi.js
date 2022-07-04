import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";

const networkInfo = {
    network: ZDKNetwork.Ethereum,
    chain: ZDKChain.Mainnet,
  }

const API_ENDPOINT = "https://api.zora.co/graphql";
const args = { 
              endPoint:API_ENDPOINT, 
              networks:[networkInfo], 
              apiKey: process.env.API_KEY 
            } 

const zdk = new ZDK(args) // All arguments are optional

export const collectionTokenPreview = async () => {
    const args = {
        where: { collectionAddresses: "0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63" },
        pagination: {
            limit: 8
        },
        sort: {
            sortKey: "MINTED",
            sortDirection: "ASC"
        },
        includeFullDetails: true
    }

    try {
        const response = await zdk.tokens(args)
        // console.log('... response ', response)
        return response

    } catch (error) {
        console.log('collectionMultiCall error', error)
    }

}

