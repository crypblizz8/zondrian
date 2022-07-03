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

export const testZoraCall = async () => {
    const args = {
        token: {
            address: "0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63",
            tokenId: "314"
        },
        includeFullDetails: false // Optional, provides more data on the NFT such as all historical events
    }
    const response = await zdk.token(args)
    // console.log('response', response)
	return response
}


export const collectionCall = async () => {
    const args = {
        address: "0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63",
    }

    const response = await zdk.collection(args)
    console.log('collectionCall response ', response)
	return response
}

// Collection Call
export const collectionMultiCall = async () => {
    const args = {
        where: { collectionAddresses: "0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63" },
        // networks: {network: "ETHEREUM", chain: "MAINNET"},
        pagination: {
            limit: 8
        },
        sort: {
            sortKey: "CREATED",
            sortDirection: "ASC"
        },
        includeFullDetails: true
    }

    try {
        const response = await zdk.collections(args)
        console.log('... response ', response)
        return response

    } catch (error) {
        console.log('collectionMultiCall error', error)
    }
}


export const collectionTokenPreview = async () => {
    const args = {
        where: { collectionAddresses: "0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63" },
        // networks: {network: "ETHEREUM", chain: "MAINNET"},
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
        console.log('... response ', response)
        return response

    } catch (error) {
        console.log('collectionMultiCall error', error)
    }

}

