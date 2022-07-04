import { useEffect } from "react";
import { testZoraCall } from "../../utils/zoraApi";
// import { toast } from 'react-toastify'
// import { useAccount, useNetwork } from 'wagmi'
// import { isZorbOwner } from '../../utils/zoraApi'
import Image from 'next/image'
import MintButton from "../MintButton";

const CollectionGrid = ({data}) => {
	
	
	// const [pendingTx, setPendingTx] = useState(false)
	// const { activeChain, chains } = useNetwork()
	// const { data: account } = useAccount()

	// const handleButtonClick = async () => {
    //     console.log('button press')
	// }

    
    //Can hardcode a MINT URL 
	return (
		<div className="grid grid-cols-3 gap-6">
			{data?.nodes.map((e,i) => {
				return (
					<div className="h-96 w-96 m-10" key={i}>
						<Image src={e?.token.image?.url} alt='blitma' width={400} height={400} />
						<p>{e.token.name}</p>
					</div>
				)
			})}
			
		</div>
	)
}

export default CollectionGrid
