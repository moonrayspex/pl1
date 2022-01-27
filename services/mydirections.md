# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJOVIYgEI51kwReS_EYsXpb-8&destination=place_id:ChIJyzAp6p8BJk0R3g7jWth_sIo&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

https://YourDirectionsApiURLGoesHere
```

## Next paste the full JSON response to this query here:

{
   "geocoded_waypoints" : [
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
               "lng" : -78.3103098
            },
            "southwest" : {
               "lat" : 46.0261965,
               "lng" : -79.8219685
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
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
            "points" : "ei}wGff_~MzMfXpJ|Ke@zDsBhG}I_@kT{AkYwC{VuNyWhK}Y~UaYh@yQaNiHeSkF}MjAeUFuPuGgS}BaOpCuOaGcS_N_IyUu]qNcGcO_EwEoK_EkWwFiMoW_LuF_@gD}LQiUmEmK}JeJcFmLwNw@wFfGsHP_LkCwGkEbBcE|GaErAaJfA{QgHaJk^nIsNu\\sTwNiKkNuTsi@qIgMuDo_@{DwSJaYmCwdA_RcnByI_hAwP}j@DyTiG}IqNoc@kGmi@qAcVpAcN`EeZuOwPgVwJ}VhQeO_LiGg@sF`HwI}D}NbAyLjQsLjE_MaFmGvEaQpEqIjLcMpByHdMuKMqb@lD_[FgSmFqXi@wf@zZsNfU}KrSqNdGaQ~HeOiE}P`CgGsDaH}JsFNcF?_C}LMwQwJqM_WsYyMiDcU{VeImBcMp@gRoSgDiFgJxCkVhRaJcMkEuJcOeNwNaCs[aGwJvAyNdd@g_@bbA{Jxr@wRlh@aj@~qAqyAppDiLxiAvDpqAd^~zFdJxrBoJpnBieArlFsjA~uFuRt`A}@fd@kG`bGyG`yBsNtrBi\\nbDsMrrAaBlTlb@lLjYfoAjHn\\Yry@[n`BvNpbA~Qh`@t}@t|A|E|`@qAdkA~Fb~AfMl~@jLhqCbNh`GkLvi@yQdeBdL|yAth@vaDvk@nzDjLt{B|GjoAmCh[eIhbA_C~wA`FhwAoHtjAuFpc@I~h@iAdm@}UjgAZri@jFfa@hQ`oArLz}Ad@~z@qFtf@wBfvBxLdqApE~`B}PvaC}HrsAy@~}AgKdpB{ZniCwi@bpEuXf~Bea@`fBef@jeBcD|c@~E`|B_NtbB{Hxt@_U`j@sNj[kJzEc^Is_@dYsQzV}Fz[qHb|@oMn@}]xDg_@`QwNnGuQk@yjB}]{uE@apDXofBrZg~A`]eh@fW}h@dMmq@`S}w@dn@kKjNoI|c@eN|u@eWfd@ap@dgAosBfpDsjB`cDm|Bl|Dqd@xaAsWr[i|@feA{Z~Gc\\|Ac{@`u@quAj|@q^jh@_rB|iDmnBfoCytAvfBiwB`hD_hAjkBe^fo@_a@`[ez@de@eh@hWql@|Zgv@rh@oUpHi_CaXyfCa[wy@yI}}@^g[QoXsH{h@qPceBmDsTgBgSeRy|@erAk{@cg@ex@ul@wZsW{^iMehAk_@i}@iCsg@yQsu@_Ao_@aIyUhAsOvHoj@x]yVdn@oa@py@_Wl]e\\vM_r@ft@uhAflAmZpX{GxVwNvd@u^lS__A~Xk^gHedEupCqe@{I{c@{Ag[rKgM{Ai]mj@"
         },
         "summary" : "Trans-Canada Hwy/Hwy 17 and Trans-Canada Hwy/ON-11 N",
         "warnings" : [],
         "waypoint_order" : []
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
