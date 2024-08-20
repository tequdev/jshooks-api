export const enum UniversalFlags {
  tfFullyCanonicalSig = 0x80000000,
}
export const enum AccountSetFlags {
  tfRequireDestTag = 0x00010000,
  tfOptionalDestTag = 0x00020000,
  tfRequireAuth = 0x00040000,
  tfOptionalAuth = 0x00080000,
  tfDisallowXRP = 0x00100000,
  tfAllowXRP = 0x00200000,
}
export const enum AccountFlags {
  asfRequireDest = 1,
  asfRequireAuth = 2,
  asfDisallowXRP = 3,
  asfDisableMaster = 4,
  asfAccountTxnID = 5,
  asfNoFreeze = 6,
  asfGlobalFreeze = 7,
  asfDefaultRipple = 8,
  asfDepositAuth = 9,
  asfAuthorizedNFTokenMinter = 10,
  asfTshCollect = 11,
  asfDisallowIncomingNFTokenOffer = 12,
  asfDisallowIncomingCheck = 13,
  asfDisallowIncomingPayChan = 14,
  asfDisallowIncomingTrustline = 15,
  asfDisallowIncomingRemit = 16,
}
export const enum OfferCreateFlags {
  tfPassive = 0x00010000,
  tfImmediateOrCancel = 0x00020000,
  tfFillOrKill = 0x00040000,
  tfSell = 0x00080000,
}
export const enum PaymentFlags {
  tfNoRippleDirect = 0x00010000,
  tfPartialPayment = 0x00020000,
  tfLimitQuality = 0x00040000,
}
export const enum TrustSetFlags {
  tfSetfAuth = 0x00010000,
  tfSetNoRipple = 0x00020000,
  tfClearNoRipple = 0x00040000,
  tfSetFreeze = 0x00100000,
  tfClearFreeze = 0x00200000,
}
export const enum EnableAmendmentFlags {
  tfGotMajority = 0x00010000,
  tfLostMajority = 0x00020000,
  tfTestSuite = 0x80000000,
}
export const enum PaymentChannelClaimFlags {
  tfRenew = 0x00010000,
  tfClose = 0x00020000,
}
export const enum NFTokenMintFlags {
  tfBurnable = 0x00000001,
  tfOnlyXRP = 0x00000002,
  tfTrustLine = 0x00000004,
  tfTransferable = 0x00000008,
  tfStrongTSH = 0x00008000,
}
export const enum NFTokenCreateOfferFlags {
  tfSellNFToken = 0x00000001,
}
export const enum ClaimRewardFlags {
  tfOptOut = 0x00000001,
}
