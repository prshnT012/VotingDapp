import { useState, useEffect, useContext } from "react";
import { WalletContext } from "../wallet/Wallet";

const VotingStatus = () => {
  const { contract } = useContext(WalletContext);
  const [voteStatus, setVoteStatus] = useState(null);
  
  useEffect(()=>{
    const statusVoting = async()=>{
      const status = await contract.methods.votingStatus().call();
      setVoteStatus(status)
    }
    contract && statusVoting()
  },[contract])

  const statusColor = voteStatus === "Voting in progress" ? "#2DFF2D" : "red";
  return (
    <div style={{ display: "flex" }}>
      Vote Status :
      <div style={{ color: statusColor }}>
        {voteStatus === null ? "no status" : voteStatus}
      </div>
    </div>
  );
};

export default VotingStatus;
