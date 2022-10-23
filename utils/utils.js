import * as anchor from "@project-serum/anchor";
// import { Connection } from "@solana/web3.js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { STABLE_POOL_IDL, STABLE_POOL_PROGRAM_ID } from "./const";

export const getProgramInstance = (connection, wallet) => {
  if (!wallet.publicKey) throw new WalletNotConnectedError();

  const provider = new anchor.Provider(
    connection,
    wallet,
    anchor.Provider.defaultOptions()
  );

  const idl = STABLE_POOL_IDL;
  const programdId = STABLE_POOL_PROGRAM_ID;
  const program = new anchor.Program(idl, programdId, provider);
  return program; 
};
