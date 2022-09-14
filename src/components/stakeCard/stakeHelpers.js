import { ethers } from "ethers";

import { config } from "../../config";
import { notificationActions } from "../../store/notification/notification";

const { nftContract, stakeContract, nftABI, stakeABI } = config;

export const handleStake = async (dispatch, availableHog, setLoading) => {
  if (Number(availableHog.length) < 1) {
  } else {
    if (window.ethereum) {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(stakeContract, stakeABI, signer);

      try {
        //debugger;
        const response = await contract.stake(nftContract, availableHog[0]);

        await response.wait();
        // update the front end bal before the blockchain data returns
        dispatch(notificationActions.setContractAction());
        dispatch(notificationActions.setMessage("Stake Successful"));
        setLoading(false);
      } catch (error) {
        setLoading(false);

        dispatch(notificationActions.setMessage(error.message));
      }
    }
  }
};
export const handleGroundHogBalance = async (address, setAvailableHog) => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftContract, nftABI, signer);

    try {
      const balance = await contract.Owned(address);

      setAvailableHog(await balance);
    } catch (error) {
      console.log("error", error);
    }
  }
};

export const handleGroundHogStakedBalance = async (address, setStakedHog) => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(stakeContract, stakeABI, signer);

    try {
      const balance = await contract.stakeIds(address);

      setStakedHog(await balance);
    } catch (error) {
      console.log("error", error);
    }
  }
};

export const checkApproved = async (address, setApproved) => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftContract, nftABI, signer);

    try {
      //debugger;
      const response = await contract.isApprovedForAll(address, stakeContract);
      response ? setApproved(true) : setApproved(false);
    } catch (error) {
      console.log("error", error);
    }
  }
};

export const handleStakingApproval = async (
  dispatch,
  setLoading,
  setApproved
) => {
  if (window.ethereum) {
    setLoading(true);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftContract, nftABI, signer);

    try {
      //debugger;
      const response = await contract.setApprovalForAll(stakeContract, true);
      await response.wait();

      setApproved(true);

      setLoading(false);
      dispatch(notificationActions.setMessage("Approval Completed"));
    } catch (error) {
      setLoading(false);
      dispatch(notificationActions.setMessage(error.message));
    }
  }
};
