# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```

https://maps.googleapis.com/maps/api/directions/json?units=metric&origin=place_id:ChIJXwL4shjH1kwR_VmrDTLVqpg&destination=place_id:ChIJyzAp6p8BJk0R3g7jWth_sIo&waypoints=place_id:ChIJOVIYgEI51kwReS_EYsXpb-8&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE


```

## Next paste the full JSON response to this query here:
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJXwL4shjH1kwR_VmrDTLVqpg",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJOVIYgEI51kwReS_EYsXpb-8",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJyzAp6p8BJk0R3g7jWth_sIo",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 47.0633686,
               "lng" : -77.274073
            },
            "southwest" : {
               "lat" : 45.8097601,
               "lng" : -79.82204489999999
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "172 km",
                  "value" : 172182
               },
               "duration" : {
                  "text" : "2 hours 30 mins",
                  "value" : 9021
               },
               "end_address" : "Brent, ON K0J 1R0, Canada",
               "end_location" : {
                  "lat" : 46.0304325,
                  "lng" : -78.4805152
               },
               "start_address" : "Squirrel Depot, ON K0J 1J0, Canada",
               "start_location" : {
                  "lat" : 45.8653576,
                  "lng" : -77.5547849
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "26.2 km",
                        "value" : 26152
                     },
                     "duration" : {
                        "text" : "26 mins",
                        "value" : 1549
                     },
                     "end_location" : {
                        "lat" : 45.8292656,
                        "lng" : -77.27317270000002
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eBarron Canyon Rd\u003c/b\u003e toward \u003cb\u003eMallard Lk Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "oa}vGjljxMdCa@ZEtAMR?fA@z@?vB?T?p@@fABnCDX?pACD?pAQPEf@Kb@WXQ~B{A~DgC@A^WNKNI|BaBrA_AJI\\[\\YJKPQ\\]DETYXa@NQHQVe@Tg@Ri@DMFSBINm@DODOBMBOFa@BSLmADW@[?O@a@@Q@Q?O@Q@a@@O@c@FeB?Q@a@HwB@a@@OD{A@m@@O@]?EFgB@k@?E@[@O@GH}A?GDk@?EDk@?GBURyB@EFo@ReB@I`@{B?CRq@ZkABInAkD@ENc@~@_C@ELYv@gC@G@ETcB@k@@E@c@CqA?]?ECaB?EAk@?EC}BAkA?ECsC?EAsCAECoE?k@?EAs@?m@AE?m@?E?KAwAA_ACi@A{A?I?m@?E@q@NuABMTeAFQ@CTo@V_@NWn@o@f@Yf@Oh@SdA[XKpBs@^K`@MBAbBg@BA`@K^KB?~Ac@f@GB?`@Ez@Gl@AB?bBAvCAbAAB?^?B?`@Ax@?J?@?`@A@?`@A@?b@AfAAb@AP?LAB?b@CVAJE`@MBA\\QRMFG`@]BAn@cAZa@v@oAr@u@X[BC\\Y\\[`Ay@XU^YJIPOd@a@VUvAwAz@y@hCeCHI\\]\\]Z_@x@{@pAqADG\\]Z_@rByBNOJQp@iALSFSRi@Ts@Fg@RmBJqBA]GcBQeBGc@M}@m@cEIk@Qs@UcAYeAm@cCWo@_@cAUaAMk@YkBCk@Eq@EaB?ECq@Cs@GyCCs@C_AEyAIyCCiAIcCGeBGcBEu@Cs@AO@cBBe@Bi@Ny@DYXaADOl@s@FIRWb@m@nBcB\\YhAaAl@o@rCsCx@{@\\]\\]hBiCt@eAbBaCDGfDcEZ_@`AmAPO~@q@j@c@jAaABAzC}B~AkAHMLUXg@j@mA@ERc@fDoI|ByFBGBi@JmEDkBBwADeBLmEDeB?GBk@Dq@?AF_ALeAXw@DKbAeBFKbA_Bh@w@HObBuCVc@Tc@nBoEbAaC~AoEFOH[XkADQHq@PsA`@aDXwBD[Jo@NcANkB?Y@q@Bs@@s@P_GBs@Dq@Ds@@_@RuBFs@@IFe@Jq@Hq@@IRwAHq@TaBTaBHq@Jo@Hq@VmBHc@Lo@RkAFSp@gC@C`@uAZcA`@qAj@eBDMPe@Ns@Py@XiCDSJoANwALoBX_CDUVkAX{@X}@f@{@ZcAFS\\oABKV{AHu@HaABc@HkA@YNeC?eA?a@MwAE]G[W_AAAQi@[aAIUc@wAK[e@mBGUSiAQeAEYKo@s@{EEWUaBIk@AEMo@Mm@Mo@Os@a@sAQm@Sk@I[g@kBAGMg@WoAAMIwBBiCBuABcA@s@@q@@s@BgB@aA?wA?oA?kAAG@i@@]RcABIb@yAZqANm@Nm@@CNi@ZgA~@{B`@s@`@o@RUjBeCPU|@sAR[Ra@Re@J_@VkA?Et@uFNoA\\}ANm@v@kDDM\\kADMRk@DQd@oB@GHq@F]@SDq@Bs@?G?oAGiDA}@Eg@WkESwCKeBEq@Eq@SyCKeBYiEKeBMeBWiEEs@Gq@KcBAM?S?Y?m@Bq@HmEHyCFyCDgBDeBF{C@q@?E@m@DoB?}A@SCiAG_AE}A?CEs@MyCGeBSkECs@I}AKw@WaBEYCWi@eESaBUwC?GEeEM{FEq@Kw@AAO}@s@sCi@kC?AMm@m@kCOu@Kg@S_AKu@Ky@ASC_@A}@?G?_@@SDa@JeAPcARgABQVmA`@qBH[XoAt@uCR{@Ja@Nm@^{A^{ABOl@wB`@{AFSn@oBRo@Pg@h@sAn@kAHObBuBt@aAZa@Za@Z_@lBcCZa@f@o@Vg@P]p@yAj@oAdA}B~BsFRi@j@qAZw@dAgCZ{@n@kBTy@Rw@@EP{Ah@eEBKd@yDf@eE\\sC^uCHo@D]BS`@mCRiANk@Pm@XmABMPm@^{ANm@^}ANm@BK`@eBDYTwA@INeBFkA@kACs@GkBIk@Gk@[eBEWe@uBCKIa@Mo@CGUwAAEYaCSoBCUC[Ek@@}@?k@Js@?ANgADY\\aCNaAJo@DU`@}B`@wD@KLsBBgBBwA?a@AgAKoB]iEa@cFGiAGqA?UAq@?i@@qB?S?_@?q@@s@?s@?QBsADgB?G@k@BeBBkC@oAAs@AiAGaAO}@Gc@CKMo@Mo@GYw@}Co@iCa@{AGWISg@uAcBuEUq@kAeDg@wASi@Y{@KYi@uASi@{@aCg@sASk@Yu@k@iBEMI]Ms@QyAAWCm@?E?m@BgAFy@D[Jo@Dc@ZiBHg@Hq@H_B?S?m@?CEmAIcAKq@?EKq@CMGa@g@oCe@oCk@uCOo@Mm@AKKc@IYY_AOe@Sg@OYS]QWSYa@_@_@c@IKKIGGg@g@aCqBQQcB{AKI}@cAKOU]Ym@We@Ys@[eACIKe@CGKo@A?MgAIy@ASIiACgA@cAFwA?CFs@@SLoABQNqA^}C\\iCD]BSDa@PgCB}@?U?q@?AK}AAEKaAK}@{@sECKIc@{@{ECU_AqFEYSeA_AoFKq@Y_BG]QaAMo@Ko@_AqFKo@Mo@Ko@Mo@Ko@Kq@Mo@Ko@Y_BKo@g@qCW_BMo@G]QaAsBqLMo@Y_B_AoFMo@YaBs@_EKo@Y}A?A[_BKo@YyAg@wCCMGa@Io@Ii@AGKo@CSG]Ko@c@yCYwAMo@[}AMo@i@oCMm@Mo@]iBIe@Ko@Mo@WaBMo@W_B_AqFKo@i@aDo@oDKo@Mo@Y_BeBaKs@_EYaB_AoFY_Bg@qCyAoIKo@aAqF"
                     },
                     "start_location" : {
                        "lat" : 45.8653576,
                        "lng" : -77.5547849
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.1 km",
                        "value" : 4106
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 209
                     },
                     "end_location" : {
                        "lat" : 45.8637666,
                        "lng" : -77.29207459999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePriebe Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}_vvGhlsvM{@`@_@PcAb@cAd@_@PcAb@a@PcBv@eBv@a@PaAb@a@PcBv@a@PeBv@eChAa@P_@PcAb@cAd@aAb@cAd@a@P_@Pa@PcAd@a@P_@Pa@Pa@PeChAqD`BeBt@_@Pa@RgCfA_@Pa@ReCfAcAd@a@PkF~B_@Pa@Pa@PcBv@a@Pa@PcAd@eCfAa@PcBv@eBv@_@Pa@Pa@Pa@Pa@R_@PcAb@a@Ra@P_@Pa@Pa@PcBv@eBv@a@P_@PeBv@a@P_@PcAd@cAb@iF`Ca@PeChAcAd@cBt@eBv@gElBa@Ra@PcBt@a@Ra@Pa@PeChAa@Pa@R_@Pa@PmGrC_@Pa@Pa@RcBt@a@Pa@RaAb@a@PcAd@qEpB"
                     },
                     "start_location" : {
                        "lat" : 45.8292656,
                        "lng" : -77.27317270000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 45.8639046,
                        "lng" : -77.2915781
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBlack Bay Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qw|vGlbwvMKo@Mq@"
                     },
                     "start_location" : {
                        "lat" : 45.8637666,
                        "lng" : -77.29207459999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "103 km",
                        "value" : 103014
                     },
                     "duration" : {
                        "text" : "1 hour 5 mins",
                        "value" : 3910
                     },
                     "end_location" : {
                        "lat" : 46.2472557,
                        "lng" : -78.310225
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHwy 17\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kx|vGj_wvMaHjGSRoBfB{ArA{ApAuDdDoGzFWRGD{AnAGFUPSNk@`@KHs@d@GFWNg@Z_Aj@iAn@gAh@aBv@yDjBwCtA}BhAQHa@RcBv@IDWLgBz@[Na@RaAd@SJMFwDfBq@\\cAf@_Ad@A@eAh@sEvBqEvBo@Za@Rm@XiD~AUJaDzA{C|AuCrA_Br@_@Rm@VoCtAmAl@}@b@gB~@CB[Na@Pa@RULIDyB`Am@VaBr@oClA[NcAd@cBv@UJk@Xa@P}At@{CzAsAn@aAd@o@Zs@\\aDzAEB_D~A}DvBiDvA_Ab@uAn@uFlCUL{IdE_DxASJ}Ap@_C`AsAb@qA`@g@NGBUDEB_ATIBiCj@{B`@oC^mEd@iFh@_@DoD^G?kEb@qCXc@DkBRE@{@Hg@Fc@D{ANy@H]DsALyC\\eD\\_BPC?oALWBeALC?}@JoBRc@DA@A?]DiDZYDc@Hu@JiAT_AVs@TqAf@iAj@k@\\ULKFe@\\o@d@k@d@YTUTu@v@KLg@l@o@z@e@n@k@~@s@pAy@dBy@nBCHmAvCeAdCaA~BcA`CcBdEaCrFs@vAg@`Aw@tAu@pAi@|@o@`A{ArBiC~CyCdDcDlDi@l@iJ|J]\\MN}JtKoF|FkFvFwIlJ]\\ePdQwJnK{InJsU|VsLjM_HpHmNfO}HpI{InJiEtEoOlPqCxC[\\qCvCoLfMmDvDyEbFqFdG_A|@y@r@e@b@UPwB|A{BxAsBpAC@iBhAIB_FxC{A|@_@Vm@\\QNiAz@SNYTCDa@`@[ZYZeAnAqA|AUVyCrDABoBbC[`@KLwDrE[`@sA~A[`@[^CDkBxBuEtFg@l@gApA[`@sA~Aw@~@eAnAOPw@~@cE`F]\\i@n@q@p@g@d@k@d@A@gAv@UNUNkAr@_@TEB{A~@A?mA|@e@Zu@p@o@j@c@d@c@f@GHSV]d@g@r@o@~@aA`B_B~CyD|HUf@GJiAbCmAhCUf@_ApBmCtFOZEJwCjGs@|AWf@oBfEWf@MXcBlDKTIPu@`B}@jBUd@Wj@m@zAw@vBCFOb@eA`DM`@]jASt@K\\GTMj@Mb@Kf@cAxES~@i@tCmBjLuApH_CxLs@zDMn@I`@UhAQbAgA~FUjAeAtFS~@Oh@ERIXMd@Qn@Qh@Wv@Un@[r@_@~@Uf@CFy@jBCFaDfHe@dAs@~Ac@bAk@nAg@hAsBrEk@pA{AhDs@`BeA~B[t@oBjE{@nB[r@Uf@cCrFkAhCg@hASb@Wd@MTS^OVo@bAm@|@EHYb@mAhBQVIJYb@a@l@oBvCINw@jAeAzAgAdByAxBEFiBnCsAtBs@dAo@~@]h@cAxA[b@Y\\m@t@oAlA}@x@cA`AyCjCcGnFyFfFyAtAUVoAlAONkAlAONSXQROROTA@KNQVOVEFOT[f@Yf@u@rAgAjBmAtB]n@i@~@cAhB_AbB_@n@[h@GHs@pAi@`Am@dAu@rAe@z@g@z@W`@UZQTUZWVEFc@b@[X_@ZURWN_@Ta@TYNi@VA?s@\\_Ab@s@ZQJu@\\mAj@s@Z_@PEBi@T]Pc@Ro@XC@g@Vc@R{@`@UJq@Z_@PULWLk@Za@RWNQJ[Pa@Va@Ty@h@s@b@C@yA~@qAx@UN]TA?e@ZaAl@q@`@GDgAp@i@Zk@\\c@VSLm@\\SJMFKFSJEBYLYLSHWHA@WHGBIB[Ha@Lg@J]HYFaATm@NSDw@Pq@Ny@P_Cj@mB`@GBuAZ}A\\{AZc@J_@HA@{@PiAXkAVy@Ra@J]HQDIBs@Ri@N]Lk@Rg@PWJA?_@Ne@Po@XaA`@s@ZcAd@w@Z_A`@aA`@q@Zc@NC@OFMDIB[JUF_@He@JWDYDSBQB]DiAJyANu@HaAJUBM@y@JeAHeALu@Fa@Fc@DgAJmAL{@HC?YBa@D[@a@@Y?a@?_@A[CYCg@GMCSEUESE_@Ic@Km@Oo@OaAWq@OWGmASe@Em@Em@A[?G?[@K?y@DgALaI|@qEj@_AJ{@H}APq@H_D\\yFp@qD`@u@JiHz@mCZC@kBRc@Fc@DmDb@u@HcAL{@JyC\\u@NUD_@J_@L}@^g@Xc@Zo@h@e@h@w@|@GHm@|@mBlCwFlI_@j@UZs@dAu@fAs@dAIJQVYb@mEtGmBtCY`@}A|B{AzBYb@[f@qBxCORYb@w@jAq@`ACBW\\QRq@v@_@`@OLs@n@k@b@s@f@{@d@KDOH[N]L[JIBYH[Ha@HsAPi@Fa@BiBHyCJE?c@BkDL}EPkBHgA@eA@A?{@@K@E?_ADe@De@FQFc@Ni@TWNEBMHSLi@\\WTMN_@`@Y`@KNEBOPOPORg@t@Q^KTO\\Yp@k@bBAB_@bAOb@g@rASj@k@zAc@jA[~@ABk@|AUn@c@jAO^gCtHeAtCmCpHO^]jAIRSf@Uz@uApEaAhCo@|AYp@i@lAiAdCINgInPsAlCy@`Bg@dAcArBc@x@[j@o@pA]t@Wj@Sd@Sf@Qf@Qf@CHKVGRCLK^ADK`@Kd@Q~@Qx@Id@EXe@vCiAvH{A`Ko@zDQfASz@EXMh@WdAo@zB}@bD{DbNo@vBqB`HkBnGkAbESn@IXe@bB{@vCUt@ENu@jCc@tAENWx@[`A]z@O\\ILKT[l@_@n@[b@UZORm@r@]^QPi@d@MHi@`@[RYNSL{@^g@Ro@ToBt@gC|@uBv@_@LgGxBIDa@N_DjAIBa@N}@Z}Bz@QFi@RYNIBUNq@\\_@T[Tc@^YTQPMLs@x@SVY\\A@u@bA_BxBKN[`@kBfC[`@mBhCmEbGcBzBy@nAgCrD{BbDcA|Ak@x@a@r@IJo@dA[l@wCpFq@lA_BvCsA`CcFjJUd@Wd@q@lAoCdFKPKRgArBeAlBcB|Cm@hA}@bBiDjGgE|HiC|E{CvFgHzM}ArC?@S\\AD_@p@gCvEgArBwB~DWf@gCvEaBxCWf@oDrGk@bAWd@Wb@iApBiA~Bq@xA}CzGABSb@eAtBcAvBo@rAk@jAeAvBaApBYl@}CxGGJw@nB_A|BUh@_@~@[`AQj@u@~Bc@~AkBnGsBbHcAtDmAnEeArDQl@IVGRa@zAQj@m@tBk@jBK\\ELe@xAa@jAq@nB}BjGwBbGSh@iA~CYv@i@|AMZy@zBs@rBqCzHgAvCc@jAsAvDSj@yA~D]`Aq@hBIVoAjDqAjDQh@EJSh@eBvEg@tASj@g@tAoAjD}@bC_@`AO`@sAtDk@~A}@jD?Ba@dBe@fCc@xBy@fEcBtIQbAKn@Kj@UfBEb@ALO`BGt@Gz@u@vKM`B?BEr@IdBMfCKlBGpAI|Ay@jMGp@k@bJ[~FSzDMjAa@dDG`@OfAYxAgAhD}@nCuAfD_AzBk@rAoAzC_AhCiDfJSh@Sh@{D|JmB~EUj@oEdLi@tAi@rAM\\{@rCQj@[`AWdAOn@Ol@CHy@vE_@rBQ~AIp@A@En@QlBOpCCXAVCr@Er@IdBCr@MlC?JGfBOlECr@o@jRo@dQCr@o@tPOfFCr@E`AK|AA`B?D?l@?\\FnBDpAPxB@L`@fDp@dFl@nD|@rFLv@ZjBD\\Lp@b@pC\\rBV`B@HJd@X~ADV`@bBb@bBh@`BJZPj@fAfDXp@Th@Zv@bAbC|A|DZx@b@dADLv@pBRh@Th@pAhDrAfDz@~BTj@Rh@|@~BBHf@nARh@@Bf@pAtBvFVv@\\dADRVlABPNhADVJhA@ZFnAHbEDhC@r@@hADpGEdB?NKtAEp@APKhAQrA]tBOr@Mn@GXUbA_@|AI\\ENMn@Ml@[vAq@rCiCdLOl@I\\e@lB]|A_AzDU~@sBlFSj@i@rAuAdDUf@Uh@k@rAUf@gBdEeAbCUh@wAbDk@pAwAdDUf@oFdM_@nAaA`DIZk@jCYvAe@xCOfBIp@C^ARY|EA`@Cr@IdBCr@MlDUdEAHWrFk@zLAPEr@OxCCr@OxC_@rHEr@AVGlAOxCY`G_@rHSlEUjEEr@UdFIpAOhDQnDQzCInBEdACrACh@?HApC@|AJzCJ~BH`APbBJ`AL~@^fCDTXnATbAz@xCPj@BDNd@Rj@Rj@Nf@Tn@f@tAVt@L`@Rj@Rj@Ph@Rj@`@lABHx@bCRj@HVbDpJf@tAx@bC@BPf@Pj@Rh@`@lAj@`BlAlD\\bAf@vAj@dB`@lBf@dC@HJp@Jn@Hp@Hp@NnABR\\tCNlAV`CTvBNnAPdBJv@b@`EHj@l@nFl@rFn@pFj@dFDd@l@jFXdC^xDn@hFlAnKHp@p@xFBV^fDHz@Fh@Hv@dA|If@fE?BFh@ThBLdALdAzAxLNhAXdC\\xCxBtQHp@lCxTNlAz@jHBTn@`Fb@dEFv@Dv@FfAHfBBdC?ZAvDEtD?b@Ar@AVGdFCx@C`BCh@E`A?DEl@El@Gv@KnAGd@Q~AOdAIb@Mr@EROp@AJa@`BM`@a@xAYz@?@IZSl@Qj@u@dCa@tAM\\u@dCSj@ADa@rAe@vAQj@Ql@Qh@Ql@Sl@Qj@Qj@Ql@Qj@Sj@c@xAQj@Sl@Qj@u@dCSj@u@dCEJ}FhRa@rAuAnEw@bCc@xAe@xAu@bCe@xAQj@Ql@Sj@Qj@Qj@w@dCSn@mBfGQj@{@jCgApD_A|CkA|De@zAo@nBuA|E}C|JsCbJ]jAs@~Bu@fCGRq@bC{@zD}@xEGZo@vDuCrQUrA]lBKn@g@rCu@~Du@xEqCpPQdAY`BqAzHoAzHMn@a@bC[nBKn@k@dDy@~EW~AMp@Kn@CPI^Id@WhA[hAaAxC_A|Bs@tA{@rAkA`Bi@h@_B`BoBnA_ChAMF]Lg@Na@LgBj@aF`B}Br@a@NiCx@kCx@kDhAoDnAi@NsDjAa@La@LiCz@a@L_AXaBh@aBh@OFgBh@iA\\_Bh@qC|@eCv@EB[JgA\\mBr@sAl@sAv@eAr@k@b@KH_Az@iAjAEDy@dASVi@t@c@r@INMTc@x@u@zAm@xAw@pBENSh@Sj@Qd@_AbCM\\EL}@~BKV[|@Sh@]|@IXs@xBWt@Sv@Sx@k@rCMn@ETWbBEVIp@MxASjCM`AQnECf@S`FIvAOfDMjDEr@AXK~BCr@Cl@Ax@Ab@?NAr@Ar@@r@@r@?J@f@@r@Br@@\\@RJfBBp@@NJvADp@d@rHDp@JdBDr@Dr@BV@XFr@\\~FDr@\\~FDp@Dr@JdB`ArP~@~OFv@nAxSDr@|@~Nh@dJl@xJHpALdBDr@z@zM|AtVLfBJdBnAvSfArPDp@Dr@XjEBf@t@dLDp@PxCFp@NdC@RXjEXlEFp@J|AnCpb@b@vGPvCB\\Dx@H`BBp@Bb@?NDdAJzCTtHLbH@r@@xJ@fB?r@?BAbBAr@AzCAr@AdB?PA`@Ar@C`BK`DAn@Cv@Cp@EfBGfBAr@IxCE~AOpHEtBE`B?BCr@Ar@ADE`BCr@GdBCf@?JMfFAZGxCCr@Ar@Cr@Ar@Cr@CfBCr@GxCCr@Ar@Ar@EvA?NCr@Ar@Ar@Cp@CfB]jP?LCr@Ar@Cr@EfBKnEGxCAr@EfBCr@EfBAr@EdBCr@OvHQrFCr@KjDa@pGANMdBEp@OfBGp@Ip@[tCYtCEVCXo@zFIp@c@tDmElX]bCCLEb@SfBYpDQnDEr@Y~Fe@fJu@xMQlCMdCOzBQbCQhBW`CG`@SbBEZUxAa@|BMn@g@nCeBxIwChPg@nCY`BQ|@I`@{BnLi@nCg@nCc@vBEVMn@e@nCg@pCMn@kAvGw@jEwA|Hc@pByBpLaD`QMn@k@`Da@~BMn@_BhJo@bEGZCTe@pCKp@Mz@cApIGp@OfACZIp@_@tCALQtAKn@Ip@_@tCIp@G^s@zF_@|CQjAG^WjAW`A[dA_@`Aw@dBgAxAe@f@c@d@s@t@]^y@z@[\\yB~BUZ[`@UXCFu@dAaClDw@dA[b@Y`@[`@_@f@a@h@s@p@WRo@f@_An@_@X_@XuEjDc@\\}AjA_@V}AjA_@XEBoBzAaGxEk@t@]h@]j@CDWd@S`@CDq@tAQ`@c@~@IRi@nAUf@aAzBWf@?Bi@jAA@Uh@sDfI}@pB[p@Sb@Uh@A@Ud@Uf@ABSb@ABKT_@t@Wf@ABSb@ABk@lAWf@A@Uf@Ud@Uf@A@Uf@_DrGABOZEFm@nAUh@A@aAtBABUb@ABSb@IRKRm@pAUf@ABm@pAi@lAi@jAWn@Ul@Wr@Wt@GTA@IVW|@Sp@Oh@A@Of@U~@I^A@ERGVMn@GXEX]nBG\\?BKj@ADQtAOfAK~@Ix@Gp@Ej@CXEn@?DEp@AHAb@?BCf@?FGfB?BA`@?LCbA?r@?f@?`A@tA?B?L@`@?B@V@~@D`A?NB^?BBn@JxC?D@?Bp@h@zL@N?BLzCD|@FzANtCBr@Dr@LxCh@nMHfB@RLxDDr@?BD`BBr@@r@?BFvC@r@@h@@pB?p@?@BzC@vBAjEAf@Ar@CzCAZErDChB?p@CxBAfBAr@?NGjFAjDAnA?L?r@@lABbAB|@?@Bp@?RJjBBXDr@Fp@NdBDf@@HVvCFr@H`AD`@Fr@Fp@LdBLrA@PFp@Fr@XdDBb@R|Bf@rGXvDL~BRjEJdBBt@FfBLxC@\\NnDXtHf@pM@ZHfBBr@HdBBr@?FH|ABr@HfBBr@LxCDr@FpA@R`@fJ?DDl@Br@@DBl@DnABhA@h@?H@vA?NApAAhACr@Al@Gx@A^K~AEVEf@MrAQjAALW|ASdAS~@CLI`@Oj@_@xAa@`BM`@Sx@a@zAOl@a@zAOl@Oh@ABOl@Ol@eCpJOl@q@hCq@hCOl@q@hCo@dCo@dCq@nCaBtGOn@cHbYeDrMsApF[nASt@Sz@mBbH[lAW~@s@hCi@`BWv@}@lCQj@Sj@e@vAq@pBGPQj@{@bCQj@w@zBUr@eA`DELe@vAsAxDa@jAy@`CsDnKkAfDITIRe@vAAFYr@k@bBENe@vAM\\Uz@[hAW|@Mf@ADU|@_@|A[tAWnAOv@EXWrAW`BGb@Kp@StAK|@?DGj@Iv@MnACNGp@CTOjBMjBMvB?@Cp@Gv@EnACdAAr@AHC|A?@CdBCbCObKEfCAPCfBAr@C`CClAAr@IdEOrHCtBCr@CrBI`EA`@MhIAXIjEElCAHCnCErCGbFIbEMbG?BIjEAr@C|AAz@EnCAJSxKAx@Cr@K`G?@K~F?@QjJCfBCr@Ar@EfBAr@CdBInECr@MdH?PCzCAp@?@@zC?r@?f@JhEHlCDpA?@HtAFjATvCb@|FNdBPvBTdDRdC`@nF\\lEB\\BRRxCNdBNzBFr@Fr@T~Cr@dJTxC\\hEFp@JtAPtBd@|F@JDd@TxCDp@Db@@NVvC?FXrD@NTvCFr@Dp@BVXxDDl@RvCDr@@RL~AHjAJzAVnDBPB^Dr@Fp@LdBDr@@@RtCFr@H`AHtAH|@RlC?@LfBHhAP~BNpBDd@Dp@@FHhALbBNxBJnALfAPjARhAXnAXdAHVNh@Tn@`@bAh@nAXn@rBlEJRt@~Ar@|AtCfGz@jBDLt@|Al@tAn@rA`A|B~@zBZx@JZNh@@BRt@Jj@Ln@@JLr@Jx@BXBXHx@@PFr@Dp@BX`@hFHhARvCDr@TxCDp@RxCBVBXRzCBd@N~BDr@Dp@Fr@B^@RJdBDp@Fr@Dr@JdBB`@?@Dp@Fr@Dp@FhB@p@?@@~@?v@A`@Aj@?HEz@APEb@Cf@OrAMhAEPIp@G\\a@pBOl@"
                     },
                     "start_location" : {
                        "lat" : 45.8639046,
                        "lng" : -77.2915781
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "38.0 km",
                        "value" : 38016
                     },
                     "duration" : {
                        "text" : "54 mins",
                        "value" : 3228
                     },
                     "end_location" : {
                        "lat" : 46.0261733,
                        "lng" : -78.48842449999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBrent Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ktgyGz}}|MPF`@Jb@JTFL@N@R?F?XEb@G`@GfAC@?b@Cb@C^CpCLH@XHzAf@rBl@h@P~Ab@dAVHBz@Xj@R|A\\D?`AL^ZRLzDl@lBFH@d@Df@J^JRJ`@Rx@v@dC`CNNbEpEX\\FFf@d@j@bAd@dABFXr@`@dBHZb@vB~AvGh@f@f@J`AHf@ANAPE^IBAdEyB`@S^Sb@U`Aa@LG`@[LMROHMb@m@bByBrAcB`@g@pAqAZ]pAqAXO^?XB`Ah@PHJNFFPZDHz@rA`@n@BBXb@NVVZLL\\Z\\\\VRf@f@b@b@fAxArAbBX`@Z`@Z`@NTf@h@jBnAVPFB`@L^H`@D\\AJ?TA^Er@S`@M`@Ob@M`@M`@MPGNEb@KLETA`@E@?`@@L@t@P@@\\^NPFPRj@DLLZTh@Rh@DLh@`AVd@N\\FD^Z\\XJHRN^V^VBBXV\\Z\\Z\\ZTRFHZ^Z^PRJHTVd@^RNJH^V^VDBZJXJFB`@Jb@JdAVZD^Ff@H`@Fb@H@?`@JXHFD^VFDzAjCNVr@lAT^bBtA\\V`B`BxAvANLJNv@bAlA|Ab@\\^X\\Z^XzAnARLhAhAx@z@FDxA|D@NRdB?F?h@AfBCvB?b@?r@?fCBzCBRFp@Hr@Rf@`@`AJLb@n@l@`@f@J@?^?f@MXKFC`@O`@OFE`AQ^Ab@AL?d@NNJ^TLHh@t@HJbA~AFHh@~@hApBn@hAp@dABB\\\\XLF?`AC^GnAQhBWjBWXEj@KdASbAQfAGB?b@@D?b@DZFb@H`@H?@`@Pp@\\v@j@VJ`@Nn@Vt@Jd@F@?r@FPA\\AD?`@C@?z@Wh@[ZUfAaAv@i@|AiA^W^WPOLE`@OfCcAdAa@\\K`C_AXQx@k@`@e@d@k@LY`BgDh@cAfAuBfBgDJ]t@eC`@yAt@gCL_@b@cAb@m@FINUX]ROp@c@^SHE`@S^Sj@YTO`@SBCXUJKPO\\Y@A\\[FGTQDCXO@AHERGB?HAXCfAEXCH?TAJCJAJCHE@AFEJMFIZ_@DETYBCZU\\[@?\\W|AiAROJIXS`@[\\e@DGTYRUFGFIVK`@QNGr@Q`@O@?LGPOBAh@i@LK\\[f@c@LINEt@CJ@b@@z@BXDRJDBXPTPVN`@JRDH@|@Bb@@dADbADX?HAJEXQXQFEDCFCB?LARCVBP@HD`Ad@bBx@`@RdClATLJB`@Hx@Rn@F^DB?b@A@?^MVGvBqATGLEx@Db@@b@Bb@@t@BxAJb@DhBLjBLb@BjBL`@D@?b@?D?VUt@m@z@{@FCZOD?\\GD?b@@b@@pDf@b@D`@Fb@Fb@Fb@Fb@@J?j@?r@Cb@AdBGB?VEJCRGZQRK\\S^SZMJINGLEDA\\EZCF?hBJbAd@PHN@`@@@?R?PERKHKZ_@BCT_@Vg@Ve@Ve@@ERa@l@oAVg@FMXi@LWTQlAc@`@MPINE`@Mz@YLCLGJCB@F@~@PTDn@AB?TCHCFCPGTSNOBEVa@h@mAj@oAf@kA`@s@NUHINIJCxBa@REdAO\\GlADb@@V@JCVEHI\\Y^Y\\YROJKZ]Z_@h@k@j@s@@C|@k@HITGz@Uz@HRL`@R\\R@@bCpAvAt@pAVNBhAEr@Y`@QtA{ADCRUBCTM`@KZCR?F?ZCBA^E@ArB_Al@y@^iAd@wARk@DMLq@To@Vm@^s@BAVYDAVKHC`@MBA^C\\Eh@Cb@Eb@C`@Cb@C@AdAGb@Cb@Eb@Cb@FD@XPHDTRZXXd@Xd@DFd@`@PHVN`@?JAVAd@ODE`@]n@gAVc@l@cABEZa@PQh@Y`@O`@GD?b@@b@@H@x@\\r@ZLJh@f@j@t@Z^rAbBvAvA@?\\VZPD@`@N`@L^JB@b@@J?z@A`@I\\IDA`@Q^QHCTSp@o@HG~@s@j@e@RG`@Q\\YPMJOT_@BCXa@Xc@f@u@LONSJKLKPKNKNI^Sb@MHCXAB?\\D\\HDBLFPL^XX`@FHVXJHNH@?`@JPFNFbA`@`@P`@P\\LB@bB\\B@^VDDXT\\ZLJNNnAxA\\h@Xb@^h@|@hAPN\\Z?@`An@\\P`@Rv@x@Zf@Vb@@@N`@DVD`@@`@KrBCZOnBCf@Q~CMh@EVITWp@a@p@cApAMPw@x@a@h@GJQXIZIZG\\AV?B?f@Bh@BPBXL\\Th@N`@Pj@Rl@Ff@@FDZF~ABfB@r@?H@~@?rB?NDl@?DD~@Fb@F^Lj@FRDJDj@Dj@?B?t@Al@AJ?f@GpFANAZ?V?RD`@DZFN\\jAZv@Rh@Rj@DJJ^\\|ANl@Nn@Nl@@DJz@B`@?B@vC?JBx@B^?@DXFRBDP`@@@Rf@Zv@d@bATh@@Dx@xBVt@t@xBRh@Pj@Rj@Vf@\\n@HNHH@@PHLD`@L@?fB`@`@Jb@Jd@JT\\@@Th@VlABN@LCb@?@EPIZCLKh@Kf@Kh@SxAALAr@Aj@?z@?rA@j@Bd@Hn@H^@FHTPd@LVPj@Rj@DJ\\lAPj@HZDP\\~AR~@D\\?@DRFRHP`@j@d@p@PTDNf@tAL^d@fB^zA@?Nl@Nl@p@hCNn@XfADRLn@Ln@Ln@Hb@Nz@X~AHp@Hp@Hn@Bt@FbAB`@FjA?bC?b@@`A@x@Fl@Fp@Fh@Fx@Fr@Fp@Dj@PjBVvCb@zEd@|FLxAJpBB`@@NDl@An@Cj@Cf@AZAfB?VA~@BNJh@Vv@Nd@JZFLf@dA^lATdATdAP`A?HDbABtA?BEx@MbAMbAApA@VB^R~@?@n@|Ad@fADLLr@FhA?FFbBFhBFfBBr@B^HbAFdATdAJd@DNFL\\h@\\j@BNVz@Jj@Dd@D`@BvBHbG?f@FxAH~@@HNr@VtA@DLbBHr@D^VrBJp@V~AFr@BT@`AAl@AREbAMnAEl@AHOz@Cr@?bAFvBH|H@`@@dABlE@r@BzC?r@@r@?BFn@Dn@Nh@@Bd@xAJ\\DLTv@Fd@NdACfA?FGv@ItAAJIp@QbBOxAC~@Cr@?b@@L@JJ`@Hd@BJRp@Rb@LVn@bB?@Rj@HPPz@D~@@hB?p@?|C?r@?l@PvC?DLdB@NPrAPnAJfAV~ADT\\bAHTHRRj@FNn@~@TZTZBBf@`@j@b@FJXb@JPJRTf@P\\Zp@Td@@@Vd@Xd@T`@@BX`@nAhBV`@h@~@p@hAVd@Xd@Vd@b@r@LTRZ\\l@d@z@HRTl@Jj@FVH`A@FH`AFb@Fn@?@Z~AFXZ|@Rj@JZv@zAVf@NXl@z@NRJPNNHJVXTXNN^`@h@f@Z\\Z\\DDv@p@\\ZxAtAz@v@\\Z\\Z^Z\\Zz@v@\\Z@@^JhA\\jALXJ`@PLFPL^Vp@d@FPVp@R^Tb@@BTf@LVDPDXDVHp@@JHb@V`B?DLh@Nl@Nl@Nn@\\zAT^BDPXTVNLDBZJ@?ZBDATCJI^UDAZSLIRGbA]`@Mb@M|@[DA`Ae@VMHCb@Ib@IdAUZGhAQB?b@I`@INCRE`@Kb@KXIF@fAJF@ZDb@Fb@FF@XHPFLJXRDD\\^Z~@DXHn@@PLrA@JBd@Bl@Ex@ATEnAAj@?FGbAK|@CTIj@?DOl@EPI\\K`@UrAIlA?@En@Eb@Uz@EJQt@e@h@ED]T}Ar@i@He@DS@s@J_@TSVANETBt@BXBR\\r@`@n@^PXLF@dAVJBbAh@RLRJf@b@@@Z`@R\\DFHJXLZDd@Eb@Cb@EdAKFAZ@L@^Tj@RJFXJF@b@FPBd@ENCPCLK@AP_@@EH]DQHYFQPm@@APi@N[FGJMPMHGVGDAZKLCp@Mj@GLAREhB_@b@IdAU\\GD?b@B\\BB@j@^NVPXVb@DNHXRv@@HD\\DPFj@PlALTJTJNLRLHf@\\VRTPDHXf@@@P|@HZNn@ZdA^f@FBPFPDFBr@LH@fAN~@LD?b@FXBZJ^PJPPXDJNb@Lx@BNFz@@X@f@?JCr@?HOxAQ~AEv@MdBEt@?n@@r@?r@@PJZPl@BFR^RTHBB@\\HLBLB\\^Xb@@FVz@B`@FhA?\\Ar@Cl@@BDl@@DDZFPBJLVB@PFP?H?VA@?`@OTIJE`@O`@ORGLGVMHCVIJ?V?JB`@N`AdAPXXb@Xb@JPb@z@JPLPZ^v@|@BBXX@@ZNf@@\\@D?b@?b@@B?zABJD\\NB?d@VZPBBXTDDP`@DLJ\\Nl@Jn@DV\\zBFXBTJp@TvA@HX~ALn@VzA@BVxA@DJp@Ln@RjABTFp@@HBf@@XGlAAFGf@@`@B`@L`@VZXJF@d@N^Z^b@PHPHNBTHJ@fANl@Ff@LNNDBT\\@@p@\\LBb@HtAVv@Lb@Fh@AZELAx@SVGHAd@G\\T@?V\\@@b@|@`@f@DD\\\\vBrBx@z@x@v@@@j@pAl@nAj@pAxA`DZr@l@x@v@bARZDD\\\\nCxC\\^Z\\tAxA@@x@z@XXb@ZFDXJB@`@F^Ff@Ht@Ld@NFDPRHJDFP\\@B^fARz@BHXbAVd@`@h@@?^p@\\`ARdABb@Bh@?n@Cp@Ix@Ed@ENMd@CFQb@ADMVQ\\Un@Sp@ATAJCp@?n@Bj@?HFfADdABt@?NF`@D\\DPBLJ^@@Td@LT\\v@?@Vf@DJV`@^n@f@n@@@Xd@Rf@L^Rz@DTPhADRHz@BRX`BDh@?FBb@?~@ABCp@ADGr@EbAAv@?V?PBx@?Z@r@?d@Bp@ALA^CRETOjASdCIbAEh@Gz@Er@ABAl@?LBd@?@Fb@DHDRLTh@|@R`@Rd@Pv@Z~@J^BHHVTb@X^LTTd@^rA@HVnAP|@@DNf@BJ^v@^r@`@v@\\z@BDTf@HT^j@n@~@JLZ`@RTl@v@RNl@j@tAdAx@^RJl@ZJDv@Lt@NPHPLLH^X\\ZZPB?VFJAXCj@Kb@It@W\\IRIHEd@Q`@GTDN@PHRFh@Vd@N@?b@BRCXKVK^O@ApAaAJI^WJIPOj@g@f@s@t@iAHKf@k@d@_@VSFEx@i@DAbAa@XMjAc@d@QlA[TKXKFENKFW?AH]DMHUZg@JKJMTUXSb@Yb@OXCBAdAOB?b@M`@SNOHIPQh@g@DEX[f@]d@MPCf@I\\O`@Q^S^UBA\\QXMFARANBVBJDNFb@XJHJHTHVJH@HBVFNBh@NJBf@L\\NHFTL^VTLd@h@`@`@XT\\Zj@d@RL^Vv@h@DDNJVJTLB@RFND@?LBR@@?^BfAFL@TB@?VLFDLLn@d@JF`@PzAVXFnATPD`@DR@F?PCHABAf@Id@?VAL?x@OVGl@EfAILAT?b@?^?f@AfAC^?B?\\FDBtA^vAXF@~Aj@x@\\xARX@Z@~@ANAPCp@MB?`@MdAYr@w@"
                     },
                     "start_location" : {
                        "lat" : 46.2472557,
                        "lng" : -78.310225
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 179
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 42
                     },
                     "end_location" : {
                        "lat" : 46.0260486,
                        "lng" : -78.48628699999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qn|wGrw`~MUkAIc@G]C[AU?]@S?ABSH[VaA\\cA"
                     },
                     "start_location" : {
                        "lat" : 46.0261733,
                        "lng" : -78.48842449999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 674
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 69
                     },
                     "end_location" : {
                        "lat" : 46.0304325,
                        "lng" : -78.4805152
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ym|wGhj`~M}@s@_@Y{@o@aBkAIGoAmAy@y@{@{@GGo@w@e@o@OSYc@GKk@oBEGUg@OYyAuDIUq@iBSk@M["
                     },
                     "start_location" : {
                        "lat" : 46.0260486,
                        "lng" : -78.48628699999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "230 km",
                  "value" : 229825
               },
               "duration" : {
                  "text" : "3 hours 1 min",
                  "value" : 10846
               },
               "end_address" : "Temagami, ON, Canada",
               "end_location" : {
                  "lat" : 47.0633686,
                  "lng" : -79.7895865
               },
               "start_address" : "Brent, ON K0J 1R0, Canada",
               "start_location" : {
                  "lat" : 46.0304325,
                  "lng" : -78.4805152
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 674
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 59
                     },
                     "end_location" : {
                        "lat" : 46.0260486,
                        "lng" : -78.48628699999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ei}wGff_~MLZRj@p@hBHTxAtDNXTf@DFj@nBFJXb@NRd@n@n@v@FFz@z@x@x@nAlAHF`BjAz@n@^X|@r@"
                     },
                     "start_location" : {
                        "lat" : 46.0304325,
                        "lng" : -78.4805152
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 179
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 46.0261733,
                        "lng" : -78.48842449999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBrent Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ym|wGhj`~M]bAW`AIZCR?@AR?\\@TBZF\\Hb@TjA"
                     },
                     "start_location" : {
                        "lat" : 46.0260486,
                        "lng" : -78.48628699999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "38.0 km",
                        "value" : 38016
                     },
                     "duration" : {
                        "text" : "54 mins",
                        "value" : 3219
                     },
                     "end_location" : {
                        "lat" : 46.2472557,
                        "lng" : -78.310225
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBrent Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qn|wGrw`~Ms@v@eAXa@LC?q@LQBO@_A@[AYAyASy@]_Bk@GAwAYuA_@EC]GC?_@?gABg@@_@?c@?U?M@gAHm@DWFy@NM?W@e@?g@HC@I@QBG?SAa@EQEoAUYG{AWa@QKGo@e@MMGEWMA?UCMAgAG_@CA?SAMCA?OESGCAUMWKOKEEw@i@_@WSMk@e@][YUa@a@e@i@UM_@WUMIG]Og@MKCi@OOCWGICIAWKUIKIKIc@YOGKEWCOCS@G@YL]PC@_@T_@Ra@P]Ng@HQBe@Lg@\\YZEDi@f@QPIHONa@Rc@LC?eANC@YBc@Nc@XYRUTKLKJ[f@ITELI\\?@GVOJGDYJUJmAZe@PkAb@YLcA`@E@y@h@GDWRe@^g@j@IJu@hAg@r@k@f@QNKH_@VKHqA`AA@_@NWJYJSBc@CA?e@Oi@WSGQIOAUEa@Fe@PIDSH]Hu@Vc@Hk@JYBK@WGC?[Q][_@YMIQMQIu@Ow@MKEm@[SKy@_@uAeAm@k@SOm@w@SU[a@KMo@_A_@k@IUUg@CE]{@a@w@_@s@_@w@CKOg@AEQ}@WoAAI_@sAUe@MUY_@Uc@IWCIK_@[_AQw@Se@Sa@i@}@MUESEIGc@?ACe@?M@m@@CDs@F{@Di@HcAReCNkADUBS@_@@MCq@?e@As@?[Cy@?Q?W@w@DcAFs@@EBq@@C?_ACc@?GEi@YaBCSI{@ESQiAEUS{@M_@Sg@Ye@AAg@o@_@o@Wa@EKWg@?A]w@MUUe@AAK_@CMEQE]Ga@?OCu@EeAGgA?ICk@?o@Bq@@K@URq@To@P]LW@EPc@BGLe@DODe@Hy@Bq@?o@Ci@Cc@SeA]aA_@q@A?a@i@We@YcACIS{@_@gAACQ]EGIKQSGEe@Ou@Mg@I_@Ga@GCAYKGEc@[YYy@{@AAuAyA[]]_@oCyC]]EES[w@cAm@y@[s@yAaDk@qAm@oAk@qAAAy@w@y@{@wBsB]]EEa@g@c@}@AAW]A?]Ue@FI@WFy@RM@[Di@@c@Gw@MuAWc@IMCq@]AAU]ECOOg@Mm@GgAOKAUIOCQIQI_@c@_@[e@OGAYKW[Ma@Ca@Aa@Fg@@GFmAAYCg@AIGq@CUSkAMo@Kq@AEWyAACW{AMo@Y_BAIUwAKq@CUGY]{BEWKo@Om@K]EMQa@EEYUCC[Qe@WC?]OKE{ACC?c@Ac@?E?]Ag@A[OAAYYCCw@}@[_@MQKQc@{@KQYc@Yc@QYaAeAa@OKCW?K?WHIBWLMFSFa@Na@NKDUHa@NA?W@I?Q?QGCAMWCKGQE[AEEm@ACBm@@s@?]GiACa@W{@AGYc@]_@MCMC]ICAICSUS_@CGQm@K[AQ?s@As@?o@Du@LeBDw@P_BNyA?IBs@?KAg@AYG{@COMy@Oc@EKQYKQ_@Q[KYCc@GE?_AMgAOIAs@MGCQEQGGC_@g@[eAOo@I[Q}@AAYg@EIUQWSg@]MIMSKOKUMUQmAGk@EQE]AISw@IYEOWc@QYOWk@_@CA]Cc@CE?]FeATc@HiB^SDM@k@Fq@LMB[JE@WFIFQLKLGFOZQh@A@Ql@GPIXEPI\\ADQ^A@MJQBOBe@DQCc@GGAYKKGk@S_@UMA[AG@eAJc@Dc@Be@D[EYMIKEGS][a@AAg@c@SKSMcAi@KCeAWGAYM_@Qa@o@]s@CSCYCu@DU@ORW^Ur@KRAd@Eh@I|As@\\UDEd@i@Pu@DKT{@Dc@Do@?AHmATsAJa@H]DQNm@?EHk@BUJ}@FcA?G@k@DoA@UDy@Cm@Ce@AKMsAAQIo@EY[_A]_@EEYSMKQGYIGAc@Gc@G[EGAgAKGAYHc@Ja@JSDOBa@Hc@HC?iAP[FeATc@Hc@HIBWLaAd@E@}@Zc@La@LcA\\SFMH[RE@_@TKHUBE@[CA?[KECOMUWQYCEU_@]{AOo@Om@Om@Mi@?EWaBIc@AKIq@EWEYEQMWUg@ACUc@S_@Wq@GQq@e@_@WQMMGa@QYKkAMiA]_@KAA][{@w@][_@[][][{@w@yAuA][w@q@EE[][]i@g@_@a@OOUYWYIKOOKQOSm@{@OYWg@w@{AK[Sk@[}@GY[_B?AGo@Gc@IaAAGIaAGWKk@Um@ISe@{@]m@S[MUc@s@We@Ye@We@q@iAi@_AWa@oAiBYa@ACUa@Ye@We@AAUe@[q@Q]Ug@KSKQYc@GKk@c@g@a@CCU[U[o@_AGOSk@ISIU]cAEUW_BKgAQoAQsAAOMeB?EQwC?m@?s@?}C?q@AiBE_AQ{@IQSk@?Ao@cBMWSc@Sq@CKIe@Ka@AKAM?c@Bs@B_ANyAPcBHq@@KHuAFw@?GBgAOeAGe@Uw@EMK]e@yAACOi@Eo@Go@?CAs@?s@C{CAs@CmEAeAAa@I}HGwB?cABs@N{@@IDm@LoADcA@S@m@AaACUGs@W_BKq@WsBE_@Is@McBAEWuAOs@AII_AGyA?g@IcGCwBEa@Ee@Kk@W{@CO]k@]i@GMEOKe@UeAGeAIcAC_@Cs@GgBGiBGcB?GGiAMs@EMe@gAo@}A?AS_AC_@AW@qALcALcADy@?CCuAEcA?IQaAUeAUeA_@mAg@eAGMK[Oe@Ww@Ki@CO@_A?W@gB@[Bg@Bk@@o@Em@AOCa@KqBMyAe@}Fc@{EWwCQkBEk@Gq@Gs@Gy@Gi@Gq@Gm@Ay@AaA?c@?cCGkACa@GcACu@Io@Iq@Iq@Y_BO{@Ic@Mo@Mo@Mo@ESYgAOo@q@iCOm@Om@A?_@{Ae@gBM_@g@uAEOQUe@q@a@k@IQGSES?AE]S_A]_BEQI[Qk@]mAEKSk@Qk@MWQe@IUAGI_@Io@Ce@Ak@?sA?{@@k@@s@@MRyAJi@Jg@Ji@BMH[DQ?ABc@AMCOWmAUi@AAU]e@Kc@Ka@KgBa@A?a@MMEQIAAIIIO]o@Wg@Sk@Qk@Si@u@yBWu@y@yBAEUi@e@cA[w@Sg@AAQa@CEGSEY?AC_@Cy@?KAwC?CCa@K{@AEOm@Oo@Om@]}AK_@EKSk@Si@[w@]kAGOE[Ea@?S?W@[@OFqF?g@@K@m@?u@?CEk@Ek@EKGSMk@G_@Gc@E_A?EEm@?O?sBA_A?IAs@CgBG_BE[AGGg@Sm@Qk@Oa@Ui@M]CYCQCi@?g@?C@WF]H[H[PYFK`@i@v@y@LQbAqA`@q@Vq@HUDWLi@P_DBg@NoBB[JsBAa@Ea@EWOa@AAWc@[g@w@y@a@S]QaAo@?A][QO}@iA_@i@Yc@]i@oAyAOOMK][YUEE_@WCAcB]CA]Ma@Qa@QcAa@OGQGa@KA?OIKIWYGIYa@_@YQMMGEC]I]EC?Y@IBc@L_@ROHOJQJMJKJORMNg@t@Yb@Y`@CBU^KNQL]Xa@PSFk@d@_Ar@IFq@n@URIB_@Pa@PE@]Ha@H{@@K?c@ACA_@Ka@Ma@OEA[Q]WA?wAwAsAcB[_@k@u@i@g@MKs@[y@]IAc@Ac@AE?a@Fa@Ni@XQP[`@CDm@bAWb@o@fAa@\\EDe@NW@K@a@?WOQIe@a@EGYe@Ye@[YUSIEYQEAc@Gc@Bc@Dc@BeAFA@c@Ba@Bc@Bc@Di@B]D_@BC@a@LIBWJE@WXC@_@r@Wl@Un@Mp@ELSj@e@vA_@hAm@x@sB~@A@_@DC@[BG?S?[Ba@JULCBSTEBuAzAa@Ps@XiADOCqAWwAu@cCqAAA]Sa@SSM{@I{@TUFIH}@j@ABk@r@i@j@[^[\\KJSN]X_@X]XIHWDKBWAc@AmAE]FeANSDyB`@KBOHIHOTa@r@g@jAk@nAi@lAW`@CDONURQFGBIBUBC?o@@UE_AQGACAKBMFMB{@Xa@LODQHa@LmAb@UPMVYh@GLWf@m@nAS`@ADWd@Wd@Wf@U^CB[^IJSJQDS?A?a@AOAQIcAe@iBKG?[B]DE@MDOFKH[L_@R]RSJ[PSFKBWDC?eBFc@@s@Bk@?K?c@Ac@Gc@Gc@Ga@Gc@EqDg@c@Ac@AE?]FE?[NGB{@z@u@l@WTE?c@?A?a@EkBMc@CkBMiBMc@EyAKu@Cc@Ac@Cc@Ay@EMDUFwBpAWF_@LA?c@@C?_@Eo@Gy@Sa@IKCUMeCmAa@ScBy@aAe@IEQAWCSBM@C?GBEBGDYPYPKDI@Y?cAEeAEc@A}@CIASEa@KWOUQYQECSKYE{@Cc@AKAu@BODMHg@b@]ZMJi@h@C@QNMFA?a@Ns@POFa@PWJGHGFSTUXEF]d@a@ZYRKHSN}AhA]VA?]Z[TCBUXED[^GHKLGDA@IDKBK@KBU@I?YBgADYBI@C?SFIDA@YNEBUPGF]ZA@]XQNKJYTCBa@RUNk@X_@Ra@RID_@Rq@b@SNY\\OTGHc@l@c@bAM^u@fCa@xAu@dCK\\gBfDgAtBi@bAaBfDMXe@j@a@d@y@j@YPaC~@]JeA`@gCbAa@NMDQN_@V_@V}AhAw@h@gA`A[Ti@Z{@VA?a@BE?]@Q@s@GA?e@Gu@Ko@Wa@OWKw@k@q@]a@Q?Aa@Ic@I[Gc@EE?c@AC?gAFcAPeARk@JYDkBViBVoAP_@FaABG?YM]]CCq@eAo@iAiAqBi@_AGIcA_BIKi@u@MI_@UOKe@OM?c@@_@@aAPGDa@Na@NGBYJg@L_@?A?g@Km@a@c@o@KMa@aASg@Is@Gq@CSC{C?gC?s@?c@BwB@gB?i@?GSeBAOyA}DGEy@{@iAiASM{AoA_@Y][_@Yc@]mA}Aw@cAKOOMyAwAaBaB]WcBuAU_@s@mAOW{AkCGE_@WGEYIa@KA?c@Ia@Gg@I_@G[EeAWc@Ka@KGCYK[KEC_@W_@WKISOe@_@UWKIQS[_@[_@GIUS][][][YWCC_@W_@WSOKI]Y_@[GEO]We@i@aAEMSi@Ui@M[EMSk@GQOQ]_@AAu@QMAa@AA?a@DU@MDc@JODQFa@La@Lc@La@Na@Ls@R_@DU@K?]@a@E_@Ia@MGCWQkBoAg@i@OU[a@[a@Ya@sAcBgAyAc@c@g@g@WS]]][MMW[OWYc@CCa@o@{@sAEIQ[GGKOQIaAi@YC_@?YNqApA[\\qApAa@f@sAbBcBxBc@l@ILSNMLa@ZMFaA`@c@T_@Ra@ReExBC@_@HQDO@g@@aAIg@Ki@g@_BwGc@wBI[a@eBYs@CGe@eAk@cAg@e@GGY]cEqEOOeCaCy@w@a@SSK_@Kg@Ke@EIAmBG{Dm@SM_@[aAME?}A]k@S{@YICeAW_Bc@i@QsBm@{Ag@YIIAqCM_@Bc@Bc@BA?gABa@Fc@FYDG?S?OAMAUGc@Ka@KQG"
                     },
                     "start_location" : {
                        "lat" : 46.0261733,
                        "lng" : -78.48842449999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "32.2 km",
                        "value" : 32218
                     },
                     "duration" : {
                        "text" : "22 mins",
                        "value" : 1297
                     },
                     "end_location" : {
                        "lat" : 46.3174344,
                        "lng" : -78.70205679999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHwy 17\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ktgyGz}}|MU~@Oh@ER[nAQl@[hA_@xAGPQl@Oj@c@zAy@bCeA|CeApCKXq@dBm@|AITEHe@dAEJk@pAUf@Q`@EFaAxBGL_CdFq@zAm@pAe@dAk@lAcAzBUh@cAxBUf@?@Uf@q@|AGL_AjCADSj@Qn@Oh@m@~B_@dBMt@SfASxAYdCEb@ANU`CUnCUnCYhCAH[jC?@i@rDy@lEi@jCQr@[rAc@dBK\\EL]nA}@nCAFOb@[z@e@nAsBfFCJsCdHIPKV_A|B_A|BSh@A@}@zBi@rAUh@iBlEeDdI{ApDEJe@dAk@rAGP}@rBe@hAk@pAi@rAUh@KV_BvDk@pAITKR{@rBo@xAwAdDCFQ`@i@pAA?Sh@Yp@aA|Ba@`Ae@hAs@bBQ`@m@xAA@Sh@Uh@KTs@dBUh@k@rAi@pAUh@w@lBGNaAzBSh@Uh@GL_BzDADk@rAoAvCgDfIu@fBUh@c@dAeAhCUh@CF_EpJaAbCQ^CHm@xAiAvCsBzE{@nB{@nBqB|EkBnE_AzBcAdCQ`@Sh@INw@jBu@jBy@lB{@rB?@Sf@]x@u@fBm@xAO^]z@gBfEc@fAm@`BQj@Sl@GRa@~A[~AQbAQ|AKjACn@Ev@Ab@Cp@CzAC~@?l@EjBC|AIbCK~A?@QpBMhA]jC_@tBG`@CN[fB]rBSdAKn@Y|AETQbA[vBS`BG|@Ep@G~A?FAr@?r@?h@@xADjAPnELtCJlBDn@JrBTrFBr@HfB@P@^Dr@Br@@LFvADr@?JFzABd@@LLrCFbAb@pKNxCPnENfCDr@NxCDr@NtCT|Ev@tP\\hIFzADr@FrAJ|BD|@Bd@X`GPnDLrCN~CHpADx@F`AFfA@H^~FDb@NzBDj@NnBPzBPlCJnAJzAVbD?HPrBD\\Dn@XrDxAxR\\jEZfE@BZjEP~BJjABZLhBN~ATbCJpBD`@BZRdCRpCL`BJlAZ~EPrB@LDr@@RR~BPlCN`B^tFR`CFr@PrBX|Dl@nHDh@?H^jEb@|FVrCt@rK@FLbBJzAD~@@TD`CDbB@F@tB?rBIhFAr@ChA?\\Cr@Ah@AHEpBI~DKvECtAClAM`EAlAOfIAHS~II`CGvAARA^APK`CSbFKtBGbAMhBQhCANQlBEh@E`@APi@|FSbBOpAANIp@In@i@|De@nDG`@Kn@In@_@|B]nB[hB[|ACJIb@g@jCOr@Mn@GTa@vBA@w@|Dk@nCcBlIOn@_ArEWrAeCfMMn@u@vDAFMn@k@lCi@nCgAlFsB|JMl@On@Mn@Mn@Mn@]|AMn@[~A]~AMl@]~Ai@nCy@|DuA|GOn@i@lCk@nCMn@]|AMn@Or@Kj@On@i@lCqCzMOn@Mn@[|AWhAa@tB[|AOn@wDlRk@nC_Khg@WfA_@fB[~AOn@kExSMl@{@|DgAlFeBlIiL`j@gGvYy@|DOn@gBrI}@dEwA|GMn@k@lCMn@y@|DMn@On@[~AeBjIOn@y@|DMn@Mn@On@Ml@sB|J]|AcClLMl@cClLMl@Mn@k@nCMl@k@nCEPUlAWzAADU~A?@E`@E`@C`@KpA?RAr@Ar@CfBAr@Ar@?r@EzCAr@EzCAr@EnEAf@MdLQtQCfBIvHAfBIvHAr@QzP?r@QzPCzCE|CCzCUvUEnEC~BCnAGbGEnECzCAr@?PGpFMjJAfBGnE_@f\\IbGQfOAr@EzCAfBO~KUjJGzCMlEGzCCr@ObGAr@q@|XIzCAp@KdE[rEaAfOUlDw@`O[tFW~DKdBGr@KdBYlEYjEuArT_@dFKtAK`Aa@hEk@`GgAbMO`B[xCk@zFGr@[tCGr@SpBi@lFGr@Ip@ObBQdBQbBQdBGp@s@nHIp@a@hEIp@mBxR_AvJc@hEGr@QbBu@nHGp@k@zF[|CGt@aBpKm@nGIr@YtCYvCI|@U~BGb@Ip@CXQjAWpAOn@AF[vAKd@CRI`@If@CTCVMnAIzFG`@QvBUhCObBYxC_@hEa@lEGp@YvCOdBIp@OdBSlCIdAGx@Gp@Gr@UvCKp@Ij@"
                     },
                     "start_location" : {
                        "lat" : 46.2472557,
                        "lng" : -78.310225
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "58.8 km",
                        "value" : 58753
                     },
                     "duration" : {
                        "text" : "38 mins",
                        "value" : 2293
                     },
                     "end_location" : {
                        "lat" : 46.3050694,
                        "lng" : -79.4284217
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHwy 17\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "}juyGznj_NA??@ABA@?@AB?@AB?B?@?B?B?@?B?B?@@B?@@B?@@B@@@@?@@@@@@@@@@?B@@?@@B?BA@?@?@A@?@?@ABADAD?H?J?^D^Pb@PlBj@jCv@hCv@hBh@dAZvA`@bFzAlA`@B@NDRJLFLHLLHJFFJPHRFTFb@PpAZnDVtCZdDJz@L~@Jx@X`BR~AZrB@FRz@HXV|@p@zBrApFr@jC^zAlDdMn@|Bp@dChAbEf@lBNh@Rt@^rAPp@@FFZHf@Hf@Fr@Fz@@N?F@T?T?L@j@?lAA~@AxAA`CAbEAtDC|EA|CCbGAr@?p@At@CbGAdB?t@Ar@CvH?`@APAnE?@A^AxC?T?\\ATAxDAfB?R?@A\\?r@AzCA`BAr@?fBAr@AhBIxT?lC@nABfAB~@Bb@@V@ZBf@@HFr@H|@J~@Hn@fCvPZpBrA~IlBpMZtBVxABNNx@XjAVfAJ`@Nh@ZbAFRNf@^~@Pd@\\r@l@nAj@bAbAdBxAbC|BtDXb@Vb@p@fAfBtCVb@|BtD~BzDXb@Xd@p@fAXd@jEdHlEjH`BlCXb@fBtChAjBXb@jAlBXd@dAdBDFr@fAXd@v@nApCvEdAfB`@v@P\\bAfC@?Xx@Z~@BFV|@^xATz@\\~Ad@tCRvALhAJpAF`AFx@Br@@\\@T@t@@jA@X@r@AbAAx@ExD[nVAb@KrGAr@ItFG|EA~@E~DAt@AxA?bA?T?jA?DBnADzAb@xKx@pSBr@Bb@DbAPlEdA|XBr@@VHdBN|DP`DPzBXdDTzBL`AJx@NfATxAHh@hAvHTvAtAvIXdBJp@b@pC`@jCXhBn@fEJl@Jn@j@lDv@`FLt@J|@Fh@D`@@JDn@Dj@D|@@V@RBjABnAVbL@r@TlKRzJBr@FzC@r@JnEd@tU@r@HzCBfBBr@HnET|KBr@FzCb@`THnED~ADnBJpFJtEBlA@TBxABfA@h@J|EFpD@\\@r@FzCXpMBhA?\\HzCFzCFtC?DDfBT|KFrC?FFzCFzCLzFH`D@h@HvBJtCr@`Or@`On@~MP|DDr@JbCRtEFnA@`@?R@X@l@?d@?r@?p@Ar@Cr@Cr@Cp@E^ARAJAJALAJCXAD?DCJAJAJCLAJEVAFCNEXS|@Qt@I^U`AIZ_@zAOl@qAfFOl@Ql@Ol@K`@U`AKf@A?Kj@Mj@AFETKf@G^EX[|B_@rCKp@Ip@mBnNKn@uAlKKp@In@k@fEKn@i@fEa@rCw@vFe@hDYrBM|@Kx@Gh@EVEd@Ed@Gr@El@Ct@EhAAhA?h@?b@@v@Bz@@n@Bn@FjAH|AHtAFrAFpAPnDNxC?HTnE`@jINjDDr@NxCBr@RxD@XFbAFl@Fl@BNVvBLt@X|ALr@DTV`BDXVxAd@xCLp@DT?FPbATtAH`@^xBDVN`A\\rBf@~CJn@^zBBP`@dCvAtIJp@V`Bd@pCJn@d@pCJp@`DxRd@rC`FvZ|@rFLn@fCxO`@`CPfAHh@r@`E~@rFJn@X`BJn@d@nCr@`EJn@X`BJn@r@bEJn@r@`Ep@bE@@dAbHV`BJp@Jn@Hp@z@tFJn@Jp@BNRpAJx@Jf@Jp@Hn@ZvBB\\XvD?PHhBFdBJfC@Jd@zFBJV|AX`BLx@Jd@Nn@Ln@Ll@z@|Dx@|Dr@bDFVLn@\\zANp@Nl@r@fD\\~AvArGPz@XtALn@Nx@RxAHh@NtA?DNbCJ|BD~B@TDxADbBBr@@r@DfBBhADpAD|AN`EFfA@TR~C@TNbCFlABVJdB@NZnFFr@PxCDr@VjEDr@n@xK\\~FVlEh@dJXlE\\~FDr@J`Bd@vHRxCj@dJp@~Kn@xKJdBDr@JzARbDDr@DjAFxA@f@@bB?v@?r@?@EdCEfACr@C\\QxBEl@ADWtBE\\Ih@AF[~AKn@Mn@u@rDkArFm@hDCNETUjBO|ACZCTC\\K`BIzB?DAZIrCGdCAZAVAZGdBCt@?VAXAVCj@Ad@ATAr@EnAEjAAr@AZAVEdBA\\GfB?TQbGAZAVIxCA\\ATKnEAZAVQxGE`BCpAAx@EtAIbCEvAC~@A`BAfBAl@@jC@bC?JAbD@n@?dC?R?rC?`B?N?p@@lC?H@DB~ABx@Br@N|C@`@@LL|B?NLrBTpF@DBl@HdBBr@@LBd@H~ALxCJlBHfBDp@VlFJ`CRzFDr@?@?xBA^?r@A|@C|AANA`@C~@EzACp@K|CAPA^Cr@EvAKnCAZEfAEbAALGr@?D]~DWzBKx@WnBu@rFWnBIp@CLa@bDMfA[zB_@rCi@dEEXIp@OfAOlACPE^UfBIj@QnAK|@?BIx@Ed@Eh@AHEl@El@?HC\\E`AEnBEbB?zA@hCJzD@r@LbGFpB@h@@r@DdBDrBNvF?F?rBArA?FEhBG|AAZMxBO`BY~B_@|B?@[dBw@tDqAzF}AbHgCfLqArF]|AOl@On@{@zDEPm@fCMl@m@vCUxAGZUjBObBIbBCdAAX?X?rAB`BDbBTnDDx@Fp@JfBJpARxC@RRvC@PJrAFz@NzA@LTrBV`BLz@Pz@VrANl@BPDPl@zCFRBL^lB`@pBBNBJl@xCXtAd@`C@@@Hf@bCBJLn@@Hb@vB?DBFRpAN~@Fb@@FX`Cn@pGPhBDb@b@fEz@bJBLBXb@rE@LPbBl@nGLbAH~@d@pEBZBL^zDBL@Jd@`Ff@`FFf@Dd@@JRpBl@~F@RBLRtBBRHdANdBDh@JvABx@B~@Bn@@xAB`A@`AH~GJdK?\\DbE?H@r@@fB@jA@nADzC@pB@tADnD@rC?hB?dBE|AG`BOfBANYzBCHc@pCADi@~CQlAO~@[dCAHOhBKvACVIdBEbBAlAExBA^CfB?L?d@Ar@?VE~DCrCAr@AfBCfB?r@AfAA^C~BAZ?r@KjJEzCIjJAr@KjJ?h@GlGGnEK~K?R?^AbA?b@?`A@|A@FFnBHtA?LJvA@HNrA`@bDv@zGL`A@BFl@f@fEFp@TnBFd@\\tCHp@PdBHp@NlABTHp@Jn@TpBZfCHp@\\tCHp@BPb@zDV`CXrCJxAFjA@NT|G@j@FdBBr@^zMJ~DHdCH`CBr@@PBfB@`@BbA?x@AzA?jB?d@An@CjB?JAf@ErAEdAEdAA`@Er@Cl@SdDSpCe@fG_@hFm@bIw@dKYvDWjDe@rGKpAQdCg@|GKxAGp@OdBMdBAP[xDKlAAVGp@MdBEb@Q|BK|AMvBIrAEr@InAO|B?FOjCSnDMzBOjBOlBIdAC^OxBC\\IdAW|DStCMlBEh@MxAAJGr@G|@Gd@Gr@MtAQtBCb@KdBEz@?DAj@At@CnDAnBApA?r@?TAzAA|AAr@?@CdF?ZAr@A~@?zAAr@CtEA`B?r@MnP?~@Ar@?h@CdD?r@?TAxD?^AR?hDCzA?P?`@AhBCpCCtC?zAErDAnCInKAfDABAfBAr@?BCbBAd@GnCMbDQdD?BEr@IxAM~AMtAO|AQxAIz@[fC?BIp@g@fEeA|I]tCIp@]tCIp@OvAk@rEIp@Kz@QxAIp@g@fEWrBWvB_@bDGf@UlB_@tCMhAiAvJ]tCSbBIp@cA|IeA|IW~BETg@fEAJg@fEGd@_@tCSbB}@jHOrAWpBg@vDw@jG]pCUdBi@fEIp@i@hEc@fDWzB}@lHY`BMrASbBU|BOhAK~@WtBG^Ij@SfBSzAAHQ`BYpBGd@Q~AUfBIr@a@fDY`CGd@AJSbBIp@It@S~AIp@Il@c@rDMfA]lCUjBQ~AUfBY|Bc@lDAHGf@Y`CMdAKz@[jCIp@Gh@a@hD_@tCK|@a@fDm@|Ek@pEi@jEOvAGX?BQxAc@nDKz@{@bH]vCS`Be@`Es@`GUjBWtB{@fHOtAk@vEa@`DSjBMbAQrAQtASfBSjBSbBIp@EVCXUbBCRkAzJ[fCY|BEb@Q~A[`COhAGh@AFIp@QzASbBGb@Gb@M|@Kh@Kj@S~@_@|AQp@U`AK\\Kh@[nAa@hBo@lCEP}@lDuAlFa@|Ae@lBGTs@hCy@`DOl@aAxDeEhPqAbFq@lCq@jCaAvDU`A}A`G_@zAQn@K`@eAbEaAxDoA~EeBzGw@`Dm@zBaAzDaAxDMb@_@vAa@tAUv@Qf@Qf@Un@Ul@ITQb@CDSj@Yp@c@jAyArDUp@Wp@Sr@CJOh@Md@?@Mj@?@Kd@Q`AGh@Gb@MdAK~AC^Ch@A\\?FA\\?LA`@?PAF?X?X?ZBbA?^@RDdB@r@@THxDDfB@b@@N\\tNFvCJnEJnEJlENvF@~@LrEFzCHzC@r@HzCD~BFbCFlCBr@@n@DhBDvA@NFzCHvDBhA@nA@R?T?l@?l@AbAAdACz@AZIbBAXC`@IbA?@O~Aa@lEgAxL]xDAN_@jEGp@QdB_@hEGr@Gp@Gp@y@bJa@hEAJGr@S~BEb@Gj@QrBUbCc@|Fs@pIQ|BKVABABOlBEr@_@jFMbA"
                     },
                     "start_location" : {
                        "lat" : 46.3174344,
                        "lng" : -78.70205679999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.3 km",
                        "value" : 4307
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 328
                     },
                     "end_location" : {
                        "lat" : 46.3292721,
                        "lng" : -79.46515509999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eON-11\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-17\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNorth Bay\u003c/b\u003e and merge onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHwy 17\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-11 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-17\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "u}ryGrjxcNk@nEUxAQfAGXKh@UbAU`AUx@W~@Y~@Up@CD]bAYp@Sf@GTEXw@`BsBlEsDvHm@pA_BdDm@rAc@`A]t@ABAB?Ry@fBcAvBgA`C_ArB{@jBMTKTKPINMRABUZSXQPQPSRYTYPKDIDSFSHGBkAVc@D]@_@@k@?_A?qCCE?uBAaA?wEEkBA}@@W@WISAM@_@@SD_@LOFODi@Tc@Vg@ZYRA?A@KTqCzBsAbA]X}AnAwFpEyEvD{AlA_@Z?@q@n@m@j@c@d@m@t@m@x@_@h@m@bA}@~Aw@bB]z@ABOb@CFSf@]bAQp@Wz@Qp@WjAQx@Ov@O`AKx@EXIl@MrAIv@KlAEr@a@nFs@pKi@pHQfCUxCm@jJMTEJCPQdD"
                     },
                     "start_location" : {
                        "lat" : 46.3050694,
                        "lng" : -79.4284217
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "95.7 km",
                        "value" : 95678
                     },
                     "duration" : {
                        "text" : "1 hour 0 mins",
                        "value" : 3621
                     },
                     "end_location" : {
                        "lat" : 47.0633686,
                        "lng" : -79.7895865
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-11 N\u003c/b\u003e (signs for \u003cb\u003eTimmins\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCochrane\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}twyGfp_dN[nAETCFCFCHCFA?CFCDEBCBEBEBKDMBA@q@P[?aB?eA?}CK_CG}AGq@AeA?k@?uBLwC\\k@LUFWHIBOF{An@WLa@PcAb@_@P_A`@cBt@a@Pa@Ra@PKDqAj@uKxEgAf@cAb@iAd@EDCDCDENe@TQHa@PcAd@SJKDa@Pi@T{@`@_@Pa@R_@PA?e@Pg@PWFc@J[FOBQ@Q@Y@W@a@?Q?UAYAq@I_Dg@UEkAWkAUuFgAIA]IgCg@IAa@IsE}@YGGAkXsFe@K}AYGCc@Ik@KgGoAiB_@GAuE_AkCg@YEgB]ICiE}@{A[qCi@_AQSEyAS_AKoAEgC?uB?gA?gA?kB?{D?cB@gA?M?U?]?]?K?kBAyA?i@@w@?{H@c@?c@?Y?gA?g@?sH?{D@aC?c@?A?qD@_@?w@?gKB_B@cD?gA?m@?_A?wD@wE?eB?_C?qGAyCAsCAU?y@?uAAq@AkB?}A?kB?sA?{CAsE?M?oB?s@?wAAeD?sE?eB?mBAuA?}D@cDAgFA{C?O?gA@gDCmD?kB?cB@qA?eG@iD?K?uBByBBO?S?yDBgC@M?y@AgA?wA?wCA{C?c@?kB?c@?C?gBAc@?U?uA@c@?_@?g@?c@?iB@A?kC@}A?Q?mA?aBBwB?c@?cB?G?sE?iC?qA?wA?w@@aB?cB@S?cA?q@@uC?s@@eC?uA?eB@qD?uA?i@BW@yAHqANuAVOBg@JkDr@kE|@sBb@yAZmB`@oAVuLbCyLfCc@H[Hi@Ja@HwFhAa@HOD_Ex@QDq@LmCj@a@HgATa@Hc@JoDt@a@HoDt@mGpA}Dv@kCj@G@[FgB^gATa@HoDt@c@HiB^a@JgARgB^qIdB_Ez@gB^kCj@kB^{AZ{@P_ATIBs@ROF]Lg@Ri@Vu@^o@\\yBjA_@Rw@`@mBbA}Av@sLhGEB}@d@}@d@g@T}@`@a@Nk@Rw@Tk@Ns@PqAXe@LkCn@e@JuA\\_B^gBb@sAZ_FhAuA\\}A\\aB`@i@La@JqBf@kFnAc@JKBcCj@]HkCn@c@LA?mDx@a@HWFwCr@a@Jc@J_@H{@XKBy@ZIBQHOF_@RA?i@Xq@^EDUNID_@XSNi@b@QLMHk@d@QL{DvC_@XyAfAcAv@]X}AlA_@X}@p@_@X_@Z]V]X}@t@k@`@w@n@}AlA{DxC_@X_@Xg@^k@d@{AtAwAhAcAv@_@X}@p@_@XEDWRe@`@WTYTw@x@EF[`@ML]d@[f@]j@[j@EF]v@Uj@Sd@Un@Kb@W~@Qr@WhASjAKn@c@rCKn@UtA[nBKn@aAjGGb@iAdH_@hC}@tFo@zDc@rCKp@Kn@Kp@e@pCSrAUfAYhAUv@Qj@GTk@`BYv@e@jACFo@pAq@rAU\\Wd@Yd@cBrCc@t@g@x@Yd@}BvDYd@OVeDjFgBtCSZEH}BxDOTILYd@kB~CmB~CeCfEEFS\\y@rAQZk@|@w@vAWb@?@Yd@Wb@s@jAIPoArBc@r@oDbGkAlBYd@QV_@p@Yb@kAnBYd@cBrCSZEF_CxDWb@Yd@o@bA[h@sD`GWb@IL{AfCkAnBWb@eBtCkAnBkAnBoDbGyAbCKPq@hAq@jAWb@_A|AKP}BzDU`@sDfGWd@Yb@s@hAWd@c@p@eCnEaEhHsAxBm@`Aw@pA_BfCGHmAjBYb@q@dAeBvCYd@CDS\\q@jAk@`AEHWd@Wf@aAdBGJ}A|CGLe@`AUh@a@x@c@|@aCjFq@xAUf@kCxFi@hAWf@Uh@m@nAm@nAy@dBKPgCrF_@v@MVUf@m@pAEFy@fBCHk@lAw@`Bq@vAKNWf@CFq@hAS\\Yb@EHSZm@`AoAvBYb@_A|A}@zAYb@Yd@q@hAm@bAcC~Dq@hAq@hAgAfBcFnIoAtBYb@q@jAq@hAYb@_@l@_BjCkAnBWb@kAnBA@W`@}P|Xe@v@Yb@Yd@Wb@kAnBYb@Yd@eBrC]l@SZkAlBYd@Wd@s@hA}BxDYb@{@vAOV{BxD}BxDYd@wC|Eq@jAKP_A|AoDbGYb@q@jAYb@Wd@Yd@Yb@q@hAkAnBWd@s@hAoDbGeBtCWb@Yd@Yd@Wb@s@hAWd@qDbG_BnC{CbFsCxECDYd@Wb@q@jAYb@U^gBxCYd@m@bACDYd@{FrJq@hAYd@U^u@nA}BxDuElHi@`AWd@a@v@{@fBYl@qA`DUh@_CzFUh@_A|BuAdD_A|B{LbZ}AvDSh@q@~AOZm@pAu@tAo@bAU^EFUZKNyCtD[^uA`B[^[`@[^[`@[^[^kCbD[^sA`Bw@`AoBbC[^[^]`@w@~@oBbCsA`B[^[`@sA`B[^iBxBsA`B[`@sA`B[^w@`AgCzCsBfCw@`A]`@w@`AsA`BMLMPiDdEq@z@STwCpD{@bAs@v@c@d@CBUTg@b@k@d@y@n@QL]VeAj@IByBz@MDeAXcAVaBVkAJK@{ABI?u@?yACc@A_ACsBGS?OAsDCcBBoAHa@Dy@Hq@L[FkA\\e@Lc@PcA`@_Ad@e@X_@RgAv@gA|@ML]Zk@f@kAhAmAlAiHdH]Z{@z@e@d@{@x@{@x@]Z]\\[\\yAtAoFhF_@\\eAbAo@l@KHSN[VA?_BjAA@}@j@_@V_@T_@Va@T_BdA_@VaIdFaBdAaDrBeElCcNzIiBjAmOlJcHjE_@TcHjEg@Za@Zg@`@{@v@k@l@c@h@ORW\\kA`BaA|A}AjCo@fAmEjHw@rA_BjCiAnBYd@iEhHWd@kAnBaFpIYb@cBtCkAnBYd@kAnBWd@}BxDYd@cBtCiAjBABYb@gEjHs@hA{FtJyAdC_FjI_A|AcBtCuA`CkKlQiAnBeBtC_JjO}BzDuC`FoDbGqDdGy@rAkAnBcA`BeBpCeFjHoAbBkBhC[`@}DnFkBfCcDlEgCjDu@dAY`@}DnFqAdBu@dA[`@oGvIu@bA[`@wEpGgJdMqAhBoAfBY`@cB~Bc@j@aDnEmBhCoAdB[`@qAfBY`@iDvESXoBbCY`@c@j@q@t@uBhCs@v@[^aDpDeCtCo@r@[^[`@gBrBm@r@aO|P[\\mC~Cy@~@OPg@n@UXy@fAuAjBoH|LYd@i@z@oB|CU^wBjDeDjFiBxC{@tAcA~AaCtDaAzAqBbD[d@Wb@Yb@iBvCm@|@aCtDq@hAw@lAcCtDo@`A[b@Ub@Yd@Wd@i@|@{@vAWd@g@v@qBbDYd@kAlBEFSZYd@Yb@EHQViCbEk@|@KPmChEUZqAtBmAlB}AbC}BpD}@rA}BjDkC|Ds@bA[d@QXGHOTw@jAgCxDm@z@yAxBg@x@mAhB[d@Y`@U\\]h@[b@_@j@SZmAjBQVmAlBGJY`@s@fAY`@A@s@dAYb@IJk@x@OVMNyAzBWb@g@r@UZ_@h@q@bAk@z@_@l@c@x@m@dAAD}AjC_@n@aBxC_@r@qBpDYd@Wd@[j@wBvDa@r@a@p@_@p@{AfCGLW`@ABS\\a@r@Sb@w@xAOVWd@GJa@x@]n@Wd@?@e@v@c@v@Yb@MRqA|B[l@Q^EDWf@sAbCKTS\\EHaBtC_@p@QZWd@q@jAMPe@v@CFS\\OVGLYd@Ub@Yh@OVGLYd@o@jAYd@]p@k@~@iApBw@tAQ\\}AtCs@pAq@hAU`@[f@w@nA_@j@e@p@EDQVYZY\\[Zw@t@SRUPIHKHQNC@[TSPKFOJmAr@C@_@RULKDQHo@\\a@Ty@`@iAl@]PiEzBsBdAQHcCpAgB|@}Az@a@R_Bz@c@Ta@RcCpAa@TaAf@_@Ra@T_@Ra@Ra@R_@R]ReB|@aAh@a@TC@oAp@o@^EBy@f@q@`@wA|@sBxAUP_BfAcChB_@X}AhAuB|A_@X}BbBaBjAQLKF_@TOJULk@ZOHQHOHa@PUJSF}@XC@]Hk@LgATYBSDO@YB}@JQ@c@DWBqANQBQDc@H_@FqA^o@RKDa@P[NQFYNOHSJg@ZIDw@d@_@Tm@`@QJaBbA_Aj@A?]VIDc@ZqA~@iChBsA|@qA|@gCfBc@ZoFrD_C`B_C`BKH_G|Ds@f@KHSL{BzAu@f@gEtCsGnEwBxA_@VmAz@QJ_@V[T}@h@a@VEB_@PeAd@s@Vq@RUHKBs@Ru@NqBPqAHiBF{COiBQ{C_@aBSqDe@c@EeAOc@GiBUyFs@qDc@c@Gc@Ec@GiBUc@Gc@Ga@E}G{@iBUgAMmC]c@GgAMyFs@qEk@mAMmMaBc@E}JoAqDe@c@G{G{@c@EmC]mC]c@GyFs@a@G_CYuEk@a@GgAMyFs@a@GoC[c@Ga@Gc@EgAMuEk@a@GkBUc@G{Gy@wKsAuJkAc@G{C]a@Gc@GcJeA_Gw@uEm@sEm@gAMkH_AiAMoC]]EmEi@{C]]ECAcDY{BO?AkAAiA?[?yA?yA@oC?_C?sDBc@?kB@sDB]?gNHcGB[?oA@kB@c@@S?wA@oFFQ?Q?gA@c@?C?_@?qA?YAgAAK?sAGIAyAOQAgAOeAOgAQC?]Ia@IgAWa@KIC}Ae@aC}@i@U_@QiAi@[Ma@QcAc@s@]MGa@Qa@Q{@a@mCkAcAc@A?aAc@_@Sa@QwAq@MEo@YSI_@OA?a@Mm@SWGa@IKC{@OWEcAKMAc@Co@E{@Cc@?wEGc@AoCEoHCc@?wEAkBCgJG}BCgFCuEEqAGm@CUAMAgAGkBKqBK[CgAEkBIkBIc@CgAEa@Cc@ACA_@AkBIc@CkBIc@CgAEgAGc@Cc@Ac@CiBIeAGiAGCA_@C[Ee@IEAa@IEAi@QUIa@QSKcAg@qA{@iAcAwAeBa@i@[_@o@u@GK[_@[a@w@aAGEUYw@aAsAaB[a@sAaBmA{AwAkB[a@[a@u@cAqAeB_EmFEEU]Yc@_AuAwAgCq@mAWe@Wg@q@kAWe@Wg@EGiCaFaEwHgBgDoAmBQU{@iAqAsAWWcAy@_@Y_@YgAu@w@e@a@SyA{@iAo@aAk@GE{CeBGEsBkAECa@UcDkB]Sa@Wa@SaAk@_@SQKOIaAi@qAs@OKaB_AaAk@_@ScBaAcFwCa@S_@U_@Ua@U}BuASMaCwAmDuBgBcAaBaAKGu@c@_@U_Am@{BsAyA}@aAq@KI_@Y{@q@AA][][_@[][][KIiBkBWWEG{AcBqB_C[_@]_@[_@w@_A]_@Y[_@a@[_@iCoCGG_@[UUGE{CcCeAw@yBuA_CoACCa@Qg@Wo@[yAg@q@WmC{@iCw@yAe@mC}@EAcA]a@O_@MA?eA]a@OWIm@Sa@Oi@QcDgAa@OeA]a@MaCy@GAa@OgBm@a@MeA_@a@McA]a@Oc@O{@YmAa@eBm@a@OeA]uE_BgFgB{DuAyDsAg@Qa@Me@OaAYYIeB_@mB]k@Ic@G]EoBQOCw@Cc@CwAES?c@AkBA_@?C?kBDk@@_EDO?c@@oCDeABkBBgABc@@G?eA?s@A_AGg@GmASm@KSEMEeA[CAgAc@YMm@YUKaB}@WOIEcCsA_Ai@aAk@[OEC_Ac@c@S_@MAAc@OOGs@U[KiAScAQu@Ge@EOAYAI?k@CcBAoDAiCCG?oCAoLGqBAyAAkBAc@?c@?}AAuAGy@EsASwBe@eFmAeAUiBc@EA]IeAWi@M[GeAWwAYQCa@Ie@IyAOgBKaBCoBB{@BM@U@u@DQBc@Fc@FQBs@Na@Hc@Ja@HA?{@VIBWHIDa@NKDUJ_@Pk@Vw@d@a@T_@R_Ah@a@V_@V_@T]Tc@V_@TaB`Am@\\uAx@_@TaAj@OJOJ{@f@CBaB`Aa@TcEdC_Aj@a@T_@T_@Tq@`@OJ_@TUNi@\\_@V]Ta@ZWRGDe@b@m@h@ED]\\CBw@z@Y^MLMPOTk@v@S\\Q\\]n@CFQ`@?@Sf@Wl@e@rAABQf@Wv@K`@k@lB[hAa@zAu@hCOl@EN_@hAkArD?@Sh@Sj@u@nBGNUh@Uh@k@rASd@ABUf@i@jA[l@e@|@a@t@KRc@x@o@nAwCtFOZWd@Wf@gAtBWd@_B|CWf@gAtBWf@m@nAWd@OXGLWd@Yf@yCrFg@`AWd@Yd@Wf@CFo@~@s@hAEFkBdCWVcAdAs@n@_@\\{AlAMHQL}@n@cAj@a@T_Af@MDSJaA^A@cA\\eA\\C@kDfA_@JeDfAiA`@E@[NcAb@oAv@oBxA]\\UTGD]\\SRGH]^ST_AjAu@z@QRg@j@w@~@w@~@]^w@`AqAzACBqB`C[^aFbGaBnBaCpCw@`A[^]^}F`H]`@iD`EUXa@d@]^w@~@qB`C[^[^STe@h@[^y@~@aDxD[`@SVc@f@[^y@~@w@~@]`@k@p@KLyA~Au@z@qEnEwAvAgAfAq@f@}C~B{FlE]V}AlAC@[VuFzE]X}ApA]ZC@YXyAtA}@v@]\\WTEFoAfB?@m@lAQ\\CJUj@ITITK\\EL]hAS`AMn@On@a@lBc@dCEZc@bCUtAe@rCMn@On@CHk@xB_@tAc@nAyCrHs@fAEDUZSXGF_@b@YVaA`AuCpCEB_@T{BzAsB`A{Af@gBl@a@La@NYHcA\\g@P_AVa@LiBh@a@Ja@LA@a@JgBf@eAXa@JkCr@WHiDhAo@TsA`@o@TqC~@{@ZUHqAd@E@kC~@IBoC|@s@Tc@Ne@NoA`@qBl@m@L[FE?gANE@]Bc@Bc@@M@U?c@@I@}@AK?WAc@CSAqAKgAQCAa@I_@ICAk@QWIa@Oc@O]OaAc@CCa@U[Qc@Y]SCA}@m@AA}AiAwAcAaCeBKI}AeA_BiAwBwAoCiBoFmDqDgC_Ao@{AcACCaC}A_C}A_@Y_FgD_@WiIwFuAaA_@W_@W_Ao@_@W_BgA_FgD_@Y_EoC}DmCk@a@_@Y_BgA_CcB}DqC_@Y_@WAA}@k@_@WaHsE_@WyJqGi@_@_@W}@o@_@W_BiA_Ao@_@W_Aq@_@WuQgMgBmAIEoA{@CA_@UaAk@GCqEcCMEa@OaC_AwAg@aBa@mBa@YGa@Gc@ImAU[GsEw@c@GoDk@eAQc@GeAQgAO_AOEAc@GmCc@c@IoJ{Ay@K{AEs@?eABG?[@Y@i@DgANu@JyA^cBl@C?a@Ns@V[JsAd@cA^aBh@kA`@}@XIDeBt@OFcAT}@Zg@NA?a@JOBs@HC?]?E?]AE?[Cg@Eq@O_@Kc@Oo@]i@_@e@a@SQq@s@QS]]CCs@_AKMOSu@cAEIcAuAq@}AMa@a@kAU{@c@cBm@eCCKMa@Sk@_@{@MS[c@Ya@u@gAqB_B[SSOMIMIQG"
                     },
                     "start_location" : {
                        "lat" : 46.3292721,
                        "lng" : -79.46515509999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "oa}vGjljxM|w@mS|G_[zLccBlSw`@r`@iBv`@_^dDq_AbH}}@hu@moApe@miCvPc`AuOqu@zXcbCkQklDvx@soClEgiCcWi{BqXwl@m@at@{i@_bDeKcl@_Yct@k_Afb@meCthA_~CfeBunDlhA}q@nQc}Ab{Bo}GhgHi{AnfCirAb`EecB~zBidA~j@aoAr]u|B~K{~@py@oj@v^}g@lLye@|qAelAxvDau@j\\y`ApyAugCftFknAdyEmt@vuCwLl~Bzu@bqD}_ApnEkEz~Bl[daAhy@lyG}n@fyCes@bnCun@xyBoyArf@w_@zt@pI~kFpUhtHsW~yEceAzmHg|AnyB}f@`nAxOv|H}U|rCykAdkEeKxeF`WlnErk@joC~Ex~@tNbRpw@na@|U`KnTsRf^`^dWlFx`Avw@jSvd@nh@dNri@wIxa@sn@bi@mXthAvCny@cQn\\sNpd@yG~VoTtZyAn^pJbUmPrZpTi@rh@`LvrA~XlaAln@diFhGfwBfi@fpApn@tr@n_@gGXrd@CxWnS}CdV~BxTvSxQlm@hX~OjH|i@hcA`x@tR~|@|KpmAp[~[`ZaHrq@e[jt@nPb\\yEcRk[pOdf@uf@iAkn@mTgu@te@uY{C{Wwe@wKshAHwd@i[c\\yu@gw@}Pk^_VsIsUmt@qNcZ_UlLkZwHbMq^qM}Vc[dFup@kaAuc@_{AiIyrBcn@}~E{WygAS_nA_Reg@cVkEiXlMu^mB}XFkb@`M_y@xc@aaAfIcaAsAmh@rZin@vu@{c@g@eb@iMoY{w@{v@sr@m\\qDeOkRwSrMmTbF_Xse@ir@aKsx@b|BalA`gDwvApsDmAhfDf_@z{F{FzzEwqAlrGygAxkFoHtjBob@rvMai@hnFhd@bS`_@rwDRrvAzn@rpBpt@~xAlAjeCpa@boHhKlzEs\\|_Dtx@b|Fxg@nuDdRdeDsGdlAsFtrCsExgDa^h~Dp_@reDpAlxDdMzmEkZhgLgwAvfMq}@p_Fu`@xpCsL`xEu^toAec@zZ}y@l`@gXj~AouAvf@_}CcZmyECofD~@gcEx_AoaCry@gs@~j@uXnoAuxA~oCmqBloDwxFtbK_lBn{Bey@fLkx@ns@e_CxzBcvBjnD}~D|oFeuDfeG}iAvkAkzAnu@__Ahl@{b@vY{h@|@m{B{XmqCi]avCiPyrCaSkeBqnB}pBwtAmhCkbAcnBqS{oAwJ{c@bRk}@npAud@t|@{t@zd@_`C|fCwYbs@cr@vm@{{@lV_g@{RicEujCumBwCiXoe@"
         },
         "summary" : "Trans-Canada Hwy/Hwy 17",
         "warnings" : [],
         "waypoint_order" : [ 0 ]
      }
   ],
   "status" : "OK"
}
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
