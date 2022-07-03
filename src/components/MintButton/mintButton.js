// import { parseEther } from 'ethers/lib/utils'
// import { useState } from 'react'
// import { toast } from 'react-toastify'
// import { useAccount, useNetwork } from 'wagmi'
// import { isZorbOwner } from '../../utils/zoraApi'
// import TxModal from '../TxModal'

const MintButton = ({ }) => {
	// const [pendingTx, setPendingTx] = useState(false)
	// const { activeChain, chains } = useNetwork()
	// const { data: account } = useAccount()

	const handleButtonClick = async () => {
        console.log('button press')
	}

    
    //Can hardcode a MINT URL 
	return (
        <div className="flex">
			<button
				onClick={handleButtonClick}
				className="bg-black hover:bg-gray text-white font-bold py-2 px-8 rounded my-10"
			>
				Mint
            </button>
            
		</div>
	)
}

export default MintButton
