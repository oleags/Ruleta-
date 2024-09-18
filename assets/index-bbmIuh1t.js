import{p as ne,s as lt,a as Yo,C as Q1,b as dt,r as vt,N as lc,c as nt,g as Gs,d as cc,e as h0,f as uc,u as dc,h as hc,B as la,i as pc,j as fc,z as f,W as J1}from"./index-DbH5oKC4.js";import"./json-CTFUaiU0.js";import"./___vite-browser-external_commonjs-proxy-CVMhx6uY.js";const ws="https://secure.walletconnect.com",gc=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],_r={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:ws,SECURE_SITE_DASHBOARD:`${ws}/dashboard`,SECURE_SITE_FAVICON:`${ws}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CONVERT_SLIPPAGE_TOLERANCE:1},at={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(t,e=""){return t==null?void 0:t.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return at.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return at.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=_r.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=_r.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+_r.FOUR_MINUTES_MS},getNetworkId(t){return t==null?void 0:t.split(":")[1]},getPlainAddress(t){return t==null?void 0:t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let r;return(...i)=>{function o(){t(...i)}r&&clearTimeout(r),r=setTimeout(o,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(at.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(t,e){if(!at.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(t,e,r){window.open(t,e,r||"noreferrer noopener")},returnOpenHref(t,e,r){return window.open(t,e,r||"noreferrer noopener")},async preloadImage(t){const e=new Promise((r,i)=>{const o=new Image;o.onload=r,o.onerror=i,o.crossOrigin="anonymous",o.src=t});return Promise.race([e,at.wait(2e3)])},formatBalance(t,e){var i;let r;if(t==="0")r="0.000";else if(typeof t=="string"){const o=Number(t);o&&(r=(i=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return r?`${r} ${e??""}`:`0.000 ${e??""}`},formatBalance2(t,e){var i;let r;if(t==="0")r="0";else if(typeof t=="string"){const o=Number(t);o&&(r=(i=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:e}},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return _r.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return at.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return at.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return at.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,r;return typeof t=="string"?t:typeof((r=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:r.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const r={};return e&&t&&(t.forEach((i,o)=>{r[i]=o}),e.sort((i,o)=>{const n=r[i.id],a=r[o.id];return n!==void 0&&a!==void 0?n-a:n!==void 0?-1:a!==void 0?1:0})),e},calculateBalance(t){let e=0;for(const r of t)e+=r.value??0;return e},formatTokenBalance(t){const e=t.toFixed(2),[r,i]=e.split(".");return{dollars:r,pennies:i}},isAddress(t){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)||/^(?:0x)?[0-9A-F]{40}$/iu.test(t))return!0}else return!1;return!1}};async function no(...t){const e=await fetch(...t);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e}let p0=class{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:r,...i}){const o=this.createUrl(i);return(await no(o,{method:"GET",headers:e,signal:r,cache:"no-cache"})).json()}async getBlob({headers:e,signal:r,...i}){const o=this.createUrl(i);return(await no(o,{method:"GET",headers:e,signal:r})).blob()}async post({body:e,headers:r,signal:i,...o}){const n=this.createUrl(o);return(await no(n,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async put({body:e,headers:r,signal:i,...o}){const n=this.createUrl(o);return(await no(n,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async delete({body:e,headers:r,signal:i,...o}){const n=this.createUrl(o);return(await no(n,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}createUrl({path:e,params:r}){const i=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([o,n])=>{n&&i.searchParams.append(o,n)}),i}};const ft=ne({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),ue={state:ft,subscribeKey(t,e){return lt(ft,t,e)},setProjectId(t){ft.projectId=t},setAllWallets(t){ft.allWallets=t},setIncludeWalletIds(t){ft.includeWalletIds=t},setExcludeWalletIds(t){ft.excludeWalletIds=t},setFeaturedWalletIds(t){ft.featuredWalletIds=t},setTokens(t){ft.tokens=t},setTermsConditionsUrl(t){ft.termsConditionsUrl=t},setPrivacyPolicyUrl(t){ft.privacyPolicyUrl=t},setCustomWallets(t){ft.customWallets=t},setIsSiweEnabled(t){ft.isSiweEnabled=t},setEnableAnalytics(t){ft.enableAnalytics=t},setSdkVersion(t){ft.sdkVersion=t},setMetadata(t){ft.metadata=t},setOnrampEnabled(t){ft.enableOnramp=t},setWalletFeaturesEnabled(t){ft.enableWalletFeatures=t},getSnapshot(){return Yo(ft)}},mc={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},wc=at.getBlockchainApiUrl(),Ct=new p0({baseUrl:wc}),cr={fetchIdentity({address:t}){return Ct.get({path:`/v1/identity/${t}`,params:{projectId:ue.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:r,onramp:i,signal:o}){const n=r?{cursor:r}:{};return Ct.get({path:`/v1/account/${t}/history?projectId=${e}${i?`&onramp=${i}`:""}`,params:n,signal:o})},fetchSwapQuote({projectId:t,amount:e,userAddress:r,from:i,to:o,gasPrice:n}){return Ct.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:t,amount:e,userAddress:r,from:i,to:o,gasPrice:n}})},fetchSwapTokens({projectId:t,chainId:e}){return Ct.get({path:`/v1/convert/tokens?projectId=${t}&chainId=${e}`})},fetchTokenPrice({projectId:t,addresses:e}){return Ct.post({path:"/v1/fungible/price",body:{projectId:t,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchSwapAllowance({projectId:t,tokenAddress:e,userAddress:r}){const{sdkType:i,sdkVersion:o}=ue.state;return Ct.get({path:`/v1/convert/allowance?projectId=${t}&tokenAddress=${e}&userAddress=${r}`,headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":o}})},fetchGasPrice({projectId:t,chainId:e}){const{sdkType:r,sdkVersion:i}=ue.state;return Ct.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":i},params:{projectId:t,chainId:e}})},generateSwapCalldata({amount:t,from:e,projectId:r,to:i,userAddress:o}){return Ct.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:t,eip155:{slippage:_r.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:r,to:i,userAddress:o}})},generateApproveCalldata({from:t,projectId:e,to:r,userAddress:i}){const{sdkType:o,sdkVersion:n}=ue.state;return Ct.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":n},params:{projectId:e,userAddress:i,from:t,to:r}})},async getBalance(t,e,r){const{sdkType:i,sdkVersion:o}=ue.state;return Ct.get({path:`/v1/account/${t}/balance`,headers:{"x-sdk-type":i,"x-sdk-version":o},params:{currency:"usd",projectId:ue.state.projectId,chainId:e,forceUpdate:r}})},async lookupEnsName(t){return Ct.get({path:`/v1/profile/account/${t}${Q1.WC_NAME_SUFFIX}?projectId=${ue.state.projectId}`})},async reverseLookupEnsName({address:t}){return Ct.get({path:`/v1/profile/reverse/${t}?projectId=${ue.state.projectId}`})},async getEnsNameSuggestions(t){return Ct.get({path:`/v1/profile/suggestions/${t}?projectId=${ue.state.projectId}`})},async registerEnsName({coinType:t,address:e,message:r,signature:i}){return Ct.post({path:"/v1/profile/account",body:{coin_type:t,address:e,message:r,signature:i},headers:{"Content-Type":"application/json"}})},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:r,purchaseAmount:i,paymentAmount:o}){return(await Ct.post({path:`/v1/generators/onrampurl?projectId=${ue.state.projectId}`,body:{destinationWallets:t,defaultNetwork:r,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await Ct.get({path:`/v1/onramp/options?projectId=${ue.state.projectId}`})}catch{return mc}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}){try{return await Ct.post({path:`/v1/onramp/quote?projectId=${ue.state.projectId}`,body:{purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}})}catch{return{coinbaseFee:{amount:r,currency:e.id},networkFee:{amount:r,currency:e.id},paymentSubtotal:{amount:r,currency:e.id},paymentTotal:{amount:r,currency:e.id},purchaseAmount:{amount:r,currency:e.id},quoteId:"mocked-quote-id"}}}},Fr=ne({message:"",variant:"success",open:!1}),yr={state:Fr,subscribeKey(t,e){return lt(Fr,t,e)},showSuccess(t){Fr.message=t,Fr.variant="success",Fr.open=!0},showError(t){const e=at.parseError(t);Fr.message=e,Fr.variant="error",Fr.open=!0},hide(){Fr.open=!1}},vs="WALLETCONNECT_DEEPLINK_CHOICE",H0="@w3m/recent",bs="@w3m/connected_wallet_image_url",W0="@w3m/connected_connector",V0="@w3m/connected_social",vc="@w3m-storage/SOCIAL_USERNAME",mi={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(vs,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(vs);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(vs)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=mi.getRecentWallets();e.find(i=>i.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(H0,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(H0);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(bs,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},removeConnectedWalletImageUrl(){try{localStorage.removeItem(bs)}catch{console.info("Unable to remove Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(bs)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(W0,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(W0)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(t){try{localStorage.setItem(V0,t)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return localStorage.getItem(V0)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return localStorage.getItem(vc)}catch{console.info("Unable to get Connected Social Username")}}},bc=at.getAnalyticsUrl(),yc=new p0({baseUrl:bc}),Cc=["MODAL_CREATED"],xn=ne({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Sr={state:xn,subscribe(t){return dt(xn,()=>t(xn))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:r}=ue.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},async _sendAnalyticsEvent(t){try{if(Cc.includes(t.data.event)||typeof window>"u")return;await yc.post({path:"/e",headers:Sr._getApiHeaders(),body:{eventId:at.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){xn.timestamp=Date.now(),xn.data=t,ue.state.enableAnalytics&&Sr._sendAnalyticsEvent(xn)}},it=ne({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Ac={state:it,subscribe(t){return dt(it,()=>t(it))},async fetchTransactions(t,e){const{projectId:r}=ue.state;if(!r||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");it.loading=!0;try{const i=await cr.fetchTransactions({account:t,projectId:r,cursor:it.next,onramp:e}),o=this.filterSpamTransactions(i.data),n=[...it.transactions,...o];it.loading=!1,e==="coinbase"?it.coinbaseTransactions=this.groupTransactionsByYearAndMonth(it.coinbaseTransactions,i.data):(it.transactions=n,it.transactionsByYear=this.groupTransactionsByYearAndMonth(it.transactionsByYear,o)),it.empty=n.length===0,it.next=i.next?i.next:void 0}catch{Sr.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:r,cursor:it.next}}),yr.showError("Failed to fetch transactions"),it.loading=!1,it.empty=!0,it.next=void 0}},groupTransactionsByYearAndMonth(t={},e=[]){const r=t;return e.forEach(i=>{const o=new Date(i.metadata.minedAt).getFullYear(),n=new Date(i.metadata.minedAt).getMonth(),a=r[o]??{},h=(a[n]??[]).filter(g=>g.id!==i.id);r[o]={...a,[n]:[...h,i].sort((g,C)=>new Date(C.metadata.minedAt).getTime()-new Date(g.metadata.minedAt).getTime())}}),r},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(i=>{var o;return((o=i.nft_info)==null?void 0:o.flags.is_spam)===!0}))},clearCursor(){it.next=void 0},resetTransactions(){it.transactions=[],it.transactionsByYear={},it.loading=!1,it.empty=!1,it.next=void 0}},gt=ne({wcError:!1,buffering:!1}),kn={state:gt,subscribeKey(t,e){return lt(gt,t,e)},_getClient(){if(!gt._client)throw new Error("ConnectionController client not set");return gt._client},setClient(t){gt._client=vt(t)},connectWalletConnect(){gt.wcPromise=this._getClient().connectWalletConnect(t=>{gt.wcUri=t,gt.wcPairingExpiry=at.getPairingExpiry()}),mi.setConnectedConnector("WALLET_CONNECT")},async connectExternal(t){var e,r;await((r=(e=this._getClient()).connectExternal)==null?void 0:r.call(e,t)),mi.setConnectedConnector(t.type)},async reconnectExternal(t){var e,r;await((r=(e=this._getClient()).reconnectExternal)==null?void 0:r.call(e,t)),mi.setConnectedConnector(t.type)},async signMessage(t){return this._getClient().signMessage(t)},parseUnits(t,e){return this._getClient().parseUnits(t,e)},formatUnits(t,e){return this._getClient().formatUnits(t,e)},async sendTransaction(t){return this._getClient().sendTransaction(t)},async estimateGas(t){return this._getClient().estimateGas(t)},async writeContract(t){return this._getClient().writeContract(t)},async getEnsAddress(t){return this._getClient().getEnsAddress(t)},async getEnsAvatar(t){return this._getClient().getEnsAvatar(t)},checkInstalled(t){var e,r;return(r=(e=this._getClient()).checkInstalled)==null?void 0:r.call(e,t)},resetWcConnection(){gt.wcUri=void 0,gt.wcPairingExpiry=void 0,gt.wcPromise=void 0,gt.wcLinking=void 0,gt.recentWallet=void 0,Ac.resetTransactions(),mi.deleteWalletConnectDeepLink()},setWcLinking(t){gt.wcLinking=t},setWcError(t){gt.wcError=t,gt.buffering=!1},setRecentWallet(t){gt.recentWallet=t},setBuffering(t){gt.buffering=t},async disconnect(){await this._getClient().disconnect(),mi.removeConnectedWalletImageUrl(),this.resetWcConnection()}},oo=ne({loading:!1,open:!1,selectedNetworkId:void 0}),vo={state:oo,subscribe(t){return dt(oo,()=>t(oo))},set(t){Object.assign(oo,{...oo,...t})}},ge=ne({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),Er={state:ge,subscribe(t){return dt(ge,()=>t(ge))},subscribeKey(t,e){return lt(ge,t,e)},_getClient(){if(!ge._client)throw new Error("NetworkController client not set");return ge._client},setClient(t){ge._client=vt(t)},setCaipNetwork(t){ge.caipNetwork=t,vo.set({selectedNetworkId:t==null?void 0:t.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(t){ge.caipNetwork=t,vo.set({selectedNetworkId:t==null?void 0:t.id}),ge.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){ge.requestedCaipNetworks=t},setAllowUnsupportedChain(t){ge.allowUnsupportedChain=t},setSmartAccountEnabledNetworks(t){ge.smartAccountEnabledNetworks=t},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:e}=ge,r=t,i=e;return at.sortRequestedNetworks(r,i)},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();ge.supportsAllNetworks=t.supportsAllNetworks,ge.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),ge.caipNetwork=t,t&&Sr.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.id}})},checkIfSupportedNetwork(){var t;ge.isUnsupportedChain=!((t=ge.requestedCaipNetworks)!=null&&t.some(e=>{var r;return e.id===((r=ge.caipNetwork)==null?void 0:r.id)})),ge.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){var e,r;const t=lc.caipNetworkIdToNumber((e=ge.caipNetwork)==null?void 0:e.id);return t?!!((r=ge.smartAccountEnabledNetworks)!=null&&r.includes(t)):!1},resetNetwork(){ge.isDefaultCaipNetwork||(ge.caipNetwork=void 0),ge.approvedCaipNetworkIds=void 0,ge.supportsAllNetworks=!0,ge.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout(()=>{Ys.open({view:"UnsupportedChain"})},300)}},mo={async getTokenList(){var r,i;const t=await cr.fetchSwapTokens({chainId:(r=Er.state.caipNetwork)==null?void 0:r.id,projectId:ue.state.projectId});return((i=t==null?void 0:t.tokens)==null?void 0:i.map(o=>({...o,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){const t=ue.state.projectId,e=Er.state.caipNetwork;return e?await cr.fetchGasPrice({projectId:t,chainId:e.id}):null},async fetchSwapAllowance({tokenAddress:t,userAddress:e,sourceTokenAmount:r,sourceTokenDecimals:i}){const o=ue.state.projectId,n=await cr.fetchSwapAllowance({projectId:o,tokenAddress:t,userAddress:e});if(n!=null&&n.allowance&&r&&i){const a=kn.parseUnits(r,i);return BigInt(n.allowance)>=a}return!1},async getMyTokensWithBalance(t){const e=Tr.state.address,r=Er.state.caipNetwork;if(!e||!r)return[];const o=(await cr.getBalance(e,r.id,t)).balances.filter(n=>n.quantity.decimals!=="0");return Tr.setTokenBalance(o),this.mapBalancesToSwapTokens(o)},mapBalancesToSwapTokens(t){return(t==null?void 0:t.map(e=>({...e,address:e!=null&&e.address?e.address:`${e.chainId}:${_r.NATIVE_TOKEN_ADDRESS}`,decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},et=ne({view:"Connect",history:["Connect"],transactionStack:[]}),Cr={state:et,subscribeKey(t,e){return lt(et,t,e)},pushTransactionStack(t){et.transactionStack.push(t)},popTransactionStack(t){var r,i;const e=et.transactionStack.pop();e&&(t?(this.goBack(),(r=e==null?void 0:e.onCancel)==null||r.call(e)):(e.goBack?this.goBack():e.view&&this.reset(e.view),(i=e==null?void 0:e.onSuccess)==null||i.call(e)))},push(t,e){t!==et.view&&(et.view=t,et.history.push(t),et.data=e)},reset(t){et.view=t,et.history=[t]},replace(t,e){et.history.length>=1&&et.history.at(-1)!==t&&(et.view=t,et.history[et.history.length-1]=t,et.data=e)},goBack(){if(et.history.length>1){et.history.pop();const[t]=et.history.slice(-1);t&&(et.view=t)}},goBackToIndex(t){if(et.history.length>1){et.history=et.history.slice(0,t+1);const[e]=et.history.slice(-1);e&&(et.view=e)}}},Zr={getGasPriceInEther(t,e){const r=e*t;return Number(r)/1e18},getGasPriceInUSD(t,e,r){const i=Zr.getGasPriceInEther(e,r);return nt.bigNumber(t).multipliedBy(i).toNumber()},getPriceImpact({sourceTokenAmount:t,sourceTokenPriceInUSD:e,toTokenPriceInUSD:r,toTokenAmount:i}){const o=nt.bigNumber(t).multipliedBy(e),n=nt.bigNumber(i).multipliedBy(r);return o.minus(n).dividedBy(o).multipliedBy(100).toNumber()},getMaxSlippage(t,e){const r=nt.bigNumber(t).dividedBy(100);return nt.multiply(e,r).toNumber()},getProviderFee(t,e=.0085){return nt.bigNumber(t).multipliedBy(e).toString()},isInsufficientNetworkTokenForGas(t,e){const r=e||"0";return nt.bigNumber(t).isZero()?!0:nt.bigNumber(nt.bigNumber(r)).isGreaterThan(t)},isInsufficientSourceTokenForSwap(t,e,r){var n,a;const i=(a=(n=r==null?void 0:r.find(l=>l.address===e))==null?void 0:n.quantity)==null?void 0:a.numeric;return nt.bigNumber(i||"0").isLessThan(t)},getToTokenAmount({sourceToken:t,toToken:e,sourceTokenPrice:r,toTokenPrice:i,sourceTokenAmount:o}){if(o==="0"||!t||!e)return"0";const n=t.decimals,a=r,l=e.decimals,h=i;if(h<=0)return"0";const g=nt.bigNumber(o).multipliedBy(.0085),A=nt.bigNumber(o).minus(g).multipliedBy(nt.bigNumber(10).pow(n)),k=nt.bigNumber(a).dividedBy(h),I=n-l;return A.multipliedBy(k).dividedBy(nt.bigNumber(10).pow(I)).dividedBy(nt.bigNumber(10).pow(l)).toFixed(l).toString()}},Z0=15e4,xc=6,Bt={initializing:!1,initialized:!1,loading:!1,loadingPrices:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,transactionLoading:!1,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:_r.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},T=ne(Bt),fa={state:T,subscribe(t){return dt(T,()=>t(T))},subscribeKey(t,e){return lt(T,t,e)},getParams(){var a,l,h,g,C,A,k,I,N;const{address:t}=Tr.state,e=`${(a=Er.state.caipNetwork)==null?void 0:a.id}:${_r.NATIVE_TOKEN_ADDRESS}`;if(!t)throw new Error("No address found to swap the tokens from.");const r=Tr.state.caipAddress,i=!((l=T.toToken)!=null&&l.address)||!((h=T.toToken)!=null&&h.decimals),o=!((g=T.sourceToken)!=null&&g.address)||!((C=T.sourceToken)!=null&&C.decimals)||!nt.bigNumber(T.sourceTokenAmount).isGreaterThan(0),n=!T.sourceTokenAmount;return{networkAddress:e,fromAddress:t,fromCaipAddress:Tr.state.caipAddress,sourceTokenAddress:(A=T.sourceToken)==null?void 0:A.address,toTokenAddress:(k=T.toToken)==null?void 0:k.address,toTokenAmount:T.toTokenAmount,toTokenDecimals:(I=T.toToken)==null?void 0:I.decimals,sourceTokenAmount:T.sourceTokenAmount,sourceTokenDecimals:(N=T.sourceToken)==null?void 0:N.decimals,invalidToToken:i,invalidSourceToken:o,invalidSourceTokenAmount:n,availableToSwap:r&&!i&&!o&&!n}},setLoading(t){T.loading=t},setSourceToken(t){if(!t){T.sourceToken=t,T.sourceTokenAmount="",T.sourceTokenPriceInUSD=0;return}T.sourceToken=t,this.setTokenPrice(t.address,"sourceToken")},setSourceTokenAmount(t){T.sourceTokenAmount=t},setToToken(t){if(!t){T.toToken=t,T.toTokenAmount="",T.toTokenPriceInUSD=0;return}T.toToken=t,this.setTokenPrice(t.address,"toToken")},setToTokenAmount(t){T.toTokenAmount=t?nt.formatNumberToLocalString(t,xc):""},async setTokenPrice(t,e){const{availableToSwap:r}=this.getParams();let i=T.tokensPriceMap[t]||0;i||(T.loadingPrices=!0,i=await this.getAddressPrice(t)),e==="sourceToken"?T.sourceTokenPriceInUSD=i:e==="toToken"&&(T.toTokenPriceInUSD=i),T.loadingPrices&&(T.loadingPrices=!1,r&&this.swapTokens())},switchTokens(){if(T.initializing||!T.initialized)return;const t=T.toToken?{...T.toToken}:void 0,e=T.sourceToken?{...T.sourceToken}:void 0,r=t&&T.toTokenAmount===""?"1":T.toTokenAmount;this.setSourceToken(t),this.setToToken(e),this.setSourceTokenAmount(r),this.setToTokenAmount(""),this.swapTokens()},resetState(){T.myTokensWithBalance=Bt.myTokensWithBalance,T.tokensPriceMap=Bt.tokensPriceMap,T.initialized=Bt.initialized,T.sourceToken=Bt.sourceToken,T.sourceTokenAmount=Bt.sourceTokenAmount,T.sourceTokenPriceInUSD=Bt.sourceTokenPriceInUSD,T.toToken=Bt.toToken,T.toTokenAmount=Bt.toTokenAmount,T.toTokenPriceInUSD=Bt.toTokenPriceInUSD,T.networkPrice=Bt.networkPrice,T.networkTokenSymbol=Bt.networkTokenSymbol,T.networkBalanceInUSD=Bt.networkBalanceInUSD,T.inputError=Bt.inputError},resetValues(){var r;const{networkAddress:t}=this.getParams(),e=(r=T.tokens)==null?void 0:r.find(i=>i.address===t);this.setSourceToken(e),this.setToToken(void 0)},clearError(){T.transactionError=void 0},async initializeState(){if(!T.initializing){if(T.initializing=!0,!T.initialized)try{await this.fetchTokens(),T.initialized=!0}catch{T.initialized=!1,yr.showError("Failed to initialize swap"),Cr.goBack()}T.initializing=!1}},async fetchTokens(){var r;const{networkAddress:t}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const e=(r=T.tokens)==null?void 0:r.find(i=>i.address===t);e&&(T.networkTokenSymbol=e.symbol,this.setSourceToken(e),this.setSourceTokenAmount("1"))},async getTokenList(){const t=await mo.getTokenList();T.tokens=t,T.popularTokens=t.sort((e,r)=>e.symbol<r.symbol?-1:e.symbol>r.symbol?1:0).filter(e=>!!_r.SWAP_POPULAR_TOKENS.includes(e.symbol),{}),T.suggestedTokens=t.filter(e=>!!_r.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(t){var h,g;const e=T.tokensPriceMap[t];if(e)return e;const i=(await cr.fetchTokenPrice({projectId:ue.state.projectId,addresses:[t]})).fungibles||[],o=[...T.tokens||[],...T.myTokensWithBalance||[]],n=(h=o==null?void 0:o.find(C=>C.address===t))==null?void 0:h.symbol,a=((g=i.find(C=>C.symbol.toLowerCase()===(n==null?void 0:n.toLowerCase())))==null?void 0:g.price)||0,l=parseFloat(a.toString());return T.tokensPriceMap[t]=l,l},async getNetworkTokenPrice(){var o;const{networkAddress:t}=this.getParams(),r=(o=(await cr.fetchTokenPrice({projectId:ue.state.projectId,addresses:[t]})).fungibles)==null?void 0:o[0],i=(r==null?void 0:r.price.toString())||"0";T.tokensPriceMap[t]=parseFloat(i),T.networkTokenSymbol=(r==null?void 0:r.symbol)||"",T.networkPrice=i},async getMyTokensWithBalance(t){const e=await mo.getMyTokensWithBalance(t);e&&(await this.getInitialGasPrice(),this.setBalances(e))},setBalances(t){const{networkAddress:e}=this.getParams(),r=Er.state.caipNetwork;if(!r)return;const i=t.find(o=>o.address===e);t.forEach(o=>{T.tokensPriceMap[o.address]=o.price||0}),T.myTokensWithBalance=t.filter(o=>o.address.startsWith(r.id)),T.networkBalanceInUSD=i?nt.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){const t=await mo.fetchGasPrice();if(!t)return{gasPrice:null,gasPriceInUsd:null};const e=t.standard,r=BigInt(e),i=BigInt(Z0),o=Zr.getGasPriceInUSD(T.networkPrice,i,r);return T.gasFee=e,T.gasPriceInUSD=o,{gasPrice:r,gasPriceInUSD:T.gasPriceInUSD}},async swapTokens(){var g,C;const t=Tr.state.address,e=T.sourceToken,r=T.toToken,i=nt.bigNumber(T.sourceTokenAmount).isGreaterThan(0);if(!r||!e||T.loadingPrices||!i)return;T.loading=!0;const o=nt.bigNumber(T.sourceTokenAmount).multipliedBy(10**e.decimals),n=await cr.fetchSwapQuote({userAddress:t,projectId:ue.state.projectId,from:e.address,to:r.address,gasPrice:T.gasFee,amount:o.toString()}),a=(C=(g=n==null?void 0:n.quotes)==null?void 0:g[0])==null?void 0:C.toAmount;if(!a)return;const l=nt.bigNumber(a).dividedBy(10**r.decimals).toString();this.setToTokenAmount(l),this.hasInsufficientToken(T.sourceTokenAmount,e.address)?T.inputError="Insufficient balance":(T.inputError=void 0,this.setTransactionDetails()),T.loading=!1},async getTransaction(){const{fromCaipAddress:t,availableToSwap:e}=this.getParams(),r=T.sourceToken,i=T.toToken;if(!(!t||!e||!r||!i||T.loading))try{T.loading=!0;const o=await mo.fetchSwapAllowance({userAddress:t,tokenAddress:r.address,sourceTokenAmount:T.sourceTokenAmount,sourceTokenDecimals:r.decimals});let n;return o?n=await this.createSwapTransaction():n=await this.createAllowanceTransaction(),T.loading=!1,T.fetchError=!1,n}catch{Cr.goBack(),yr.showError("Failed to check allowance"),T.approvalTransaction=void 0,T.swapTransaction=void 0,T.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:t,fromAddress:e,sourceTokenAddress:r,toTokenAddress:i}=this.getParams();if(!(!t||!i)){if(!r)throw new Error(">>> createAllowanceTransaction - No source token address found.");try{const o=await cr.generateApproveCalldata({projectId:ue.state.projectId,from:r,to:i,userAddress:t}),n=await kn.estimateGas({address:e,to:at.getPlainAddress(o.tx.to),data:o.tx.data}),a={data:o.tx.data,to:at.getPlainAddress(o.tx.from),gas:n,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:T.toTokenAmount};return T.swapTransaction=void 0,T.approvalTransaction=a,a}catch{Cr.goBack(),yr.showError("Failed to create approval transaction"),T.approvalTransaction=void 0,T.swapTransaction=void 0,T.fetchError=!0;return}}},async createSwapTransaction(){const{networkAddress:t,fromCaipAddress:e,sourceTokenAmount:r}=this.getParams(),i=T.sourceToken,o=T.toToken;if(!e||!r||!i||!o)return;const n=kn.parseUnits(r,i.decimals).toString();try{const a=await cr.generateSwapCalldata({projectId:ue.state.projectId,userAddress:e,from:i.address,to:o.address,amount:n}),l=i.address===t,h=BigInt(a.tx.eip155.gas),g=BigInt(a.tx.eip155.gasPrice),C={data:a.tx.data,to:at.getPlainAddress(a.tx.to),gas:h,gasPrice:g,value:BigInt(l?n:"0"),toAmount:T.toTokenAmount};return T.gasPriceInUSD=Zr.getGasPriceInUSD(T.networkPrice,h,g),T.approvalTransaction=void 0,T.swapTransaction=C,C}catch{Cr.goBack(),yr.showError("Failed to create transaction"),T.approvalTransaction=void 0,T.swapTransaction=void 0,T.fetchError=!0;return}},async sendTransactionForApproval(t){const{fromAddress:e}=this.getParams();T.transactionLoading=!0,Cr.pushTransactionStack({view:null,goBack:!0});try{await kn.sendTransaction({address:e,to:t.to,data:t.data,value:BigInt(t.value),gasPrice:BigInt(t.gasPrice)}),T.approvalTransaction=void 0,T.transactionLoading=!1,this.swapTokens()}catch(r){const i=r;T.transactionError=i==null?void 0:i.shortMessage,T.transactionLoading=!1}},async sendTransactionForSwap(t){var i,o,n,a;if(!t)return;const{fromAddress:e,toTokenAmount:r}=this.getParams();T.transactionLoading=!0,Cr.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){fa.resetState()}});try{const l=`Swapped ${(i=T.sourceToken)==null?void 0:i.symbol} to ${nt.formatNumberToLocalString(r,3)} ${(o=T.toToken)==null?void 0:o.symbol}!`,h=[(n=T.sourceToken)==null?void 0:n.address,(a=T.toToken)==null?void 0:a.address].join(","),g=await kn.sendTransaction({address:e,to:t.to,data:t.data,gas:t.gas,gasPrice:BigInt(t.gasPrice),value:t.value});return T.transactionLoading=!1,yr.showSuccess(l),fa.resetState(),fa.getMyTokensWithBalance(h),g}catch(l){const h=l;T.transactionError=h==null?void 0:h.shortMessage,T.transactionLoading=!1,yr.showError((h==null?void 0:h.shortMessage)||"Transaction error");return}},hasInsufficientToken(t,e){const r=Zr.isInsufficientSourceTokenForSwap(t,e,T.myTokensWithBalance);return Zr.isInsufficientNetworkTokenForGas(T.networkBalanceInUSD,T.gasPriceInUSD)||r},setTransactionDetails(){const{toTokenAddress:t,toTokenDecimals:e}=this.getParams();!t||!e||(T.gasPriceInUSD=Zr.getGasPriceInUSD(T.networkPrice,BigInt(T.gasFee),BigInt(Z0)),T.priceImpact=Zr.getPriceImpact({sourceTokenAmount:T.sourceTokenAmount,sourceTokenPriceInUSD:T.sourceTokenPriceInUSD,toTokenPriceInUSD:T.toTokenPriceInUSD,toTokenAmount:T.toTokenAmount}),T.maxSlippage=Zr.getMaxSlippage(T.slippage,T.toTokenAmount),T.providerFee=Zr.getProviderFee(T.sourceTokenAmount))}},ae=ne({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),Tr={state:ae,subscribe(t){return dt(ae,()=>t(ae))},subscribeKey(t,e){return lt(ae,t,e)},setIsConnected(t){ae.isConnected=t},setCaipAddress(t){ae.caipAddress=t,ae.address=t?at.getPlainAddress(t):void 0},setBalance(t,e){ae.balance=t,ae.balanceSymbol=e},setProfileName(t){ae.profileName=t},setProfileImage(t){ae.profileImage=t},setAddressExplorerUrl(t){ae.addressExplorerUrl=t},setSmartAccountDeployed(t){ae.smartAccountDeployed=t},setCurrentTab(t){ae.currentTab=t},setTokenBalance(t){t&&(ae.tokenBalance=vt(t))},setConnectedWalletInfo(t){ae.connectedWalletInfo=t},setPreferredAccountType(t){ae.preferredAccountType=t},setSocialProvider(t){t&&(ae.socialProvider=t)},setSocialWindow(t){t&&(ae.socialWindow=vt(t))},async fetchTokenBalance(){var e;const t=(e=Er.state.caipNetwork)==null?void 0:e.id;try{if(ae.address&&t){const r=await cr.getBalance(ae.address,t),i=r.balances.filter(o=>o.quantity.decimals!=="0");this.setTokenBalance(i),fa.setBalances(mo.mapBalancesToSwapTokens(r.balances))}}catch{yr.showError("Failed to fetch token balance")}},resetAccount(){ae.isConnected=!1,ae.smartAccountDeployed=!1,ae.currentTab=0,ae.caipAddress=void 0,ae.address=void 0,ae.balance=void 0,ae.balanceSymbol=void 0,ae.profileName=void 0,ae.profileImage=void 0,ae.addressExplorerUrl=void 0,ae.tokenBalance=[],ae.connectedWalletInfo=void 0,ae.preferredAccountType=void 0,ae.socialProvider=void 0,ae.socialWindow=void 0}},nr=ne({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),ao={state:nr,subscribeNetworkImages(t){return dt(nr.networkImages,()=>t(nr.networkImages))},subscribeKey(t,e){return lt(nr,t,e)},subscribe(t){return dt(nr,()=>t(nr))},setWalletImage(t,e){nr.walletImages[t]=e},setNetworkImage(t,e){nr.networkImages[t]=e},setConnectorImage(t,e){nr.connectorImages[t]=e},setTokenImage(t,e){nr.tokenImages[t]=e},setCurrencyImage(t,e){nr.currencyImages[t]=e}},zr=ne({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Aa={state:zr,subscribe(t){return dt(zr,()=>t(zr))},setThemeMode(t){zr.themeMode=t;try{const e=qs.getAuthConnector();if(e){const r=Aa.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:t,themeVariables:r,w3mThemeVariables:Gs(r,t)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(t){zr.themeVariables={...zr.themeVariables,...t};try{const e=qs.getAuthConnector();if(e){const r=Aa.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:r,w3mThemeVariables:Gs(zr.themeVariables,zr.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return Yo(zr)}},fi=ne({connectors:[]}),qs={state:fi,subscribeKey(t,e){return lt(fi,t,e)},setConnectors(t){fi.connectors=t.map(e=>vt(e))},addConnector(t){var e,r;if(fi.connectors.push(vt(t)),t.id==="w3mAuth"){const i=t,o=Yo(ue.state),n=Aa.getSnapshot().themeMode,a=Aa.getSnapshot().themeVariables;(r=(e=i==null?void 0:i.provider)==null?void 0:e.syncDappData)==null||r.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId}),i.provider.syncTheme({themeMode:n,themeVariables:a,w3mThemeVariables:Gs(a,n)})}},getAuthConnector(){return fi.connectors.find(t=>t.type==="AUTH")},getAnnouncedConnectorRdns(){return fi.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectors(){return fi.connectors},getConnector(t,e){return fi.connectors.find(r=>{var i;return r.explorerId===t||((i=r.info)==null?void 0:i.rdns)===e})}},_c=at.getApiUrl(),It=new p0({baseUrl:_c}),Sc="40",G0="4",At=ne({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),be={state:At,subscribeKey(t,e){return lt(At,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:r}=ue.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},async _fetchWalletImage(t){const e=`${It.baseUrl}/getWalletImage/${t}`,r=await It.getBlob({path:e,headers:be._getApiHeaders()});ao.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){const e=`${It.baseUrl}/public/getAssetImage/${t}`,r=await It.getBlob({path:e,headers:be._getApiHeaders()});ao.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){const e=`${It.baseUrl}/public/getAssetImage/${t}`,r=await It.getBlob({path:e,headers:be._getApiHeaders()});ao.setConnectorImage(t,URL.createObjectURL(r))},async _fetchCurrencyImage(t){const e=`${It.baseUrl}/public/getCurrencyImage/${t}`,r=await It.getBlob({path:e,headers:be._getApiHeaders()});ao.setCurrencyImage(t,URL.createObjectURL(r))},async _fetchTokenImage(t){const e=`${It.baseUrl}/public/getTokenImage/${t}`,r=await It.getBlob({path:e,headers:be._getApiHeaders()});ao.setTokenImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=Er.state,e=t==null?void 0:t.map(({imageId:r})=>r).filter(Boolean);e&&await Promise.allSettled(e.map(r=>be._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:t}=qs.state,e=t.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(e.map(r=>be._fetchConnectorImage(r)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>be._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>be._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=ue.state;if(t!=null&&t.length){const{data:e}=await It.get({path:"/getWallets",headers:be._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):G0,include:t==null?void 0:t.join(",")}});e.sort((i,o)=>t.indexOf(i.id)-t.indexOf(o.id));const r=e.map(i=>i.image_id).filter(Boolean);await Promise.allSettled(r.map(i=>be._fetchWalletImage(i))),At.featured=e}},async fetchRecommendedWallets(){var g;const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=ue.state,i=[...e??[],...r??[]].filter(Boolean),{data:o,count:n}=await It.get({path:"/getWallets",headers:be._getApiHeaders(),params:{page:"1",chains:(g=Er.state.caipNetwork)==null?void 0:g.id,entries:G0,include:t==null?void 0:t.join(","),exclude:i==null?void 0:i.join(",")}}),a=mi.getRecentWallets(),l=o.map(C=>C.image_id).filter(Boolean),h=a.map(C=>C.image_id).filter(Boolean);await Promise.allSettled([...l,...h].map(C=>be._fetchWalletImage(C))),At.recommended=o,At.count=n??0},async fetchWallets({page:t}){var h;const{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:i}=ue.state,o=[...At.recommended.map(({id:g})=>g),...r??[],...i??[]].filter(Boolean),{data:n,count:a}=await It.get({path:"/getWallets",headers:be._getApiHeaders(),params:{page:String(t),entries:Sc,chains:(h=Er.state.caipNetwork)==null?void 0:h.id,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),l=n.map(g=>g.image_id).filter(Boolean);await Promise.allSettled([...l.map(g=>be._fetchWalletImage(g)),at.wait(300)]),At.wallets=[...At.wallets,...n],At.count=a>At.count?a:At.count,At.page=t},async searchWallet({search:t}){var n;const{includeWalletIds:e,excludeWalletIds:r}=ue.state;At.search=[];const{data:i}=await It.get({path:"/getWallets",headers:be._getApiHeaders(),params:{page:"1",entries:"100",search:t==null?void 0:t.trim(),chains:(n=Er.state.caipNetwork)==null?void 0:n.id,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),o=i.map(a=>a.image_id).filter(Boolean);await Promise.allSettled([...o.map(a=>be._fetchWalletImage(a)),at.wait(300)]),At.search=i},async reFetchWallets(){At.page=1,At.wallets=[],await be.fetchFeaturedWallets(),await be.fetchRecommendedWallets()},prefetch(){const t=[be.fetchFeaturedWallets(),be.fetchRecommendedWallets(),be.fetchNetworkImages(),be.fetchConnectorImages()];ue.state.enableAnalytics===void 0&&t.push(be.fetchAnalyticsConfig()),At.prefetchPromise=Promise.race([Promise.allSettled(t),at.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:t}=await It.get({path:"/getAnalyticsConfig",headers:be._getApiHeaders()});ue.setEnableAnalytics(t)}},qi=ne({loading:!1,open:!1}),Ys={state:qi,subscribe(t){return dt(qi,()=>t(qi))},subscribeKey(t,e){return lt(qi,t,e)},async open(t){await be.state.prefetchPromise;const e=Tr.state.isConnected;t!=null&&t.view?Cr.reset(t.view):e?Cr.reset("Account"):Cr.reset("Connect"),qi.open=!0,vo.set({open:!0}),Sr.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const t=Tr.state.isConnected;qi.open=!1,vo.set({open:!1}),Sr.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}})},setLoading(t){qi.loading=t,vo.set({loading:t})}},q0={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},Ec={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},Tc={providers:gc,selectedProvider:null,error:null,purchaseCurrency:q0,paymentCurrency:Ec,purchaseCurrencies:[q0],paymentCurrencies:[],quotesLoading:!1};ne(Tc);ne({loading:!1});ne({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"});ne({suggestions:[],loading:!1});var X1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kc(t){var e=t.default;if(typeof e=="function"){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}),r}var Ic={exports:{}};/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/(function(t){(function(){var e="input is invalid type",r="finalize already called",i=typeof window=="object",o=i?window:{};o.JS_SHA3_NO_WINDOW&&(i=!1);var n=!i&&typeof self=="object",a=!o.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;a?o=X1:n&&(o=self);var l=!o.JS_SHA3_NO_COMMON_JS&&!0&&t.exports,h=!o.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",g="0123456789abcdef".split(""),C=[31,7936,2031616,520093696],A=[4,1024,262144,67108864],k=[1,256,65536,16777216],I=[6,1536,393216,100663296],N=[0,8,16,24],D=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],B=[224,256,384,512],q=[128,256],Q=["hex","buffer","arrayBuffer","array","digest"],ee={128:168,256:136};(o.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"}),h&&(o.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(d){return typeof d=="object"&&d.buffer&&d.buffer.constructor===ArrayBuffer});for(var X=function(d,M,R){return function(P){return new w(d,M,d).update(P)[R]()}},oe=function(d,M,R){return function(P,V){return new w(d,M,V).update(P)[R]()}},de=function(d,M,R){return function(P,V,F,z){return u["cshake"+d].update(P,V,F,z)[R]()}},ht=function(d,M,R){return function(P,V,F,z){return u["kmac"+d].update(P,V,F,z)[R]()}},ye=function(d,M,R,P){for(var V=0;V<Q.length;++V){var F=Q[V];d[F]=M(R,P,F)}return d},Et=function(d,M){var R=X(d,M,"hex");return R.create=function(){return new w(d,M,d)},R.update=function(P){return R.create().update(P)},ye(R,X,d,M)},Vt=function(d,M){var R=oe(d,M,"hex");return R.create=function(P){return new w(d,M,P)},R.update=function(P,V){return R.create(V).update(P)},ye(R,oe,d,M)},we=function(d,M){var R=ee[d],P=de(d,M,"hex");return P.create=function(V,F,z){return!F&&!z?u["shake"+d].create(V):new w(d,M,V).bytepad([F,z],R)},P.update=function(V,F,z,K){return P.create(F,z,K).update(V)},ye(P,de,d,M)},Zt=function(d,M){var R=ee[d],P=ht(d,M,"hex");return P.create=function(V,F,z){return new J(d,M,F).bytepad(["KMAC",z],R).bytepad([V],R)},P.update=function(V,F,z,K){return P.create(V,z,K).update(F)},ye(P,ht,d,M)},s=[{name:"keccak",padding:k,bits:B,createMethod:Et},{name:"sha3",padding:I,bits:B,createMethod:Et},{name:"shake",padding:C,bits:q,createMethod:Vt},{name:"cshake",padding:A,bits:q,createMethod:we},{name:"kmac",padding:A,bits:q,createMethod:Zt}],u={},p=[],v=0;v<s.length;++v)for(var y=s[v],x=y.bits,S=0;S<x.length;++S){var b=y.name+"_"+x[S];if(p.push(b),u[b]=y.createMethod(x[S],y.padding),y.name!=="sha3"){var c=y.name+x[S];p.push(c),u[c]=u[b]}}function w(d,M,R){this.blocks=[],this.s=[],this.padding=M,this.outputBits=R,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(d<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=R>>5,this.extraBytes=(R&31)>>3;for(var P=0;P<50;++P)this.s[P]=0}w.prototype.update=function(d){if(this.finalized)throw new Error(r);var M,R=typeof d;if(R!=="string"){if(R==="object"){if(d===null)throw new Error(e);if(h&&d.constructor===ArrayBuffer)d=new Uint8Array(d);else if(!Array.isArray(d)&&(!h||!ArrayBuffer.isView(d)))throw new Error(e)}else throw new Error(e);M=!0}for(var P=this.blocks,V=this.byteCount,F=d.length,z=this.blockCount,K=0,ie=this.s,H,Ce;K<F;){if(this.reset)for(this.reset=!1,P[0]=this.block,H=1;H<z+1;++H)P[H]=0;if(M)for(H=this.start;K<F&&H<V;++K)P[H>>2]|=d[K]<<N[H++&3];else for(H=this.start;K<F&&H<V;++K)Ce=d.charCodeAt(K),Ce<128?P[H>>2]|=Ce<<N[H++&3]:Ce<2048?(P[H>>2]|=(192|Ce>>6)<<N[H++&3],P[H>>2]|=(128|Ce&63)<<N[H++&3]):Ce<55296||Ce>=57344?(P[H>>2]|=(224|Ce>>12)<<N[H++&3],P[H>>2]|=(128|Ce>>6&63)<<N[H++&3],P[H>>2]|=(128|Ce&63)<<N[H++&3]):(Ce=65536+((Ce&1023)<<10|d.charCodeAt(++K)&1023),P[H>>2]|=(240|Ce>>18)<<N[H++&3],P[H>>2]|=(128|Ce>>12&63)<<N[H++&3],P[H>>2]|=(128|Ce>>6&63)<<N[H++&3],P[H>>2]|=(128|Ce&63)<<N[H++&3]);if(this.lastByteIndex=H,H>=V){for(this.start=H-V,this.block=P[z],H=0;H<z;++H)ie[H]^=P[H];Y(ie),this.reset=!0}else this.start=H}return this},w.prototype.encode=function(d,M){var R=d&255,P=1,V=[R];for(d=d>>8,R=d&255;R>0;)V.unshift(R),d=d>>8,R=d&255,++P;return M?V.push(P):V.unshift(P),this.update(V),V.length},w.prototype.encodeString=function(d){var M,R=typeof d;if(R!=="string"){if(R==="object"){if(d===null)throw new Error(e);if(h&&d.constructor===ArrayBuffer)d=new Uint8Array(d);else if(!Array.isArray(d)&&(!h||!ArrayBuffer.isView(d)))throw new Error(e)}else throw new Error(e);M=!0}var P=0,V=d.length;if(M)P=V;else for(var F=0;F<d.length;++F){var z=d.charCodeAt(F);z<128?P+=1:z<2048?P+=2:z<55296||z>=57344?P+=3:(z=65536+((z&1023)<<10|d.charCodeAt(++F)&1023),P+=4)}return P+=this.encode(P*8),this.update(d),P},w.prototype.bytepad=function(d,M){for(var R=this.encode(M),P=0;P<d.length;++P)R+=this.encodeString(d[P]);var V=M-R%M,F=[];return F.length=V,this.update(F),this},w.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var d=this.blocks,M=this.lastByteIndex,R=this.blockCount,P=this.s;if(d[M>>2]|=this.padding[M&3],this.lastByteIndex===this.byteCount)for(d[0]=d[R],M=1;M<R+1;++M)d[M]=0;for(d[R-1]|=2147483648,M=0;M<R;++M)P[M]^=d[M];Y(P)}},w.prototype.toString=w.prototype.hex=function(){this.finalize();for(var d=this.blockCount,M=this.s,R=this.outputBlocks,P=this.extraBytes,V=0,F=0,z="",K;F<R;){for(V=0;V<d&&F<R;++V,++F)K=M[V],z+=g[K>>4&15]+g[K&15]+g[K>>12&15]+g[K>>8&15]+g[K>>20&15]+g[K>>16&15]+g[K>>28&15]+g[K>>24&15];F%d===0&&(Y(M),V=0)}return P&&(K=M[V],z+=g[K>>4&15]+g[K&15],P>1&&(z+=g[K>>12&15]+g[K>>8&15]),P>2&&(z+=g[K>>20&15]+g[K>>16&15])),z},w.prototype.arrayBuffer=function(){this.finalize();var d=this.blockCount,M=this.s,R=this.outputBlocks,P=this.extraBytes,V=0,F=0,z=this.outputBits>>3,K;P?K=new ArrayBuffer(R+1<<2):K=new ArrayBuffer(z);for(var ie=new Uint32Array(K);F<R;){for(V=0;V<d&&F<R;++V,++F)ie[F]=M[V];F%d===0&&Y(M)}return P&&(ie[V]=M[V],K=K.slice(0,z)),K},w.prototype.buffer=w.prototype.arrayBuffer,w.prototype.digest=w.prototype.array=function(){this.finalize();for(var d=this.blockCount,M=this.s,R=this.outputBlocks,P=this.extraBytes,V=0,F=0,z=[],K,ie;F<R;){for(V=0;V<d&&F<R;++V,++F)K=F<<2,ie=M[V],z[K]=ie&255,z[K+1]=ie>>8&255,z[K+2]=ie>>16&255,z[K+3]=ie>>24&255;F%d===0&&Y(M)}return P&&(K=F<<2,ie=M[V],z[K]=ie&255,P>1&&(z[K+1]=ie>>8&255),P>2&&(z[K+2]=ie>>16&255)),z};function J(d,M,R){w.call(this,d,M,R)}J.prototype=new w,J.prototype.finalize=function(){return this.encode(this.outputBits,!0),w.prototype.finalize.call(this)};var Y=function(d){var M,R,P,V,F,z,K,ie,H,Ce,Ae,xe,Pi,_e,Se,$i,Ee,Te,Bi,ke,Ie,Oi,Re,Me,Ui,Ne,Pe,Di,$e,Be,Li,Oe,Ue,ji,De,Le,Fi,je,Fe,zi,ze,He,Hi,We,Ve,Wi,Ze,Ge,Vi,qe,Ye,Zi,Ke,Qe,Gi,Je,Xe,li,ci,ui,di,hi,pi;for(P=0;P<48;P+=2)V=d[0]^d[10]^d[20]^d[30]^d[40],F=d[1]^d[11]^d[21]^d[31]^d[41],z=d[2]^d[12]^d[22]^d[32]^d[42],K=d[3]^d[13]^d[23]^d[33]^d[43],ie=d[4]^d[14]^d[24]^d[34]^d[44],H=d[5]^d[15]^d[25]^d[35]^d[45],Ce=d[6]^d[16]^d[26]^d[36]^d[46],Ae=d[7]^d[17]^d[27]^d[37]^d[47],xe=d[8]^d[18]^d[28]^d[38]^d[48],Pi=d[9]^d[19]^d[29]^d[39]^d[49],M=xe^(z<<1|K>>>31),R=Pi^(K<<1|z>>>31),d[0]^=M,d[1]^=R,d[10]^=M,d[11]^=R,d[20]^=M,d[21]^=R,d[30]^=M,d[31]^=R,d[40]^=M,d[41]^=R,M=V^(ie<<1|H>>>31),R=F^(H<<1|ie>>>31),d[2]^=M,d[3]^=R,d[12]^=M,d[13]^=R,d[22]^=M,d[23]^=R,d[32]^=M,d[33]^=R,d[42]^=M,d[43]^=R,M=z^(Ce<<1|Ae>>>31),R=K^(Ae<<1|Ce>>>31),d[4]^=M,d[5]^=R,d[14]^=M,d[15]^=R,d[24]^=M,d[25]^=R,d[34]^=M,d[35]^=R,d[44]^=M,d[45]^=R,M=ie^(xe<<1|Pi>>>31),R=H^(Pi<<1|xe>>>31),d[6]^=M,d[7]^=R,d[16]^=M,d[17]^=R,d[26]^=M,d[27]^=R,d[36]^=M,d[37]^=R,d[46]^=M,d[47]^=R,M=Ce^(V<<1|F>>>31),R=Ae^(F<<1|V>>>31),d[8]^=M,d[9]^=R,d[18]^=M,d[19]^=R,d[28]^=M,d[29]^=R,d[38]^=M,d[39]^=R,d[48]^=M,d[49]^=R,_e=d[0],Se=d[1],Wi=d[11]<<4|d[10]>>>28,Ze=d[10]<<4|d[11]>>>28,Di=d[20]<<3|d[21]>>>29,$e=d[21]<<3|d[20]>>>29,ui=d[31]<<9|d[30]>>>23,di=d[30]<<9|d[31]>>>23,He=d[40]<<18|d[41]>>>14,Hi=d[41]<<18|d[40]>>>14,ji=d[2]<<1|d[3]>>>31,De=d[3]<<1|d[2]>>>31,$i=d[13]<<12|d[12]>>>20,Ee=d[12]<<12|d[13]>>>20,Ge=d[22]<<10|d[23]>>>22,Vi=d[23]<<10|d[22]>>>22,Be=d[33]<<13|d[32]>>>19,Li=d[32]<<13|d[33]>>>19,hi=d[42]<<2|d[43]>>>30,pi=d[43]<<2|d[42]>>>30,Qe=d[5]<<30|d[4]>>>2,Gi=d[4]<<30|d[5]>>>2,Le=d[14]<<6|d[15]>>>26,Fi=d[15]<<6|d[14]>>>26,Te=d[25]<<11|d[24]>>>21,Bi=d[24]<<11|d[25]>>>21,qe=d[34]<<15|d[35]>>>17,Ye=d[35]<<15|d[34]>>>17,Oe=d[45]<<29|d[44]>>>3,Ue=d[44]<<29|d[45]>>>3,Me=d[6]<<28|d[7]>>>4,Ui=d[7]<<28|d[6]>>>4,Je=d[17]<<23|d[16]>>>9,Xe=d[16]<<23|d[17]>>>9,je=d[26]<<25|d[27]>>>7,Fe=d[27]<<25|d[26]>>>7,ke=d[36]<<21|d[37]>>>11,Ie=d[37]<<21|d[36]>>>11,Zi=d[47]<<24|d[46]>>>8,Ke=d[46]<<24|d[47]>>>8,We=d[8]<<27|d[9]>>>5,Ve=d[9]<<27|d[8]>>>5,Ne=d[18]<<20|d[19]>>>12,Pe=d[19]<<20|d[18]>>>12,li=d[29]<<7|d[28]>>>25,ci=d[28]<<7|d[29]>>>25,zi=d[38]<<8|d[39]>>>24,ze=d[39]<<8|d[38]>>>24,Oi=d[48]<<14|d[49]>>>18,Re=d[49]<<14|d[48]>>>18,d[0]=_e^~$i&Te,d[1]=Se^~Ee&Bi,d[10]=Me^~Ne&Di,d[11]=Ui^~Pe&$e,d[20]=ji^~Le&je,d[21]=De^~Fi&Fe,d[30]=We^~Wi&Ge,d[31]=Ve^~Ze&Vi,d[40]=Qe^~Je&li,d[41]=Gi^~Xe&ci,d[2]=$i^~Te&ke,d[3]=Ee^~Bi&Ie,d[12]=Ne^~Di&Be,d[13]=Pe^~$e&Li,d[22]=Le^~je&zi,d[23]=Fi^~Fe&ze,d[32]=Wi^~Ge&qe,d[33]=Ze^~Vi&Ye,d[42]=Je^~li&ui,d[43]=Xe^~ci&di,d[4]=Te^~ke&Oi,d[5]=Bi^~Ie&Re,d[14]=Di^~Be&Oe,d[15]=$e^~Li&Ue,d[24]=je^~zi&He,d[25]=Fe^~ze&Hi,d[34]=Ge^~qe&Zi,d[35]=Vi^~Ye&Ke,d[44]=li^~ui&hi,d[45]=ci^~di&pi,d[6]=ke^~Oi&_e,d[7]=Ie^~Re&Se,d[16]=Be^~Oe&Me,d[17]=Li^~Ue&Ui,d[26]=zi^~He&ji,d[27]=ze^~Hi&De,d[36]=qe^~Zi&We,d[37]=Ye^~Ke&Ve,d[46]=ui^~hi&Qe,d[47]=di^~pi&Gi,d[8]=Oi^~_e&$i,d[9]=Re^~Se&Ee,d[18]=Oe^~Me&Ne,d[19]=Ue^~Ui&Pe,d[28]=He^~ji&Le,d[29]=Hi^~De&Fi,d[38]=Zi^~We&Wi,d[39]=Ke^~Ve&Ze,d[48]=hi^~Qe&Je,d[49]=pi^~Gi&Xe,d[0]^=D[P],d[1]^=D[P+1]};if(l)t.exports=u;else for(v=0;v<p.length;++v)o[p[v]]=u[p[v]]})()})(Ic);const Rc="logger/5.7.0";let Y0=!1,K0=!1;const ga={debug:1,default:2,info:2,warning:3,error:4,off:5};let Q0=ga.default,ys=null;function Mc(){try{const t=[];if(["NFD","NFC","NFKD","NFKC"].forEach(e=>{try{if("test".normalize(e)!=="test")throw new Error("bad normalize")}catch{t.push(e)}}),t.length)throw new Error("missing "+t.join(", "));if("é".normalize("NFD")!=="é")throw new Error("broken implementation")}catch(t){return t.message}return null}const J0=Mc();var Ks;(function(t){t.DEBUG="DEBUG",t.INFO="INFO",t.WARNING="WARNING",t.ERROR="ERROR",t.OFF="OFF"})(Ks||(Ks={}));var sr;(function(t){t.UNKNOWN_ERROR="UNKNOWN_ERROR",t.NOT_IMPLEMENTED="NOT_IMPLEMENTED",t.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",t.NETWORK_ERROR="NETWORK_ERROR",t.SERVER_ERROR="SERVER_ERROR",t.TIMEOUT="TIMEOUT",t.BUFFER_OVERRUN="BUFFER_OVERRUN",t.NUMERIC_FAULT="NUMERIC_FAULT",t.MISSING_NEW="MISSING_NEW",t.INVALID_ARGUMENT="INVALID_ARGUMENT",t.MISSING_ARGUMENT="MISSING_ARGUMENT",t.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",t.CALL_EXCEPTION="CALL_EXCEPTION",t.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",t.NONCE_EXPIRED="NONCE_EXPIRED",t.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",t.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",t.TRANSACTION_REPLACED="TRANSACTION_REPLACED",t.ACTION_REJECTED="ACTION_REJECTED"})(sr||(sr={}));const X0="0123456789abcdef";class he{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,r){const i=e.toLowerCase();ga[i]==null&&this.throwArgumentError("invalid log level name","logLevel",e),!(Q0>ga[i])&&console.log.apply(console,r)}debug(...e){this._log(he.levels.DEBUG,e)}info(...e){this._log(he.levels.INFO,e)}warn(...e){this._log(he.levels.WARNING,e)}makeError(e,r,i){if(K0)return this.makeError("censored error",r,{});r||(r=he.errors.UNKNOWN_ERROR),i||(i={});const o=[];Object.keys(i).forEach(h=>{const g=i[h];try{if(g instanceof Uint8Array){let C="";for(let A=0;A<g.length;A++)C+=X0[g[A]>>4],C+=X0[g[A]&15];o.push(h+"=Uint8Array(0x"+C+")")}else o.push(h+"="+JSON.stringify(g))}catch{o.push(h+"="+JSON.stringify(i[h].toString()))}}),o.push(`code=${r}`),o.push(`version=${this.version}`);const n=e;let a="";switch(r){case sr.NUMERIC_FAULT:{a="NUMERIC_FAULT";const h=e;switch(h){case"overflow":case"underflow":case"division-by-zero":a+="-"+h;break;case"negative-power":case"negative-width":a+="-unsupported";break;case"unbound-bitwise-result":a+="-unbound-result";break}break}case sr.CALL_EXCEPTION:case sr.INSUFFICIENT_FUNDS:case sr.MISSING_NEW:case sr.NONCE_EXPIRED:case sr.REPLACEMENT_UNDERPRICED:case sr.TRANSACTION_REPLACED:case sr.UNPREDICTABLE_GAS_LIMIT:a=r;break}a&&(e+=" [ See: https://links.ethers.org/v5-errors-"+a+" ]"),o.length&&(e+=" ("+o.join(", ")+")");const l=new Error(e);return l.reason=n,l.code=r,Object.keys(i).forEach(function(h){l[h]=i[h]}),l}throwError(e,r,i){throw this.makeError(e,r,i)}throwArgumentError(e,r,i){return this.throwError(e,he.errors.INVALID_ARGUMENT,{argument:r,value:i})}assert(e,r,i,o){e||this.throwError(r,i,o)}assertArgument(e,r,i,o){e||this.throwArgumentError(r,i,o)}checkNormalize(e){J0&&this.throwError("platform missing String.prototype.normalize",he.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:J0})}checkSafeUint53(e,r){typeof e=="number"&&(r==null&&(r="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(r,he.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(r,he.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,r,i){i?i=": "+i:i="",e<r&&this.throwError("missing argument"+i,he.errors.MISSING_ARGUMENT,{count:e,expectedCount:r}),e>r&&this.throwError("too many arguments"+i,he.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:r})}checkNew(e,r){(e===Object||e==null)&&this.throwError("missing new",he.errors.MISSING_NEW,{name:r.name})}checkAbstract(e,r){e===r?this.throwError("cannot instantiate abstract class "+JSON.stringify(r.name)+" directly; use a sub-class",he.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):(e===Object||e==null)&&this.throwError("missing new",he.errors.MISSING_NEW,{name:r.name})}static globalLogger(){return ys||(ys=new he(Rc)),ys}static setCensorship(e,r){if(!e&&r&&this.globalLogger().throwError("cannot permanently disable censorship",he.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),Y0){if(!e)return;this.globalLogger().throwError("error censorship permanent",he.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}K0=!!e,Y0=!!r}static setLogLevel(e){const r=ga[e.toLowerCase()];if(r==null){he.globalLogger().warn("invalid log level - "+e);return}Q0=r}static from(e){return new he(e)}}he.errors=sr,he.levels=Ks;const Nc="bytes/5.7.0",Ci=new he(Nc);function el(t){return!!t.toHexString}function ma(t){return t.slice||(t.slice=function(){const e=Array.prototype.slice.call(arguments);return ma(new Uint8Array(Array.prototype.slice.apply(t,e)))}),t}function e1(t){return typeof t=="number"&&t==t&&t%1===0}function Ko(t){if(t==null)return!1;if(t.constructor===Uint8Array)return!0;if(typeof t=="string"||!e1(t.length)||t.length<0)return!1;for(let e=0;e<t.length;e++){const r=t[e];if(!e1(r)||r<0||r>=256)return!1}return!0}function tl(t,e){if(e||(e={}),typeof t=="number"){Ci.checkSafeUint53(t,"invalid arrayify value");const r=[];for(;t;)r.unshift(t&255),t=parseInt(String(t/256));return r.length===0&&r.push(0),ma(new Uint8Array(r))}if(e.allowMissingPrefix&&typeof t=="string"&&t.substring(0,2)!=="0x"&&(t="0x"+t),el(t)&&(t=t.toHexString()),Pn(t)){let r=t.substring(2);r.length%2&&(e.hexPad==="left"?r="0"+r:e.hexPad==="right"?r+="0":Ci.throwArgumentError("hex data is odd-length","value",t));const i=[];for(let o=0;o<r.length;o+=2)i.push(parseInt(r.substring(o,o+2),16));return ma(new Uint8Array(i))}return Ko(t)?ma(new Uint8Array(t)):Ci.throwArgumentError("invalid arrayify value","value",t)}function Pn(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e)}const Cs="0123456789abcdef";function rl(t,e){if(e||(e={}),typeof t=="number"){Ci.checkSafeUint53(t,"invalid hexlify value");let r="";for(;t;)r=Cs[t&15]+r,t=Math.floor(t/16);return r.length?(r.length%2&&(r="0"+r),"0x"+r):"0x00"}if(typeof t=="bigint")return t=t.toString(16),t.length%2?"0x0"+t:"0x"+t;if(e.allowMissingPrefix&&typeof t=="string"&&t.substring(0,2)!=="0x"&&(t="0x"+t),el(t))return t.toHexString();if(Pn(t))return t.length%2&&(e.hexPad==="left"?t="0x0"+t.substring(2):e.hexPad==="right"?t+="0":Ci.throwArgumentError("hex data is odd-length","value",t)),t.toLowerCase();if(Ko(t)){let r="0x";for(let i=0;i<t.length;i++){let o=t[i];r+=Cs[(o&240)>>4]+Cs[o&15]}return r}return Ci.throwArgumentError("invalid hexlify value","value",t)}function xa(t,e){for(typeof t!="string"?t=rl(t):Pn(t)||Ci.throwArgumentError("invalid hex string","value",t),t.length>2*e+2&&Ci.throwArgumentError("value out of range","value",arguments[1]);t.length<2*e+2;)t="0x0"+t.substring(2);return t}var il={exports:{}},Pc={},$c=Object.freeze({__proto__:null,default:Pc}),Bc=kc($c);(function(t){(function(e,r){function i(s,u){if(!s)throw new Error(u||"Assertion failed")}function o(s,u){s.super_=u;var p=function(){};p.prototype=u.prototype,s.prototype=new p,s.prototype.constructor=s}function n(s,u,p){if(n.isBN(s))return s;this.negative=0,this.words=null,this.length=0,this.red=null,s!==null&&((u==="le"||u==="be")&&(p=u,u=10),this._init(s||0,u||10,p||"be"))}typeof e=="object"?e.exports=n:r.BN=n,n.BN=n,n.wordSize=26;var a;try{typeof window<"u"&&typeof window.Buffer<"u"?a=window.Buffer:a=Bc.Buffer}catch{}n.isBN=function(s){return s instanceof n?!0:s!==null&&typeof s=="object"&&s.constructor.wordSize===n.wordSize&&Array.isArray(s.words)},n.max=function(s,u){return s.cmp(u)>0?s:u},n.min=function(s,u){return s.cmp(u)<0?s:u},n.prototype._init=function(s,u,p){if(typeof s=="number")return this._initNumber(s,u,p);if(typeof s=="object")return this._initArray(s,u,p);u==="hex"&&(u=16),i(u===(u|0)&&u>=2&&u<=36),s=s.toString().replace(/\s+/g,"");var v=0;s[0]==="-"&&(v++,this.negative=1),v<s.length&&(u===16?this._parseHex(s,v,p):(this._parseBase(s,u,v),p==="le"&&this._initArray(this.toArray(),u,p)))},n.prototype._initNumber=function(s,u,p){s<0&&(this.negative=1,s=-s),s<67108864?(this.words=[s&67108863],this.length=1):s<4503599627370496?(this.words=[s&67108863,s/67108864&67108863],this.length=2):(i(s<9007199254740992),this.words=[s&67108863,s/67108864&67108863,1],this.length=3),p==="le"&&this._initArray(this.toArray(),u,p)},n.prototype._initArray=function(s,u,p){if(i(typeof s.length=="number"),s.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(s.length/3),this.words=new Array(this.length);for(var v=0;v<this.length;v++)this.words[v]=0;var y,x,S=0;if(p==="be")for(v=s.length-1,y=0;v>=0;v-=3)x=s[v]|s[v-1]<<8|s[v-2]<<16,this.words[y]|=x<<S&67108863,this.words[y+1]=x>>>26-S&67108863,S+=24,S>=26&&(S-=26,y++);else if(p==="le")for(v=0,y=0;v<s.length;v+=3)x=s[v]|s[v+1]<<8|s[v+2]<<16,this.words[y]|=x<<S&67108863,this.words[y+1]=x>>>26-S&67108863,S+=24,S>=26&&(S-=26,y++);return this._strip()};function l(s,u){var p=s.charCodeAt(u);if(p>=48&&p<=57)return p-48;if(p>=65&&p<=70)return p-55;if(p>=97&&p<=102)return p-87;i(!1,"Invalid character in "+s)}function h(s,u,p){var v=l(s,p);return p-1>=u&&(v|=l(s,p-1)<<4),v}n.prototype._parseHex=function(s,u,p){this.length=Math.ceil((s.length-u)/6),this.words=new Array(this.length);for(var v=0;v<this.length;v++)this.words[v]=0;var y=0,x=0,S;if(p==="be")for(v=s.length-1;v>=u;v-=2)S=h(s,u,v)<<y,this.words[x]|=S&67108863,y>=18?(y-=18,x+=1,this.words[x]|=S>>>26):y+=8;else{var b=s.length-u;for(v=b%2===0?u+1:u;v<s.length;v+=2)S=h(s,u,v)<<y,this.words[x]|=S&67108863,y>=18?(y-=18,x+=1,this.words[x]|=S>>>26):y+=8}this._strip()};function g(s,u,p,v){for(var y=0,x=0,S=Math.min(s.length,p),b=u;b<S;b++){var c=s.charCodeAt(b)-48;y*=v,c>=49?x=c-49+10:c>=17?x=c-17+10:x=c,i(c>=0&&x<v,"Invalid character"),y+=x}return y}n.prototype._parseBase=function(s,u,p){this.words=[0],this.length=1;for(var v=0,y=1;y<=67108863;y*=u)v++;v--,y=y/u|0;for(var x=s.length-p,S=x%v,b=Math.min(x,x-S)+p,c=0,w=p;w<b;w+=v)c=g(s,w,w+v,u),this.imuln(y),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c);if(S!==0){var J=1;for(c=g(s,w,s.length,u),w=0;w<S;w++)J*=u;this.imuln(J),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)}this._strip()},n.prototype.copy=function(s){s.words=new Array(this.length);for(var u=0;u<this.length;u++)s.words[u]=this.words[u];s.length=this.length,s.negative=this.negative,s.red=this.red};function C(s,u){s.words=u.words,s.length=u.length,s.negative=u.negative,s.red=u.red}if(n.prototype._move=function(s){C(s,this)},n.prototype.clone=function(){var s=new n(null);return this.copy(s),s},n.prototype._expand=function(s){for(;this.length<s;)this.words[this.length++]=0;return this},n.prototype._strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},n.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},typeof Symbol<"u"&&typeof Symbol.for=="function")try{n.prototype[Symbol.for("nodejs.util.inspect.custom")]=A}catch{n.prototype.inspect=A}else n.prototype.inspect=A;function A(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var k=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],I=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],N=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];n.prototype.toString=function(s,u){s=s||10,u=u|0||1;var p;if(s===16||s==="hex"){p="";for(var v=0,y=0,x=0;x<this.length;x++){var S=this.words[x],b=((S<<v|y)&16777215).toString(16);y=S>>>24-v&16777215,v+=2,v>=26&&(v-=26,x--),y!==0||x!==this.length-1?p=k[6-b.length]+b+p:p=b+p}for(y!==0&&(p=y.toString(16)+p);p.length%u!==0;)p="0"+p;return this.negative!==0&&(p="-"+p),p}if(s===(s|0)&&s>=2&&s<=36){var c=I[s],w=N[s];p="";var J=this.clone();for(J.negative=0;!J.isZero();){var Y=J.modrn(w).toString(s);J=J.idivn(w),J.isZero()?p=Y+p:p=k[c-Y.length]+Y+p}for(this.isZero()&&(p="0"+p);p.length%u!==0;)p="0"+p;return this.negative!==0&&(p="-"+p),p}i(!1,"Base should be between 2 and 36")},n.prototype.toNumber=function(){var s=this.words[0];return this.length===2?s+=this.words[1]*67108864:this.length===3&&this.words[2]===1?s+=4503599627370496+this.words[1]*67108864:this.length>2&&i(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-s:s},n.prototype.toJSON=function(){return this.toString(16,2)},a&&(n.prototype.toBuffer=function(s,u){return this.toArrayLike(a,s,u)}),n.prototype.toArray=function(s,u){return this.toArrayLike(Array,s,u)};var D=function(s,u){return s.allocUnsafe?s.allocUnsafe(u):new s(u)};n.prototype.toArrayLike=function(s,u,p){this._strip();var v=this.byteLength(),y=p||Math.max(1,v);i(v<=y,"byte array longer than desired length"),i(y>0,"Requested array length <= 0");var x=D(s,y),S=u==="le"?"LE":"BE";return this["_toArrayLike"+S](x,v),x},n.prototype._toArrayLikeLE=function(s,u){for(var p=0,v=0,y=0,x=0;y<this.length;y++){var S=this.words[y]<<x|v;s[p++]=S&255,p<s.length&&(s[p++]=S>>8&255),p<s.length&&(s[p++]=S>>16&255),x===6?(p<s.length&&(s[p++]=S>>24&255),v=0,x=0):(v=S>>>24,x+=2)}if(p<s.length)for(s[p++]=v;p<s.length;)s[p++]=0},n.prototype._toArrayLikeBE=function(s,u){for(var p=s.length-1,v=0,y=0,x=0;y<this.length;y++){var S=this.words[y]<<x|v;s[p--]=S&255,p>=0&&(s[p--]=S>>8&255),p>=0&&(s[p--]=S>>16&255),x===6?(p>=0&&(s[p--]=S>>24&255),v=0,x=0):(v=S>>>24,x+=2)}if(p>=0)for(s[p--]=v;p>=0;)s[p--]=0},Math.clz32?n.prototype._countBits=function(s){return 32-Math.clz32(s)}:n.prototype._countBits=function(s){var u=s,p=0;return u>=4096&&(p+=13,u>>>=13),u>=64&&(p+=7,u>>>=7),u>=8&&(p+=4,u>>>=4),u>=2&&(p+=2,u>>>=2),p+u},n.prototype._zeroBits=function(s){if(s===0)return 26;var u=s,p=0;return u&8191||(p+=13,u>>>=13),u&127||(p+=7,u>>>=7),u&15||(p+=4,u>>>=4),u&3||(p+=2,u>>>=2),u&1||p++,p},n.prototype.bitLength=function(){var s=this.words[this.length-1],u=this._countBits(s);return(this.length-1)*26+u};function B(s){for(var u=new Array(s.bitLength()),p=0;p<u.length;p++){var v=p/26|0,y=p%26;u[p]=s.words[v]>>>y&1}return u}n.prototype.zeroBits=function(){if(this.isZero())return 0;for(var s=0,u=0;u<this.length;u++){var p=this._zeroBits(this.words[u]);if(s+=p,p!==26)break}return s},n.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},n.prototype.toTwos=function(s){return this.negative!==0?this.abs().inotn(s).iaddn(1):this.clone()},n.prototype.fromTwos=function(s){return this.testn(s-1)?this.notn(s).iaddn(1).ineg():this.clone()},n.prototype.isNeg=function(){return this.negative!==0},n.prototype.neg=function(){return this.clone().ineg()},n.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},n.prototype.iuor=function(s){for(;this.length<s.length;)this.words[this.length++]=0;for(var u=0;u<s.length;u++)this.words[u]=this.words[u]|s.words[u];return this._strip()},n.prototype.ior=function(s){return i((this.negative|s.negative)===0),this.iuor(s)},n.prototype.or=function(s){return this.length>s.length?this.clone().ior(s):s.clone().ior(this)},n.prototype.uor=function(s){return this.length>s.length?this.clone().iuor(s):s.clone().iuor(this)},n.prototype.iuand=function(s){var u;this.length>s.length?u=s:u=this;for(var p=0;p<u.length;p++)this.words[p]=this.words[p]&s.words[p];return this.length=u.length,this._strip()},n.prototype.iand=function(s){return i((this.negative|s.negative)===0),this.iuand(s)},n.prototype.and=function(s){return this.length>s.length?this.clone().iand(s):s.clone().iand(this)},n.prototype.uand=function(s){return this.length>s.length?this.clone().iuand(s):s.clone().iuand(this)},n.prototype.iuxor=function(s){var u,p;this.length>s.length?(u=this,p=s):(u=s,p=this);for(var v=0;v<p.length;v++)this.words[v]=u.words[v]^p.words[v];if(this!==u)for(;v<u.length;v++)this.words[v]=u.words[v];return this.length=u.length,this._strip()},n.prototype.ixor=function(s){return i((this.negative|s.negative)===0),this.iuxor(s)},n.prototype.xor=function(s){return this.length>s.length?this.clone().ixor(s):s.clone().ixor(this)},n.prototype.uxor=function(s){return this.length>s.length?this.clone().iuxor(s):s.clone().iuxor(this)},n.prototype.inotn=function(s){i(typeof s=="number"&&s>=0);var u=Math.ceil(s/26)|0,p=s%26;this._expand(u),p>0&&u--;for(var v=0;v<u;v++)this.words[v]=~this.words[v]&67108863;return p>0&&(this.words[v]=~this.words[v]&67108863>>26-p),this._strip()},n.prototype.notn=function(s){return this.clone().inotn(s)},n.prototype.setn=function(s,u){i(typeof s=="number"&&s>=0);var p=s/26|0,v=s%26;return this._expand(p+1),u?this.words[p]=this.words[p]|1<<v:this.words[p]=this.words[p]&~(1<<v),this._strip()},n.prototype.iadd=function(s){var u;if(this.negative!==0&&s.negative===0)return this.negative=0,u=this.isub(s),this.negative^=1,this._normSign();if(this.negative===0&&s.negative!==0)return s.negative=0,u=this.isub(s),s.negative=1,u._normSign();var p,v;this.length>s.length?(p=this,v=s):(p=s,v=this);for(var y=0,x=0;x<v.length;x++)u=(p.words[x]|0)+(v.words[x]|0)+y,this.words[x]=u&67108863,y=u>>>26;for(;y!==0&&x<p.length;x++)u=(p.words[x]|0)+y,this.words[x]=u&67108863,y=u>>>26;if(this.length=p.length,y!==0)this.words[this.length]=y,this.length++;else if(p!==this)for(;x<p.length;x++)this.words[x]=p.words[x];return this},n.prototype.add=function(s){var u;return s.negative!==0&&this.negative===0?(s.negative=0,u=this.sub(s),s.negative^=1,u):s.negative===0&&this.negative!==0?(this.negative=0,u=s.sub(this),this.negative=1,u):this.length>s.length?this.clone().iadd(s):s.clone().iadd(this)},n.prototype.isub=function(s){if(s.negative!==0){s.negative=0;var u=this.iadd(s);return s.negative=1,u._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(s),this.negative=1,this._normSign();var p=this.cmp(s);if(p===0)return this.negative=0,this.length=1,this.words[0]=0,this;var v,y;p>0?(v=this,y=s):(v=s,y=this);for(var x=0,S=0;S<y.length;S++)u=(v.words[S]|0)-(y.words[S]|0)+x,x=u>>26,this.words[S]=u&67108863;for(;x!==0&&S<v.length;S++)u=(v.words[S]|0)+x,x=u>>26,this.words[S]=u&67108863;if(x===0&&S<v.length&&v!==this)for(;S<v.length;S++)this.words[S]=v.words[S];return this.length=Math.max(this.length,S),v!==this&&(this.negative=1),this._strip()},n.prototype.sub=function(s){return this.clone().isub(s)};function q(s,u,p){p.negative=u.negative^s.negative;var v=s.length+u.length|0;p.length=v,v=v-1|0;var y=s.words[0]|0,x=u.words[0]|0,S=y*x,b=S&67108863,c=S/67108864|0;p.words[0]=b;for(var w=1;w<v;w++){for(var J=c>>>26,Y=c&67108863,d=Math.min(w,u.length-1),M=Math.max(0,w-s.length+1);M<=d;M++){var R=w-M|0;y=s.words[R]|0,x=u.words[M]|0,S=y*x+Y,J+=S/67108864|0,Y=S&67108863}p.words[w]=Y|0,c=J|0}return c!==0?p.words[w]=c|0:p.length--,p._strip()}var Q=function(s,u,p){var v=s.words,y=u.words,x=p.words,S=0,b,c,w,J=v[0]|0,Y=J&8191,d=J>>>13,M=v[1]|0,R=M&8191,P=M>>>13,V=v[2]|0,F=V&8191,z=V>>>13,K=v[3]|0,ie=K&8191,H=K>>>13,Ce=v[4]|0,Ae=Ce&8191,xe=Ce>>>13,Pi=v[5]|0,_e=Pi&8191,Se=Pi>>>13,$i=v[6]|0,Ee=$i&8191,Te=$i>>>13,Bi=v[7]|0,ke=Bi&8191,Ie=Bi>>>13,Oi=v[8]|0,Re=Oi&8191,Me=Oi>>>13,Ui=v[9]|0,Ne=Ui&8191,Pe=Ui>>>13,Di=y[0]|0,$e=Di&8191,Be=Di>>>13,Li=y[1]|0,Oe=Li&8191,Ue=Li>>>13,ji=y[2]|0,De=ji&8191,Le=ji>>>13,Fi=y[3]|0,je=Fi&8191,Fe=Fi>>>13,zi=y[4]|0,ze=zi&8191,He=zi>>>13,Hi=y[5]|0,We=Hi&8191,Ve=Hi>>>13,Wi=y[6]|0,Ze=Wi&8191,Ge=Wi>>>13,Vi=y[7]|0,qe=Vi&8191,Ye=Vi>>>13,Zi=y[8]|0,Ke=Zi&8191,Qe=Zi>>>13,Gi=y[9]|0,Je=Gi&8191,Xe=Gi>>>13;p.negative=s.negative^u.negative,p.length=19,b=Math.imul(Y,$e),c=Math.imul(Y,Be),c=c+Math.imul(d,$e)|0,w=Math.imul(d,Be);var li=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(li>>>26)|0,li&=67108863,b=Math.imul(R,$e),c=Math.imul(R,Be),c=c+Math.imul(P,$e)|0,w=Math.imul(P,Be),b=b+Math.imul(Y,Oe)|0,c=c+Math.imul(Y,Ue)|0,c=c+Math.imul(d,Oe)|0,w=w+Math.imul(d,Ue)|0;var ci=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(ci>>>26)|0,ci&=67108863,b=Math.imul(F,$e),c=Math.imul(F,Be),c=c+Math.imul(z,$e)|0,w=Math.imul(z,Be),b=b+Math.imul(R,Oe)|0,c=c+Math.imul(R,Ue)|0,c=c+Math.imul(P,Oe)|0,w=w+Math.imul(P,Ue)|0,b=b+Math.imul(Y,De)|0,c=c+Math.imul(Y,Le)|0,c=c+Math.imul(d,De)|0,w=w+Math.imul(d,Le)|0;var ui=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(ui>>>26)|0,ui&=67108863,b=Math.imul(ie,$e),c=Math.imul(ie,Be),c=c+Math.imul(H,$e)|0,w=Math.imul(H,Be),b=b+Math.imul(F,Oe)|0,c=c+Math.imul(F,Ue)|0,c=c+Math.imul(z,Oe)|0,w=w+Math.imul(z,Ue)|0,b=b+Math.imul(R,De)|0,c=c+Math.imul(R,Le)|0,c=c+Math.imul(P,De)|0,w=w+Math.imul(P,Le)|0,b=b+Math.imul(Y,je)|0,c=c+Math.imul(Y,Fe)|0,c=c+Math.imul(d,je)|0,w=w+Math.imul(d,Fe)|0;var di=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(di>>>26)|0,di&=67108863,b=Math.imul(Ae,$e),c=Math.imul(Ae,Be),c=c+Math.imul(xe,$e)|0,w=Math.imul(xe,Be),b=b+Math.imul(ie,Oe)|0,c=c+Math.imul(ie,Ue)|0,c=c+Math.imul(H,Oe)|0,w=w+Math.imul(H,Ue)|0,b=b+Math.imul(F,De)|0,c=c+Math.imul(F,Le)|0,c=c+Math.imul(z,De)|0,w=w+Math.imul(z,Le)|0,b=b+Math.imul(R,je)|0,c=c+Math.imul(R,Fe)|0,c=c+Math.imul(P,je)|0,w=w+Math.imul(P,Fe)|0,b=b+Math.imul(Y,ze)|0,c=c+Math.imul(Y,He)|0,c=c+Math.imul(d,ze)|0,w=w+Math.imul(d,He)|0;var hi=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(hi>>>26)|0,hi&=67108863,b=Math.imul(_e,$e),c=Math.imul(_e,Be),c=c+Math.imul(Se,$e)|0,w=Math.imul(Se,Be),b=b+Math.imul(Ae,Oe)|0,c=c+Math.imul(Ae,Ue)|0,c=c+Math.imul(xe,Oe)|0,w=w+Math.imul(xe,Ue)|0,b=b+Math.imul(ie,De)|0,c=c+Math.imul(ie,Le)|0,c=c+Math.imul(H,De)|0,w=w+Math.imul(H,Le)|0,b=b+Math.imul(F,je)|0,c=c+Math.imul(F,Fe)|0,c=c+Math.imul(z,je)|0,w=w+Math.imul(z,Fe)|0,b=b+Math.imul(R,ze)|0,c=c+Math.imul(R,He)|0,c=c+Math.imul(P,ze)|0,w=w+Math.imul(P,He)|0,b=b+Math.imul(Y,We)|0,c=c+Math.imul(Y,Ve)|0,c=c+Math.imul(d,We)|0,w=w+Math.imul(d,Ve)|0;var pi=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(pi>>>26)|0,pi&=67108863,b=Math.imul(Ee,$e),c=Math.imul(Ee,Be),c=c+Math.imul(Te,$e)|0,w=Math.imul(Te,Be),b=b+Math.imul(_e,Oe)|0,c=c+Math.imul(_e,Ue)|0,c=c+Math.imul(Se,Oe)|0,w=w+Math.imul(Se,Ue)|0,b=b+Math.imul(Ae,De)|0,c=c+Math.imul(Ae,Le)|0,c=c+Math.imul(xe,De)|0,w=w+Math.imul(xe,Le)|0,b=b+Math.imul(ie,je)|0,c=c+Math.imul(ie,Fe)|0,c=c+Math.imul(H,je)|0,w=w+Math.imul(H,Fe)|0,b=b+Math.imul(F,ze)|0,c=c+Math.imul(F,He)|0,c=c+Math.imul(z,ze)|0,w=w+Math.imul(z,He)|0,b=b+Math.imul(R,We)|0,c=c+Math.imul(R,Ve)|0,c=c+Math.imul(P,We)|0,w=w+Math.imul(P,Ve)|0,b=b+Math.imul(Y,Ze)|0,c=c+Math.imul(Y,Ge)|0,c=c+Math.imul(d,Ze)|0,w=w+Math.imul(d,Ge)|0;var ns=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(ns>>>26)|0,ns&=67108863,b=Math.imul(ke,$e),c=Math.imul(ke,Be),c=c+Math.imul(Ie,$e)|0,w=Math.imul(Ie,Be),b=b+Math.imul(Ee,Oe)|0,c=c+Math.imul(Ee,Ue)|0,c=c+Math.imul(Te,Oe)|0,w=w+Math.imul(Te,Ue)|0,b=b+Math.imul(_e,De)|0,c=c+Math.imul(_e,Le)|0,c=c+Math.imul(Se,De)|0,w=w+Math.imul(Se,Le)|0,b=b+Math.imul(Ae,je)|0,c=c+Math.imul(Ae,Fe)|0,c=c+Math.imul(xe,je)|0,w=w+Math.imul(xe,Fe)|0,b=b+Math.imul(ie,ze)|0,c=c+Math.imul(ie,He)|0,c=c+Math.imul(H,ze)|0,w=w+Math.imul(H,He)|0,b=b+Math.imul(F,We)|0,c=c+Math.imul(F,Ve)|0,c=c+Math.imul(z,We)|0,w=w+Math.imul(z,Ve)|0,b=b+Math.imul(R,Ze)|0,c=c+Math.imul(R,Ge)|0,c=c+Math.imul(P,Ze)|0,w=w+Math.imul(P,Ge)|0,b=b+Math.imul(Y,qe)|0,c=c+Math.imul(Y,Ye)|0,c=c+Math.imul(d,qe)|0,w=w+Math.imul(d,Ye)|0;var os=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(os>>>26)|0,os&=67108863,b=Math.imul(Re,$e),c=Math.imul(Re,Be),c=c+Math.imul(Me,$e)|0,w=Math.imul(Me,Be),b=b+Math.imul(ke,Oe)|0,c=c+Math.imul(ke,Ue)|0,c=c+Math.imul(Ie,Oe)|0,w=w+Math.imul(Ie,Ue)|0,b=b+Math.imul(Ee,De)|0,c=c+Math.imul(Ee,Le)|0,c=c+Math.imul(Te,De)|0,w=w+Math.imul(Te,Le)|0,b=b+Math.imul(_e,je)|0,c=c+Math.imul(_e,Fe)|0,c=c+Math.imul(Se,je)|0,w=w+Math.imul(Se,Fe)|0,b=b+Math.imul(Ae,ze)|0,c=c+Math.imul(Ae,He)|0,c=c+Math.imul(xe,ze)|0,w=w+Math.imul(xe,He)|0,b=b+Math.imul(ie,We)|0,c=c+Math.imul(ie,Ve)|0,c=c+Math.imul(H,We)|0,w=w+Math.imul(H,Ve)|0,b=b+Math.imul(F,Ze)|0,c=c+Math.imul(F,Ge)|0,c=c+Math.imul(z,Ze)|0,w=w+Math.imul(z,Ge)|0,b=b+Math.imul(R,qe)|0,c=c+Math.imul(R,Ye)|0,c=c+Math.imul(P,qe)|0,w=w+Math.imul(P,Ye)|0,b=b+Math.imul(Y,Ke)|0,c=c+Math.imul(Y,Qe)|0,c=c+Math.imul(d,Ke)|0,w=w+Math.imul(d,Qe)|0;var as=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(as>>>26)|0,as&=67108863,b=Math.imul(Ne,$e),c=Math.imul(Ne,Be),c=c+Math.imul(Pe,$e)|0,w=Math.imul(Pe,Be),b=b+Math.imul(Re,Oe)|0,c=c+Math.imul(Re,Ue)|0,c=c+Math.imul(Me,Oe)|0,w=w+Math.imul(Me,Ue)|0,b=b+Math.imul(ke,De)|0,c=c+Math.imul(ke,Le)|0,c=c+Math.imul(Ie,De)|0,w=w+Math.imul(Ie,Le)|0,b=b+Math.imul(Ee,je)|0,c=c+Math.imul(Ee,Fe)|0,c=c+Math.imul(Te,je)|0,w=w+Math.imul(Te,Fe)|0,b=b+Math.imul(_e,ze)|0,c=c+Math.imul(_e,He)|0,c=c+Math.imul(Se,ze)|0,w=w+Math.imul(Se,He)|0,b=b+Math.imul(Ae,We)|0,c=c+Math.imul(Ae,Ve)|0,c=c+Math.imul(xe,We)|0,w=w+Math.imul(xe,Ve)|0,b=b+Math.imul(ie,Ze)|0,c=c+Math.imul(ie,Ge)|0,c=c+Math.imul(H,Ze)|0,w=w+Math.imul(H,Ge)|0,b=b+Math.imul(F,qe)|0,c=c+Math.imul(F,Ye)|0,c=c+Math.imul(z,qe)|0,w=w+Math.imul(z,Ye)|0,b=b+Math.imul(R,Ke)|0,c=c+Math.imul(R,Qe)|0,c=c+Math.imul(P,Ke)|0,w=w+Math.imul(P,Qe)|0,b=b+Math.imul(Y,Je)|0,c=c+Math.imul(Y,Xe)|0,c=c+Math.imul(d,Je)|0,w=w+Math.imul(d,Xe)|0;var ss=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(ss>>>26)|0,ss&=67108863,b=Math.imul(Ne,Oe),c=Math.imul(Ne,Ue),c=c+Math.imul(Pe,Oe)|0,w=Math.imul(Pe,Ue),b=b+Math.imul(Re,De)|0,c=c+Math.imul(Re,Le)|0,c=c+Math.imul(Me,De)|0,w=w+Math.imul(Me,Le)|0,b=b+Math.imul(ke,je)|0,c=c+Math.imul(ke,Fe)|0,c=c+Math.imul(Ie,je)|0,w=w+Math.imul(Ie,Fe)|0,b=b+Math.imul(Ee,ze)|0,c=c+Math.imul(Ee,He)|0,c=c+Math.imul(Te,ze)|0,w=w+Math.imul(Te,He)|0,b=b+Math.imul(_e,We)|0,c=c+Math.imul(_e,Ve)|0,c=c+Math.imul(Se,We)|0,w=w+Math.imul(Se,Ve)|0,b=b+Math.imul(Ae,Ze)|0,c=c+Math.imul(Ae,Ge)|0,c=c+Math.imul(xe,Ze)|0,w=w+Math.imul(xe,Ge)|0,b=b+Math.imul(ie,qe)|0,c=c+Math.imul(ie,Ye)|0,c=c+Math.imul(H,qe)|0,w=w+Math.imul(H,Ye)|0,b=b+Math.imul(F,Ke)|0,c=c+Math.imul(F,Qe)|0,c=c+Math.imul(z,Ke)|0,w=w+Math.imul(z,Qe)|0,b=b+Math.imul(R,Je)|0,c=c+Math.imul(R,Xe)|0,c=c+Math.imul(P,Je)|0,w=w+Math.imul(P,Xe)|0;var ls=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(ls>>>26)|0,ls&=67108863,b=Math.imul(Ne,De),c=Math.imul(Ne,Le),c=c+Math.imul(Pe,De)|0,w=Math.imul(Pe,Le),b=b+Math.imul(Re,je)|0,c=c+Math.imul(Re,Fe)|0,c=c+Math.imul(Me,je)|0,w=w+Math.imul(Me,Fe)|0,b=b+Math.imul(ke,ze)|0,c=c+Math.imul(ke,He)|0,c=c+Math.imul(Ie,ze)|0,w=w+Math.imul(Ie,He)|0,b=b+Math.imul(Ee,We)|0,c=c+Math.imul(Ee,Ve)|0,c=c+Math.imul(Te,We)|0,w=w+Math.imul(Te,Ve)|0,b=b+Math.imul(_e,Ze)|0,c=c+Math.imul(_e,Ge)|0,c=c+Math.imul(Se,Ze)|0,w=w+Math.imul(Se,Ge)|0,b=b+Math.imul(Ae,qe)|0,c=c+Math.imul(Ae,Ye)|0,c=c+Math.imul(xe,qe)|0,w=w+Math.imul(xe,Ye)|0,b=b+Math.imul(ie,Ke)|0,c=c+Math.imul(ie,Qe)|0,c=c+Math.imul(H,Ke)|0,w=w+Math.imul(H,Qe)|0,b=b+Math.imul(F,Je)|0,c=c+Math.imul(F,Xe)|0,c=c+Math.imul(z,Je)|0,w=w+Math.imul(z,Xe)|0;var cs=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(cs>>>26)|0,cs&=67108863,b=Math.imul(Ne,je),c=Math.imul(Ne,Fe),c=c+Math.imul(Pe,je)|0,w=Math.imul(Pe,Fe),b=b+Math.imul(Re,ze)|0,c=c+Math.imul(Re,He)|0,c=c+Math.imul(Me,ze)|0,w=w+Math.imul(Me,He)|0,b=b+Math.imul(ke,We)|0,c=c+Math.imul(ke,Ve)|0,c=c+Math.imul(Ie,We)|0,w=w+Math.imul(Ie,Ve)|0,b=b+Math.imul(Ee,Ze)|0,c=c+Math.imul(Ee,Ge)|0,c=c+Math.imul(Te,Ze)|0,w=w+Math.imul(Te,Ge)|0,b=b+Math.imul(_e,qe)|0,c=c+Math.imul(_e,Ye)|0,c=c+Math.imul(Se,qe)|0,w=w+Math.imul(Se,Ye)|0,b=b+Math.imul(Ae,Ke)|0,c=c+Math.imul(Ae,Qe)|0,c=c+Math.imul(xe,Ke)|0,w=w+Math.imul(xe,Qe)|0,b=b+Math.imul(ie,Je)|0,c=c+Math.imul(ie,Xe)|0,c=c+Math.imul(H,Je)|0,w=w+Math.imul(H,Xe)|0;var us=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(us>>>26)|0,us&=67108863,b=Math.imul(Ne,ze),c=Math.imul(Ne,He),c=c+Math.imul(Pe,ze)|0,w=Math.imul(Pe,He),b=b+Math.imul(Re,We)|0,c=c+Math.imul(Re,Ve)|0,c=c+Math.imul(Me,We)|0,w=w+Math.imul(Me,Ve)|0,b=b+Math.imul(ke,Ze)|0,c=c+Math.imul(ke,Ge)|0,c=c+Math.imul(Ie,Ze)|0,w=w+Math.imul(Ie,Ge)|0,b=b+Math.imul(Ee,qe)|0,c=c+Math.imul(Ee,Ye)|0,c=c+Math.imul(Te,qe)|0,w=w+Math.imul(Te,Ye)|0,b=b+Math.imul(_e,Ke)|0,c=c+Math.imul(_e,Qe)|0,c=c+Math.imul(Se,Ke)|0,w=w+Math.imul(Se,Qe)|0,b=b+Math.imul(Ae,Je)|0,c=c+Math.imul(Ae,Xe)|0,c=c+Math.imul(xe,Je)|0,w=w+Math.imul(xe,Xe)|0;var ds=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(ds>>>26)|0,ds&=67108863,b=Math.imul(Ne,We),c=Math.imul(Ne,Ve),c=c+Math.imul(Pe,We)|0,w=Math.imul(Pe,Ve),b=b+Math.imul(Re,Ze)|0,c=c+Math.imul(Re,Ge)|0,c=c+Math.imul(Me,Ze)|0,w=w+Math.imul(Me,Ge)|0,b=b+Math.imul(ke,qe)|0,c=c+Math.imul(ke,Ye)|0,c=c+Math.imul(Ie,qe)|0,w=w+Math.imul(Ie,Ye)|0,b=b+Math.imul(Ee,Ke)|0,c=c+Math.imul(Ee,Qe)|0,c=c+Math.imul(Te,Ke)|0,w=w+Math.imul(Te,Qe)|0,b=b+Math.imul(_e,Je)|0,c=c+Math.imul(_e,Xe)|0,c=c+Math.imul(Se,Je)|0,w=w+Math.imul(Se,Xe)|0;var hs=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(hs>>>26)|0,hs&=67108863,b=Math.imul(Ne,Ze),c=Math.imul(Ne,Ge),c=c+Math.imul(Pe,Ze)|0,w=Math.imul(Pe,Ge),b=b+Math.imul(Re,qe)|0,c=c+Math.imul(Re,Ye)|0,c=c+Math.imul(Me,qe)|0,w=w+Math.imul(Me,Ye)|0,b=b+Math.imul(ke,Ke)|0,c=c+Math.imul(ke,Qe)|0,c=c+Math.imul(Ie,Ke)|0,w=w+Math.imul(Ie,Qe)|0,b=b+Math.imul(Ee,Je)|0,c=c+Math.imul(Ee,Xe)|0,c=c+Math.imul(Te,Je)|0,w=w+Math.imul(Te,Xe)|0;var ps=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(ps>>>26)|0,ps&=67108863,b=Math.imul(Ne,qe),c=Math.imul(Ne,Ye),c=c+Math.imul(Pe,qe)|0,w=Math.imul(Pe,Ye),b=b+Math.imul(Re,Ke)|0,c=c+Math.imul(Re,Qe)|0,c=c+Math.imul(Me,Ke)|0,w=w+Math.imul(Me,Qe)|0,b=b+Math.imul(ke,Je)|0,c=c+Math.imul(ke,Xe)|0,c=c+Math.imul(Ie,Je)|0,w=w+Math.imul(Ie,Xe)|0;var fs=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(fs>>>26)|0,fs&=67108863,b=Math.imul(Ne,Ke),c=Math.imul(Ne,Qe),c=c+Math.imul(Pe,Ke)|0,w=Math.imul(Pe,Qe),b=b+Math.imul(Re,Je)|0,c=c+Math.imul(Re,Xe)|0,c=c+Math.imul(Me,Je)|0,w=w+Math.imul(Me,Xe)|0;var gs=(S+b|0)+((c&8191)<<13)|0;S=(w+(c>>>13)|0)+(gs>>>26)|0,gs&=67108863,b=Math.imul(Ne,Je),c=Math.imul(Ne,Xe),c=c+Math.imul(Pe,Je)|0,w=Math.imul(Pe,Xe);var ms=(S+b|0)+((c&8191)<<13)|0;return S=(w+(c>>>13)|0)+(ms>>>26)|0,ms&=67108863,x[0]=li,x[1]=ci,x[2]=ui,x[3]=di,x[4]=hi,x[5]=pi,x[6]=ns,x[7]=os,x[8]=as,x[9]=ss,x[10]=ls,x[11]=cs,x[12]=us,x[13]=ds,x[14]=hs,x[15]=ps,x[16]=fs,x[17]=gs,x[18]=ms,S!==0&&(x[19]=S,p.length++),p};Math.imul||(Q=q);function ee(s,u,p){p.negative=u.negative^s.negative,p.length=s.length+u.length;for(var v=0,y=0,x=0;x<p.length-1;x++){var S=y;y=0;for(var b=v&67108863,c=Math.min(x,u.length-1),w=Math.max(0,x-s.length+1);w<=c;w++){var J=x-w,Y=s.words[J]|0,d=u.words[w]|0,M=Y*d,R=M&67108863;S=S+(M/67108864|0)|0,R=R+b|0,b=R&67108863,S=S+(R>>>26)|0,y+=S>>>26,S&=67108863}p.words[x]=b,v=S,S=y}return v!==0?p.words[x]=v:p.length--,p._strip()}function X(s,u,p){return ee(s,u,p)}n.prototype.mulTo=function(s,u){var p,v=this.length+s.length;return this.length===10&&s.length===10?p=Q(this,s,u):v<63?p=q(this,s,u):v<1024?p=ee(this,s,u):p=X(this,s,u),p},n.prototype.mul=function(s){var u=new n(null);return u.words=new Array(this.length+s.length),this.mulTo(s,u)},n.prototype.mulf=function(s){var u=new n(null);return u.words=new Array(this.length+s.length),X(this,s,u)},n.prototype.imul=function(s){return this.clone().mulTo(s,this)},n.prototype.imuln=function(s){var u=s<0;u&&(s=-s),i(typeof s=="number"),i(s<67108864);for(var p=0,v=0;v<this.length;v++){var y=(this.words[v]|0)*s,x=(y&67108863)+(p&67108863);p>>=26,p+=y/67108864|0,p+=x>>>26,this.words[v]=x&67108863}return p!==0&&(this.words[v]=p,this.length++),u?this.ineg():this},n.prototype.muln=function(s){return this.clone().imuln(s)},n.prototype.sqr=function(){return this.mul(this)},n.prototype.isqr=function(){return this.imul(this.clone())},n.prototype.pow=function(s){var u=B(s);if(u.length===0)return new n(1);for(var p=this,v=0;v<u.length&&u[v]===0;v++,p=p.sqr());if(++v<u.length)for(var y=p.sqr();v<u.length;v++,y=y.sqr())u[v]!==0&&(p=p.mul(y));return p},n.prototype.iushln=function(s){i(typeof s=="number"&&s>=0);var u=s%26,p=(s-u)/26,v=67108863>>>26-u<<26-u,y;if(u!==0){var x=0;for(y=0;y<this.length;y++){var S=this.words[y]&v,b=(this.words[y]|0)-S<<u;this.words[y]=b|x,x=S>>>26-u}x&&(this.words[y]=x,this.length++)}if(p!==0){for(y=this.length-1;y>=0;y--)this.words[y+p]=this.words[y];for(y=0;y<p;y++)this.words[y]=0;this.length+=p}return this._strip()},n.prototype.ishln=function(s){return i(this.negative===0),this.iushln(s)},n.prototype.iushrn=function(s,u,p){i(typeof s=="number"&&s>=0);var v;u?v=(u-u%26)/26:v=0;var y=s%26,x=Math.min((s-y)/26,this.length),S=67108863^67108863>>>y<<y,b=p;if(v-=x,v=Math.max(0,v),b){for(var c=0;c<x;c++)b.words[c]=this.words[c];b.length=x}if(x!==0)if(this.length>x)for(this.length-=x,c=0;c<this.length;c++)this.words[c]=this.words[c+x];else this.words[0]=0,this.length=1;var w=0;for(c=this.length-1;c>=0&&(w!==0||c>=v);c--){var J=this.words[c]|0;this.words[c]=w<<26-y|J>>>y,w=J&S}return b&&w!==0&&(b.words[b.length++]=w),this.length===0&&(this.words[0]=0,this.length=1),this._strip()},n.prototype.ishrn=function(s,u,p){return i(this.negative===0),this.iushrn(s,u,p)},n.prototype.shln=function(s){return this.clone().ishln(s)},n.prototype.ushln=function(s){return this.clone().iushln(s)},n.prototype.shrn=function(s){return this.clone().ishrn(s)},n.prototype.ushrn=function(s){return this.clone().iushrn(s)},n.prototype.testn=function(s){i(typeof s=="number"&&s>=0);var u=s%26,p=(s-u)/26,v=1<<u;if(this.length<=p)return!1;var y=this.words[p];return!!(y&v)},n.prototype.imaskn=function(s){i(typeof s=="number"&&s>=0);var u=s%26,p=(s-u)/26;if(i(this.negative===0,"imaskn works only with positive numbers"),this.length<=p)return this;if(u!==0&&p++,this.length=Math.min(p,this.length),u!==0){var v=67108863^67108863>>>u<<u;this.words[this.length-1]&=v}return this._strip()},n.prototype.maskn=function(s){return this.clone().imaskn(s)},n.prototype.iaddn=function(s){return i(typeof s=="number"),i(s<67108864),s<0?this.isubn(-s):this.negative!==0?this.length===1&&(this.words[0]|0)<=s?(this.words[0]=s-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(s),this.negative=1,this):this._iaddn(s)},n.prototype._iaddn=function(s){this.words[0]+=s;for(var u=0;u<this.length&&this.words[u]>=67108864;u++)this.words[u]-=67108864,u===this.length-1?this.words[u+1]=1:this.words[u+1]++;return this.length=Math.max(this.length,u+1),this},n.prototype.isubn=function(s){if(i(typeof s=="number"),i(s<67108864),s<0)return this.iaddn(-s);if(this.negative!==0)return this.negative=0,this.iaddn(s),this.negative=1,this;if(this.words[0]-=s,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var u=0;u<this.length&&this.words[u]<0;u++)this.words[u]+=67108864,this.words[u+1]-=1;return this._strip()},n.prototype.addn=function(s){return this.clone().iaddn(s)},n.prototype.subn=function(s){return this.clone().isubn(s)},n.prototype.iabs=function(){return this.negative=0,this},n.prototype.abs=function(){return this.clone().iabs()},n.prototype._ishlnsubmul=function(s,u,p){var v=s.length+p,y;this._expand(v);var x,S=0;for(y=0;y<s.length;y++){x=(this.words[y+p]|0)+S;var b=(s.words[y]|0)*u;x-=b&67108863,S=(x>>26)-(b/67108864|0),this.words[y+p]=x&67108863}for(;y<this.length-p;y++)x=(this.words[y+p]|0)+S,S=x>>26,this.words[y+p]=x&67108863;if(S===0)return this._strip();for(i(S===-1),S=0,y=0;y<this.length;y++)x=-(this.words[y]|0)+S,S=x>>26,this.words[y]=x&67108863;return this.negative=1,this._strip()},n.prototype._wordDiv=function(s,u){var p=this.length-s.length,v=this.clone(),y=s,x=y.words[y.length-1]|0,S=this._countBits(x);p=26-S,p!==0&&(y=y.ushln(p),v.iushln(p),x=y.words[y.length-1]|0);var b=v.length-y.length,c;if(u!=="mod"){c=new n(null),c.length=b+1,c.words=new Array(c.length);for(var w=0;w<c.length;w++)c.words[w]=0}var J=v.clone()._ishlnsubmul(y,1,b);J.negative===0&&(v=J,c&&(c.words[b]=1));for(var Y=b-1;Y>=0;Y--){var d=(v.words[y.length+Y]|0)*67108864+(v.words[y.length+Y-1]|0);for(d=Math.min(d/x|0,67108863),v._ishlnsubmul(y,d,Y);v.negative!==0;)d--,v.negative=0,v._ishlnsubmul(y,1,Y),v.isZero()||(v.negative^=1);c&&(c.words[Y]=d)}return c&&c._strip(),v._strip(),u!=="div"&&p!==0&&v.iushrn(p),{div:c||null,mod:v}},n.prototype.divmod=function(s,u,p){if(i(!s.isZero()),this.isZero())return{div:new n(0),mod:new n(0)};var v,y,x;return this.negative!==0&&s.negative===0?(x=this.neg().divmod(s,u),u!=="mod"&&(v=x.div.neg()),u!=="div"&&(y=x.mod.neg(),p&&y.negative!==0&&y.iadd(s)),{div:v,mod:y}):this.negative===0&&s.negative!==0?(x=this.divmod(s.neg(),u),u!=="mod"&&(v=x.div.neg()),{div:v,mod:x.mod}):this.negative&s.negative?(x=this.neg().divmod(s.neg(),u),u!=="div"&&(y=x.mod.neg(),p&&y.negative!==0&&y.isub(s)),{div:x.div,mod:y}):s.length>this.length||this.cmp(s)<0?{div:new n(0),mod:this}:s.length===1?u==="div"?{div:this.divn(s.words[0]),mod:null}:u==="mod"?{div:null,mod:new n(this.modrn(s.words[0]))}:{div:this.divn(s.words[0]),mod:new n(this.modrn(s.words[0]))}:this._wordDiv(s,u)},n.prototype.div=function(s){return this.divmod(s,"div",!1).div},n.prototype.mod=function(s){return this.divmod(s,"mod",!1).mod},n.prototype.umod=function(s){return this.divmod(s,"mod",!0).mod},n.prototype.divRound=function(s){var u=this.divmod(s);if(u.mod.isZero())return u.div;var p=u.div.negative!==0?u.mod.isub(s):u.mod,v=s.ushrn(1),y=s.andln(1),x=p.cmp(v);return x<0||y===1&&x===0?u.div:u.div.negative!==0?u.div.isubn(1):u.div.iaddn(1)},n.prototype.modrn=function(s){var u=s<0;u&&(s=-s),i(s<=67108863);for(var p=(1<<26)%s,v=0,y=this.length-1;y>=0;y--)v=(p*v+(this.words[y]|0))%s;return u?-v:v},n.prototype.modn=function(s){return this.modrn(s)},n.prototype.idivn=function(s){var u=s<0;u&&(s=-s),i(s<=67108863);for(var p=0,v=this.length-1;v>=0;v--){var y=(this.words[v]|0)+p*67108864;this.words[v]=y/s|0,p=y%s}return this._strip(),u?this.ineg():this},n.prototype.divn=function(s){return this.clone().idivn(s)},n.prototype.egcd=function(s){i(s.negative===0),i(!s.isZero());var u=this,p=s.clone();u.negative!==0?u=u.umod(s):u=u.clone();for(var v=new n(1),y=new n(0),x=new n(0),S=new n(1),b=0;u.isEven()&&p.isEven();)u.iushrn(1),p.iushrn(1),++b;for(var c=p.clone(),w=u.clone();!u.isZero();){for(var J=0,Y=1;!(u.words[0]&Y)&&J<26;++J,Y<<=1);if(J>0)for(u.iushrn(J);J-- >0;)(v.isOdd()||y.isOdd())&&(v.iadd(c),y.isub(w)),v.iushrn(1),y.iushrn(1);for(var d=0,M=1;!(p.words[0]&M)&&d<26;++d,M<<=1);if(d>0)for(p.iushrn(d);d-- >0;)(x.isOdd()||S.isOdd())&&(x.iadd(c),S.isub(w)),x.iushrn(1),S.iushrn(1);u.cmp(p)>=0?(u.isub(p),v.isub(x),y.isub(S)):(p.isub(u),x.isub(v),S.isub(y))}return{a:x,b:S,gcd:p.iushln(b)}},n.prototype._invmp=function(s){i(s.negative===0),i(!s.isZero());var u=this,p=s.clone();u.negative!==0?u=u.umod(s):u=u.clone();for(var v=new n(1),y=new n(0),x=p.clone();u.cmpn(1)>0&&p.cmpn(1)>0;){for(var S=0,b=1;!(u.words[0]&b)&&S<26;++S,b<<=1);if(S>0)for(u.iushrn(S);S-- >0;)v.isOdd()&&v.iadd(x),v.iushrn(1);for(var c=0,w=1;!(p.words[0]&w)&&c<26;++c,w<<=1);if(c>0)for(p.iushrn(c);c-- >0;)y.isOdd()&&y.iadd(x),y.iushrn(1);u.cmp(p)>=0?(u.isub(p),v.isub(y)):(p.isub(u),y.isub(v))}var J;return u.cmpn(1)===0?J=v:J=y,J.cmpn(0)<0&&J.iadd(s),J},n.prototype.gcd=function(s){if(this.isZero())return s.abs();if(s.isZero())return this.abs();var u=this.clone(),p=s.clone();u.negative=0,p.negative=0;for(var v=0;u.isEven()&&p.isEven();v++)u.iushrn(1),p.iushrn(1);do{for(;u.isEven();)u.iushrn(1);for(;p.isEven();)p.iushrn(1);var y=u.cmp(p);if(y<0){var x=u;u=p,p=x}else if(y===0||p.cmpn(1)===0)break;u.isub(p)}while(!0);return p.iushln(v)},n.prototype.invm=function(s){return this.egcd(s).a.umod(s)},n.prototype.isEven=function(){return(this.words[0]&1)===0},n.prototype.isOdd=function(){return(this.words[0]&1)===1},n.prototype.andln=function(s){return this.words[0]&s},n.prototype.bincn=function(s){i(typeof s=="number");var u=s%26,p=(s-u)/26,v=1<<u;if(this.length<=p)return this._expand(p+1),this.words[p]|=v,this;for(var y=v,x=p;y!==0&&x<this.length;x++){var S=this.words[x]|0;S+=y,y=S>>>26,S&=67108863,this.words[x]=S}return y!==0&&(this.words[x]=y,this.length++),this},n.prototype.isZero=function(){return this.length===1&&this.words[0]===0},n.prototype.cmpn=function(s){var u=s<0;if(this.negative!==0&&!u)return-1;if(this.negative===0&&u)return 1;this._strip();var p;if(this.length>1)p=1;else{u&&(s=-s),i(s<=67108863,"Number is too big");var v=this.words[0]|0;p=v===s?0:v<s?-1:1}return this.negative!==0?-p|0:p},n.prototype.cmp=function(s){if(this.negative!==0&&s.negative===0)return-1;if(this.negative===0&&s.negative!==0)return 1;var u=this.ucmp(s);return this.negative!==0?-u|0:u},n.prototype.ucmp=function(s){if(this.length>s.length)return 1;if(this.length<s.length)return-1;for(var u=0,p=this.length-1;p>=0;p--){var v=this.words[p]|0,y=s.words[p]|0;if(v!==y){v<y?u=-1:v>y&&(u=1);break}}return u},n.prototype.gtn=function(s){return this.cmpn(s)===1},n.prototype.gt=function(s){return this.cmp(s)===1},n.prototype.gten=function(s){return this.cmpn(s)>=0},n.prototype.gte=function(s){return this.cmp(s)>=0},n.prototype.ltn=function(s){return this.cmpn(s)===-1},n.prototype.lt=function(s){return this.cmp(s)===-1},n.prototype.lten=function(s){return this.cmpn(s)<=0},n.prototype.lte=function(s){return this.cmp(s)<=0},n.prototype.eqn=function(s){return this.cmpn(s)===0},n.prototype.eq=function(s){return this.cmp(s)===0},n.red=function(s){return new we(s)},n.prototype.toRed=function(s){return i(!this.red,"Already a number in reduction context"),i(this.negative===0,"red works only with positives"),s.convertTo(this)._forceRed(s)},n.prototype.fromRed=function(){return i(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},n.prototype._forceRed=function(s){return this.red=s,this},n.prototype.forceRed=function(s){return i(!this.red,"Already a number in reduction context"),this._forceRed(s)},n.prototype.redAdd=function(s){return i(this.red,"redAdd works only with red numbers"),this.red.add(this,s)},n.prototype.redIAdd=function(s){return i(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,s)},n.prototype.redSub=function(s){return i(this.red,"redSub works only with red numbers"),this.red.sub(this,s)},n.prototype.redISub=function(s){return i(this.red,"redISub works only with red numbers"),this.red.isub(this,s)},n.prototype.redShl=function(s){return i(this.red,"redShl works only with red numbers"),this.red.shl(this,s)},n.prototype.redMul=function(s){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,s),this.red.mul(this,s)},n.prototype.redIMul=function(s){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,s),this.red.imul(this,s)},n.prototype.redSqr=function(){return i(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},n.prototype.redISqr=function(){return i(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},n.prototype.redSqrt=function(){return i(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},n.prototype.redInvm=function(){return i(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},n.prototype.redNeg=function(){return i(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},n.prototype.redPow=function(s){return i(this.red&&!s.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,s)};var oe={k256:null,p224:null,p192:null,p25519:null};function de(s,u){this.name=s,this.p=new n(u,16),this.n=this.p.bitLength(),this.k=new n(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}de.prototype._tmp=function(){var s=new n(null);return s.words=new Array(Math.ceil(this.n/13)),s},de.prototype.ireduce=function(s){var u=s,p;do this.split(u,this.tmp),u=this.imulK(u),u=u.iadd(this.tmp),p=u.bitLength();while(p>this.n);var v=p<this.n?-1:u.ucmp(this.p);return v===0?(u.words[0]=0,u.length=1):v>0?u.isub(this.p):u.strip!==void 0?u.strip():u._strip(),u},de.prototype.split=function(s,u){s.iushrn(this.n,0,u)},de.prototype.imulK=function(s){return s.imul(this.k)};function ht(){de.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}o(ht,de),ht.prototype.split=function(s,u){for(var p=4194303,v=Math.min(s.length,9),y=0;y<v;y++)u.words[y]=s.words[y];if(u.length=v,s.length<=9){s.words[0]=0,s.length=1;return}var x=s.words[9];for(u.words[u.length++]=x&p,y=10;y<s.length;y++){var S=s.words[y]|0;s.words[y-10]=(S&p)<<4|x>>>22,x=S}x>>>=22,s.words[y-10]=x,x===0&&s.length>10?s.length-=10:s.length-=9},ht.prototype.imulK=function(s){s.words[s.length]=0,s.words[s.length+1]=0,s.length+=2;for(var u=0,p=0;p<s.length;p++){var v=s.words[p]|0;u+=v*977,s.words[p]=u&67108863,u=v*64+(u/67108864|0)}return s.words[s.length-1]===0&&(s.length--,s.words[s.length-1]===0&&s.length--),s};function ye(){de.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}o(ye,de);function Et(){de.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}o(Et,de);function Vt(){de.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}o(Vt,de),Vt.prototype.imulK=function(s){for(var u=0,p=0;p<s.length;p++){var v=(s.words[p]|0)*19+u,y=v&67108863;v>>>=26,s.words[p]=y,u=v}return u!==0&&(s.words[s.length++]=u),s},n._prime=function(s){if(oe[s])return oe[s];var u;if(s==="k256")u=new ht;else if(s==="p224")u=new ye;else if(s==="p192")u=new Et;else if(s==="p25519")u=new Vt;else throw new Error("Unknown prime "+s);return oe[s]=u,u};function we(s){if(typeof s=="string"){var u=n._prime(s);this.m=u.p,this.prime=u}else i(s.gtn(1),"modulus must be greater than 1"),this.m=s,this.prime=null}we.prototype._verify1=function(s){i(s.negative===0,"red works only with positives"),i(s.red,"red works only with red numbers")},we.prototype._verify2=function(s,u){i((s.negative|u.negative)===0,"red works only with positives"),i(s.red&&s.red===u.red,"red works only with red numbers")},we.prototype.imod=function(s){return this.prime?this.prime.ireduce(s)._forceRed(this):(C(s,s.umod(this.m)._forceRed(this)),s)},we.prototype.neg=function(s){return s.isZero()?s.clone():this.m.sub(s)._forceRed(this)},we.prototype.add=function(s,u){this._verify2(s,u);var p=s.add(u);return p.cmp(this.m)>=0&&p.isub(this.m),p._forceRed(this)},we.prototype.iadd=function(s,u){this._verify2(s,u);var p=s.iadd(u);return p.cmp(this.m)>=0&&p.isub(this.m),p},we.prototype.sub=function(s,u){this._verify2(s,u);var p=s.sub(u);return p.cmpn(0)<0&&p.iadd(this.m),p._forceRed(this)},we.prototype.isub=function(s,u){this._verify2(s,u);var p=s.isub(u);return p.cmpn(0)<0&&p.iadd(this.m),p},we.prototype.shl=function(s,u){return this._verify1(s),this.imod(s.ushln(u))},we.prototype.imul=function(s,u){return this._verify2(s,u),this.imod(s.imul(u))},we.prototype.mul=function(s,u){return this._verify2(s,u),this.imod(s.mul(u))},we.prototype.isqr=function(s){return this.imul(s,s.clone())},we.prototype.sqr=function(s){return this.mul(s,s)},we.prototype.sqrt=function(s){if(s.isZero())return s.clone();var u=this.m.andln(3);if(i(u%2===1),u===3){var p=this.m.add(new n(1)).iushrn(2);return this.pow(s,p)}for(var v=this.m.subn(1),y=0;!v.isZero()&&v.andln(1)===0;)y++,v.iushrn(1);i(!v.isZero());var x=new n(1).toRed(this),S=x.redNeg(),b=this.m.subn(1).iushrn(1),c=this.m.bitLength();for(c=new n(2*c*c).toRed(this);this.pow(c,b).cmp(S)!==0;)c.redIAdd(S);for(var w=this.pow(c,v),J=this.pow(s,v.addn(1).iushrn(1)),Y=this.pow(s,v),d=y;Y.cmp(x)!==0;){for(var M=Y,R=0;M.cmp(x)!==0;R++)M=M.redSqr();i(R<d);var P=this.pow(w,new n(1).iushln(d-R-1));J=J.redMul(P),w=P.redSqr(),Y=Y.redMul(w),d=R}return J},we.prototype.invm=function(s){var u=s._invmp(this.m);return u.negative!==0?(u.negative=0,this.imod(u).redNeg()):this.imod(u)},we.prototype.pow=function(s,u){if(u.isZero())return new n(1).toRed(this);if(u.cmpn(1)===0)return s.clone();var p=4,v=new Array(1<<p);v[0]=new n(1).toRed(this),v[1]=s;for(var y=2;y<v.length;y++)v[y]=this.mul(v[y-1],s);var x=v[0],S=0,b=0,c=u.bitLength()%26;for(c===0&&(c=26),y=u.length-1;y>=0;y--){for(var w=u.words[y],J=c-1;J>=0;J--){var Y=w>>J&1;if(x!==v[0]&&(x=this.sqr(x)),Y===0&&S===0){b=0;continue}S<<=1,S|=Y,b++,!(b!==p&&(y!==0||J!==0))&&(x=this.mul(x,v[S]),b=0,S=0)}c=26}return x},we.prototype.convertTo=function(s){var u=s.umod(this.m);return u===s?u.clone():u},we.prototype.convertFrom=function(s){var u=s.clone();return u.red=null,u},n.mont=function(s){return new Zt(s)};function Zt(s){we.call(this,s),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new n(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}o(Zt,we),Zt.prototype.convertTo=function(s){return this.imod(s.ushln(this.shift))},Zt.prototype.convertFrom=function(s){var u=this.imod(s.mul(this.rinv));return u.red=null,u},Zt.prototype.imul=function(s,u){if(s.isZero()||u.isZero())return s.words[0]=0,s.length=1,s;var p=s.imul(u),v=p.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),y=p.isub(v).iushrn(this.shift),x=y;return y.cmp(this.m)>=0?x=y.isub(this.m):y.cmpn(0)<0&&(x=y.iadd(this.m)),x._forceRed(this)},Zt.prototype.mul=function(s,u){if(s.isZero()||u.isZero())return new n(0)._forceRed(this);var p=s.mul(u),v=p.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),y=p.isub(v).iushrn(this.shift),x=y;return y.cmp(this.m)>=0?x=y.isub(this.m):y.cmpn(0)<0&&(x=y.iadd(this.m)),x._forceRed(this)},Zt.prototype.invm=function(s){var u=this.imod(s._invmp(this.m).mul(this.r2));return u._forceRed(this)}})(t,X1)})(il);var re=il.exports;const nl="bignumber/5.7.0";var Qs=re.BN;const qr=new he(nl),As={},t1=9007199254740991;function Oc(t){return t!=null&&(Mt.isBigNumber(t)||typeof t=="number"&&t%1===0||typeof t=="string"&&!!t.match(/^-?[0-9]+$/)||Pn(t)||typeof t=="bigint"||Ko(t))}let r1=!1,Mt=class ar{constructor(e,r){e!==As&&qr.throwError("cannot call constructor directly; use BigNumber.from",he.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=r,this._isBigNumber=!0,Object.freeze(this)}fromTwos(e){return Pt(se(this).fromTwos(e))}toTwos(e){return Pt(se(this).toTwos(e))}abs(){return this._hex[0]==="-"?ar.from(this._hex.substring(1)):this}add(e){return Pt(se(this).add(se(e)))}sub(e){return Pt(se(this).sub(se(e)))}div(e){return ar.from(e).isZero()&&Gt("division-by-zero","div"),Pt(se(this).div(se(e)))}mul(e){return Pt(se(this).mul(se(e)))}mod(e){const r=se(e);return r.isNeg()&&Gt("division-by-zero","mod"),Pt(se(this).umod(r))}pow(e){const r=se(e);return r.isNeg()&&Gt("negative-power","pow"),Pt(se(this).pow(r))}and(e){const r=se(e);return(this.isNegative()||r.isNeg())&&Gt("unbound-bitwise-result","and"),Pt(se(this).and(r))}or(e){const r=se(e);return(this.isNegative()||r.isNeg())&&Gt("unbound-bitwise-result","or"),Pt(se(this).or(r))}xor(e){const r=se(e);return(this.isNegative()||r.isNeg())&&Gt("unbound-bitwise-result","xor"),Pt(se(this).xor(r))}mask(e){return(this.isNegative()||e<0)&&Gt("negative-width","mask"),Pt(se(this).maskn(e))}shl(e){return(this.isNegative()||e<0)&&Gt("negative-width","shl"),Pt(se(this).shln(e))}shr(e){return(this.isNegative()||e<0)&&Gt("negative-width","shr"),Pt(se(this).shrn(e))}eq(e){return se(this).eq(se(e))}lt(e){return se(this).lt(se(e))}lte(e){return se(this).lte(se(e))}gt(e){return se(this).gt(se(e))}gte(e){return se(this).gte(se(e))}isNegative(){return this._hex[0]==="-"}isZero(){return se(this).isZero()}toNumber(){try{return se(this).toNumber()}catch{Gt("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return qr.throwError("this platform does not support BigInt",he.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(arguments[0]===10?r1||(r1=!0,qr.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):arguments[0]===16?qr.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",he.errors.UNEXPECTED_ARGUMENT,{}):qr.throwError("BigNumber.toString does not accept parameters",he.errors.UNEXPECTED_ARGUMENT,{})),se(this).toString(10)}toHexString(){return this._hex}toJSON(e){return{type:"BigNumber",hex:this.toHexString()}}static from(e){if(e instanceof ar)return e;if(typeof e=="string")return e.match(/^-?0x[0-9a-f]+$/i)?new ar(As,To(e)):e.match(/^-?[0-9]+$/)?new ar(As,To(new Qs(e))):qr.throwArgumentError("invalid BigNumber string","value",e);if(typeof e=="number")return e%1&&Gt("underflow","BigNumber.from",e),(e>=t1||e<=-t1)&&Gt("overflow","BigNumber.from",e),ar.from(String(e));const r=e;if(typeof r=="bigint")return ar.from(r.toString());if(Ko(r))return ar.from(rl(r));if(r)if(r.toHexString){const i=r.toHexString();if(typeof i=="string")return ar.from(i)}else{let i=r._hex;if(i==null&&r.type==="BigNumber"&&(i=r.hex),typeof i=="string"&&(Pn(i)||i[0]==="-"&&Pn(i.substring(1))))return ar.from(i)}return qr.throwArgumentError("invalid BigNumber value","value",e)}static isBigNumber(e){return!!(e&&e._isBigNumber)}};function To(t){if(typeof t!="string")return To(t.toString(16));if(t[0]==="-")return t=t.substring(1),t[0]==="-"&&qr.throwArgumentError("invalid hex","value",t),t=To(t),t==="0x00"?t:"-"+t;if(t.substring(0,2)!=="0x"&&(t="0x"+t),t==="0x")return"0x00";for(t.length%2&&(t="0x0"+t.substring(2));t.length>4&&t.substring(0,4)==="0x00";)t="0x"+t.substring(4);return t}function Pt(t){return Mt.from(To(t))}function se(t){const e=Mt.from(t).toHexString();return e[0]==="-"?new Qs("-"+e.substring(3),16):new Qs(e.substring(2),16)}function Gt(t,e,r){const i={fault:t,operation:e};return r!=null&&(i.value=r),qr.throwError(t,he.errors.NUMERIC_FAULT,i)}const Rt=new he(nl),bo={},ol=Mt.from(0),al=Mt.from(-1);function sl(t,e,r,i){const o={fault:e,operation:r};return i!==void 0&&(o.value=i),Rt.throwError(t,he.errors.NUMERIC_FAULT,o)}let yo="0";for(;yo.length<256;)yo+=yo;function f0(t){if(typeof t!="number")try{t=Mt.from(t).toNumber()}catch{}return typeof t=="number"&&t>=0&&t<=256&&!(t%1)?"1"+yo.substring(0,t):Rt.throwArgumentError("invalid decimal size","decimals",t)}function xs(t,e){e==null&&(e=0);const r=f0(e);t=Mt.from(t);const i=t.lt(ol);i&&(t=t.mul(al));let o=t.mod(r).toString();for(;o.length<r.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];const n=t.div(r).toString();return r.length===1?t=n:t=n+"."+o,i&&(t="-"+t),t}function Hr(t,e){e==null&&(e=0);const r=f0(e);(typeof t!="string"||!t.match(/^-?[0-9.]+$/))&&Rt.throwArgumentError("invalid decimal value","value",t);const i=t.substring(0,1)==="-";i&&(t=t.substring(1)),t==="."&&Rt.throwArgumentError("missing value","value",t);const o=t.split(".");o.length>2&&Rt.throwArgumentError("too many decimal points","value",t);let n=o[0],a=o[1];for(n||(n="0"),a||(a="0");a[a.length-1]==="0";)a=a.substring(0,a.length-1);for(a.length>r.length-1&&sl("fractional component exceeds decimals","underflow","parseFixed"),a===""&&(a="0");a.length<r.length-1;)a+="0";const l=Mt.from(n),h=Mt.from(a);let g=l.mul(r).add(h);return i&&(g=g.mul(al)),g}class Rn{constructor(e,r,i,o){e!==bo&&Rt.throwError("cannot use FixedFormat constructor; use FixedFormat.from",he.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=i,this.decimals=o,this.name=(r?"":"u")+"fixed"+String(i)+"x"+String(o),this._multiplier=f0(o),Object.freeze(this)}static from(e){if(e instanceof Rn)return e;typeof e=="number"&&(e=`fixed128x${e}`);let r=!0,i=128,o=18;if(typeof e=="string"){if(e!=="fixed")if(e==="ufixed")r=!1;else{const n=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);n||Rt.throwArgumentError("invalid fixed format","format",e),r=n[1]!=="u",i=parseInt(n[2]),o=parseInt(n[3])}}else if(e){const n=(a,l,h)=>e[a]==null?h:(typeof e[a]!==l&&Rt.throwArgumentError("invalid fixed format ("+a+" not "+l+")","format."+a,e[a]),e[a]);r=n("signed","boolean",r),i=n("width","number",i),o=n("decimals","number",o)}return i%8&&Rt.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",i),o>80&&Rt.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",o),new Rn(bo,r,i,o)}}class _t{constructor(e,r,i,o){e!==bo&&Rt.throwError("cannot use FixedNumber constructor; use FixedNumber.from",he.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=o,this._hex=r,this._value=i,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&Rt.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const r=Hr(this._value,this.format.decimals),i=Hr(e._value,e.format.decimals);return _t.fromValue(r.add(i),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const r=Hr(this._value,this.format.decimals),i=Hr(e._value,e.format.decimals);return _t.fromValue(r.sub(i),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const r=Hr(this._value,this.format.decimals),i=Hr(e._value,e.format.decimals);return _t.fromValue(r.mul(i).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const r=Hr(this._value,this.format.decimals),i=Hr(e._value,e.format.decimals);return _t.fromValue(r.mul(this.format._multiplier).div(i),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");e.length===1&&e.push("0");let r=_t.from(e[0],this.format);const i=!e[1].match(/^(0*)$/);return this.isNegative()&&i&&(r=r.subUnsafe(i1.toFormat(r.format))),r}ceiling(){const e=this.toString().split(".");e.length===1&&e.push("0");let r=_t.from(e[0],this.format);const i=!e[1].match(/^(0*)$/);return!this.isNegative()&&i&&(r=r.addUnsafe(i1.toFormat(r.format))),r}round(e){e==null&&(e=0);const r=this.toString().split(".");if(r.length===1&&r.push("0"),(e<0||e>80||e%1)&&Rt.throwArgumentError("invalid decimal count","decimals",e),r[1].length<=e)return this;const i=_t.from("1"+yo.substring(0,e),this.format),o=Uc.toFormat(this.format);return this.mulUnsafe(i).addUnsafe(o).floor().divUnsafe(i)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(e){if(e==null)return this._hex;e%8&&Rt.throwArgumentError("invalid byte width","width",e);const r=Mt.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return xa(r,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return _t.fromString(this._value,e)}static fromValue(e,r,i){return i==null&&r!=null&&!Oc(r)&&(i=r,r=null),r==null&&(r=0),i==null&&(i="fixed"),_t.fromString(xs(e,r),Rn.from(i))}static fromString(e,r){r==null&&(r="fixed");const i=Rn.from(r),o=Hr(e,i.decimals);!i.signed&&o.lt(ol)&&sl("unsigned value cannot be negative","overflow","value",e);let n=null;i.signed?n=o.toTwos(i.width).toHexString():(n=o.toHexString(),n=xa(n,i.width/8));const a=xs(o,i.decimals);return new _t(bo,n,a,i)}static fromBytes(e,r){r==null&&(r="fixed");const i=Rn.from(r);if(tl(e).length>i.width/8)throw new Error("overflow");let o=Mt.from(e);i.signed&&(o=o.fromTwos(i.width));const n=o.toTwos((i.signed?0:1)+i.width).toHexString(),a=xs(o,i.decimals);return new _t(bo,n,a,i)}static from(e,r){if(typeof e=="string")return _t.fromString(e,r);if(Ko(e))return _t.fromBytes(e,r);try{return _t.fromValue(e,0,r)}catch(i){if(i.code!==he.errors.INVALID_ARGUMENT)throw i}return Rt.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}}const i1=_t.from(1),Uc=_t.from("0.5");var n1;(function(t){t.current="",t.NFC="NFC",t.NFD="NFD",t.NFKC="NFKC",t.NFKD="NFKD"})(n1||(n1={}));var o1;(function(t){t.UNEXPECTED_CONTINUE="unexpected continuation byte",t.BAD_PREFIX="bad codepoint prefix",t.OVERRUN="string overrun",t.MISSING_CONTINUE="missing continuation byte",t.OUT_OF_RANGE="out of UTF-8 range",t.UTF16_SURROGATE="UTF-16 surrogate",t.OVERLONG="overlong representation"})(o1||(o1={}));function Dc(t){if(t.length%4!==0)throw new Error("bad data");let e=[];for(let r=0;r<t.length;r+=4)e.push(parseInt(t.substring(r,r+4),16));return e}function _s(t,e){e||(e=function(o){return[parseInt(o,16)]});let r=0,i={};return t.split(",").forEach(o=>{let n=o.split(":");r+=parseInt(n[0],16),i[r]=e(n[1])}),i}function a1(t){let e=0;return t.split(",").map(r=>{let i=r.split("-");i.length===1?i[1]="0":i[1]===""&&(i[1]="1");let o=e+parseInt(i[0],16);return e=parseInt(i[1],16),{l:o,h:e}})}a1("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),"ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(t=>parseInt(t,16)),_s("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),_s("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),_s("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",Dc),a1("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");function Lc(t){t=atob(t);const e=[];for(let r=0;r<t.length;r++)e.push(t.charCodeAt(r));return tl(e)}function ll(t,e){e==null&&(e=1);const r=[],i=r.forEach,o=function(n,a){i.call(n,function(l){a>0&&Array.isArray(l)?o(l,a-1):r.push(l)})};return o(t,e),r}function jc(t){const e={};for(let r=0;r<t.length;r++){const i=t[r];e[i[0]]=i[1]}return e}function Fc(t){let e=0;function r(){return t[e++]<<8|t[e++]}let i=r(),o=1,n=[0,1];for(let oe=1;oe<i;oe++)n.push(o+=r());let a=r(),l=e;e+=a;let h=0,g=0;function C(){return h==0&&(g=g<<8|t[e++],h=8),g>>--h&1}const A=31,k=Math.pow(2,A),I=k>>>1,N=I>>1,D=k-1;let B=0;for(let oe=0;oe<A;oe++)B=B<<1|C();let q=[],Q=0,ee=k;for(;;){let oe=Math.floor(((B-Q+1)*o-1)/ee),de=0,ht=i;for(;ht-de>1;){let Vt=de+ht>>>1;oe<n[Vt]?ht=Vt:de=Vt}if(de==0)break;q.push(de);let ye=Q+Math.floor(ee*n[de]/o),Et=Q+Math.floor(ee*n[de+1]/o)-1;for(;!((ye^Et)&I);)B=B<<1&D|C(),ye=ye<<1&D,Et=Et<<1&D|1;for(;ye&~Et&N;)B=B&I|B<<1&D>>>1|C(),ye=ye<<1^I,Et=(Et^I)<<1|I|1;Q=ye,ee=1+Et-ye}let X=i-4;return q.map(oe=>{switch(oe-X){case 3:return X+65792+(t[l++]<<16|t[l++]<<8|t[l++]);case 2:return X+256+(t[l++]<<8|t[l++]);case 1:return X+t[l++];default:return oe-1}})}function zc(t){let e=0;return()=>t[e++]}function Hc(t){return zc(Fc(t))}function Wc(t){return t&1?~t>>1:t>>1}function Vc(t,e){let r=Array(t);for(let i=0;i<t;i++)r[i]=1+e();return r}function s1(t,e){let r=Array(t);for(let i=0,o=-1;i<t;i++)r[i]=o+=1+e();return r}function Zc(t,e){let r=Array(t);for(let i=0,o=0;i<t;i++)r[i]=o+=Wc(e());return r}function _a(t,e){let r=s1(t(),t),i=t(),o=s1(i,t),n=Vc(i,t);for(let a=0;a<i;a++)for(let l=0;l<n[a];l++)r.push(o[a]+l);return e?r.map(a=>e[a]):r}function Gc(t){let e=[];for(;;){let r=t();if(r==0)break;e.push(Yc(r,t))}for(;;){let r=t()-1;if(r<0)break;e.push(Kc(r,t))}return jc(ll(e))}function qc(t){let e=[];for(;;){let r=t();if(r==0)break;e.push(r)}return e}function cl(t,e,r){let i=Array(t).fill(void 0).map(()=>[]);for(let o=0;o<e;o++)Zc(t,r).forEach((n,a)=>i[a].push(n));return i}function Yc(t,e){let r=1+e(),i=e(),o=qc(e),n=cl(o.length,1+t,e);return ll(n.map((a,l)=>{const h=a[0],g=a.slice(1);return Array(o[l]).fill(void 0).map((C,A)=>{let k=A*i;return[h+A*r,g.map(I=>I+k)]})}))}function Kc(t,e){let r=1+e();return cl(r,1+t,e).map(i=>[i[0],i.slice(1)])}function Qc(t){let e=_a(t).sort((i,o)=>i-o);return r();function r(){let i=[];for(;;){let g=_a(t,e);if(g.length==0)break;i.push({set:new Set(g),node:r()})}i.sort((g,C)=>C.set.size-g.set.size);let o=t(),n=o%3;o=o/3|0;let a=!!(o&1);o>>=1;let l=o==1,h=o==2;return{branches:i,valid:n,fe0f:a,save:l,check:h}}}function Jc(){return Hc(Lc("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="))}const ca=Jc();new Set(_a(ca)),new Set(_a(ca)),Gc(ca),Qc(ca);const Xc=new Uint8Array(32);Xc.fill(0);const eu=new Uint8Array(32);eu.fill(0),Mt.from(-1);const tu=Mt.from(0),ru=Mt.from(1);Mt.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),xa(ru.toHexString(),32),xa(tu.toHexString(),32);var wr={},le={},Qo=ul;function ul(t,e){if(!t)throw new Error(e||"Assertion failed")}ul.equal=function(t,e,r){if(t!=e)throw new Error(r||"Assertion failed: "+t+" != "+e)};var Js={exports:{}};typeof Object.create=="function"?Js.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:Js.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}};var iu=Qo,nu=Js.exports;le.inherits=nu;function ou(t,e){return(t.charCodeAt(e)&64512)!==55296||e<0||e+1>=t.length?!1:(t.charCodeAt(e+1)&64512)===56320}function au(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var r=[];if(typeof t=="string")if(e){if(e==="hex")for(t=t.replace(/[^a-z0-9]+/ig,""),t.length%2!==0&&(t="0"+t),o=0;o<t.length;o+=2)r.push(parseInt(t[o]+t[o+1],16))}else for(var i=0,o=0;o<t.length;o++){var n=t.charCodeAt(o);n<128?r[i++]=n:n<2048?(r[i++]=n>>6|192,r[i++]=n&63|128):ou(t,o)?(n=65536+((n&1023)<<10)+(t.charCodeAt(++o)&1023),r[i++]=n>>18|240,r[i++]=n>>12&63|128,r[i++]=n>>6&63|128,r[i++]=n&63|128):(r[i++]=n>>12|224,r[i++]=n>>6&63|128,r[i++]=n&63|128)}else for(o=0;o<t.length;o++)r[o]=t[o]|0;return r}le.toArray=au;function su(t){for(var e="",r=0;r<t.length;r++)e+=hl(t[r].toString(16));return e}le.toHex=su;function dl(t){var e=t>>>24|t>>>8&65280|t<<8&16711680|(t&255)<<24;return e>>>0}le.htonl=dl;function lu(t,e){for(var r="",i=0;i<t.length;i++){var o=t[i];e==="little"&&(o=dl(o)),r+=pl(o.toString(16))}return r}le.toHex32=lu;function hl(t){return t.length===1?"0"+t:t}le.zero2=hl;function pl(t){return t.length===7?"0"+t:t.length===6?"00"+t:t.length===5?"000"+t:t.length===4?"0000"+t:t.length===3?"00000"+t:t.length===2?"000000"+t:t.length===1?"0000000"+t:t}le.zero8=pl;function cu(t,e,r,i){var o=r-e;iu(o%4===0);for(var n=new Array(o/4),a=0,l=e;a<n.length;a++,l+=4){var h;i==="big"?h=t[l]<<24|t[l+1]<<16|t[l+2]<<8|t[l+3]:h=t[l+3]<<24|t[l+2]<<16|t[l+1]<<8|t[l],n[a]=h>>>0}return n}le.join32=cu;function uu(t,e){for(var r=new Array(t.length*4),i=0,o=0;i<t.length;i++,o+=4){var n=t[i];e==="big"?(r[o]=n>>>24,r[o+1]=n>>>16&255,r[o+2]=n>>>8&255,r[o+3]=n&255):(r[o+3]=n>>>24,r[o+2]=n>>>16&255,r[o+1]=n>>>8&255,r[o]=n&255)}return r}le.split32=uu;function du(t,e){return t>>>e|t<<32-e}le.rotr32=du;function hu(t,e){return t<<e|t>>>32-e}le.rotl32=hu;function pu(t,e){return t+e>>>0}le.sum32=pu;function fu(t,e,r){return t+e+r>>>0}le.sum32_3=fu;function gu(t,e,r,i){return t+e+r+i>>>0}le.sum32_4=gu;function mu(t,e,r,i,o){return t+e+r+i+o>>>0}le.sum32_5=mu;function wu(t,e,r,i){var o=t[e],n=t[e+1],a=i+n>>>0,l=(a<i?1:0)+r+o;t[e]=l>>>0,t[e+1]=a}le.sum64=wu;function vu(t,e,r,i){var o=e+i>>>0,n=(o<e?1:0)+t+r;return n>>>0}le.sum64_hi=vu;function bu(t,e,r,i){var o=e+i;return o>>>0}le.sum64_lo=bu;function yu(t,e,r,i,o,n,a,l){var h=0,g=e;g=g+i>>>0,h+=g<e?1:0,g=g+n>>>0,h+=g<n?1:0,g=g+l>>>0,h+=g<l?1:0;var C=t+r+o+a+h;return C>>>0}le.sum64_4_hi=yu;function Cu(t,e,r,i,o,n,a,l){var h=e+i+n+l;return h>>>0}le.sum64_4_lo=Cu;function Au(t,e,r,i,o,n,a,l,h,g){var C=0,A=e;A=A+i>>>0,C+=A<e?1:0,A=A+n>>>0,C+=A<n?1:0,A=A+l>>>0,C+=A<l?1:0,A=A+g>>>0,C+=A<g?1:0;var k=t+r+o+a+h+C;return k>>>0}le.sum64_5_hi=Au;function xu(t,e,r,i,o,n,a,l,h,g){var C=e+i+n+l+g;return C>>>0}le.sum64_5_lo=xu;function _u(t,e,r){var i=e<<32-r|t>>>r;return i>>>0}le.rotr64_hi=_u;function Su(t,e,r){var i=t<<32-r|e>>>r;return i>>>0}le.rotr64_lo=Su;function Eu(t,e,r){return t>>>r}le.shr64_hi=Eu;function Tu(t,e,r){var i=t<<32-r|e>>>r;return i>>>0}le.shr64_lo=Tu;var Qn={},l1=le,ku=Qo;function ua(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}Qn.BlockHash=ua,ua.prototype.update=function(t,e){if(t=l1.toArray(t,e),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){t=this.pending;var r=t.length%this._delta8;this.pending=t.slice(t.length-r,t.length),this.pending.length===0&&(this.pending=null),t=l1.join32(t,0,t.length-r,this.endian);for(var i=0;i<t.length;i+=this._delta32)this._update(t,i,i+this._delta32)}return this},ua.prototype.digest=function(t){return this.update(this._pad()),ku(this.pending===null),this._digest(t)},ua.prototype._pad=function(){var t=this.pendingTotal,e=this._delta8,r=e-(t+this.padLength)%e,i=new Array(r+this.padLength);i[0]=128;for(var o=1;o<r;o++)i[o]=0;if(t<<=3,this.endian==="big"){for(var n=8;n<this.padLength;n++)i[o++]=0;i[o++]=0,i[o++]=0,i[o++]=0,i[o++]=0,i[o++]=t>>>24&255,i[o++]=t>>>16&255,i[o++]=t>>>8&255,i[o++]=t&255}else for(i[o++]=t&255,i[o++]=t>>>8&255,i[o++]=t>>>16&255,i[o++]=t>>>24&255,i[o++]=0,i[o++]=0,i[o++]=0,i[o++]=0,n=8;n<this.padLength;n++)i[o++]=0;return i};var Sn={},Ur={},Iu=le,Ir=Iu.rotr32;function Ru(t,e,r,i){if(t===0)return fl(e,r,i);if(t===1||t===3)return ml(e,r,i);if(t===2)return gl(e,r,i)}Ur.ft_1=Ru;function fl(t,e,r){return t&e^~t&r}Ur.ch32=fl;function gl(t,e,r){return t&e^t&r^e&r}Ur.maj32=gl;function ml(t,e,r){return t^e^r}Ur.p32=ml;function Mu(t){return Ir(t,2)^Ir(t,13)^Ir(t,22)}Ur.s0_256=Mu;function Nu(t){return Ir(t,6)^Ir(t,11)^Ir(t,25)}Ur.s1_256=Nu;function Pu(t){return Ir(t,7)^Ir(t,18)^t>>>3}Ur.g0_256=Pu;function $u(t){return Ir(t,17)^Ir(t,19)^t>>>10}Ur.g1_256=$u;var $n=le,Bu=Qn,Ou=Ur,Ss=$n.rotl32,so=$n.sum32,Uu=$n.sum32_5,Du=Ou.ft_1,wl=Bu.BlockHash,Lu=[1518500249,1859775393,2400959708,3395469782];function Ar(){if(!(this instanceof Ar))return new Ar;wl.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}$n.inherits(Ar,wl);var ju=Ar;Ar.blockSize=512,Ar.outSize=160,Ar.hmacStrength=80,Ar.padLength=64,Ar.prototype._update=function(t,e){for(var r=this.W,i=0;i<16;i++)r[i]=t[e+i];for(;i<r.length;i++)r[i]=Ss(r[i-3]^r[i-8]^r[i-14]^r[i-16],1);var o=this.h[0],n=this.h[1],a=this.h[2],l=this.h[3],h=this.h[4];for(i=0;i<r.length;i++){var g=~~(i/20),C=Uu(Ss(o,5),Du(g,n,a,l),h,r[i],Lu[g]);h=l,l=a,a=Ss(n,30),n=o,o=C}this.h[0]=so(this.h[0],o),this.h[1]=so(this.h[1],n),this.h[2]=so(this.h[2],a),this.h[3]=so(this.h[3],l),this.h[4]=so(this.h[4],h)},Ar.prototype._digest=function(t){return t==="hex"?$n.toHex32(this.h,"big"):$n.split32(this.h,"big")};var Bn=le,Fu=Qn,Jn=Ur,zu=Qo,or=Bn.sum32,Hu=Bn.sum32_4,Wu=Bn.sum32_5,Vu=Jn.ch32,Zu=Jn.maj32,Gu=Jn.s0_256,qu=Jn.s1_256,Yu=Jn.g0_256,Ku=Jn.g1_256,vl=Fu.BlockHash,Qu=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function xr(){if(!(this instanceof xr))return new xr;vl.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=Qu,this.W=new Array(64)}Bn.inherits(xr,vl);var bl=xr;xr.blockSize=512,xr.outSize=256,xr.hmacStrength=192,xr.padLength=64,xr.prototype._update=function(t,e){for(var r=this.W,i=0;i<16;i++)r[i]=t[e+i];for(;i<r.length;i++)r[i]=Hu(Ku(r[i-2]),r[i-7],Yu(r[i-15]),r[i-16]);var o=this.h[0],n=this.h[1],a=this.h[2],l=this.h[3],h=this.h[4],g=this.h[5],C=this.h[6],A=this.h[7];for(zu(this.k.length===r.length),i=0;i<r.length;i++){var k=Wu(A,qu(h),Vu(h,g,C),this.k[i],r[i]),I=or(Gu(o),Zu(o,n,a));A=C,C=g,g=h,h=or(l,k),l=a,a=n,n=o,o=or(k,I)}this.h[0]=or(this.h[0],o),this.h[1]=or(this.h[1],n),this.h[2]=or(this.h[2],a),this.h[3]=or(this.h[3],l),this.h[4]=or(this.h[4],h),this.h[5]=or(this.h[5],g),this.h[6]=or(this.h[6],C),this.h[7]=or(this.h[7],A)},xr.prototype._digest=function(t){return t==="hex"?Bn.toHex32(this.h,"big"):Bn.split32(this.h,"big")};var Xs=le,yl=bl;function Yr(){if(!(this instanceof Yr))return new Yr;yl.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}Xs.inherits(Yr,yl);var Ju=Yr;Yr.blockSize=512,Yr.outSize=224,Yr.hmacStrength=192,Yr.padLength=64,Yr.prototype._digest=function(t){return t==="hex"?Xs.toHex32(this.h.slice(0,7),"big"):Xs.split32(this.h.slice(0,7),"big")};var Dt=le,Xu=Qn,ed=Qo,Rr=Dt.rotr64_hi,Mr=Dt.rotr64_lo,Cl=Dt.shr64_hi,Al=Dt.shr64_lo,gi=Dt.sum64,Es=Dt.sum64_hi,Ts=Dt.sum64_lo,td=Dt.sum64_4_hi,rd=Dt.sum64_4_lo,id=Dt.sum64_5_hi,nd=Dt.sum64_5_lo,xl=Xu.BlockHash,od=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function lr(){if(!(this instanceof lr))return new lr;xl.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=od,this.W=new Array(160)}Dt.inherits(lr,xl);var _l=lr;lr.blockSize=1024,lr.outSize=512,lr.hmacStrength=192,lr.padLength=128,lr.prototype._prepareBlock=function(t,e){for(var r=this.W,i=0;i<32;i++)r[i]=t[e+i];for(;i<r.length;i+=2){var o=md(r[i-4],r[i-3]),n=wd(r[i-4],r[i-3]),a=r[i-14],l=r[i-13],h=fd(r[i-30],r[i-29]),g=gd(r[i-30],r[i-29]),C=r[i-32],A=r[i-31];r[i]=td(o,n,a,l,h,g,C,A),r[i+1]=rd(o,n,a,l,h,g,C,A)}},lr.prototype._update=function(t,e){this._prepareBlock(t,e);var r=this.W,i=this.h[0],o=this.h[1],n=this.h[2],a=this.h[3],l=this.h[4],h=this.h[5],g=this.h[6],C=this.h[7],A=this.h[8],k=this.h[9],I=this.h[10],N=this.h[11],D=this.h[12],B=this.h[13],q=this.h[14],Q=this.h[15];ed(this.k.length===r.length);for(var ee=0;ee<r.length;ee+=2){var X=q,oe=Q,de=hd(A,k),ht=pd(A,k),ye=ad(A,k,I,N,D),Et=sd(A,k,I,N,D,B),Vt=this.k[ee],we=this.k[ee+1],Zt=r[ee],s=r[ee+1],u=id(X,oe,de,ht,ye,Et,Vt,we,Zt,s),p=nd(X,oe,de,ht,ye,Et,Vt,we,Zt,s);X=ud(i,o),oe=dd(i,o),de=ld(i,o,n,a,l),ht=cd(i,o,n,a,l,h);var v=Es(X,oe,de,ht),y=Ts(X,oe,de,ht);q=D,Q=B,D=I,B=N,I=A,N=k,A=Es(g,C,u,p),k=Ts(C,C,u,p),g=l,C=h,l=n,h=a,n=i,a=o,i=Es(u,p,v,y),o=Ts(u,p,v,y)}gi(this.h,0,i,o),gi(this.h,2,n,a),gi(this.h,4,l,h),gi(this.h,6,g,C),gi(this.h,8,A,k),gi(this.h,10,I,N),gi(this.h,12,D,B),gi(this.h,14,q,Q)},lr.prototype._digest=function(t){return t==="hex"?Dt.toHex32(this.h,"big"):Dt.split32(this.h,"big")};function ad(t,e,r,i,o){var n=t&r^~t&o;return n<0&&(n+=4294967296),n}function sd(t,e,r,i,o,n){var a=e&i^~e&n;return a<0&&(a+=4294967296),a}function ld(t,e,r,i,o){var n=t&r^t&o^r&o;return n<0&&(n+=4294967296),n}function cd(t,e,r,i,o,n){var a=e&i^e&n^i&n;return a<0&&(a+=4294967296),a}function ud(t,e){var r=Rr(t,e,28),i=Rr(e,t,2),o=Rr(e,t,7),n=r^i^o;return n<0&&(n+=4294967296),n}function dd(t,e){var r=Mr(t,e,28),i=Mr(e,t,2),o=Mr(e,t,7),n=r^i^o;return n<0&&(n+=4294967296),n}function hd(t,e){var r=Rr(t,e,14),i=Rr(t,e,18),o=Rr(e,t,9),n=r^i^o;return n<0&&(n+=4294967296),n}function pd(t,e){var r=Mr(t,e,14),i=Mr(t,e,18),o=Mr(e,t,9),n=r^i^o;return n<0&&(n+=4294967296),n}function fd(t,e){var r=Rr(t,e,1),i=Rr(t,e,8),o=Cl(t,e,7),n=r^i^o;return n<0&&(n+=4294967296),n}function gd(t,e){var r=Mr(t,e,1),i=Mr(t,e,8),o=Al(t,e,7),n=r^i^o;return n<0&&(n+=4294967296),n}function md(t,e){var r=Rr(t,e,19),i=Rr(e,t,29),o=Cl(t,e,6),n=r^i^o;return n<0&&(n+=4294967296),n}function wd(t,e){var r=Mr(t,e,19),i=Mr(e,t,29),o=Al(t,e,6),n=r^i^o;return n<0&&(n+=4294967296),n}var e0=le,Sl=_l;function Kr(){if(!(this instanceof Kr))return new Kr;Sl.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}e0.inherits(Kr,Sl);var vd=Kr;Kr.blockSize=1024,Kr.outSize=384,Kr.hmacStrength=192,Kr.padLength=128,Kr.prototype._digest=function(t){return t==="hex"?e0.toHex32(this.h.slice(0,12),"big"):e0.split32(this.h.slice(0,12),"big")},Sn.sha1=ju,Sn.sha224=Ju,Sn.sha256=bl,Sn.sha384=vd,Sn.sha512=_l;var El={},Xi=le,bd=Qn,da=Xi.rotl32,c1=Xi.sum32,lo=Xi.sum32_3,u1=Xi.sum32_4,Tl=bd.BlockHash;function vr(){if(!(this instanceof vr))return new vr;Tl.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}Xi.inherits(vr,Tl),El.ripemd160=vr,vr.blockSize=512,vr.outSize=160,vr.hmacStrength=192,vr.padLength=64,vr.prototype._update=function(t,e){for(var r=this.h[0],i=this.h[1],o=this.h[2],n=this.h[3],a=this.h[4],l=r,h=i,g=o,C=n,A=a,k=0;k<80;k++){var I=c1(da(u1(r,d1(k,i,o,n),t[Ad[k]+e],yd(k)),_d[k]),a);r=a,a=n,n=da(o,10),o=i,i=I,I=c1(da(u1(l,d1(79-k,h,g,C),t[xd[k]+e],Cd(k)),Sd[k]),A),l=A,A=C,C=da(g,10),g=h,h=I}I=lo(this.h[1],o,C),this.h[1]=lo(this.h[2],n,A),this.h[2]=lo(this.h[3],a,l),this.h[3]=lo(this.h[4],r,h),this.h[4]=lo(this.h[0],i,g),this.h[0]=I},vr.prototype._digest=function(t){return t==="hex"?Xi.toHex32(this.h,"little"):Xi.split32(this.h,"little")};function d1(t,e,r,i){return t<=15?e^r^i:t<=31?e&r|~e&i:t<=47?(e|~r)^i:t<=63?e&i|r&~i:e^(r|~i)}function yd(t){return t<=15?0:t<=31?1518500249:t<=47?1859775393:t<=63?2400959708:2840853838}function Cd(t){return t<=15?1352829926:t<=31?1548603684:t<=47?1836072691:t<=63?2053994217:0}var Ad=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],xd=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],_d=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],Sd=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],Ed=le,Td=Qo;function Mn(t,e,r){if(!(this instanceof Mn))return new Mn(t,e,r);this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,this._init(Ed.toArray(e,r))}var kd=Mn;Mn.prototype._init=function(t){t.length>this.blockSize&&(t=new this.Hash().update(t).digest()),Td(t.length<=this.blockSize);for(var e=t.length;e<this.blockSize;e++)t.push(0);for(e=0;e<t.length;e++)t[e]^=54;for(this.inner=new this.Hash().update(t),e=0;e<t.length;e++)t[e]^=106;this.outer=new this.Hash().update(t)},Mn.prototype.update=function(t,e){return this.inner.update(t,e),this},Mn.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)},function(t){var e=t;e.utils=le,e.common=Qn,e.sha=Sn,e.ripemd=El,e.hmac=kd,e.sha1=e.sha.sha1,e.sha256=e.sha.sha256,e.sha224=e.sha.sha224,e.sha384=e.sha.sha384,e.sha512=e.sha.sha512,e.ripemd160=e.ripemd.ripemd160}(wr);function Xn(t,e,r){return r={path:e,exports:{},require:function(i,o){return Id(i,o??r.path)}},t(r,r.exports),r.exports}function Id(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var g0=kl;function kl(t,e){if(!t)throw new Error(e||"Assertion failed")}kl.equal=function(t,e,r){if(t!=e)throw new Error(r||"Assertion failed: "+t+" != "+e)};var ur=Xn(function(t,e){var r=e;function i(a,l){if(Array.isArray(a))return a.slice();if(!a)return[];var h=[];if(typeof a!="string"){for(var g=0;g<a.length;g++)h[g]=a[g]|0;return h}if(l==="hex"){a=a.replace(/[^a-z0-9]+/ig,""),a.length%2!==0&&(a="0"+a);for(var g=0;g<a.length;g+=2)h.push(parseInt(a[g]+a[g+1],16))}else for(var g=0;g<a.length;g++){var C=a.charCodeAt(g),A=C>>8,k=C&255;A?h.push(A,k):h.push(k)}return h}r.toArray=i;function o(a){return a.length===1?"0"+a:a}r.zero2=o;function n(a){for(var l="",h=0;h<a.length;h++)l+=o(a[h].toString(16));return l}r.toHex=n,r.encode=function(a,l){return l==="hex"?n(a):a}}),Ft=Xn(function(t,e){var r=e;r.assert=g0,r.toArray=ur.toArray,r.zero2=ur.zero2,r.toHex=ur.toHex,r.encode=ur.encode;function i(h,g,C){var A=new Array(Math.max(h.bitLength(),C)+1);A.fill(0);for(var k=1<<g+1,I=h.clone(),N=0;N<A.length;N++){var D,B=I.andln(k-1);I.isOdd()?(B>(k>>1)-1?D=(k>>1)-B:D=B,I.isubn(D)):D=0,A[N]=D,I.iushrn(1)}return A}r.getNAF=i;function o(h,g){var C=[[],[]];h=h.clone(),g=g.clone();for(var A=0,k=0,I;h.cmpn(-A)>0||g.cmpn(-k)>0;){var N=h.andln(3)+A&3,D=g.andln(3)+k&3;N===3&&(N=-1),D===3&&(D=-1);var B;N&1?(I=h.andln(7)+A&7,(I===3||I===5)&&D===2?B=-N:B=N):B=0,C[0].push(B);var q;D&1?(I=g.andln(7)+k&7,(I===3||I===5)&&N===2?q=-D:q=D):q=0,C[1].push(q),2*A===B+1&&(A=1-A),2*k===q+1&&(k=1-k),h.iushrn(1),g.iushrn(1)}return C}r.getJSF=o;function n(h,g,C){var A="_"+g;h.prototype[g]=function(){return this[A]!==void 0?this[A]:this[A]=C.call(this)}}r.cachedProperty=n;function a(h){return typeof h=="string"?r.toArray(h,"hex"):h}r.parseBytes=a;function l(h){return new re(h,"hex","le")}r.intFromLE=l}),ha=Ft.getNAF,Rd=Ft.getJSF,Sa=Ft.assert;function wi(t,e){this.type=t,this.p=new re(e.p,16),this.red=e.prime?re.red(e.prime):re.mont(this.p),this.zero=new re(0).toRed(this.red),this.one=new re(1).toRed(this.red),this.two=new re(2).toRed(this.red),this.n=e.n&&new re(e.n,16),this.g=e.g&&this.pointFromJSON(e.g,e.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var fn=wi;wi.prototype.point=function(){throw new Error("Not implemented")},wi.prototype.validate=function(){throw new Error("Not implemented")},wi.prototype._fixedNafMul=function(t,e){Sa(t.precomputed);var r=t._getDoubles(),i=ha(e,1,this._bitLength),o=(1<<r.step+1)-(r.step%2===0?2:1);o/=3;var n=[],a,l;for(a=0;a<i.length;a+=r.step){l=0;for(var h=a+r.step-1;h>=a;h--)l=(l<<1)+i[h];n.push(l)}for(var g=this.jpoint(null,null,null),C=this.jpoint(null,null,null),A=o;A>0;A--){for(a=0;a<n.length;a++)l=n[a],l===A?C=C.mixedAdd(r.points[a]):l===-A&&(C=C.mixedAdd(r.points[a].neg()));g=g.add(C)}return g.toP()},wi.prototype._wnafMul=function(t,e){var r=4,i=t._getNAFPoints(r);r=i.wnd;for(var o=i.points,n=ha(e,r,this._bitLength),a=this.jpoint(null,null,null),l=n.length-1;l>=0;l--){for(var h=0;l>=0&&n[l]===0;l--)h++;if(l>=0&&h++,a=a.dblp(h),l<0)break;var g=n[l];Sa(g!==0),t.type==="affine"?g>0?a=a.mixedAdd(o[g-1>>1]):a=a.mixedAdd(o[-g-1>>1].neg()):g>0?a=a.add(o[g-1>>1]):a=a.add(o[-g-1>>1].neg())}return t.type==="affine"?a.toP():a},wi.prototype._wnafMulAdd=function(t,e,r,i,o){var n=this._wnafT1,a=this._wnafT2,l=this._wnafT3,h=0,g,C,A;for(g=0;g<i;g++){A=e[g];var k=A._getNAFPoints(t);n[g]=k.wnd,a[g]=k.points}for(g=i-1;g>=1;g-=2){var I=g-1,N=g;if(n[I]!==1||n[N]!==1){l[I]=ha(r[I],n[I],this._bitLength),l[N]=ha(r[N],n[N],this._bitLength),h=Math.max(l[I].length,h),h=Math.max(l[N].length,h);continue}var D=[e[I],null,null,e[N]];e[I].y.cmp(e[N].y)===0?(D[1]=e[I].add(e[N]),D[2]=e[I].toJ().mixedAdd(e[N].neg())):e[I].y.cmp(e[N].y.redNeg())===0?(D[1]=e[I].toJ().mixedAdd(e[N]),D[2]=e[I].add(e[N].neg())):(D[1]=e[I].toJ().mixedAdd(e[N]),D[2]=e[I].toJ().mixedAdd(e[N].neg()));var B=[-3,-1,-5,-7,0,7,5,1,3],q=Rd(r[I],r[N]);for(h=Math.max(q[0].length,h),l[I]=new Array(h),l[N]=new Array(h),C=0;C<h;C++){var Q=q[0][C]|0,ee=q[1][C]|0;l[I][C]=B[(Q+1)*3+(ee+1)],l[N][C]=0,a[I]=D}}var X=this.jpoint(null,null,null),oe=this._wnafT4;for(g=h;g>=0;g--){for(var de=0;g>=0;){var ht=!0;for(C=0;C<i;C++)oe[C]=l[C][g]|0,oe[C]!==0&&(ht=!1);if(!ht)break;de++,g--}if(g>=0&&de++,X=X.dblp(de),g<0)break;for(C=0;C<i;C++){var ye=oe[C];ye!==0&&(ye>0?A=a[C][ye-1>>1]:ye<0&&(A=a[C][-ye-1>>1].neg()),A.type==="affine"?X=X.mixedAdd(A):X=X.add(A))}}for(g=0;g<i;g++)a[g]=null;return o?X:X.toP()};function qt(t,e){this.curve=t,this.type=e,this.precomputed=null}wi.BasePoint=qt,qt.prototype.eq=function(){throw new Error("Not implemented")},qt.prototype.validate=function(){return this.curve.validate(this)},wi.prototype.decodePoint=function(t,e){t=Ft.toArray(t,e);var r=this.p.byteLength();if((t[0]===4||t[0]===6||t[0]===7)&&t.length-1===2*r){t[0]===6?Sa(t[t.length-1]%2===0):t[0]===7&&Sa(t[t.length-1]%2===1);var i=this.point(t.slice(1,1+r),t.slice(1+r,1+2*r));return i}else if((t[0]===2||t[0]===3)&&t.length-1===r)return this.pointFromX(t.slice(1,1+r),t[0]===3);throw new Error("Unknown point format")},qt.prototype.encodeCompressed=function(t){return this.encode(t,!0)},qt.prototype._encode=function(t){var e=this.curve.p.byteLength(),r=this.getX().toArray("be",e);return t?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",e))},qt.prototype.encode=function(t,e){return Ft.encode(this._encode(e),t)},qt.prototype.precompute=function(t){if(this.precomputed)return this;var e={doubles:null,naf:null,beta:null};return e.naf=this._getNAFPoints(8),e.doubles=this._getDoubles(4,t),e.beta=this._getBeta(),this.precomputed=e,this},qt.prototype._hasDoubles=function(t){if(!this.precomputed)return!1;var e=this.precomputed.doubles;return e?e.points.length>=Math.ceil((t.bitLength()+1)/e.step):!1},qt.prototype._getDoubles=function(t,e){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],i=this,o=0;o<e;o+=t){for(var n=0;n<t;n++)i=i.dbl();r.push(i)}return{step:t,points:r}},qt.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var e=[this],r=(1<<t)-1,i=r===1?null:this.dbl(),o=1;o<r;o++)e[o]=e[o-1].add(i);return{wnd:t,points:e}},qt.prototype._getBeta=function(){return null},qt.prototype.dblp=function(t){for(var e=this,r=0;r<t;r++)e=e.dbl();return e};var m0=Xn(function(t){typeof Object.create=="function"?t.exports=function(e,r){r&&(e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(e,r){if(r){e.super_=r;var i=function(){};i.prototype=r.prototype,e.prototype=new i,e.prototype.constructor=e}}}),Md=Ft.assert;function Jt(t){fn.call(this,"short",t),this.a=new re(t.a,16).toRed(this.red),this.b=new re(t.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=this.a.fromRed().cmpn(0)===0,this.threeA=this.a.fromRed().sub(this.p).cmpn(-3)===0,this.endo=this._getEndomorphism(t),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}m0(Jt,fn);var Nd=Jt;Jt.prototype._getEndomorphism=function(t){if(!(!this.zeroA||!this.g||!this.n||this.p.modn(3)!==1)){var e,r;if(t.beta)e=new re(t.beta,16).toRed(this.red);else{var i=this._getEndoRoots(this.p);e=i[0].cmp(i[1])<0?i[0]:i[1],e=e.toRed(this.red)}if(t.lambda)r=new re(t.lambda,16);else{var o=this._getEndoRoots(this.n);this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))===0?r=o[0]:(r=o[1],Md(this.g.mul(r).x.cmp(this.g.x.redMul(e))===0))}var n;return t.basis?n=t.basis.map(function(a){return{a:new re(a.a,16),b:new re(a.b,16)}}):n=this._getEndoBasis(r),{beta:e,lambda:r,basis:n}}},Jt.prototype._getEndoRoots=function(t){var e=t===this.p?this.red:re.mont(t),r=new re(2).toRed(e).redInvm(),i=r.redNeg(),o=new re(3).toRed(e).redNeg().redSqrt().redMul(r),n=i.redAdd(o).fromRed(),a=i.redSub(o).fromRed();return[n,a]},Jt.prototype._getEndoBasis=function(t){for(var e=this.n.ushrn(Math.floor(this.n.bitLength()/2)),r=t,i=this.n.clone(),o=new re(1),n=new re(0),a=new re(0),l=new re(1),h,g,C,A,k,I,N,D=0,B,q;r.cmpn(0)!==0;){var Q=i.div(r);B=i.sub(Q.mul(r)),q=a.sub(Q.mul(o));var ee=l.sub(Q.mul(n));if(!C&&B.cmp(e)<0)h=N.neg(),g=o,C=B.neg(),A=q;else if(C&&++D===2)break;N=B,i=r,r=B,a=o,o=q,l=n,n=ee}k=B.neg(),I=q;var X=C.sqr().add(A.sqr()),oe=k.sqr().add(I.sqr());return oe.cmp(X)>=0&&(k=h,I=g),C.negative&&(C=C.neg(),A=A.neg()),k.negative&&(k=k.neg(),I=I.neg()),[{a:C,b:A},{a:k,b:I}]},Jt.prototype._endoSplit=function(t){var e=this.endo.basis,r=e[0],i=e[1],o=i.b.mul(t).divRound(this.n),n=r.b.neg().mul(t).divRound(this.n),a=o.mul(r.a),l=n.mul(i.a),h=o.mul(r.b),g=n.mul(i.b),C=t.sub(a).sub(l),A=h.add(g).neg();return{k1:C,k2:A}},Jt.prototype.pointFromX=function(t,e){t=new re(t,16),t.red||(t=t.toRed(this.red));var r=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),i=r.redSqrt();if(i.redSqr().redSub(r).cmp(this.zero)!==0)throw new Error("invalid point");var o=i.fromRed().isOdd();return(e&&!o||!e&&o)&&(i=i.redNeg()),this.point(t,i)},Jt.prototype.validate=function(t){if(t.inf)return!0;var e=t.x,r=t.y,i=this.a.redMul(e),o=e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);return r.redSqr().redISub(o).cmpn(0)===0},Jt.prototype._endoWnafMulAdd=function(t,e,r){for(var i=this._endoWnafT1,o=this._endoWnafT2,n=0;n<t.length;n++){var a=this._endoSplit(e[n]),l=t[n],h=l._getBeta();a.k1.negative&&(a.k1.ineg(),l=l.neg(!0)),a.k2.negative&&(a.k2.ineg(),h=h.neg(!0)),i[n*2]=l,i[n*2+1]=h,o[n*2]=a.k1,o[n*2+1]=a.k2}for(var g=this._wnafMulAdd(1,i,o,n*2,r),C=0;C<n*2;C++)i[C]=null,o[C]=null;return g};function mt(t,e,r,i){fn.BasePoint.call(this,t,"affine"),e===null&&r===null?(this.x=null,this.y=null,this.inf=!0):(this.x=new re(e,16),this.y=new re(r,16),i&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}m0(mt,fn.BasePoint),Jt.prototype.point=function(t,e,r){return new mt(this,t,e,r)},Jt.prototype.pointFromJSON=function(t,e){return mt.fromJSON(this,t,e)},mt.prototype._getBeta=function(){if(this.curve.endo){var t=this.precomputed;if(t&&t.beta)return t.beta;var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(t){var r=this.curve,i=function(o){return r.point(o.x.redMul(r.endo.beta),o.y)};t.beta=e,e.precomputed={beta:null,naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(i)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(i)}}}return e}},mt.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},mt.fromJSON=function(t,e,r){typeof e=="string"&&(e=JSON.parse(e));var i=t.point(e[0],e[1],r);if(!e[2])return i;function o(a){return t.point(a[0],a[1],r)}var n=e[2];return i.precomputed={beta:null,doubles:n.doubles&&{step:n.doubles.step,points:[i].concat(n.doubles.points.map(o))},naf:n.naf&&{wnd:n.naf.wnd,points:[i].concat(n.naf.points.map(o))}},i},mt.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},mt.prototype.isInfinity=function(){return this.inf},mt.prototype.add=function(t){if(this.inf)return t;if(t.inf)return this;if(this.eq(t))return this.dbl();if(this.neg().eq(t))return this.curve.point(null,null);if(this.x.cmp(t.x)===0)return this.curve.point(null,null);var e=this.y.redSub(t.y);e.cmpn(0)!==0&&(e=e.redMul(this.x.redSub(t.x).redInvm()));var r=e.redSqr().redISub(this.x).redISub(t.x),i=e.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,i)},mt.prototype.dbl=function(){if(this.inf)return this;var t=this.y.redAdd(this.y);if(t.cmpn(0)===0)return this.curve.point(null,null);var e=this.curve.a,r=this.x.redSqr(),i=t.redInvm(),o=r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),n=o.redSqr().redISub(this.x.redAdd(this.x)),a=o.redMul(this.x.redSub(n)).redISub(this.y);return this.curve.point(n,a)},mt.prototype.getX=function(){return this.x.fromRed()},mt.prototype.getY=function(){return this.y.fromRed()},mt.prototype.mul=function(t){return t=new re(t,16),this.isInfinity()?this:this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)},mt.prototype.mulAdd=function(t,e,r){var i=[this,e],o=[t,r];return this.curve.endo?this.curve._endoWnafMulAdd(i,o):this.curve._wnafMulAdd(1,i,o,2)},mt.prototype.jmulAdd=function(t,e,r){var i=[this,e],o=[t,r];return this.curve.endo?this.curve._endoWnafMulAdd(i,o,!0):this.curve._wnafMulAdd(1,i,o,2,!0)},mt.prototype.eq=function(t){return this===t||this.inf===t.inf&&(this.inf||this.x.cmp(t.x)===0&&this.y.cmp(t.y)===0)},mt.prototype.neg=function(t){if(this.inf)return this;var e=this.curve.point(this.x,this.y.redNeg());if(t&&this.precomputed){var r=this.precomputed,i=function(o){return o.neg()};e.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(i)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(i)}}}return e},mt.prototype.toJ=function(){if(this.inf)return this.curve.jpoint(null,null,null);var t=this.curve.jpoint(this.x,this.y,this.curve.one);return t};function xt(t,e,r,i){fn.BasePoint.call(this,t,"jacobian"),e===null&&r===null&&i===null?(this.x=this.curve.one,this.y=this.curve.one,this.z=new re(0)):(this.x=new re(e,16),this.y=new re(r,16),this.z=new re(i,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}m0(xt,fn.BasePoint),Jt.prototype.jpoint=function(t,e,r){return new xt(this,t,e,r)},xt.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var t=this.z.redInvm(),e=t.redSqr(),r=this.x.redMul(e),i=this.y.redMul(e).redMul(t);return this.curve.point(r,i)},xt.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},xt.prototype.add=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var e=t.z.redSqr(),r=this.z.redSqr(),i=this.x.redMul(e),o=t.x.redMul(r),n=this.y.redMul(e.redMul(t.z)),a=t.y.redMul(r.redMul(this.z)),l=i.redSub(o),h=n.redSub(a);if(l.cmpn(0)===0)return h.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var g=l.redSqr(),C=g.redMul(l),A=i.redMul(g),k=h.redSqr().redIAdd(C).redISub(A).redISub(A),I=h.redMul(A.redISub(k)).redISub(n.redMul(C)),N=this.z.redMul(t.z).redMul(l);return this.curve.jpoint(k,I,N)},xt.prototype.mixedAdd=function(t){if(this.isInfinity())return t.toJ();if(t.isInfinity())return this;var e=this.z.redSqr(),r=this.x,i=t.x.redMul(e),o=this.y,n=t.y.redMul(e).redMul(this.z),a=r.redSub(i),l=o.redSub(n);if(a.cmpn(0)===0)return l.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var h=a.redSqr(),g=h.redMul(a),C=r.redMul(h),A=l.redSqr().redIAdd(g).redISub(C).redISub(C),k=l.redMul(C.redISub(A)).redISub(o.redMul(g)),I=this.z.redMul(a);return this.curve.jpoint(A,k,I)},xt.prototype.dblp=function(t){if(t===0)return this;if(this.isInfinity())return this;if(!t)return this.dbl();var e;if(this.curve.zeroA||this.curve.threeA){var r=this;for(e=0;e<t;e++)r=r.dbl();return r}var i=this.curve.a,o=this.curve.tinv,n=this.x,a=this.y,l=this.z,h=l.redSqr().redSqr(),g=a.redAdd(a);for(e=0;e<t;e++){var C=n.redSqr(),A=g.redSqr(),k=A.redSqr(),I=C.redAdd(C).redIAdd(C).redIAdd(i.redMul(h)),N=n.redMul(A),D=I.redSqr().redISub(N.redAdd(N)),B=N.redISub(D),q=I.redMul(B);q=q.redIAdd(q).redISub(k);var Q=g.redMul(l);e+1<t&&(h=h.redMul(k)),n=D,l=Q,g=q}return this.curve.jpoint(n,g.redMul(o),l)},xt.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},xt.prototype._zeroDbl=function(){var t,e,r;if(this.zOne){var i=this.x.redSqr(),o=this.y.redSqr(),n=o.redSqr(),a=this.x.redAdd(o).redSqr().redISub(i).redISub(n);a=a.redIAdd(a);var l=i.redAdd(i).redIAdd(i),h=l.redSqr().redISub(a).redISub(a),g=n.redIAdd(n);g=g.redIAdd(g),g=g.redIAdd(g),t=h,e=l.redMul(a.redISub(h)).redISub(g),r=this.y.redAdd(this.y)}else{var C=this.x.redSqr(),A=this.y.redSqr(),k=A.redSqr(),I=this.x.redAdd(A).redSqr().redISub(C).redISub(k);I=I.redIAdd(I);var N=C.redAdd(C).redIAdd(C),D=N.redSqr(),B=k.redIAdd(k);B=B.redIAdd(B),B=B.redIAdd(B),t=D.redISub(I).redISub(I),e=N.redMul(I.redISub(t)).redISub(B),r=this.y.redMul(this.z),r=r.redIAdd(r)}return this.curve.jpoint(t,e,r)},xt.prototype._threeDbl=function(){var t,e,r;if(this.zOne){var i=this.x.redSqr(),o=this.y.redSqr(),n=o.redSqr(),a=this.x.redAdd(o).redSqr().redISub(i).redISub(n);a=a.redIAdd(a);var l=i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),h=l.redSqr().redISub(a).redISub(a);t=h;var g=n.redIAdd(n);g=g.redIAdd(g),g=g.redIAdd(g),e=l.redMul(a.redISub(h)).redISub(g),r=this.y.redAdd(this.y)}else{var C=this.z.redSqr(),A=this.y.redSqr(),k=this.x.redMul(A),I=this.x.redSub(C).redMul(this.x.redAdd(C));I=I.redAdd(I).redIAdd(I);var N=k.redIAdd(k);N=N.redIAdd(N);var D=N.redAdd(N);t=I.redSqr().redISub(D),r=this.y.redAdd(this.z).redSqr().redISub(A).redISub(C);var B=A.redSqr();B=B.redIAdd(B),B=B.redIAdd(B),B=B.redIAdd(B),e=I.redMul(N.redISub(t)).redISub(B)}return this.curve.jpoint(t,e,r)},xt.prototype._dbl=function(){var t=this.curve.a,e=this.x,r=this.y,i=this.z,o=i.redSqr().redSqr(),n=e.redSqr(),a=r.redSqr(),l=n.redAdd(n).redIAdd(n).redIAdd(t.redMul(o)),h=e.redAdd(e);h=h.redIAdd(h);var g=h.redMul(a),C=l.redSqr().redISub(g.redAdd(g)),A=g.redISub(C),k=a.redSqr();k=k.redIAdd(k),k=k.redIAdd(k),k=k.redIAdd(k);var I=l.redMul(A).redISub(k),N=r.redAdd(r).redMul(i);return this.curve.jpoint(C,I,N)},xt.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var t=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr(),i=e.redSqr(),o=t.redAdd(t).redIAdd(t),n=o.redSqr(),a=this.x.redAdd(e).redSqr().redISub(t).redISub(i);a=a.redIAdd(a),a=a.redAdd(a).redIAdd(a),a=a.redISub(n);var l=a.redSqr(),h=i.redIAdd(i);h=h.redIAdd(h),h=h.redIAdd(h),h=h.redIAdd(h);var g=o.redIAdd(a).redSqr().redISub(n).redISub(l).redISub(h),C=e.redMul(g);C=C.redIAdd(C),C=C.redIAdd(C);var A=this.x.redMul(l).redISub(C);A=A.redIAdd(A),A=A.redIAdd(A);var k=this.y.redMul(g.redMul(h.redISub(g)).redISub(a.redMul(l)));k=k.redIAdd(k),k=k.redIAdd(k),k=k.redIAdd(k);var I=this.z.redAdd(a).redSqr().redISub(r).redISub(l);return this.curve.jpoint(A,k,I)},xt.prototype.mul=function(t,e){return t=new re(t,e),this.curve._wnafMul(this,t)},xt.prototype.eq=function(t){if(t.type==="affine")return this.eq(t.toJ());if(this===t)return!0;var e=this.z.redSqr(),r=t.z.redSqr();if(this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)!==0)return!1;var i=e.redMul(this.z),o=r.redMul(t.z);return this.y.redMul(o).redISub(t.y.redMul(i)).cmpn(0)===0},xt.prototype.eqXToP=function(t){var e=this.z.redSqr(),r=t.toRed(this.curve.red).redMul(e);if(this.x.cmp(r)===0)return!0;for(var i=t.clone(),o=this.curve.redN.redMul(e);;){if(i.iadd(this.curve.n),i.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(o),this.x.cmp(r)===0)return!0}},xt.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},xt.prototype.isInfinity=function(){return this.z.cmpn(0)===0};var wa=Xn(function(t,e){var r=e;r.base=fn,r.short=Nd,r.mont=null,r.edwards=null}),va=Xn(function(t,e){var r=e,i=Ft.assert;function o(l){l.type==="short"?this.curve=new wa.short(l):l.type==="edwards"?this.curve=new wa.edwards(l):this.curve=new wa.mont(l),this.g=this.curve.g,this.n=this.curve.n,this.hash=l.hash,i(this.g.validate(),"Invalid curve"),i(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}r.PresetCurve=o;function n(l,h){Object.defineProperty(r,l,{configurable:!0,enumerable:!0,get:function(){var g=new o(h);return Object.defineProperty(r,l,{configurable:!0,enumerable:!0,value:g}),g}})}n("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:wr.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),n("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:wr.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),n("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:wr.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),n("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:wr.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),n("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:wr.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),n("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:wr.sha256,gRed:!1,g:["9"]}),n("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:wr.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var a;try{a=null.crash()}catch{a=void 0}n("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:wr.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",a]})});function vi(t){if(!(this instanceof vi))return new vi(t);this.hash=t.hash,this.predResist=!!t.predResist,this.outLen=this.hash.outSize,this.minEntropy=t.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var e=ur.toArray(t.entropy,t.entropyEnc||"hex"),r=ur.toArray(t.nonce,t.nonceEnc||"hex"),i=ur.toArray(t.pers,t.persEnc||"hex");g0(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(e,r,i)}var h1=vi;vi.prototype._init=function(t,e,r){var i=t.concat(e).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var o=0;o<this.V.length;o++)this.K[o]=0,this.V[o]=1;this._update(i),this._reseed=1,this.reseedInterval=281474976710656},vi.prototype._hmac=function(){return new wr.hmac(this.hash,this.K)},vi.prototype._update=function(t){var e=this._hmac().update(this.V).update([0]);t&&(e=e.update(t)),this.K=e.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())},vi.prototype.reseed=function(t,e,r,i){typeof e!="string"&&(i=r,r=e,e=null),t=ur.toArray(t,e),r=ur.toArray(r,i),g0(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(r||[])),this._reseed=1},vi.prototype.generate=function(t,e,r,i){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");typeof e!="string"&&(i=r,r=e,e=null),r&&(r=ur.toArray(r,i||"hex"),this._update(r));for(var o=[];o.length<t;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V);var n=o.slice(0,t);return this._update(r),this._reseed++,ur.encode(n,e)};var ks=Ft.assert;function kt(t,e){this.ec=t,this.priv=null,this.pub=null,e.priv&&this._importPrivate(e.priv,e.privEnc),e.pub&&this._importPublic(e.pub,e.pubEnc)}var Is=kt;kt.fromPublic=function(t,e,r){return e instanceof kt?e:new kt(t,{pub:e,pubEnc:r})},kt.fromPrivate=function(t,e,r){return e instanceof kt?e:new kt(t,{priv:e,privEnc:r})},kt.prototype.validate=function(){var t=this.getPublic();return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},kt.prototype.getPublic=function(t,e){return typeof t=="string"&&(e=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),e?this.pub.encode(e,t):this.pub},kt.prototype.getPrivate=function(t){return t==="hex"?this.priv.toString(16,2):this.priv},kt.prototype._importPrivate=function(t,e){this.priv=new re(t,e||16),this.priv=this.priv.umod(this.ec.curve.n)},kt.prototype._importPublic=function(t,e){if(t.x||t.y){this.ec.curve.type==="mont"?ks(t.x,"Need x coordinate"):(this.ec.curve.type==="short"||this.ec.curve.type==="edwards")&&ks(t.x&&t.y,"Need both x and y coordinate"),this.pub=this.ec.curve.point(t.x,t.y);return}this.pub=this.ec.curve.decodePoint(t,e)},kt.prototype.derive=function(t){return t.validate()||ks(t.validate(),"public point not validated"),t.mul(this.priv).getX()},kt.prototype.sign=function(t,e,r){return this.ec.sign(t,this,e,r)},kt.prototype.verify=function(t,e){return this.ec.verify(t,e,this)},kt.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var Pd=Ft.assert;function Fa(t,e){if(t instanceof Fa)return t;this._importDER(t,e)||(Pd(t.r&&t.s,"Signature without r or s"),this.r=new re(t.r,16),this.s=new re(t.s,16),t.recoveryParam===void 0?this.recoveryParam=null:this.recoveryParam=t.recoveryParam)}var pa=Fa;function $d(){this.place=0}function Rs(t,e){var r=t[e.place++];if(!(r&128))return r;var i=r&15;if(i===0||i>4)return!1;for(var o=0,n=0,a=e.place;n<i;n++,a++)o<<=8,o|=t[a],o>>>=0;return o<=127?!1:(e.place=a,o)}function p1(t){for(var e=0,r=t.length-1;!t[e]&&!(t[e+1]&128)&&e<r;)e++;return e===0?t:t.slice(e)}Fa.prototype._importDER=function(t,e){t=Ft.toArray(t,e);var r=new $d;if(t[r.place++]!==48)return!1;var i=Rs(t,r);if(i===!1||i+r.place!==t.length||t[r.place++]!==2)return!1;var o=Rs(t,r);if(o===!1)return!1;var n=t.slice(r.place,o+r.place);if(r.place+=o,t[r.place++]!==2)return!1;var a=Rs(t,r);if(a===!1||t.length!==a+r.place)return!1;var l=t.slice(r.place,a+r.place);if(n[0]===0)if(n[1]&128)n=n.slice(1);else return!1;if(l[0]===0)if(l[1]&128)l=l.slice(1);else return!1;return this.r=new re(n),this.s=new re(l),this.recoveryParam=null,!0};function Ms(t,e){if(e<128){t.push(e);return}var r=1+(Math.log(e)/Math.LN2>>>3);for(t.push(r|128);--r;)t.push(e>>>(r<<3)&255);t.push(e)}Fa.prototype.toDER=function(t){var e=this.r.toArray(),r=this.s.toArray();for(e[0]&128&&(e=[0].concat(e)),r[0]&128&&(r=[0].concat(r)),e=p1(e),r=p1(r);!r[0]&&!(r[1]&128);)r=r.slice(1);var i=[2];Ms(i,e.length),i=i.concat(e),i.push(2),Ms(i,r.length);var o=i.concat(r),n=[48];return Ms(n,o.length),n=n.concat(o),Ft.encode(n,t)};var Bd=function(){throw new Error("unsupported")},Il=Ft.assert;function Qt(t){if(!(this instanceof Qt))return new Qt(t);typeof t=="string"&&(Il(Object.prototype.hasOwnProperty.call(va,t),"Unknown curve "+t),t=va[t]),t instanceof va.PresetCurve&&(t={curve:t}),this.curve=t.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=t.curve.g,this.g.precompute(t.curve.n.bitLength()+1),this.hash=t.hash||t.curve.hash}var Od=Qt;Qt.prototype.keyPair=function(t){return new Is(this,t)},Qt.prototype.keyFromPrivate=function(t,e){return Is.fromPrivate(this,t,e)},Qt.prototype.keyFromPublic=function(t,e){return Is.fromPublic(this,t,e)},Qt.prototype.genKeyPair=function(t){t||(t={});for(var e=new h1({hash:this.hash,pers:t.pers,persEnc:t.persEnc||"utf8",entropy:t.entropy||Bd(this.hash.hmacStrength),entropyEnc:t.entropy&&t.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),i=this.n.sub(new re(2));;){var o=new re(e.generate(r));if(!(o.cmp(i)>0))return o.iaddn(1),this.keyFromPrivate(o)}},Qt.prototype._truncateToN=function(t,e){var r=t.byteLength()*8-this.n.bitLength();return r>0&&(t=t.ushrn(r)),!e&&t.cmp(this.n)>=0?t.sub(this.n):t},Qt.prototype.sign=function(t,e,r,i){typeof r=="object"&&(i=r,r=null),i||(i={}),e=this.keyFromPrivate(e,r),t=this._truncateToN(new re(t,16));for(var o=this.n.byteLength(),n=e.getPrivate().toArray("be",o),a=t.toArray("be",o),l=new h1({hash:this.hash,entropy:n,nonce:a,pers:i.pers,persEnc:i.persEnc||"utf8"}),h=this.n.sub(new re(1)),g=0;;g++){var C=i.k?i.k(g):new re(l.generate(this.n.byteLength()));if(C=this._truncateToN(C,!0),!(C.cmpn(1)<=0||C.cmp(h)>=0)){var A=this.g.mul(C);if(!A.isInfinity()){var k=A.getX(),I=k.umod(this.n);if(I.cmpn(0)!==0){var N=C.invm(this.n).mul(I.mul(e.getPrivate()).iadd(t));if(N=N.umod(this.n),N.cmpn(0)!==0){var D=(A.getY().isOdd()?1:0)|(k.cmp(I)!==0?2:0);return i.canonical&&N.cmp(this.nh)>0&&(N=this.n.sub(N),D^=1),new pa({r:I,s:N,recoveryParam:D})}}}}}},Qt.prototype.verify=function(t,e,r,i){t=this._truncateToN(new re(t,16)),r=this.keyFromPublic(r,i),e=new pa(e,"hex");var o=e.r,n=e.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0||n.cmpn(1)<0||n.cmp(this.n)>=0)return!1;var a=n.invm(this.n),l=a.mul(t).umod(this.n),h=a.mul(o).umod(this.n),g;return this.curve._maxwellTrick?(g=this.g.jmulAdd(l,r.getPublic(),h),g.isInfinity()?!1:g.eqXToP(o)):(g=this.g.mulAdd(l,r.getPublic(),h),g.isInfinity()?!1:g.getX().umod(this.n).cmp(o)===0)},Qt.prototype.recoverPubKey=function(t,e,r,i){Il((3&r)===r,"The recovery param is more than two bits"),e=new pa(e,i);var o=this.n,n=new re(t),a=e.r,l=e.s,h=r&1,g=r>>1;if(a.cmp(this.curve.p.umod(this.curve.n))>=0&&g)throw new Error("Unable to find sencond key candinate");g?a=this.curve.pointFromX(a.add(this.curve.n),h):a=this.curve.pointFromX(a,h);var C=e.r.invm(o),A=o.sub(n).mul(C).umod(o),k=l.mul(C).umod(o);return this.g.mulAdd(A,a,k)},Qt.prototype.getKeyRecoveryParam=function(t,e,r,i){if(e=new pa(e,i),e.recoveryParam!==null)return e.recoveryParam;for(var o=0;o<4;o++){var n;try{n=this.recoverPubKey(t,e,o)}catch{continue}if(n.eq(r))return o}throw new Error("Unable to find valid recovery factor")};var Ud=Xn(function(t,e){var r=e;r.version="6.5.4",r.utils=Ft,r.rand=function(){throw new Error("unsupported")},r.curve=wa,r.curves=va,r.ec=Od,r.eddsa=null});Ud.ec;var f1;(function(t){t[t.legacy=0]="legacy",t[t.eip2930=1]="eip2930",t[t.eip1559=2]="eip1559"})(f1||(f1={}));const Dd="did:pkh:",Rl=t=>t==null?void 0:t.split(":"),Hf=t=>{const e=t&&Rl(t);if(e)return t.includes(Dd)?e[3]:e[1]},Wf=t=>{const e=t&&Rl(t);if(e)return e.pop()},jt=ne({status:"uninitialized"}),co={state:jt,subscribeKey(t,e){return lt(jt,t,e)},subscribe(t){return dt(jt,()=>t(jt))},_getClient(){if(!jt._client)throw new Error("SIWEController client not set");return jt._client},async getNonce(t){const r=await this._getClient().getNonce(t);return this.setNonce(r),r},async getSession(){try{const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e}catch{return}},createMessage(t){const r=this._getClient().createMessage(t);return this.setMessage(r),r},async verifyMessage(t){return await this._getClient().verifyMessage(t)},async signIn(){return await this._getClient().signIn()},async signOut(){var e;const t=this._getClient();await t.signOut(),this.setStatus("ready"),this.setSession(void 0),(e=t.onSignOut)==null||e.call(t)},onSignIn(t){var r;const e=this._getClient();(r=e.onSignIn)==null||r.call(e,t)},onSignOut(){var e;const t=this._getClient();(e=t.onSignOut)==null||e.call(t)},setSIWEClient(t){jt._client=vt(t),jt.status="ready",ue.setIsSiweEnabled(t.options.enabled)},setNonce(t){jt.nonce=t},setStatus(t){jt.status=t},setMessage(t){jt.message=t},setSession(t){jt.session=t,jt.status=t?"success":"ready"}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ba=globalThis,w0=ba.ShadowRoot&&(ba.ShadyCSS===void 0||ba.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,v0=Symbol(),g1=new WeakMap;let Ml=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==v0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(w0&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=g1.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&g1.set(r,e))}return e}toString(){return this.cssText}};const Ld=t=>new Ml(typeof t=="string"?t:t+"",void 0,v0),U=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,o,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1],t[0]);return new Ml(r,t,v0)},jd=(t,e)=>{if(w0)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),o=ba.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}},m1=w0?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Ld(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fd,defineProperty:zd,getOwnPropertyDescriptor:Hd,getOwnPropertyNames:Wd,getOwnPropertySymbols:Vd,getPrototypeOf:Zd}=Object,Ai=globalThis,w1=Ai.trustedTypes,Gd=w1?w1.emptyScript:"",Ns=Ai.reactiveElementPolyfillSupport,Co=(t,e)=>t,Ea={toAttribute(t,e){switch(e){case Boolean:t=t?Gd:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},b0=(t,e)=>!Fd(t,e),v1={attribute:!0,type:String,converter:Ea,reflect:!1,hasChanged:b0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ai.litPropertyMetadata??(Ai.litPropertyMetadata=new WeakMap);let En=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=v1){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,r);o!==void 0&&zd(this.prototype,e,o)}}static getPropertyDescriptor(e,r,i){const{get:o,set:n}=Hd(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const l=o==null?void 0:o.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??v1}static _$Ei(){if(this.hasOwnProperty(Co("elementProperties")))return;const e=Zd(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Co("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Co("properties"))){const r=this.properties,i=[...Wd(r),...Vd(r)];for(const o of i)this.createProperty(o,r[o])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,o]of r)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const o=this._$Eu(r,i);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)r.unshift(m1(o))}else e!==void 0&&r.push(m1(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jd(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Ea).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=i.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Ea;this._$Em=o,this[o]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??b0)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};En.elementStyles=[],En.shadowRootOptions={mode:"open"},En[Co("elementProperties")]=new Map,En[Co("finalized")]=new Map,Ns==null||Ns({ReactiveElement:En}),(Ai.reactiveElementVersions??(Ai.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao=globalThis,Ta=Ao.trustedTypes,b1=Ta?Ta.createPolicy("lit-html",{createHTML:t=>t}):void 0,Nl="$lit$",bi=`lit$${Math.random().toFixed(9).slice(2)}$`,Pl="?"+bi,qd=`<${Pl}>`,tn=document,ko=()=>tn.createComment(""),Io=t=>t===null||typeof t!="object"&&typeof t!="function",y0=Array.isArray,Yd=t=>y0(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ps=`[ 	
\f\r]`,uo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y1=/-->/g,C1=/>/g,Yi=RegExp(`>|${Ps}(?:([^\\s"'>=/]+)(${Ps}*=${Ps}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),A1=/'/g,x1=/"/g,$l=/^(?:script|style|textarea|title)$/i,Bl=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),_=Bl(1),$=Bl(2),rn=Symbol.for("lit-noChange"),ut=Symbol.for("lit-nothing"),_1=new WeakMap,Qi=tn.createTreeWalker(tn,129);function Ol(t,e){if(!y0(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return b1!==void 0?b1.createHTML(e):e}const Kd=(t,e)=>{const r=t.length-1,i=[];let o,n=e===2?"<svg>":e===3?"<math>":"",a=uo;for(let l=0;l<r;l++){const h=t[l];let g,C,A=-1,k=0;for(;k<h.length&&(a.lastIndex=k,C=a.exec(h),C!==null);)k=a.lastIndex,a===uo?C[1]==="!--"?a=y1:C[1]!==void 0?a=C1:C[2]!==void 0?($l.test(C[2])&&(o=RegExp("</"+C[2],"g")),a=Yi):C[3]!==void 0&&(a=Yi):a===Yi?C[0]===">"?(a=o??uo,A=-1):C[1]===void 0?A=-2:(A=a.lastIndex-C[2].length,g=C[1],a=C[3]===void 0?Yi:C[3]==='"'?x1:A1):a===x1||a===A1?a=Yi:a===y1||a===C1?a=uo:(a=Yi,o=void 0);const I=a===Yi&&t[l+1].startsWith("/>")?" ":"";n+=a===uo?h+qd:A>=0?(i.push(g),h.slice(0,A)+Nl+h.slice(A)+bi+I):h+bi+(A===-2?l:I)}return[Ol(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let t0=class Ul{constructor({strings:e,_$litType$:r},i){let o;this.parts=[];let n=0,a=0;const l=e.length-1,h=this.parts,[g,C]=Kd(e,r);if(this.el=Ul.createElement(g,i),Qi.currentNode=this.el.content,r===2||r===3){const A=this.el.content.firstChild;A.replaceWith(...A.childNodes)}for(;(o=Qi.nextNode())!==null&&h.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const A of o.getAttributeNames())if(A.endsWith(Nl)){const k=C[a++],I=o.getAttribute(A).split(bi),N=/([.?@])?(.*)/.exec(k);h.push({type:1,index:n,name:N[2],strings:I,ctor:N[1]==="."?Jd:N[1]==="?"?Xd:N[1]==="@"?eh:za}),o.removeAttribute(A)}else A.startsWith(bi)&&(h.push({type:6,index:n}),o.removeAttribute(A));if($l.test(o.tagName)){const A=o.textContent.split(bi),k=A.length-1;if(k>0){o.textContent=Ta?Ta.emptyScript:"";for(let I=0;I<k;I++)o.append(A[I],ko()),Qi.nextNode(),h.push({type:2,index:++n});o.append(A[k],ko())}}}else if(o.nodeType===8)if(o.data===Pl)h.push({type:2,index:n});else{let A=-1;for(;(A=o.data.indexOf(bi,A+1))!==-1;)h.push({type:7,index:n}),A+=bi.length-1}n++}}static createElement(e,r){const i=tn.createElement("template");return i.innerHTML=e,i}};function On(t,e,r=t,i){var a,l;if(e===rn)return e;let o=i!==void 0?(a=r.o)==null?void 0:a[i]:r.l;const n=Io(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),n===void 0?o=void 0:(o=new n(t),o._$AT(t,r,i)),i!==void 0?(r.o??(r.o=[]))[i]=o:r.l=o),o!==void 0&&(e=On(t,o._$AS(t,e.values),o,i)),e}let Qd=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??tn).importNode(r,!0);Qi.currentNode=o;let n=Qi.nextNode(),a=0,l=0,h=i[0];for(;h!==void 0;){if(a===h.index){let g;h.type===2?g=new C0(n,n.nextSibling,this,e):h.type===1?g=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(g=new th(n,this,e)),this._$AV.push(g),h=i[++l]}a!==(h==null?void 0:h.index)&&(n=Qi.nextNode(),a++)}return Qi.currentNode=tn,o}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}},C0=class Dl{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this.v}constructor(e,r,i,o){this.type=2,this._$AH=ut,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=o,this.v=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=On(this,e,r),Io(e)?e===ut||e==null||e===""?(this._$AH!==ut&&this._$AR(),this._$AH=ut):e!==this._$AH&&e!==rn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Yd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ut&&Io(this._$AH)?this._$AA.nextSibling.data=e:this.T(tn.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=t0.createElement(Ol(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(r);else{const a=new Qd(o,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=_1.get(e.strings);return r===void 0&&_1.set(e.strings,r=new t0(e)),r}k(e){y0(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,o=0;for(const n of e)o===r.length?r.push(i=new Dl(this.O(ko()),this.O(ko()),this,this.options)):i=r[o],i._$AI(n),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this.v=e,(r=this._$AP)==null||r.call(this,e))}},za=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,o,n){this.type=1,this._$AH=ut,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ut}_$AI(e,r=this,i,o){const n=this.strings;let a=!1;if(n===void 0)e=On(this,e,r,0),a=!Io(e)||e!==this._$AH&&e!==rn,a&&(this._$AH=e);else{const l=e;let h,g;for(e=n[0],h=0;h<n.length-1;h++)g=On(this,l[i+h],r,h),g===rn&&(g=this._$AH[h]),a||(a=!Io(g)||g!==this._$AH[h]),g===ut?e=ut:e!==ut&&(e+=(g??"")+n[h+1]),this._$AH[h]=g}a&&!o&&this.j(e)}j(e){e===ut?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Jd=class extends za{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ut?void 0:e}},Xd=class extends za{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ut)}},eh=class extends za{constructor(e,r,i,o,n){super(e,r,i,o,n),this.type=5}_$AI(e,r=this){if((e=On(this,e,r,0)??ut)===rn)return;const i=this._$AH,o=e===ut&&i!==ut||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==ut&&(i===ut||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}},th=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){On(this,e)}};const $s=Ao.litHtmlPolyfillSupport;$s==null||$s(t0,C0),(Ao.litHtmlVersions??(Ao.litHtmlVersions=[])).push("3.2.0");const rh=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=o=new C0(e.insertBefore(ko(),n),n,void 0,r??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let O=class extends En{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=rh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.o)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.o)==null||e.setConnected(!1)}render(){return rn}};var q1;O._$litElement$=!0,O.finalized=!0,(q1=globalThis.litElementHydrateSupport)==null||q1.call(globalThis,{LitElement:O});const Bs=globalThis.litElementPolyfillSupport;Bs==null||Bs({LitElement:O});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");const j=U`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,te=U`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Ha=U`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function ih(t,e){const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(o){customElements.get(t)||customElements.define(t,o)}}}function nh(t,e){return customElements.get(t)||customElements.define(t,e),e}function L(t){return function(r){return typeof r=="function"?nh(t,r):ih(t,r)}}const oh=U`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var ah=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let r0=class extends O{render(){return _`<slot></slot>`}};r0.styles=[j,oh];r0=ah([L("wui-card")],r0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sh={attribute:!0,type:String,converter:Ea,reflect:!1,hasChanged:b0},lh=(t=sh,e,r)=>{const{kind:i,metadata:o}=r;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const h=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,h,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const h=this[a];e.call(this,l),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+i)};function m(t){return(e,r)=>typeof r=="object"?lh(t,e,r):((i,o,n)=>{const a=o.hasOwnProperty(n);return o.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(o,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jo(t){return m({...t,state:!0,attribute:!1})}const ch=U`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,uh=$`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,dh=$`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,hh=$`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,ph=$`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,fh=$`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,gh=$`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,mh=$`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,wh=$`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,vh=$`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,bh=$`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,yh=$`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ch=$`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,Ah=$`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,xh=$`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,_h=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Sh=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Eh=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Th=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,kh=$`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Ih=$`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,Rh=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Mh=$`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Nh=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Ph=$`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,$h=$` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Bh=$`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,Oh=$`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,Uh=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Dh=$`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Lh=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,jh=$`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Fh=$`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,zh=$`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Hh=$`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,Wh=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Vh=$`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Zh=$`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,Gh=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,qh=$`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,Yh=$`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Kh=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Qh=$`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,Jh=$`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,Xh=$`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,e2=$`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,t2=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,r2=$` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,i2=$`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,n2=$`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,o2=$`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,a2=$`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,s2=$`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,l2=$`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,c2=$`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,u2=$`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,d2=$`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,h2=$`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,p2=$`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,f2=$`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,g2=$`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,m2=$`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,w2=$`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,v2=$`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,b2=$`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,y2=$`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,C2=$`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,A2=$`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,x2=$`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,_2=$`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,S2=$`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,S1=$`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var Wa=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};const E2={add:uh,allWallets:dh,arrowBottomCircle:hh,appStore:ph,apple:fh,arrowBottom:gh,arrowLeft:mh,arrowRight:wh,arrowTop:vh,bank:bh,browser:yh,card:Ch,checkmark:xh,checkmarkBold:Ah,chevronBottom:_h,chevronLeft:Sh,chevronRight:Eh,chevronTop:Th,chromeStore:kh,clock:Ih,close:Rh,compass:Nh,coinPlaceholder:Mh,copy:Ph,cursor:$h,cursorTransparent:Bh,desktop:Oh,disconnect:Uh,discord:Dh,etherscan:Lh,extension:jh,externalLink:Fh,facebook:zh,farcaster:Hh,filters:Wh,github:Vh,google:Zh,helpCircle:Gh,image:qh,id:S2,infoCircle:Yh,lightbulb:_2,mail:Kh,mobile:Qh,more:Jh,networkPlaceholder:Xh,nftPlaceholder:e2,off:t2,playStore:r2,plus:i2,qrCode:n2,recycleHorizontal:o2,refresh:a2,search:s2,send:l2,swapHorizontal:c2,swapHorizontalMedium:d2,swapHorizontalBold:u2,swapHorizontalRoundedBold:h2,swapVertical:p2,telegram:f2,threeDots:g2,twitch:m2,twitter:S1,twitterIcon:w2,verify:v2,verifyFilled:b2,wallet:C2,walletConnect:A2,walletPlaceholder:y2,warningCircle:x2,x:S1};let Un=class extends O{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,_`${E2[this.name]}`}};Un.styles=[j,Ha,ch];Wa([m()],Un.prototype,"size",void 0);Wa([m()],Un.prototype,"name",void 0);Wa([m()],Un.prototype,"color",void 0);Un=Wa([L("wui-icon")],Un);const T2=U`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Va=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Dn=class extends O{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,_`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Dn.styles=[j,Ha,T2];Va([m()],Dn.prototype,"src",void 0);Va([m()],Dn.prototype,"alt",void 0);Va([m()],Dn.prototype,"size",void 0);Dn=Va([L("wui-image")],Dn);const k2=U`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var I2=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let i0=class extends O{render(){return _`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};i0.styles=[j,k2];i0=I2([L("wui-loading-hexagon")],i0);const R2=U`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var A0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ro=class extends O{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,_`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Ro.styles=[j,R2];A0([m()],Ro.prototype,"color",void 0);A0([m()],Ro.prototype,"size",void 0);Ro=A0([L("wui-loading-spinner")],Ro);const M2=U`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ll=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let ka=class extends O{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,i=36-e,o=116+i,n=245+i,a=360+i*1.75;return _`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${n}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};ka.styles=[j,M2];Ll([m({type:Number})],ka.prototype,"radius",void 0);ka=Ll([L("wui-loading-thumbnail")],ka);const N2=U`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Xo=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let nn=class extends O{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,_`<slot></slot>`}};nn.styles=[N2];Xo([m()],nn.prototype,"width",void 0);Xo([m()],nn.prototype,"height",void 0);Xo([m()],nn.prototype,"borderRadius",void 0);Xo([m()],nn.prototype,"variant",void 0);nn=Xo([L("wui-shimmer")],nn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fl=t=>(...e)=>({_$litDirective$:t,values:e});let zl=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this.t=e,this._$AM=r,this.i=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hl=Fl(class extends zl{constructor(t){var e;if(super(t),t.type!==jl.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(o=this.nt)!=null&&o.has(n)||(a?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return rn}}),P2=U`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var ea=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let on=class extends O{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,_`<slot class=${Hl(e)}></slot>`}};on.styles=[j,P2];ea([m()],on.prototype,"variant",void 0);ea([m()],on.prototype,"color",void 0);ea([m()],on.prototype,"align",void 0);ea([m()],on.prototype,"lineClamp",void 0);on=ea([L("wui-text")],on);const $2=$`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,B2=$`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,O2=$`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,U2=$`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,D2=$`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,L2=$`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,j2=$`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,F2=$`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,z2=$`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,H2=$`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,W2=$`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,V2=$`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,Z2=$`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,G2=$`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,q2=$`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Y2=$`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,K2=$`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Q2=$`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,J2=$`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,X2=$`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,e3=$`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,t3=$`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,r3=U`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var x0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};const i3={browser:$2,dao:B2,defi:O2,defiAlt:U2,eth:D2,layers:L2,lock:j2,login:F2,network:z2,nft:H2,noun:W2,profile:V2,system:Z2,coinbase:G2,meld:t3,onrampCard:Q2,moonpay:q2,stripe:Y2,paypal:K2,google:J2,pencil:X2,lightbulb:e3};let Mo=class extends O{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,_`${i3[this.name]}`}};Mo.styles=[j,r3];x0([m()],Mo.prototype,"name",void 0);x0([m()],Mo.prototype,"size",void 0);Mo=x0([L("wui-visual")],Mo);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nr=t=>t??ut,me={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:i}){return t.length<=e+r?t:i==="end"?`${t.substring(0,e)}...`:i==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),i=this.hexToRgb(r),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(o==null?void 0:o.replace("px","")),l=`${a}% ${a}% at 65% 40%`,h=[];for(let g=0;g<5;g+=1){const C=this.tintColor(i,.15*g);h.push(`rgb(${C[0]}, ${C[1]}, ${C[2]})`)}return`
    --local-color-1: ${h[0]};
    --local-color-2: ${h[1]};
    --local-color-3: ${h[2]};
    --local-color-4: ${h[3]};
    --local-color-5: ${h[4]};
    --local-radial-circle: ${l}
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,i=e>>8&255,o=e&255;return[r,i,o]},tintColor(t,e){const[r,i,o]=t,n=Math.round(r+(255-r)*e),a=Math.round(i+(255-i)*e),l=Math.round(o+(255-o)*e);return[n,a,l]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,r){return t.toString().length>=e?Number(t).toFixed(r):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},n3=U`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Wt=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Nt=class extends O{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&me.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&me.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&me.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&me.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&me.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&me.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&me.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&me.getSpacingStyles(this.margin,3)};
    `,_`<slot></slot>`}};Nt.styles=[j,n3];Wt([m()],Nt.prototype,"flexDirection",void 0);Wt([m()],Nt.prototype,"flexWrap",void 0);Wt([m()],Nt.prototype,"flexBasis",void 0);Wt([m()],Nt.prototype,"flexGrow",void 0);Wt([m()],Nt.prototype,"flexShrink",void 0);Wt([m()],Nt.prototype,"alignItems",void 0);Wt([m()],Nt.prototype,"justifyContent",void 0);Wt([m()],Nt.prototype,"columnGap",void 0);Wt([m()],Nt.prototype,"rowGap",void 0);Wt([m()],Nt.prototype,"gap",void 0);Wt([m()],Nt.prototype,"padding",void 0);Wt([m()],Nt.prototype,"margin",void 0);Nt=Wt([L("wui-flex")],Nt);const o3=U`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var ta=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let an=class extends O{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,_`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",_`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=me.generateAvatarColors(this.address);return this.style.cssText+=`
 ${e}`,null}return this.dataset.variant="default",null}};an.styles=[j,o3];ta([m()],an.prototype,"imageSrc",void 0);ta([m()],an.prototype,"alt",void 0);ta([m()],an.prototype,"address",void 0);ta([m()],an.prototype,"size",void 0);an=ta([L("wui-avatar")],an);const a3=U`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var ai=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let dr=class extends O{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,r=this.size==="lg",i=this.size==="xl",o=r?"12%":"16%",n=r?"xxs":i?"s":"3xl",a=this.background==="gray",l=this.background==="opaque",h=this.backgroundColor==="accent-100"&&l||this.backgroundColor==="success-100"&&l||this.backgroundColor==="error-100"&&l||this.backgroundColor==="inverse-100"&&l;let g=`var(--wui-color-${this.backgroundColor})`;return h?g=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(g=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${g};
       --local-bg-mix: ${h||a?"100%":o};
       --local-border-radius: var(--wui-border-radius-${n});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,_` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};dr.styles=[j,te,a3];ai([m()],dr.prototype,"size",void 0);ai([m()],dr.prototype,"backgroundColor",void 0);ai([m()],dr.prototype,"iconColor",void 0);ai([m()],dr.prototype,"iconSize",void 0);ai([m()],dr.prototype,"background",void 0);ai([m({type:Boolean})],dr.prototype,"border",void 0);ai([m()],dr.prototype,"borderColor",void 0);ai([m()],dr.prototype,"icon",void 0);dr=ai([L("wui-icon-box")],dr);const s3=U`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Dr=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let er=class extends O{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return _`
      <button
        ?disabled=${this.disabled}
        class=${Nr(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?me.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return _` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?_`<wui-image src=${this.networkSrc}></wui-image>`:_`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return _`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};er.styles=[j,te,s3];Dr([m()],er.prototype,"networkSrc",void 0);Dr([m()],er.prototype,"avatarSrc",void 0);Dr([m()],er.prototype,"balance",void 0);Dr([m({type:Boolean})],er.prototype,"isUnsupportedChain",void 0);Dr([m({type:Boolean})],er.prototype,"disabled",void 0);Dr([m()],er.prototype,"address",void 0);Dr([m()],er.prototype,"profileName",void 0);Dr([m()],er.prototype,"charsStart",void 0);Dr([m()],er.prototype,"charsEnd",void 0);er=Dr([L("wui-account-button")],er);const l3=U`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var gn=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Qr=class extends O{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),_`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?_`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?_`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:_`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Qr.styles=[j,l3];gn([m()],Qr.prototype,"size",void 0);gn([m()],Qr.prototype,"name",void 0);gn([m()],Qr.prototype,"imageSrc",void 0);gn([m()],Qr.prototype,"walletIcon",void 0);gn([m({type:Boolean})],Qr.prototype,"installed",void 0);gn([m()],Qr.prototype,"badgeSize",void 0);Qr=gn([L("wui-wallet-image")],Qr);const c3=U`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Wl=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};const Os=4;let Ia=class extends O{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Os;return _`${this.walletImages.slice(0,Os).map(({src:r,walletName:i})=>_`
            <wui-wallet-image
              size="inherit"
              imageSrc=${r}
              name=${Nr(i)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Os-this.walletImages.length)].map(()=>_` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Ia.styles=[j,c3];Wl([m({type:Array})],Ia.prototype,"walletImages",void 0);Ia=Wl([L("wui-all-wallets-image")],Ia);const u3=U`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Lr=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};const E1={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},d3={lg:"paragraph-600",md:"small-600"},h3={lg:"md",md:"md"};let tr=class extends O{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??d3[this.size];return _`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=h3[this.size],r=this.disabled?E1.disabled:E1[this.variant];return _`<wui-loading-spinner color=${r} size=${e}></wui-loading-spinner>`}return _``}};tr.styles=[j,te,u3];Lr([m()],tr.prototype,"size",void 0);Lr([m({type:Boolean})],tr.prototype,"disabled",void 0);Lr([m({type:Boolean})],tr.prototype,"fullWidth",void 0);Lr([m({type:Boolean})],tr.prototype,"loading",void 0);Lr([m()],tr.prototype,"variant",void 0);Lr([m({type:Boolean})],tr.prototype,"hasIconLeft",void 0);Lr([m({type:Boolean})],tr.prototype,"hasIconRight",void 0);Lr([m()],tr.prototype,"borderRadius",void 0);Lr([m()],tr.prototype,"textVariant",void 0);tr=Lr([L("wui-button")],tr);const Vl=$`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,p3=U`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`;var Zl=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ra=class extends O{constructor(){super(...arguments),this.type="wallet"}render(){return _`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?_` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Vl}`:_`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Ra.styles=[j,te,p3];Zl([m()],Ra.prototype,"type",void 0);Ra=Zl([L("wui-card-select-loader")],Ra);const f3=$`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,g3=$`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,m3=U`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var mn=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Jr=class extends O{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:f3,md:Vl,lg:g3},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,_`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?_`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:_`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Jr.styles=[j,m3];mn([m()],Jr.prototype,"size",void 0);mn([m()],Jr.prototype,"name",void 0);mn([m({type:Object})],Jr.prototype,"networkImagesBySize",void 0);mn([m()],Jr.prototype,"imageSrc",void 0);mn([m({type:Boolean})],Jr.prototype,"selected",void 0);mn([m({type:Boolean})],Jr.prototype,"round",void 0);Jr=mn([L("wui-network-image")],Jr);const w3=U`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var wn=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Xr=class extends O{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return _`
      <button data-selected=${Nr(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?_`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Nr(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:_`
      <wui-wallet-image
        size="md"
        imageSrc=${Nr(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Xr.styles=[j,te,w3];wn([m()],Xr.prototype,"name",void 0);wn([m()],Xr.prototype,"type",void 0);wn([m()],Xr.prototype,"imageSrc",void 0);wn([m({type:Boolean})],Xr.prototype,"disabled",void 0);wn([m({type:Boolean})],Xr.prototype,"selected",void 0);wn([m({type:Boolean})],Xr.prototype,"installed",void 0);Xr=wn([L("wui-card-select")],Xr);const v3=U`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var vn=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let ei=class extends O{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const r=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return _`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${r} color="inherit">
          ${this.title?this.title:me.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?_`<wui-image src=${this.imageSrc}></wui-image>`:null}};ei.styles=[j,te,v3];vn([m()],ei.prototype,"variant",void 0);vn([m()],ei.prototype,"imageSrc",void 0);vn([m({type:Boolean})],ei.prototype,"disabled",void 0);vn([m()],ei.prototype,"icon",void 0);vn([m()],ei.prototype,"href",void 0);vn([m()],ei.prototype,"text",void 0);ei=vn([L("wui-chip")],ei);const b3=U`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var _0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let No=class extends O{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return _`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?_`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};No.styles=[j,te,b3];_0([m()],No.prototype,"size",void 0);_0([m({type:Boolean})],No.prototype,"loading",void 0);No=_0([L("wui-connect-button")],No);const y3=U`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Za=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ln=class extends O{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return _`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Ln.styles=[j,te,y3];Za([m({type:Boolean})],Ln.prototype,"disabled",void 0);Za([m()],Ln.prototype,"label",void 0);Za([m()],Ln.prototype,"buttonLabel",void 0);Ln=Za([L("wui-cta-button")],Ln);const C3=U`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var A3=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let n0=class extends O{render(){return _`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};n0.styles=[j,te,C3];n0=A3([L("wui-details-group")],n0);const x3=U`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var Gl=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ma=class extends O{constructor(){super(...arguments),this.name=""}render(){return _`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};Ma.styles=[j,te,x3];Gl([m()],Ma.prototype,"name",void 0);Ma=Gl([L("wui-details-group-item")],Ma);const _3=U`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`;var S0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Po=class extends O{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?_`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(e=>_`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};Po.styles=[j,te,_3];S0([m({type:Array})],Po.prototype,"actions",void 0);S0([m({type:Boolean})],Po.prototype,"isOpen",void 0);Po=S0([L("wui-dropdown-menu")],Po);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S3=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xo=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const o of r)(i=o._$AO)==null||i.call(o,e,!1),xo(o,e);return!0},Na=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},ql=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),k3(e)}};function E3(t){this._$AN!==void 0?(Na(this),this._$AM=t,ql(this)):this._$AM=t}function T3(t,e=!1,r=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)xo(i[n],!1),Na(i[n]);else i!=null&&(xo(i,!1),Na(i));else xo(this,t)}const k3=t=>{t.type==jl.CHILD&&(t._$AP??(t._$AP=T3),t._$AQ??(t._$AQ=E3))};class I3 extends zl{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),ql(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),r&&(xo(this,e),Na(this))}setValue(e){if(S3(this.t))this.t._$AI(e,this);else{const r=[...this.t._$AH];r[this.i]=e,this.t._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E0=()=>new R3;class R3{}const Us=new WeakMap,T0=Fl(class extends I3{render(t){return ut}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),ut}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=Us.get(e);r===void 0&&(r=new WeakMap,Us.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Us.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),M3=U`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var si=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let hr=class extends O{constructor(){super(...arguments),this.inputElementRef=E0(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,i={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return _`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${T0(this.inputElementRef)}
        class=${Hl(i)}
        type=${this.type}
        enterkeyhint=${Nr(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?_`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};hr.styles=[j,te,M3];si([m()],hr.prototype,"size",void 0);si([m()],hr.prototype,"icon",void 0);si([m({type:Boolean})],hr.prototype,"disabled",void 0);si([m()],hr.prototype,"placeholder",void 0);si([m()],hr.prototype,"type",void 0);si([m()],hr.prototype,"keyHint",void 0);si([m()],hr.prototype,"value",void 0);si([m()],hr.prototype,"inputRightPadding",void 0);hr=si([L("wui-input-text")],hr);const N3=U`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Ga=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let jn=class extends O{constructor(){super(...arguments),this.disabled=!1}render(){return _`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?_`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};jn.styles=[j,N3];Ga([m()],jn.prototype,"errorMessage",void 0);Ga([m({type:Boolean})],jn.prototype,"disabled",void 0);Ga([m()],jn.prototype,"value",void 0);jn=Ga([L("wui-email-input")],jn);const P3=U`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var ra=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let sn=class extends O{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return _`
      <wui-input-text
        value=${Nr(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return _`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${Q1.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?_`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?_`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};sn.styles=[j,P3];ra([m()],sn.prototype,"errorMessage",void 0);ra([m({type:Boolean})],sn.prototype,"disabled",void 0);ra([m()],sn.prototype,"value",void 0);ra([m({type:Boolean})],sn.prototype,"loading",void 0);sn=ra([L("wui-ens-input")],sn);const $3=U`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var ia=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let ln=class extends O{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",r=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${r});
`,_`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};ln.styles=[j,te,Ha,$3];ia([m()],ln.prototype,"size",void 0);ia([m({type:Boolean})],ln.prototype,"disabled",void 0);ia([m()],ln.prototype,"icon",void 0);ia([m()],ln.prototype,"iconColor",void 0);ln=ia([L("wui-icon-link")],ln);const B3=U`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var Yl=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Pa=class extends O{constructor(){super(...arguments),this.icon="copy"}render(){return _`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Pa.styles=[j,te,B3];Yl([m()],Pa.prototype,"icon",void 0);Pa=Yl([L("wui-input-element")],Pa);const O3=U`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var k0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let $o=class extends O{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return _`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};$o.styles=[j,te,O3];k0([m({type:Boolean})],$o.prototype,"disabled",void 0);k0([m({type:String})],$o.prototype,"value",void 0);$o=k0([L("wui-input-numeric")],$o);const U3=U`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var I0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Bo=class extends O{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return _`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Bo.styles=[j,te,U3];I0([m({type:Boolean})],Bo.prototype,"disabled",void 0);I0([m()],Bo.prototype,"color",void 0);Bo=I0([L("wui-link")],Bo);const D3=U`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var jr=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let rr=class extends O{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return _`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Nr(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return _`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return _`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",r=this.iconVariant==="square-blue"?"mdl":"md",i=this.iconSize?this.iconSize:r;return _`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${r}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?_`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:_``}chevronTemplate(){return this.chevron?_`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};rr.styles=[j,te,D3];jr([m()],rr.prototype,"icon",void 0);jr([m()],rr.prototype,"iconSize",void 0);jr([m()],rr.prototype,"variant",void 0);jr([m()],rr.prototype,"iconVariant",void 0);jr([m({type:Boolean})],rr.prototype,"disabled",void 0);jr([m()],rr.prototype,"imageSrc",void 0);jr([m()],rr.prototype,"alt",void 0);jr([m({type:Boolean})],rr.prototype,"chevron",void 0);jr([m({type:Boolean})],rr.prototype,"loading",void 0);rr=jr([L("wui-list-item")],rr);var o0;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(o0||(o0={}));const L3=U`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var bn=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let ti=class extends O{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,r]=this.images,i=(e==null?void 0:e.type)==="NFT",o=r!=null&&r.url?r.type==="NFT":i,n=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${a};
    `,_`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,r]=this.images,i=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||r!=null&&r.url)?_`<div class="swap-images-container">
        ${e!=null&&e.url?_`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${r!=null&&r.url?_`<wui-image src=${r.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?_`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:i==="NFT"?_`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:_`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",r;return r=this.getIcon(),this.status&&(e=this.getStatusColor()),r?_`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${r}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};ti.styles=[L3];bn([m()],ti.prototype,"type",void 0);bn([m()],ti.prototype,"status",void 0);bn([m()],ti.prototype,"direction",void 0);bn([m({type:Boolean})],ti.prototype,"onlyDirectionIcon",void 0);bn([m({type:Array})],ti.prototype,"images",void 0);bn([m({type:Object})],ti.prototype,"secondImage",void 0);ti=bn([L("wui-transaction-visual")],ti);const j3=U`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var pr=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let zt=class extends O{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return _`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Nr(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Nr(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${o0[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var r;const e=(r=this.descriptions)==null?void 0:r[0];return e?_`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var r;const e=(r=this.descriptions)==null?void 0:r[1];return e?_`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};zt.styles=[j,j3];pr([m()],zt.prototype,"type",void 0);pr([m({type:Array})],zt.prototype,"descriptions",void 0);pr([m()],zt.prototype,"date",void 0);pr([m({type:Boolean})],zt.prototype,"onlyDirectionIcon",void 0);pr([m()],zt.prototype,"status",void 0);pr([m()],zt.prototype,"direction",void 0);pr([m({type:Array})],zt.prototype,"images",void 0);pr([m({type:Array})],zt.prototype,"price",void 0);pr([m({type:Array})],zt.prototype,"amount",void 0);pr([m({type:Array})],zt.prototype,"symbol",void 0);zt=pr([L("wui-transaction-list-item")],zt);const F3=U`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var z3=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let a0=class extends O{render(){return _`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};a0.styles=[j,F3];a0=z3([L("wui-transaction-list-item-loader")],a0);const H3=U`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var R0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Oo=class extends O{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return _`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};Oo.styles=[j,H3];R0([m()],Oo.prototype,"variant",void 0);R0([m()],Oo.prototype,"size",void 0);Oo=R0([L("wui-tag")],Oo);const W3=U`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var fr=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ht=class extends O{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return _`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?_` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?_` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?_`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?_`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?_`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?_`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Ht.styles=[j,te,W3];fr([m({type:Array})],Ht.prototype,"walletImages",void 0);fr([m()],Ht.prototype,"imageSrc",void 0);fr([m()],Ht.prototype,"name",void 0);fr([m()],Ht.prototype,"tagLabel",void 0);fr([m()],Ht.prototype,"tagVariant",void 0);fr([m()],Ht.prototype,"icon",void 0);fr([m()],Ht.prototype,"walletIcon",void 0);fr([m({type:Boolean})],Ht.prototype,"installed",void 0);fr([m({type:Boolean})],Ht.prototype,"disabled",void 0);fr([m({type:Boolean})],Ht.prototype,"showAllWallets",void 0);Ht=fr([L("wui-list-wallet")],Ht);const V3=U`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Kl=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let $a=class extends O{constructor(){super(...arguments),this.logo="google"}render(){return _`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};$a.styles=[j,V3];Kl([m()],$a.prototype,"logo",void 0);$a=Kl([L("wui-logo")],$a);const Z3=U`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var M0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Uo=class extends O{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return _`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Uo.styles=[j,te,Z3];M0([m()],Uo.prototype,"logo",void 0);M0([m({type:Boolean})],Uo.prototype,"disabled",void 0);Uo=M0([L("wui-logo-select")],Uo);const G3=U`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var qa=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Fn=class extends O{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return _`
      <button data-testid="w3m-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?_`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?_`<wui-image src=${this.imageSrc}></wui-image>`:_`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Fn.styles=[j,te,G3];qa([m()],Fn.prototype,"imageSrc",void 0);qa([m({type:Boolean})],Fn.prototype,"isUnsupportedChain",void 0);qa([m({type:Boolean})],Fn.prototype,"disabled",void 0);Fn=qa([L("wui-network-button")],Fn);const q3=U`
  :host {
    position: relative;
    display: block;
  }
`;var Ya=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let zn=class extends O{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(i=>i!==""),this.handleKeyDown=(e,r)=>{const i=e.target,o=this.getInputElement(i),n=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;n.includes(e.key)&&e.preventDefault();const a=o.selectionStart;switch(e.key){case"ArrowLeft":a&&o.setSelectionRange(a+1,a+1),this.focusInputField("prev",r);break;case"ArrowRight":this.focusInputField("next",r);break;case"Shift":this.focusInputField("next",r);break;case"Delete":o.value===""?this.focusInputField("prev",r):this.updateInput(o,r,"");break;case"Backspace":o.value===""?this.focusInputField("prev",r):this.updateInput(o,r,"");break}},this.focusInputField=(e,r)=>{if(e==="next"){const i=r+1;if(!this.shouldInputBeEnabled(i))return;const o=this.numerics[i<this.length?i:r],n=o?this.getInputElement(o):void 0;n&&(n.disabled=!1,n.focus())}if(e==="prev"){const i=r-1,o=this.numerics[i>-1?i:r],n=o?this.getInputElement(o):void 0;n&&n.focus()}}}firstUpdated(){var r,i;this.otp&&(this.values=this.otp.split(""));const e=(r=this.shadowRoot)==null?void 0:r.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(i=this.numerics[0])==null||i.focus()}render(){return _`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,r)=>_`
            <wui-input-numeric
              @input=${i=>this.handleInput(i,r)}
              @click=${i=>this.selectInput(i)}
              @keydown=${i=>this.handleKeyDown(i,r)}
              .disabled=${!this.shouldInputBeEnabled(r)}
              .value=${this.values[r]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,r,i){const o=this.numerics[r],n=e||(o?this.getInputElement(o):void 0);n&&(n.value=i,this.values=this.values.map((a,l)=>l===r?i:a))}selectInput(e){const r=e.target;if(r){const i=this.getInputElement(r);i==null||i.select()}}handleInput(e,r){const i=e.target,o=this.getInputElement(i);if(o){const n=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,n,r):me.isNumber(n)&&e.data?(this.updateInput(o,r,e.data),this.focusInputField("next",r)):this.updateInput(o,r,"")}this.dispatchInputChangeEvent()}handlePaste(e,r,i){const o=r[0];if(o&&me.isNumber(o)){this.updateInput(e,i,o);const a=r.substring(1);if(i+1<this.length&&a.length){const l=this.numerics[i+1],h=l?this.getInputElement(l):void 0;h&&this.handlePaste(h,a,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){var r;return(r=e.shadowRoot)!=null&&r.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};zn.styles=[j,q3];Ya([m({type:Number})],zn.prototype,"length",void 0);Ya([m({type:String})],zn.prototype,"otp",void 0);Ya([Jo()],zn.prototype,"values",void 0);zn=Ya([L("wui-otp")],zn);const Y3=.1,T1=2.5,Wr=7;function Ds(t,e,r){return t===e?!1:(t-e<0?e-t:t-e)<=r+Y3}function K3(t,e){const r=Array.prototype.slice.call(cc.create(t,{errorCorrectionLevel:e}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((o,n,a)=>(a%i===0?o.push([n]):o[o.length-1].push(n))&&o,[])}const Q3={generate(t,e,r){const i="#141414",o="transparent",a=[],l=K3(t,"Q"),h=e/l.length,g=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];g.forEach(({x:D,y:B})=>{const q=(l.length-Wr)*h*D,Q=(l.length-Wr)*h*B,ee=.45;for(let X=0;X<g.length;X+=1){const oe=h*(Wr-X*2);a.push($`
            <rect
              fill=${X===2?i:o}
              width=${X===0?oe-5:oe}
              rx= ${X===0?(oe-5)*ee:oe*ee}
              ry= ${X===0?(oe-5)*ee:oe*ee}
              stroke=${i}
              stroke-width=${X===0?5:0}
              height=${X===0?oe-5:oe}
              x= ${X===0?Q+h*X+5/2:Q+h*X}
              y= ${X===0?q+h*X+5/2:q+h*X}
            />
          `)}});const C=Math.floor((r+25)/h),A=l.length/2-C/2,k=l.length/2+C/2-1,I=[];l.forEach((D,B)=>{D.forEach((q,Q)=>{if(l[B][Q]&&!(B<Wr&&Q<Wr||B>l.length-(Wr+1)&&Q<Wr||B<Wr&&Q>l.length-(Wr+1))&&!(B>A&&B<k&&Q>A&&Q<k)){const ee=B*h+h/2,X=Q*h+h/2;I.push([ee,X])}})});const N={};return I.forEach(([D,B])=>{var q;N[D]?(q=N[D])==null||q.push(B):N[D]=[B]}),Object.entries(N).map(([D,B])=>{const q=B.filter(Q=>B.every(ee=>!Ds(Q,ee,h)));return[Number(D),q]}).forEach(([D,B])=>{B.forEach(q=>{a.push($`<circle cx=${D} cy=${q} fill=${i} r=${h/T1} />`)})}),Object.entries(N).filter(([D,B])=>B.length>1).map(([D,B])=>{const q=B.filter(Q=>B.some(ee=>Ds(Q,ee,h)));return[Number(D),q]}).map(([D,B])=>{B.sort((Q,ee)=>Q<ee?-1:1);const q=[];for(const Q of B){const ee=q.find(X=>X.some(oe=>Ds(Q,oe,h)));ee?ee.push(Q):q.push([Q])}return[D,q.map(Q=>[Q[0],Q[Q.length-1]])]}).forEach(([D,B])=>{B.forEach(([q,Q])=>{a.push($`
              <line
                x1=${D}
                x2=${D}
                y1=${q}
                y2=${Q}
                stroke=${i}
                stroke-width=${h/(T1/2)}
                stroke-linecap="round"
              />
            `)})}),a}},J3=U`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Ii=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Pr=class extends O{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,_`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return $`
      <svg height=${e} width=${e}>
        ${Q3.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?_`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?_`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:_`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Pr.styles=[j,J3];Ii([m()],Pr.prototype,"uri",void 0);Ii([m({type:Number})],Pr.prototype,"size",void 0);Ii([m()],Pr.prototype,"theme",void 0);Ii([m()],Pr.prototype,"imageSrc",void 0);Ii([m()],Pr.prototype,"alt",void 0);Ii([m({type:Boolean})],Pr.prototype,"arenaClear",void 0);Ii([m({type:Boolean})],Pr.prototype,"farcaster",void 0);Pr=Ii([L("wui-qr-code")],Pr);const X3=U`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var ep=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let s0=class extends O{constructor(){super(...arguments),this.inputComponentRef=E0()}render(){return _`
      <wui-input-text
        ${T0(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,r=e==null?void 0:e.inputElementRef.value;r&&(r.value="",r.focus(),r.dispatchEvent(new Event("input")))}};s0.styles=[j,X3];s0=ep([L("wui-search-bar")],s0);const tp=U`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var eo=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Si=class extends O{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return _`
      ${this.loading?_`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:_`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Si.styles=[j,tp];eo([m()],Si.prototype,"backgroundColor",void 0);eo([m()],Si.prototype,"iconColor",void 0);eo([m()],Si.prototype,"icon",void 0);eo([m()],Si.prototype,"message",void 0);eo([m()],Si.prototype,"loading",void 0);Si=eo([L("wui-snackbar")],Si);const rp=U`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Ri=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let $r=class extends O{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,r)=>{var o;const i=r===this.activeTab;return _`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(r)}
          data-active=${i}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?_`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,r){const i=this.buttons[this.activeTab],o=this.buttons[e],n=i==null?void 0:i.querySelector("wui-text"),a=o==null?void 0:o.querySelector("wui-text"),l=o==null?void 0:o.getBoundingClientRect(),h=a==null?void 0:a.getBoundingClientRect();i&&n&&!r&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&l&&h&&a&&(e!==this.activeTab||r)&&(this.localTabWidth=`${Math.round(l.width+h.width)+6}px`,o.animate([{width:`${l.width+h.width}px`}],{duration:r?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:r?0:125,delay:r?0:200,fill:"forwards",easing:"ease"}))}};$r.styles=[j,te,rp];Ri([m({type:Array})],$r.prototype,"tabs",void 0);Ri([m()],$r.prototype,"onTabChange",void 0);Ri([m({type:Array})],$r.prototype,"buttons",void 0);Ri([m({type:Boolean})],$r.prototype,"disabled",void 0);Ri([m()],$r.prototype,"localTabWidth",void 0);Ri([Jo()],$r.prototype,"activeTab",void 0);Ri([Jo()],$r.prototype,"isDense",void 0);$r=Ri([L("wui-tabs")],$r);const ip=U`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var N0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Do=class extends O{constructor(){super(...arguments),this.text=""}render(){return _`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?_`<wui-image src=${this.imageSrc}></wui-image>`:_`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Do.styles=[j,te,ip];N0([m()],Do.prototype,"imageSrc",void 0);N0([m()],Do.prototype,"text",void 0);Do=N0([L("wui-token-button")],Do);const np=U`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ka=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Hn=class extends O{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,_`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Hn.styles=[j,te,np];Ka([m()],Hn.prototype,"placement",void 0);Ka([m()],Hn.prototype,"variant",void 0);Ka([m()],Hn.prototype,"message",void 0);Hn=Ka([L("wui-tooltip")],Hn);const op=U`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var Mi=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Br=class extends O{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var r;if(!this.visible)return null;const e=this.amount&&this.price?(r=nt.multiply(this.price,this.amount))==null?void 0:r.toFixed(3):null;return _`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?_`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${me.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?_`<wui-text variant="small-400" color="fg-200">
                  ${me.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?_`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?_`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};Br.styles=[j,te,op];Mi([m()],Br.prototype,"imageSrc",void 0);Mi([m()],Br.prototype,"name",void 0);Mi([m()],Br.prototype,"symbol",void 0);Mi([m()],Br.prototype,"price",void 0);Mi([m()],Br.prototype,"amount",void 0);Mi([Jo()],Br.prototype,"visible",void 0);Mi([Jo()],Br.prototype,"imageError",void 0);Br=Mi([L("wui-token-list-item")],Br);const ap=U`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Qa=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Wn=class extends O{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,_`${this.templateVisual()}`}templateVisual(){return this.imageSrc?_`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:_`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Wn.styles=[j,ap];Qa([m()],Wn.prototype,"imageSrc",void 0);Qa([m()],Wn.prototype,"alt",void 0);Qa([m({type:Boolean})],Wn.prototype,"borderRadiusFull",void 0);Wn=Qa([L("wui-visual-thumbnail")],Wn);const sp=U`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var Ja=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Vn=class extends O{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return _`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Vn.styles=[j,te,sp];Ja([m()],Vn.prototype,"label",void 0);Ja([m()],Vn.prototype,"description",void 0);Ja([m()],Vn.prototype,"icon",void 0);Vn=Ja([L("wui-notice-card")],Vn);const lp=U`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var P0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};const Ls=100;let Lo=class extends O{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var i,o;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".heightContent"),r=(o=this.shadowRoot)==null?void 0:o.querySelector(".textContent");if(e&&r){this.scrollElement=e;const n=r==null?void 0:r.scrollHeight;n&&n>Ls&&(this.enableAccordion=!0,this.scrollHeightElement=n,this.requestUpdate())}})}render(){return _`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${Ls}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${Ls}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?_` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Lo.styles=[j,te,lp];P0([m()],Lo.prototype,"textTitle",void 0);P0([m()],Lo.prototype,"overflowedContent",void 0);Lo=P0([L("wui-list-accordion")],Lo);const cp=U`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Xa=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Zn=class extends O{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return _`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?_`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?_` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:_`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Zn.styles=[j,te,cp];Xa([m()],Zn.prototype,"imageSrc",void 0);Xa([m()],Zn.prototype,"textTitle",void 0);Xa([m()],Zn.prototype,"textValue",void 0);Zn=Xa([L("wui-list-content")],Zn);const up=U`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var to=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ei=class extends O{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return _`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?_`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?_`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:_`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};Ei.styles=[j,te,up];to([m()],Ei.prototype,"imageSrc",void 0);to([m()],Ei.prototype,"name",void 0);to([m({type:Boolean})],Ei.prototype,"disabled",void 0);to([m({type:Boolean})],Ei.prototype,"selected",void 0);to([m({type:Boolean})],Ei.prototype,"transparent",void 0);Ei=to([L("wui-list-network")],Ei);const dp=U`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var ro=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ti=class extends O{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return _`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?_`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:_`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Ti.styles=[j,te,dp];ro([m()],Ti.prototype,"amount",void 0);ro([m()],Ti.prototype,"networkCurreny",void 0);ro([m()],Ti.prototype,"networkImageUrl",void 0);ro([m()],Ti.prototype,"receiverAddress",void 0);ro([m()],Ti.prototype,"addressExplorerUrl",void 0);Ti=ro([L("wui-list-wallet-transaction")],Ti);const hp=U`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var Ql=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ba=class extends O{constructor(){super(...arguments),this.text=""}render(){return _`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Ba.styles=[j,te,hp];Ql([m()],Ba.prototype,"text",void 0);Ba=Ql([L("wui-promo")],Ba);const pp=U`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var $0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let jo=class extends O{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return _`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};jo.styles=[j,pp];$0([m()],jo.prototype,"dollars",void 0);$0([m()],jo.prototype,"pennies",void 0);jo=$0([L("wui-balance")],jo);const fp=U`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var io=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let ki=class extends O{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return _`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${me.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?_`<wui-image src=${this.networkSrc}></wui-image>`:_`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ki.styles=[j,te,fp];io([m()],ki.prototype,"networkSrc",void 0);io([m()],ki.prototype,"avatarSrc",void 0);io([m()],ki.prototype,"profileName",void 0);io([m()],ki.prototype,"address",void 0);io([m()],ki.prototype,"icon",void 0);ki=io([L("wui-profile-button")],ki);const gp=U`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;h0.extend(uc);h0.extend(dc);const mp={...hc,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};h0.locale("en-web3-modal",mp);const wp={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},parseEvmChainId(t){return typeof t=="string"?this.caipNetworkIdToNumber(t):t}},rt={bigNumber(t){return new la(t)},multiply(t,e){if(t===void 0||e===void 0)return la(0);const r=new la(t),i=new la(e);return r.multipliedBy(i)},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},_o={WC_NAME_SUFFIX:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"evm",SOLANA:"solana"},CHAIN_NAME_MAP:{evm:"Ethereum",solana:"Solana"}};function l0(t,e){return e==="light"?{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}const js="https://secure.walletconnect.org",vp=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["evm"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["evm","solana"]}],en={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:js,SECURE_SITE_DASHBOARD:`${js}/dashboard`,SECURE_SITE_FAVICON:`${js}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:{evm:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111"},CONVERT_SLIPPAGE_TOLERANCE:1},yt={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(t,e=""){return t==null?void 0:t.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return yt.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return yt.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=en.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=en.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+en.FOUR_MINUTES_MS},getNetworkId(t){return t==null?void 0:t.split(":")[1]},getPlainAddress(t){return t==null?void 0:t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let r;return(...i)=>{function o(){t(...i)}r&&clearTimeout(r),r=setTimeout(o,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(yt.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(t,e){if(!yt.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(t,e,r){window.open(t,e,r||"noreferrer noopener")},returnOpenHref(t,e,r){return window.open(t,e,r||"noreferrer noopener")},async preloadImage(t){const e=new Promise((r,i)=>{const o=new Image;o.onload=r,o.onerror=i,o.crossOrigin="anonymous",o.src=t});return Promise.race([e,yt.wait(2e3)])},formatBalance(t,e){let r="0.000";if(typeof t=="string"){const i=Number(t);if(i){const o=Math.floor(i*1e3)/1e3;o&&(r=o.toString())}}return`${r}${e?` ${e}`:""}`},formatBalance2(t,e){var i;let r;if(t==="0")r="0";else if(typeof t=="string"){const o=Number(t);o&&(r=(i=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:e}},getApiUrl(){return _o.W3M_API_URL},getBlockchainApiUrl(){return _o.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return _o.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,r;return typeof t=="string"?t:typeof((r=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:r.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const r={};return e&&t&&(t.forEach((i,o)=>{r[i]=o}),e.sort((i,o)=>{const n=r[i.id],a=r[o.id];return n!==void 0&&a!==void 0?n-a:n!==void 0?-1:a!==void 0?1:0})),e},calculateBalance(t){let e=0;for(const r of t)e+=r.value??0;return e},formatTokenBalance(t){const e=t.toFixed(2),[r,i]=e.split(".");return{dollars:r,pennies:i}},isAddress(t,e="evm"){switch(e){case"evm":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)||/^(?:0x)?[0-9A-F]{40}$/iu.test(t))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);default:return!1}},uniqueBy(t,e){const r=new Set;return t.filter(i=>{const o=i[e];return r.has(o)?!1:(r.add(o),!0)})}};async function ho(...t){const e=await fetch(...t);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e}class es{constructor({baseUrl:e,clientId:r}){this.baseUrl=e,this.clientId=r}async get({headers:e,signal:r,cache:i,...o}){const n=this.createUrl(o);return(await ho(n,{method:"GET",headers:e,signal:r,cache:i})).json()}async getBlob({headers:e,signal:r,...i}){const o=this.createUrl(i);return(await ho(o,{method:"GET",headers:e,signal:r})).blob()}async post({body:e,headers:r,signal:i,...o}){const n=this.createUrl(o);return(await ho(n,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async put({body:e,headers:r,signal:i,...o}){const n=this.createUrl(o);return(await ho(n,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async delete({body:e,headers:r,signal:i,...o}){const n=this.createUrl(o);return(await ho(n,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}createUrl({path:e,params:r}){const i=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([o,n])=>{n&&i.searchParams.append(o,n)}),this.clientId&&i.searchParams.append("clientId",this.clientId),i}}const Fs="WALLETCONNECT_DEEPLINK_CHOICE",k1="@w3m/recent",I1="@w3m/connected_connector",R1="@w3m/connected_social",bp="@w3m-storage/SOCIAL_USERNAME",kr={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(Fs,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(Fs);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Fs)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=kr.getRecentWallets();e.find(i=>i.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(k1,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(k1);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedConnector(t){try{localStorage.setItem(I1,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(I1)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(t){try{localStorage.setItem(R1,t)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return localStorage.getItem(R1)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return localStorage.getItem(bp)}catch{console.info("Unable to get Connected Social Username")}}},Yt=ne({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),po={state:Yt,subscribeNetworkImages(t){return dt(Yt.networkImages,()=>t(Yt.networkImages))},subscribeKey(t,e){return lt(Yt,t,e)},subscribe(t){return dt(Yt,()=>t(Yt))},setWalletImage(t,e){Yt.walletImages[t]=e},setNetworkImage(t,e){Yt.networkImages[t]=e},setChainImage(t,e){Yt.chainImages[t]=e},setConnectorImage(t,e){Yt.connectorImages[t]=e},setTokenImage(t,e){Yt.tokenImages[t]=e},setCurrencyImage(t,e){Yt.currencyImages[t]=e}},Vr=ne({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Oa={state:Vr,subscribe(t){return dt(Vr,()=>t(Vr))},setThemeMode(t){Vr.themeMode=t;try{const e=Fo.getAuthConnector();if(e){const r=Oa.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:t,themeVariables:r,w3mThemeVariables:l0(r,t)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(t){Vr.themeVariables={...Vr.themeVariables,...t};try{const e=Fo.getAuthConnector();if(e){const r=Oa.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:r,w3mThemeVariables:l0(Vr.themeVariables,Vr.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return Yo(Vr)}},gr=ne({unMergedConnectors:[],connectors:[]}),Fo={state:gr,subscribeKey(t,e){return lt(gr,t,e)},setConnectors(t){t.forEach(this.syncIfAuthConnector),gr.unMergedConnectors=[...gr.unMergedConnectors,...t],gr.connectors=this.mergeMultiChainConnectors(gr.unMergedConnectors)},mergeMultiChainConnectors(t){const e=this.generateConnectorMapByName(t);return Array.from(e.values()).map(i=>{var o,n,a;return i.length>1?{name:(o=i[0])==null?void 0:o.name,imageUrl:(n=i[0])==null?void 0:n.imageUrl,imageId:(a=i[0])==null?void 0:a.imageId,providers:this.getUniqueConnectorsByName(i),type:"MULTI_CHAIN"}:i[0]})},generateConnectorMapByName(t){const e=new Map;return t.forEach(r=>{const{name:i}=r;if(!i)return;const o=e.get(i)||[];o.find(a=>a.chain===r.chain)||o.push(r),e.set(i,o)}),e},getUniqueConnectorsByName(t){const e=[];return t.forEach(r=>{e.find(i=>i.chain===r.chain)||e.push({...r,name:_o.CHAIN_NAME_MAP[r.chain]})}),e},addConnector(t){this.setConnectors([t])},getAuthConnector(){return gr.connectors.find(t=>t.type==="AUTH")},getAnnouncedConnectorRdns(){return gr.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectors(){return gr.connectors},getConnector(t,e){return gr.connectors.find(r=>{var i;return r.explorerId===t||((i=r.info)==null?void 0:i.rdns)===e})},syncIfAuthConnector(t){var n,a;if(t.id!=="w3mAuth")return;const e=t,r=Yo(pe.state),i=Oa.getSnapshot().themeMode,o=Oa.getSnapshot().themeVariables;(a=(n=e==null?void 0:e.provider)==null?void 0:n.syncDappData)==null||a.call(n,{metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId}),e.provider.syncTheme({themeMode:i,themeVariables:o,w3mThemeVariables:l0(o,i)})}},yp=yt.getAnalyticsUrl(),Cp=new es({baseUrl:yp,clientId:null}),Ap=["MODAL_CREATED"],_n=ne({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),ri={state:_n,subscribe(t){return dt(_n,()=>t(_n))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:r}=pe.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},async _sendAnalyticsEvent(t){try{if(Ap.includes(t.data.event)||typeof window>"u")return;await Cp.post({path:"/e",headers:ri._getApiHeaders(),body:{eventId:yt.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){_n.timestamp=Date.now(),_n.data=t,pe.state.enableAnalytics&&ri._sendAnalyticsEvent(_n)}},fo=ne({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),xi={state:fo,subscribe(t){return dt(fo,()=>t(fo))},set(t){Object.assign(fo,{...fo,...t})}},xp={isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},_p={supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]},ce=ne({chains:pc(),activeChain:void 0,activeCaipNetwork:void 0}),W={state:ce,subscribeKey(t,e){return lt(ce,t,e)},subscribeChain(t){let e;return dt(ce.chains,()=>{const r=ce.activeChain;if(r){const i=ce.chains.get(r);(!e||e!==i)&&(e=i,t(i))}})},subscribeChainProp(t,e){let r;return dt(ce.chains,()=>{var o;const i=ce.activeChain;if(i){const n=(o=ce.chains.get(i))==null?void 0:o[t];r!==n&&(r=n,e(n))}})},initialize(t){const e=t==null?void 0:t[0];if(!e)throw new Error("Adapter is required to initialize ChainController");ce.activeChain=e.chain,xi.set({activeChain:e.chain}),this.setActiveCaipNetwork(e.defaultChain),t.forEach(r=>{ce.chains.set(r.chain,{chain:r.chain,connectionControllerClient:r.connectionControllerClient,networkControllerClient:r.networkControllerClient,accountState:xp,networkState:_p})})},setChainNetworkData(t,e,r=!1){if(!t)throw new Error("Chain is required to update chain network data");const i=ce.chains.get(t);i&&(i.networkState=vt({...i.networkState,...e}),ce.chains.set(t,vt(i)),(r||ce.chains.size===1||ce.activeChain===t)&&st.replaceState(i.networkState))},setChainAccountData(t,e,r=!0){if(!t)throw new Error("Chain is required to update chain account data");const i=ce.chains.get(t);i&&(i.accountState=vt({...i.accountState,...e}),ce.chains.set(t,i),(r||ce.chains.size===1||ce.activeChain===t)&&St.replaceState(i.accountState))},setAccountProp(t,e,r){this.setChainAccountData(r,{[t]:e})},setActiveChain(t){var r,i,o,n,a;const e=t?ce.chains.get(t):void 0;e&&e.chain!==ce.activeChain&&(ce.activeChain=e.chain,ce.activeCaipNetwork=(r=e.networkState)!=null&&r.caipNetwork?vt((i=e.networkState)==null?void 0:i.caipNetwork):void 0,St.replaceState(e.accountState),st.replaceState(e.networkState),this.setCaipNetwork(e.chain,(o=e.networkState)==null?void 0:o.caipNetwork),xi.set({activeChain:t,selectedNetworkId:(a=(n=e.networkState)==null?void 0:n.caipNetwork)==null?void 0:a.id}))},setActiveCaipNetwork(t){t&&(t.chain!==ce.activeChain&&this.setActiveChain(t.chain),ce.activeCaipNetwork=vt(t),ce.activeChain=t.chain,this.setCaipNetwork(t.chain,t,!0),xi.set({activeChain:t.chain,selectedNetworkId:t==null?void 0:t.id}))},setCaipNetwork(t,e,r=!1){this.setChainNetworkData(t,{caipNetwork:e},r)},setActiveConnector(t){t&&(ce.activeConnector=vt(t))},getNetworkControllerClient(){const t=ce.activeChain;if(!t)throw new Error("Chain is required to get network controller client");const e=ce.chains.get(t);if(!e)throw new Error("Chain adapter not found");if(!e.networkControllerClient)throw new Error("NetworkController client not set");return e.networkControllerClient},getConnectionControllerClient(t){const e=t||ce.activeChain;if(!e)throw new Error("Chain is required to get connection controller client");const r=ce.chains.get(e);if(!r)throw new Error("Chain adapter not found");if(!r.connectionControllerClient)throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(t,e){var o;let r=ce.activeChain;if(e&&(r=e),!r)return;const i=(o=ce.chains.get(r))==null?void 0:o.accountState;if(i)return i[t]},getNetworkProp(t){var i;const e=ce.activeChain;if(!e)return;const r=(i=ce.chains.get(e))==null?void 0:i.networkState;if(r)return r[t]},resetAccount(t){const e=t;if(!e)throw new Error("Chain is required to set account prop");this.setChainAccountData(e,vt({isConnected:!1,smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0}))}},zs=ne({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),st={state:zs,replaceState(t){t&&Object.assign(zs,vt(t))},subscribeKey(t,e){let r;return W.subscribeChainProp("networkState",i=>{if(i){const o=i[t];r!==o&&(r=o,e(o))}})},_getClient(){return W.getNetworkControllerClient()},initializeDefaultNetwork(){const t=this.getRequestedCaipNetworks();t.length>0&&this.setCaipNetwork(t[0])},setDefaultCaipNetwork(t){t&&(W.setCaipNetwork(t.chain,t,!0),W.setChainNetworkData(t.chain,{isDefaultCaipNetwork:!0}),xi.set({selectedNetworkId:t.id}))},setActiveCaipNetwork(t){var e,r;t&&(W.setActiveCaipNetwork(t),W.setChainNetworkData(t.chain,{caipNetwork:t}),xi.set({activeChain:t.chain,selectedNetworkId:t==null?void 0:t.id}),(r=(e=W.state.chains.get(t.chain))==null?void 0:e.networkState)!=null&&r.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI())},setCaipNetwork(t){var e,r;if(t){if(!(t!=null&&t.chain))throw new Error("chain is required to set active network");W.setCaipNetwork(t==null?void 0:t.chain,t),(r=(e=W.state.chains.get(t.chain))==null?void 0:e.networkState)!=null&&r.allowUnsupportedChain||this.checkIfSupportedNetwork()||this.showUnsupportedChainUI()}},setRequestedCaipNetworks(t,e){W.setChainNetworkData(e,{requestedCaipNetworks:t})},setAllowUnsupportedChain(t,e){W.setChainNetworkData(e||W.state.activeChain,{allowUnsupportedChain:t})},setSmartAccountEnabledNetworks(t,e){W.setChainNetworkData(e,{smartAccountEnabledNetworks:t})},getRequestedCaipNetworks(t){let e;if(!W.state.activeChain)throw new Error("activeChain is required to get requested networks");if(t){const n=t;if(!n)throw new Error("chain is required to get requested networks");e=[n]}else e=[...W.state.chains.keys()];const r=[],i=[];return e.forEach(n=>{var a,l,h,g,C,A,k,I;(l=(a=W.state.chains.get(n))==null?void 0:a.networkState)!=null&&l.approvedCaipNetworkIds&&r.push(...((g=(h=W.state.chains.get(n))==null?void 0:h.networkState)==null?void 0:g.approvedCaipNetworkIds)||[]),(A=(C=W.state.chains.get(n))==null?void 0:C.networkState)!=null&&A.requestedCaipNetworks&&i.push(...((I=(k=W.state.chains.get(n))==null?void 0:k.networkState)==null?void 0:I.requestedCaipNetworks)||[])}),yt.sortRequestedNetworks(r,i)},async switchActiveNetwork(t){var r;const e=t?(r=W.state.chains.get(t.chain))==null?void 0:r.networkControllerClient:void 0;if(!e)throw new Error("networkControllerClient not found for given network object");W.setActiveCaipNetwork(t),await(e==null?void 0:e.switchCaipNetwork(t)),t&&ri.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.id}})},getApprovedCaipNetworkIds(t){var r,i;if(t){const o=t;if(!o)throw new Error("chain is required to get approved network IDs");return(i=(r=W.state.chains.get(o))==null?void 0:r.networkState)==null?void 0:i.approvedCaipNetworkIds}const e=[];return Object.values(W.state.chains).forEach(o=>{var n;o.networkState.approvedCaipNetworkIds&&e.push(...((n=o.networkState)==null?void 0:n.approvedCaipNetworkIds)||[])}),e},async setApprovedCaipNetworksData(t){const r=await W.getNetworkControllerClient().getApprovedCaipNetworksData();if(!t)throw new Error("chain is required to set approved network data");W.setChainNetworkData(t,{approvedCaipNetworkIds:r==null?void 0:r.approvedCaipNetworkIds,supportsAllNetworks:(r==null?void 0:r.supportsAllNetworks)||!1})},checkIfSupportedNetwork(){var i,o;const t=W.state.activeChain;if(!t)return!1;const e=(o=(i=W.state.chains.get(t))==null?void 0:i.networkState)==null?void 0:o.caipNetwork,r=this.getRequestedCaipNetworks();return r.length?r==null?void 0:r.some(n=>n.id===(e==null?void 0:e.id)):!0},checkIfSmartAccountEnabled(){var i;const t=wp.caipNetworkIdToNumber((i=zs.caipNetwork)==null?void 0:i.id);if(!W.state.activeChain)throw new Error("activeChain is required to check if smart account is enabled");if(!t)return!1;const r=W.getNetworkProp("smartAccountEnabledNetworks");return!!(r!=null&&r.includes(t))},resetNetwork(){const t=W.state.activeChain;if(!t)throw new Error("chain is required to reset network");W.setChainNetworkData(t,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},getSupportsAllNetworks(){var e,r;const t=W.state.activeChain;if(!t)throw new Error("chain is required to check if network supports all networks");return(r=(e=W.state.chains.get(t))==null?void 0:e.networkState)==null?void 0:r.supportsAllNetworks},showUnsupportedChainUI(){setTimeout(()=>{c0.open({view:"UnsupportedChain"})},300)},getActiveNetworkTokenAddress(){var e,r;const t=en.NATIVE_TOKEN_ADDRESS[((e=this.state.caipNetwork)==null?void 0:e.chain)||"evm"];return`${((r=this.state.caipNetwork)==null?void 0:r.id)||"eip155:1"}:${t}`}},Sp=yt.getApiUrl(),Tt=new es({baseUrl:Sp,clientId:null}),Ep="40",M1="4",Tp=20,wt=ne({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),fe={state:wt,subscribeKey(t,e){return lt(wt,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:r}=pe.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},_filterOutExtensions(t){return pe.state.isUniversalProvider?t.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):t},async _fetchWalletImage(t){const e=`${Tt.baseUrl}/getWalletImage/${t}`,r=await Tt.getBlob({path:e,headers:fe._getApiHeaders()});po.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){const e=`${Tt.baseUrl}/public/getAssetImage/${t}`,r=await Tt.getBlob({path:e,headers:fe._getApiHeaders()});po.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){const e=`${Tt.baseUrl}/public/getAssetImage/${t}`,r=await Tt.getBlob({path:e,headers:fe._getApiHeaders()});po.setConnectorImage(t,URL.createObjectURL(r))},async _fetchCurrencyImage(t){const e=`${Tt.baseUrl}/public/getCurrencyImage/${t}`,r=await Tt.getBlob({path:e,headers:fe._getApiHeaders()});po.setCurrencyImage(t,URL.createObjectURL(r))},async _fetchTokenImage(t){const e=`${Tt.baseUrl}/public/getTokenImage/${t}`,r=await Tt.getBlob({path:e,headers:fe._getApiHeaders()});po.setTokenImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){const t=st.getRequestedCaipNetworks(),e=t==null?void 0:t.map(({imageId:r})=>r).filter(Boolean);e&&await Promise.allSettled(e.map(r=>fe._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:t}=Fo.state,e=t.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(e.map(r=>fe._fetchConnectorImage(r)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>fe._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>fe._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=pe.state;if(t!=null&&t.length){const{data:e}=await Tt.get({path:"/getWallets",headers:fe._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):M1,include:t==null?void 0:t.join(",")}});e.sort((i,o)=>t.indexOf(i.id)-t.indexOf(o.id));const r=e.map(i=>i.image_id).filter(Boolean);await Promise.allSettled(r.map(i=>fe._fetchWalletImage(i))),wt.featured=e}},async fetchRecommendedWallets(){var g;const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=pe.state,i=[...e??[],...r??[]].filter(Boolean),{data:o,count:n}=await Tt.get({path:"/getWallets",headers:fe._getApiHeaders(),params:{page:"1",chains:(g=st.state.caipNetwork)==null?void 0:g.id,entries:M1,include:t==null?void 0:t.join(","),exclude:i==null?void 0:i.join(",")}}),a=kr.getRecentWallets(),l=o.map(C=>C.image_id).filter(Boolean),h=a.map(C=>C.image_id).filter(Boolean);await Promise.allSettled([...l,...h].map(C=>fe._fetchWalletImage(C))),wt.recommended=o,wt.count=n??0},async fetchWallets({page:t}){var h;const{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:i}=pe.state,o=[...wt.recommended.map(({id:g})=>g),...r??[],...i??[]].filter(Boolean),{data:n,count:a}=await Tt.get({path:"/getWallets",headers:fe._getApiHeaders(),params:{page:String(t),entries:Ep,chains:(h=st.state.caipNetwork)==null?void 0:h.id,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),l=n.slice(0,Tp).map(g=>g.image_id).filter(Boolean);await Promise.allSettled(l.map(g=>fe._fetchWalletImage(g))),wt.wallets=yt.uniqueBy([...wt.wallets,...fe._filterOutExtensions(n)],"id"),wt.count=a>wt.count?a:wt.count,wt.page=t},async searchWalletByIds({ids:t}){var r;const{data:e}=await Tt.get({path:"/getWallets",headers:fe._getApiHeaders(),params:{page:"1",entries:String(t.length),chains:(r=st.state.caipNetwork)==null?void 0:r.id,include:t==null?void 0:t.join(",")}});e&&e.forEach(i=>{i!=null&&i.rdns&&wt.excludedRDNS.push(i.rdns)})},async searchWallet({search:t}){var n;const{includeWalletIds:e,excludeWalletIds:r}=pe.state;wt.search=[];const{data:i}=await Tt.get({path:"/getWallets",headers:fe._getApiHeaders(),params:{page:"1",entries:"100",search:t==null?void 0:t.trim(),chains:(n=st.state.caipNetwork)==null?void 0:n.id,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),o=i.map(a=>a.image_id).filter(Boolean);await Promise.allSettled([...o.map(a=>fe._fetchWalletImage(a)),yt.wait(300)]),wt.search=fe._filterOutExtensions(i)},async reFetchWallets(){wt.page=1,wt.wallets=[],await fe.fetchFeaturedWallets(),await fe.fetchRecommendedWallets()},prefetch(){const t=[fe.fetchFeaturedWallets(),fe.fetchRecommendedWallets(),fe.fetchNetworkImages(),fe.fetchConnectorImages()];pe.state.enableAnalytics===void 0&&t.push(fe.fetchAnalyticsConfig()),wt.prefetchPromise=Promise.race([Promise.allSettled(t)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:t}=await Tt.get({path:"/getAnalyticsConfig",headers:fe._getApiHeaders()});pe.setEnableAnalytics(t)}},ot=ne({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),pe={state:ot,subscribeKey(t,e){return lt(ot,t,e)},setOptions(t){Object.assign(ot,t)},setProjectId(t){ot.projectId=t},setAllWallets(t){ot.allWallets=t},setIncludeWalletIds(t){ot.includeWalletIds=t},setExcludeWalletIds(t){ot.excludeWalletIds=t,t&&fe.searchWalletByIds({ids:t})},setFeaturedWalletIds(t){ot.featuredWalletIds=t},setTokens(t){ot.tokens=t},setTermsConditionsUrl(t){ot.termsConditionsUrl=t},setPrivacyPolicyUrl(t){ot.privacyPolicyUrl=t},setCustomWallets(t){ot.customWallets=t},setIsSiweEnabled(t){ot.isSiweEnabled=t},setIsUniversalProvider(t){ot.isUniversalProvider=t},setEnableAnalytics(t){ot.enableAnalytics=t},setSdkVersion(t){ot.sdkVersion=t},setMetadata(t){ot.metadata=t},setOnrampEnabled(t){ot.enableOnramp=t},setDisableAppend(t){ot.disableAppend=t},setEIP6963Enabled(t){ot.enableEIP6963=t},setHasMultipleAddresses(t){ot.hasMultipleAddresses=t},setEnableSwaps(t){ot.enableSwaps=t}},kp={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Jl=yt.getBlockchainApiUrl(),pt=ne({clientId:null,api:new es({baseUrl:Jl,clientId:null})}),Xt={state:pt,fetchIdentity({address:t}){return pt.api.get({path:`/v1/identity/${t}`,params:{projectId:pe.state.projectId,sender:St.state.address}})},fetchTransactions({account:t,projectId:e,cursor:r,onramp:i,signal:o,cache:n,chainId:a}){return pt.api.get({path:`/v1/account/${t}/history`,params:{projectId:e,cursor:r,onramp:i,chainId:a},signal:o,cache:n})},fetchSwapQuote({projectId:t,amount:e,userAddress:r,from:i,to:o,gasPrice:n}){return pt.api.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:t,amount:e,userAddress:r,from:i,to:o,gasPrice:n}})},fetchSwapTokens({projectId:t,chainId:e}){return pt.api.get({path:"/v1/convert/tokens",params:{projectId:t,chainId:e}})},fetchTokenPrice({projectId:t,addresses:e}){return pt.api.post({path:"/v1/fungible/price",body:{projectId:t,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchSwapAllowance({projectId:t,tokenAddress:e,userAddress:r}){const{sdkType:i,sdkVersion:o}=pe.state;return pt.api.get({path:"/v1/convert/allowance",params:{projectId:t,tokenAddress:e,userAddress:r},headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":o}})},fetchGasPrice({projectId:t,chainId:e}){const{sdkType:r,sdkVersion:i}=pe.state;return pt.api.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":i},params:{projectId:t,chainId:e}})},generateSwapCalldata({amount:t,from:e,projectId:r,to:i,userAddress:o}){return pt.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:t,eip155:{slippage:en.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:r,to:i,userAddress:o}})},generateApproveCalldata({from:t,projectId:e,to:r,userAddress:i}){const{sdkType:o,sdkVersion:n}=pe.state;return pt.api.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":n},params:{projectId:e,userAddress:i,from:t,to:r}})},async getBalance(t,e,r){const{sdkType:i,sdkVersion:o}=pe.state;return pt.api.get({path:`/v1/account/${t}/balance`,headers:{"x-sdk-type":i,"x-sdk-version":o},params:{currency:"usd",projectId:pe.state.projectId,chainId:e,forceUpdate:r}})},async lookupEnsName(t){return pt.api.get({path:`/v1/profile/account/${t}${_o.WC_NAME_SUFFIX}`,params:{projectId:pe.state.projectId,apiVersion:"2"}})},async reverseLookupEnsName({address:t}){return pt.api.get({path:`/v1/profile/reverse/${t}`,params:{sender:St.state.address,projectId:pe.state.projectId,apiVersion:"2"}})},async getEnsNameSuggestions(t){return pt.api.get({path:`/v1/profile/suggestions/${t}`,params:{projectId:pe.state.projectId}})},async registerEnsName({coinType:t,address:e,message:r,signature:i}){return pt.api.post({path:"/v1/profile/account",body:{coin_type:t,address:e,message:r,signature:i},headers:{"Content-Type":"application/json"}})},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:r,purchaseAmount:i,paymentAmount:o}){return(await pt.api.post({path:"/v1/generators/onrampurl",params:{projectId:pe.state.projectId},body:{destinationWallets:t,defaultNetwork:r,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await pt.api.get({path:"/v1/onramp/options",params:{projectId:pe.state.projectId}})}catch{return kp}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}){try{return await pt.api.post({path:"/v1/onramp/quote",params:{projectId:pe.state.projectId},body:{purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}})}catch{return{coinbaseFee:{amount:r,currency:e.id},networkFee:{amount:r,currency:e.id},paymentSubtotal:{amount:r,currency:e.id},paymentTotal:{amount:r,currency:e.id},purchaseAmount:{amount:r,currency:e.id},quoteId:"mocked-quote-id"}}},setClientId(t){pt.clientId=t,pt.api=new es({baseUrl:Jl,clientId:t})}},Kt=ne({message:"",variant:"success",open:!1}),Ut={state:Kt,subscribeKey(t,e){return lt(Kt,t,e)},showLoading(t){Kt.message=t,Kt.variant="loading",Kt.open=!0},showSuccess(t){Kt.message=t,Kt.variant="success",Kt.open=!0},showError(t){const e=yt.parseError(t);Kt.message=e,Kt.variant="error",Kt.open=!0},hide(){Kt.open=!1}};var Y1;typeof window<"u"&&(window.Buffer||(window.Buffer=fc.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Y1=window.process)!=null&&Y1.env||(window.process={env:{}}));const Ip={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",SOCIAL:"@w3m/connected_social",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},cn={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},ct=f.object({message:f.string()});function Z(t){return f.literal(Ip[t])}f.object({accessList:f.array(f.string()),blockHash:f.string().nullable(),blockNumber:f.string().nullable(),chainId:f.string().or(f.number()),from:f.string(),gas:f.string(),hash:f.string(),input:f.string().nullable(),maxFeePerGas:f.string(),maxPriorityFeePerGas:f.string(),nonce:f.string(),r:f.string(),s:f.string(),to:f.string(),transactionIndex:f.string().nullable(),type:f.string(),v:f.string(),value:f.string()});const Rp=f.object({chainId:f.string().or(f.number())}),Mp=f.object({email:f.string().email()}),Np=f.object({otp:f.string()}),Pp=f.object({uri:f.string()}),$p=f.object({chainId:f.optional(f.string().or(f.number())),preferredAccountType:f.optional(f.string())}),Bp=f.object({provider:f.enum(["google","github","apple","facebook","x","discord"])}),Op=f.object({email:f.string().email()}),Up=f.object({otp:f.string()}),Dp=f.object({otp:f.string()}),Lp=f.object({themeMode:f.optional(f.enum(["light","dark"])),themeVariables:f.optional(f.record(f.string(),f.string().or(f.number()))),w3mThemeVariables:f.optional(f.record(f.string(),f.string()))}),jp=f.object({metadata:f.object({name:f.string(),description:f.string(),url:f.string(),icons:f.array(f.string())}).optional(),sdkVersion:f.string(),projectId:f.string()}),Fp=f.object({type:f.string()}),zp=f.object({action:f.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),Hp=f.object({url:f.string()}),Wp=f.object({userName:f.string()}),Vp=f.object({email:f.string(),address:f.string(),chainId:f.string().or(f.number()),accounts:f.array(f.object({address:f.string(),type:f.enum([cn.ACCOUNT_TYPES.EOA,cn.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:f.string().optional()}),Zp=f.object({action:f.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),Gp=f.object({email:f.string().email().optional().nullable(),address:f.string(),chainId:f.string().or(f.number()),smartAccountDeployed:f.optional(f.boolean()),accounts:f.array(f.object({address:f.string(),type:f.enum([cn.ACCOUNT_TYPES.EOA,cn.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:f.optional(f.string())}),qp=f.object({uri:f.string()}),Yp=f.object({isConnected:f.boolean()}),Kp=f.object({chainId:f.string().or(f.number())}),Qp=f.object({chainId:f.string().or(f.number())}),Jp=f.object({newEmail:f.string().email()}),Xp=f.object({smartAccountEnabledNetworks:f.array(f.number())});f.object({address:f.string(),isDeployed:f.boolean()});const e5=f.object({type:f.string(),address:f.string()}),t5=f.any(),r5=f.object({method:f.literal("eth_accounts")}),i5=f.object({method:f.literal("eth_blockNumber")}),n5=f.object({method:f.literal("eth_call"),params:f.array(f.any())}),o5=f.object({method:f.literal("eth_chainId")}),a5=f.object({method:f.literal("eth_estimateGas"),params:f.array(f.any())}),s5=f.object({method:f.literal("eth_feeHistory"),params:f.array(f.any())}),l5=f.object({method:f.literal("eth_gasPrice")}),c5=f.object({method:f.literal("eth_getAccount"),params:f.array(f.any())}),u5=f.object({method:f.literal("eth_getBalance"),params:f.array(f.any())}),d5=f.object({method:f.literal("eth_getBlockByHash"),params:f.array(f.any())}),h5=f.object({method:f.literal("eth_getBlockByNumber"),params:f.array(f.any())}),p5=f.object({method:f.literal("eth_getBlockReceipts"),params:f.array(f.any())}),f5=f.object({method:f.literal("eth_getBlockTransactionCountByHash"),params:f.array(f.any())}),g5=f.object({method:f.literal("eth_getBlockTransactionCountByNumber"),params:f.array(f.any())}),m5=f.object({method:f.literal("eth_getCode"),params:f.array(f.any())}),w5=f.object({method:f.literal("eth_getFilterChanges"),params:f.array(f.any())}),v5=f.object({method:f.literal("eth_getFilterLogs"),params:f.array(f.any())}),b5=f.object({method:f.literal("eth_getLogs"),params:f.array(f.any())}),y5=f.object({method:f.literal("eth_getProof"),params:f.array(f.any())}),C5=f.object({method:f.literal("eth_getStorageAt"),params:f.array(f.any())}),A5=f.object({method:f.literal("eth_getTransactionByBlockHashAndIndex"),params:f.array(f.any())}),x5=f.object({method:f.literal("eth_getTransactionByBlockNumberAndIndex"),params:f.array(f.any())}),_5=f.object({method:f.literal("eth_getTransactionByHash"),params:f.array(f.any())}),S5=f.object({method:f.literal("eth_getTransactionCount"),params:f.array(f.any())}),E5=f.object({method:f.literal("eth_getTransactionReceipt"),params:f.array(f.any())}),T5=f.object({method:f.literal("eth_getUncleCountByBlockHash"),params:f.array(f.any())}),k5=f.object({method:f.literal("eth_getUncleCountByBlockNumber"),params:f.array(f.any())}),I5=f.object({method:f.literal("eth_maxPriorityFeePerGas")}),R5=f.object({method:f.literal("eth_newBlockFilter")}),M5=f.object({method:f.literal("eth_newFilter"),params:f.array(f.any())}),N5=f.object({method:f.literal("eth_newPendingTransactionFilter")}),P5=f.object({method:f.literal("eth_sendRawTransaction"),params:f.array(f.any())}),$5=f.object({method:f.literal("eth_syncing"),params:f.array(f.any())}),B5=f.object({method:f.literal("eth_uninstallFilter"),params:f.array(f.any())}),N1=f.object({method:f.literal("personal_sign"),params:f.array(f.any())}),O5=f.object({method:f.literal("eth_signTypedData_v4"),params:f.array(f.any())}),P1=f.object({method:f.literal("eth_sendTransaction"),params:f.array(f.any())}),U5=f.object({method:f.literal("solana_signMessage"),params:f.object({message:f.string(),pubkey:f.string()})}),D5=f.object({method:f.literal("solana_signTransaction"),params:f.object({transaction:f.string()})}),L5=f.object({method:f.literal("solana_signAllTransactions"),params:f.object({transactions:f.array(f.string())})}),j5=f.object({method:f.literal("solana_signAndSendTransaction"),params:f.object({transaction:f.string(),options:f.object({skipPreflight:f.boolean().optional(),preflightCommitment:f.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:f.number().optional(),minContextSlot:f.number().optional()}).optional()})}),F5=f.object({method:f.literal("wallet_sendCalls"),params:f.array(f.object({chainId:f.string().or(f.number()).optional(),from:f.string().optional(),version:f.string().optional(),capabilities:f.any().optional(),calls:f.array(f.object({to:f.string().startsWith("0x"),data:f.string().startsWith("0x").optional(),value:f.string().optional()}))}))}),z5=f.object({method:f.literal("wallet_getCallsStatus"),params:f.array(f.string())}),H5=f.object({method:f.literal("wallet_getCapabilities")}),W5=f.object({method:f.literal("wallet_grantPermissions"),params:f.array(f.any())}),$1=f.object({token:f.string()}),G=f.object({id:f.string().optional()});G.extend({type:Z("APP_SWITCH_NETWORK"),payload:Rp}).or(G.extend({type:Z("APP_CONNECT_EMAIL"),payload:Mp})).or(G.extend({type:Z("APP_CONNECT_DEVICE")})).or(G.extend({type:Z("APP_CONNECT_OTP"),payload:Np})).or(G.extend({type:Z("APP_CONNECT_SOCIAL"),payload:Pp})).or(G.extend({type:Z("APP_GET_FARCASTER_URI")})).or(G.extend({type:Z("APP_CONNECT_FARCASTER")})).or(G.extend({type:Z("APP_GET_USER"),payload:f.optional($p)})).or(G.extend({type:Z("APP_GET_SOCIAL_REDIRECT_URI"),payload:Bp})).or(G.extend({type:Z("APP_SIGN_OUT")})).or(G.extend({type:Z("APP_IS_CONNECTED"),payload:f.optional($1)})).or(G.extend({type:Z("APP_GET_CHAIN_ID")})).or(G.extend({type:Z("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(G.extend({type:Z("APP_INIT_SMART_ACCOUNT")})).or(G.extend({type:Z("APP_SET_PREFERRED_ACCOUNT"),payload:Fp})).or(G.extend({type:Z("APP_RPC_REQUEST"),payload:N1.or(P1).or(r5).or(i5).or(n5).or(o5).or(a5).or(s5).or(l5).or(c5).or(u5).or(d5).or(h5).or(p5).or(f5).or(g5).or(m5).or(w5).or(v5).or(b5).or(y5).or(C5).or(A5).or(x5).or(_5).or(S5).or(E5).or(T5).or(k5).or(I5).or(R5).or(M5).or(N5).or(P5).or($5).or(B5).or(N1).or(O5).or(P1).or(U5).or(D5).or(L5).or(j5).or(z5).or(F5).or(H5).or(W5)})).or(G.extend({type:Z("APP_UPDATE_EMAIL"),payload:Op})).or(G.extend({type:Z("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:Up})).or(G.extend({type:Z("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:Dp})).or(G.extend({type:Z("APP_SYNC_THEME"),payload:Lp})).or(G.extend({type:Z("APP_SYNC_DAPP_DATA"),payload:jp})),G.extend({type:Z("FRAME_SWITCH_NETWORK_ERROR"),payload:ct}).or(G.extend({type:Z("FRAME_SWITCH_NETWORK_SUCCESS"),payload:Qp})).or(G.extend({type:Z("FRAME_CONNECT_EMAIL_SUCCESS"),payload:zp})).or(G.extend({type:Z("FRAME_CONNECT_EMAIL_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:Hp})).or(G.extend({type:Z("FRAME_GET_FARCASTER_URI_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:Wp})).or(G.extend({type:Z("FRAME_CONNECT_FARCASTER_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_CONNECT_OTP_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_CONNECT_OTP_SUCCESS")})).or(G.extend({type:Z("FRAME_CONNECT_DEVICE_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_CONNECT_DEVICE_SUCCESS")})).or(G.extend({type:Z("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:Vp})).or(G.extend({type:Z("FRAME_CONNECT_SOCIAL_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_GET_USER_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_GET_USER_SUCCESS"),payload:Gp})).or(G.extend({type:Z("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:qp})).or(G.extend({type:Z("FRAME_SIGN_OUT_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_SIGN_OUT_SUCCESS")})).or(G.extend({type:Z("FRAME_IS_CONNECTED_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_IS_CONNECTED_SUCCESS"),payload:Yp})).or(G.extend({type:Z("FRAME_GET_CHAIN_ID_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_GET_CHAIN_ID_SUCCESS"),payload:Kp})).or(G.extend({type:Z("FRAME_RPC_REQUEST_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_RPC_REQUEST_SUCCESS"),payload:t5})).or(G.extend({type:Z("FRAME_SESSION_UPDATE"),payload:$1})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_SUCCESS"),payload:Zp})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:Jp})).or(G.extend({type:Z("FRAME_SYNC_THEME_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_SYNC_THEME_SUCCESS")})).or(G.extend({type:Z("FRAME_SYNC_DAPP_DATA_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(G.extend({type:Z("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:Xp})).or(G.extend({type:Z("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:ct})).or(G.extend({type:Z("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:e5})).or(G.extend({type:Z("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:ct}));const ve=ne({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),V5={state:ve,subscribe(t){return dt(ve,()=>t(ve))},setLastNetworkInView(t){ve.lastNetworkInView=t},async fetchTransactions(t,e){var i;const{projectId:r}=pe.state;if(!r||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");ve.loading=!0;try{const o=await Xt.fetchTransactions({account:t,projectId:r,cursor:ve.next,onramp:e,cache:e==="coinbase"?"no-cache":void 0,chainId:(i=st.state.caipNetwork)==null?void 0:i.id}),n=this.filterSpamTransactions(o.data),a=this.filterByConnectedChain(n),l=[...ve.transactions,...a];ve.loading=!1,e==="coinbase"?ve.coinbaseTransactions=this.groupTransactionsByYearAndMonth(ve.coinbaseTransactions,o.data):(ve.transactions=l,ve.transactionsByYear=this.groupTransactionsByYearAndMonth(ve.transactionsByYear,a)),ve.empty=l.length===0,ve.next=o.next?o.next:void 0}catch{ri.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:r,cursor:ve.next,isSmartAccount:St.state.preferredAccountType===cn.ACCOUNT_TYPES.SMART_ACCOUNT}}),Ut.showError("Failed to fetch transactions"),ve.loading=!1,ve.empty=!0,ve.next=void 0}},groupTransactionsByYearAndMonth(t={},e=[]){const r=t;return e.forEach(i=>{const o=new Date(i.metadata.minedAt).getFullYear(),n=new Date(i.metadata.minedAt).getMonth(),a=r[o]??{},h=(a[n]??[]).filter(g=>g.id!==i.id);r[o]={...a,[n]:[...h,i].sort((g,C)=>new Date(C.metadata.minedAt).getTime()-new Date(g.metadata.minedAt).getTime())}}),r},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(i=>{var o;return((o=i.nft_info)==null?void 0:o.flags.is_spam)===!0}))},filterByConnectedChain(t){var i;const e=(i=st.state.caipNetwork)==null?void 0:i.id;return t.filter(o=>o.metadata.chain===e)},clearCursor(){ve.next=void 0},resetTransactions(){ve.transactions=[],ve.transactionsByYear={},ve.lastNetworkInView=void 0,ve.loading=!1,ve.empty=!1,ve.next=void 0}},$t=ne({wcError:!1,buffering:!1}),In={state:$t,subscribeKey(t,e){return lt($t,t,e)},_getClient(t){return W.getConnectionControllerClient(t)},setClient(t){$t._client=vt(t)},async connectWalletConnect(){kr.setConnectedConnector("WALLET_CONNECT"),await this._getClient().connectWalletConnect(t=>{$t.wcUri=t,$t.wcPairingExpiry=yt.getPairingExpiry()})},async connectExternal(t,e){var r,i;await((i=(r=this._getClient(e)).connectExternal)==null?void 0:i.call(r,t)),W.setActiveChain(e),kr.setConnectedConnector(t.type)},async reconnectExternal(t){var e,r;await((r=(e=this._getClient()).reconnectExternal)==null?void 0:r.call(e,t)),kr.setConnectedConnector(t.type)},async setPreferredAccountType(t){var r;c0.setLoading(!0);const e=Fo.getAuthConnector();e&&(await(e==null?void 0:e.provider.setPreferredAccount(t)),await this.reconnectExternal(e),c0.setLoading(!1),ri.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:t,network:((r=st.state.caipNetwork)==null?void 0:r.id)||""}}))},async signMessage(t){return this._getClient().signMessage(t)},parseUnits(t,e){return this._getClient().parseUnits(t,e)},formatUnits(t,e){return this._getClient().formatUnits(t,e)},async sendTransaction(t){return this._getClient().sendTransaction(t)},async estimateGas(t){return this._getClient().estimateGas(t)},async writeContract(t){return this._getClient().writeContract(t)},async getEnsAddress(t){return this._getClient().getEnsAddress(t)},async getEnsAvatar(t){return this._getClient().getEnsAvatar(t)},checkInstalled(t,e){var r,i;return((i=(r=this._getClient(e)).checkInstalled)==null?void 0:i.call(r,t))||!1},resetWcConnection(){$t.wcUri=void 0,$t.wcPairingExpiry=void 0,$t.wcLinking=void 0,$t.recentWallet=void 0,V5.resetTransactions(),kr.deleteWalletConnectDeepLink()},setWcLinking(t){$t.wcLinking=t},setWcError(t){$t.wcError=t,$t.buffering=!1},setRecentWallet(t){$t.recentWallet=t},setBuffering(t){$t.buffering=t},async disconnect(){const t=this._getClient();try{await t.disconnect(),this.resetWcConnection()}catch{throw new Error("Failed to disconnect")}}},wo={async getTokenList(){var i;const t=st.state.caipNetwork,e=await Xt.fetchSwapTokens({chainId:t==null?void 0:t.id,projectId:pe.state.projectId});return((i=e==null?void 0:e.tokens)==null?void 0:i.map(o=>({...o,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){const t=pe.state.projectId,e=st.state.caipNetwork;if(!e)return null;try{switch(e.chain){case"solana":const r=(await In.estimateGas({chainNamespace:"solana"})).toString();return{standard:r,fast:r,instant:r};case"evm":default:return await Xt.fetchGasPrice({projectId:t,chainId:e.id})}}catch{return null}},async fetchSwapAllowance({tokenAddress:t,userAddress:e,sourceTokenAmount:r,sourceTokenDecimals:i}){const o=pe.state.projectId,n=await Xt.fetchSwapAllowance({projectId:o,tokenAddress:t,userAddress:e});if(n!=null&&n.allowance&&r&&i){const a=In.parseUnits(r,i)||0;return BigInt(n.allowance)>=a}return!1},async getMyTokensWithBalance(t){const e=St.state.address,r=st.state.caipNetwork;if(!e||!r)return[];const o=(await Xt.getBalance(e,r.id,t)).balances.filter(n=>n.quantity.decimals!=="0");return St.setTokenBalance(o,W.state.activeChain),this.mapBalancesToSwapTokens(o)},mapBalancesToSwapTokens(t){return(t==null?void 0:t.map(e=>({...e,address:e!=null&&e.address?e.address:st.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},tt=ne({view:"Connect",history:["Connect"],transactionStack:[]}),br={state:tt,subscribeKey(t,e){return lt(tt,t,e)},pushTransactionStack(t){tt.transactionStack.push(t)},popTransactionStack(t){var r,i;const e=tt.transactionStack.pop();e&&(t?(this.goBack(),(r=e==null?void 0:e.onCancel)==null||r.call(e)):(e.goBack?this.goBack():e.view&&this.reset(e.view),(i=e==null?void 0:e.onSuccess)==null||i.call(e)))},push(t,e){t!==tt.view&&(tt.view=t,tt.history.push(t),tt.data=e)},reset(t){tt.view=t,tt.history=[t]},replace(t,e){tt.history.length>=1&&tt.history.at(-1)!==t&&(tt.view=t,tt.history[tt.history.length-1]=t,tt.data=e)},goBack(){if(tt.history.length>1){tt.history.pop();const[t]=tt.history.slice(-1);t&&(tt.view=t)}},goBackToIndex(t){if(tt.history.length>1){tt.history=tt.history.slice(0,t+1);const[e]=tt.history.slice(-1);e&&(tt.view=e)}}},Gr={getGasPriceInEther(t,e){const r=e*t;return Number(r)/1e18},getGasPriceInUSD(t,e,r){const i=Gr.getGasPriceInEther(e,r);return rt.bigNumber(t).multipliedBy(i).toNumber()},getPriceImpact({sourceTokenAmount:t,sourceTokenPriceInUSD:e,toTokenPriceInUSD:r,toTokenAmount:i}){const o=rt.bigNumber(t).multipliedBy(e),n=rt.bigNumber(i).multipliedBy(r);return o.minus(n).dividedBy(o).multipliedBy(100).toNumber()},getMaxSlippage(t,e){const r=rt.bigNumber(t).dividedBy(100);return rt.multiply(e,r).toNumber()},getProviderFee(t,e=.0085){return rt.bigNumber(t).multipliedBy(e).toString()},isInsufficientNetworkTokenForGas(t,e){const r=e||"0";return rt.bigNumber(t).isZero()?!0:rt.bigNumber(rt.bigNumber(r)).isGreaterThan(t)},isInsufficientSourceTokenForSwap(t,e,r){var n,a;const i=(a=(n=r==null?void 0:r.find(l=>l.address===e))==null?void 0:n.quantity)==null?void 0:a.numeric;return rt.bigNumber(i||"0").isLessThan(t)},getToTokenAmount({sourceToken:t,toToken:e,sourceTokenPrice:r,toTokenPrice:i,sourceTokenAmount:o}){if(o==="0"||!t||!e)return"0";const n=t.decimals,a=r,l=e.decimals,h=i;if(h<=0)return"0";const g=rt.bigNumber(o).multipliedBy(.0085),A=rt.bigNumber(o).minus(g).multipliedBy(rt.bigNumber(10).pow(n)),k=rt.bigNumber(a).dividedBy(h),I=n-l;return A.multipliedBy(k).dividedBy(rt.bigNumber(10).pow(I)).dividedBy(rt.bigNumber(10).pow(l)).toFixed(l).toString()}},B1=15e4,Z5=6,Ot={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:en.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},E=ne(Ot),ya={state:E,subscribe(t){return dt(E,()=>t(E))},subscribeKey(t,e){return lt(E,t,e)},getParams(){var h,g,C,A,k,I,N,D;const t=St.state.address,e=st.getActiveNetworkTokenAddress(),r=kr.getConnectedConnector(),i=Fo.getAuthConnector();if(!t)throw new Error("No address found to swap the tokens from.");const o=St.state.caipAddress,n=!((h=E.toToken)!=null&&h.address)||!((g=E.toToken)!=null&&g.decimals),a=!((C=E.sourceToken)!=null&&C.address)||!((A=E.sourceToken)!=null&&A.decimals)||!rt.bigNumber(E.sourceTokenAmount).isGreaterThan(0),l=!E.sourceTokenAmount;return{networkAddress:e,fromAddress:t,fromCaipAddress:St.state.caipAddress,sourceTokenAddress:(k=E.sourceToken)==null?void 0:k.address,toTokenAddress:(I=E.toToken)==null?void 0:I.address,toTokenAmount:E.toTokenAmount,toTokenDecimals:(N=E.toToken)==null?void 0:N.decimals,sourceTokenAmount:E.sourceTokenAmount,sourceTokenDecimals:(D=E.sourceToken)==null?void 0:D.decimals,invalidToToken:n,invalidSourceToken:a,invalidSourceTokenAmount:l,availableToSwap:o&&!n&&!a&&!l,isAuthConnector:(i==null?void 0:i.walletFeatures)&&r==="AUTH"}},setSourceToken(t){if(!t){E.sourceToken=t,E.sourceTokenAmount="",E.sourceTokenPriceInUSD=0;return}E.sourceToken=t,this.setTokenPrice(t.address,"sourceToken")},setSourceTokenAmount(t){E.sourceTokenAmount=t},setToToken(t){if(!t){E.toToken=t,E.toTokenAmount="",E.toTokenPriceInUSD=0;return}E.toToken=t,this.setTokenPrice(t.address,"toToken")},setToTokenAmount(t){E.toTokenAmount=t?rt.formatNumberToLocalString(t,Z5):""},async setTokenPrice(t,e){const{availableToSwap:r}=this.getParams();let i=E.tokensPriceMap[t]||0;i||(E.loadingPrices=!0,i=await this.getAddressPrice(t)),e==="sourceToken"?E.sourceTokenPriceInUSD=i:e==="toToken"&&(E.toTokenPriceInUSD=i),E.loadingPrices&&(E.loadingPrices=!1,r&&this.swapTokens())},switchTokens(){if(E.initializing||!E.initialized)return;const t=E.toToken?{...E.toToken}:void 0,e=E.sourceToken?{...E.sourceToken}:void 0,r=t&&E.toTokenAmount===""?"1":E.toTokenAmount;this.setSourceToken(t),this.setToToken(e),this.setSourceTokenAmount(r),this.setToTokenAmount(""),this.swapTokens()},resetState(){E.myTokensWithBalance=Ot.myTokensWithBalance,E.tokensPriceMap=Ot.tokensPriceMap,E.initialized=Ot.initialized,E.sourceToken=Ot.sourceToken,E.sourceTokenAmount=Ot.sourceTokenAmount,E.sourceTokenPriceInUSD=Ot.sourceTokenPriceInUSD,E.toToken=Ot.toToken,E.toTokenAmount=Ot.toTokenAmount,E.toTokenPriceInUSD=Ot.toTokenPriceInUSD,E.networkPrice=Ot.networkPrice,E.networkTokenSymbol=Ot.networkTokenSymbol,E.networkBalanceInUSD=Ot.networkBalanceInUSD,E.inputError=Ot.inputError},resetValues(){var r;const{networkAddress:t}=this.getParams(),e=(r=E.tokens)==null?void 0:r.find(i=>i.address===t);this.setSourceToken(e),this.setToToken(void 0)},getApprovalLoadingState(){return E.loadingApprovalTransaction},clearError(){E.transactionError=void 0},async initializeState(){if(!E.initializing){if(E.initializing=!0,!E.initialized)try{await this.fetchTokens(),E.initialized=!0}catch{E.initialized=!1,Ut.showError("Failed to initialize swap"),br.goBack()}E.initializing=!1}},async fetchTokens(){var r;const{networkAddress:t}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const e=(r=E.tokens)==null?void 0:r.find(i=>i.address===t);e&&(E.networkTokenSymbol=e.symbol,this.setSourceToken(e),this.setSourceTokenAmount("1"))},async getTokenList(){const t=await wo.getTokenList();E.tokens=t,E.popularTokens=t.sort((e,r)=>e.symbol<r.symbol?-1:e.symbol>r.symbol?1:0),E.suggestedTokens=t.filter(e=>!!en.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(t){var h,g;const e=E.tokensPriceMap[t];if(e)return e;const i=(await Xt.fetchTokenPrice({projectId:pe.state.projectId,addresses:[t]})).fungibles||[],o=[...E.tokens||[],...E.myTokensWithBalance||[]],n=(h=o==null?void 0:o.find(C=>C.address===t))==null?void 0:h.symbol,a=((g=i.find(C=>C.symbol.toLowerCase()===(n==null?void 0:n.toLowerCase())))==null?void 0:g.price)||0,l=parseFloat(a.toString());return E.tokensPriceMap[t]=l,l},async getNetworkTokenPrice(){var o;const{networkAddress:t}=this.getParams(),r=(o=(await Xt.fetchTokenPrice({projectId:pe.state.projectId,addresses:[t]}).catch(()=>(Ut.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles)==null?void 0:o[0],i=(r==null?void 0:r.price.toString())||"0";E.tokensPriceMap[t]=parseFloat(i),E.networkTokenSymbol=(r==null?void 0:r.symbol)||"",E.networkPrice=i},async getMyTokensWithBalance(t){const e=await wo.getMyTokensWithBalance(t);e&&(await this.getInitialGasPrice(),this.setBalances(e))},setBalances(t){const{networkAddress:e}=this.getParams(),r=st.state.caipNetwork;if(!r)return;const i=t.find(o=>o.address===e);t.forEach(o=>{E.tokensPriceMap[o.address]=o.price||0}),E.myTokensWithBalance=t.filter(o=>o.address.startsWith(r.id)),E.networkBalanceInUSD=i?rt.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){var e;const t=await wo.fetchGasPrice();if(!t)return{gasPrice:null,gasPriceInUSD:null};switch((e=st.state.caipNetwork)==null?void 0:e.chain){case"solana":return E.gasFee=t.standard,E.gasPriceInUSD=rt.multiply(t.standard,E.networkPrice).dividedBy(1e9).toNumber(),{gasPrice:BigInt(E.gasFee),gasPriceInUSD:Number(E.gasPriceInUSD)};case"evm":default:const r=t.standard,i=BigInt(r),o=BigInt(B1),n=Gr.getGasPriceInUSD(E.networkPrice,o,i);return E.gasFee=r,E.gasPriceInUSD=n,{gasPrice:i,gasPriceInUSD:n}}},async swapTokens(){var g,C;const t=St.state.address,e=E.sourceToken,r=E.toToken,i=rt.bigNumber(E.sourceTokenAmount).isGreaterThan(0);if(!r||!e||E.loadingPrices||!i)return;E.loadingQuote=!0;const o=rt.bigNumber(E.sourceTokenAmount).multipliedBy(10**e.decimals),n=await Xt.fetchSwapQuote({userAddress:t,projectId:pe.state.projectId,from:e.address,to:r.address,gasPrice:E.gasFee,amount:o.toString()});E.loadingQuote=!1;const a=(C=(g=n==null?void 0:n.quotes)==null?void 0:g[0])==null?void 0:C.toAmount;if(!a)return;const l=rt.bigNumber(a).dividedBy(10**r.decimals).toString();this.setToTokenAmount(l),this.hasInsufficientToken(E.sourceTokenAmount,e.address)?E.inputError="Insufficient balance":(E.inputError=void 0,this.setTransactionDetails())},async getTransaction(){const{fromCaipAddress:t,availableToSwap:e}=this.getParams(),r=E.sourceToken,i=E.toToken;if(!(!t||!e||!r||!i||E.loadingQuote))try{E.loadingBuildTransaction=!0;const o=await wo.fetchSwapAllowance({userAddress:t,tokenAddress:r.address,sourceTokenAmount:E.sourceTokenAmount,sourceTokenDecimals:r.decimals});let n;return o?n=await this.createSwapTransaction():n=await this.createAllowanceTransaction(),E.loadingBuildTransaction=!1,E.fetchError=!1,n}catch{br.goBack(),Ut.showError("Failed to check allowance"),E.loadingBuildTransaction=!1,E.approvalTransaction=void 0,E.swapTransaction=void 0,E.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:t,fromAddress:e,sourceTokenAddress:r,toTokenAddress:i}=this.getParams();if(!(!t||!i)){if(!r)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=await Xt.generateApproveCalldata({projectId:pe.state.projectId,from:r,to:i,userAddress:t}),n=await In.estimateGas({address:e,to:yt.getPlainAddress(o.tx.to),data:o.tx.data}),a={data:o.tx.data,to:yt.getPlainAddress(o.tx.from),gas:n,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:E.toTokenAmount};return E.swapTransaction=void 0,E.approvalTransaction=a,a}catch{br.goBack(),Ut.showError("Failed to create approval transaction"),E.approvalTransaction=void 0,E.swapTransaction=void 0,E.fetchError=!0;return}}},async createSwapTransaction(){const{networkAddress:t,fromCaipAddress:e,sourceTokenAmount:r}=this.getParams(),i=E.sourceToken,o=E.toToken;if(!e||!r||!i||!o)return;const n=In.parseUnits(r,i.decimals).toString();try{const a=await Xt.generateSwapCalldata({projectId:pe.state.projectId,userAddress:e,from:i.address,to:o.address,amount:n}),l=i.address===t,h=BigInt(a.tx.eip155.gas),g=BigInt(a.tx.eip155.gasPrice),C={data:a.tx.data,to:yt.getPlainAddress(a.tx.to),gas:h,gasPrice:g,value:BigInt(l?n:"0"),toAmount:E.toTokenAmount};return E.gasPriceInUSD=Gr.getGasPriceInUSD(E.networkPrice,h,g),E.approvalTransaction=void 0,E.swapTransaction=C,C}catch{br.goBack(),Ut.showError("Failed to create transaction"),E.approvalTransaction=void 0,E.swapTransaction=void 0,E.fetchError=!0;return}},async sendTransactionForApproval(t){const{fromAddress:e,isAuthConnector:r}=this.getParams();E.loadingApprovalTransaction=!0;const i="Approve limit increase in your wallet";r?br.pushTransactionStack({view:null,goBack:!0,onSuccess(){Ut.showLoading(i)}}):Ut.showLoading(i);try{await In.sendTransaction({address:e,to:t.to,data:t.data,value:BigInt(t.value),gasPrice:BigInt(t.gasPrice)}),await this.swapTokens(),await this.getTransaction(),E.approvalTransaction=void 0,E.loadingApprovalTransaction=!1}catch(o){const n=o;E.transactionError=n==null?void 0:n.shortMessage,E.loadingApprovalTransaction=!1,Ut.showError((n==null?void 0:n.shortMessage)||"Transaction error")}},async sendTransactionForSwap(t){var a,l,h,g,C,A,k,I,N,D,B,q;if(!t)return;const{fromAddress:e,toTokenAmount:r,isAuthConnector:i}=this.getParams();E.loadingTransaction=!0;const o=`Swapping ${(a=E.sourceToken)==null?void 0:a.symbol} to ${rt.formatNumberToLocalString(r,3)} ${(l=E.toToken)==null?void 0:l.symbol}`,n=`Swapped ${(h=E.sourceToken)==null?void 0:h.symbol} to ${rt.formatNumberToLocalString(r,3)} ${(g=E.toToken)==null?void 0:g.symbol}`;i?br.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){Ut.showLoading(o),ya.resetState()}}):Ut.showLoading("Confirm transaction in your wallet");try{const Q=[(C=E.sourceToken)==null?void 0:C.address,(A=E.toToken)==null?void 0:A.address].join(","),ee=await In.sendTransaction({address:e,to:t.to,data:t.data,gas:t.gas,gasPrice:BigInt(t.gasPrice),value:t.value});return E.loadingTransaction=!1,Ut.showSuccess(n),ri.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:((k=st.state.caipNetwork)==null?void 0:k.id)||"",swapFromToken:((I=this.state.sourceToken)==null?void 0:I.symbol)||"",swapToToken:((N=this.state.toToken)==null?void 0:N.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:St.state.preferredAccountType===cn.ACCOUNT_TYPES.SMART_ACCOUNT}}),ya.resetState(),i||br.replace("Account"),ya.getMyTokensWithBalance(Q),ee}catch(Q){const ee=Q;E.transactionError=ee==null?void 0:ee.shortMessage,E.loadingTransaction=!1,Ut.showError((ee==null?void 0:ee.shortMessage)||"Transaction error"),ri.sendEvent({type:"track",event:"SWAP_ERROR",properties:{network:((D=st.state.caipNetwork)==null?void 0:D.id)||"",swapFromToken:((B=this.state.sourceToken)==null?void 0:B.symbol)||"",swapToToken:((q=this.state.toToken)==null?void 0:q.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:St.state.preferredAccountType===cn.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(t,e){const r=Gr.isInsufficientSourceTokenForSwap(t,e,E.myTokensWithBalance);return Gr.isInsufficientNetworkTokenForGas(E.networkBalanceInUSD,E.gasPriceInUSD)||r},setTransactionDetails(){const{toTokenAddress:t,toTokenDecimals:e}=this.getParams();!t||!e||(E.gasPriceInUSD=Gr.getGasPriceInUSD(E.networkPrice,BigInt(E.gasFee),BigInt(B1)),E.priceImpact=Gr.getPriceImpact({sourceTokenAmount:E.sourceTokenAmount,sourceTokenPriceInUSD:E.sourceTokenPriceInUSD,toTokenPriceInUSD:E.toTokenPriceInUSD,toTokenAmount:E.toTokenAmount}),E.maxSlippage=Gr.getMaxSlippage(E.slippage,E.toTokenAmount),E.providerFee=Gr.getProviderFee(E.sourceTokenAmount))}},O1=ne({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),St={state:O1,replaceState(t){t&&Object.assign(O1,vt(t))},subscribe(t){return W.subscribeChainProp("accountState",e=>{if(e)return t(e)})},subscribeKey(t,e){let r;return W.subscribeChainProp("accountState",i=>{if(i){const o=i[t];r!==o&&(r=o,e(o))}})},setIsConnected(t,e){W.setAccountProp("isConnected",t,e)},getChainIsConnected(t){return W.getAccountProp("isConnected",t)},setCaipAddress(t,e){const r=t?yt.getPlainAddress(t):void 0;W.setAccountProp("caipAddress",t,e),W.setAccountProp("address",r,e)},setBalance(t,e,r){W.setAccountProp("balance",t,r),W.setAccountProp("balanceSymbol",e,r)},setProfileName(t,e){W.setAccountProp("profileName",t,e)},setProfileImage(t,e){W.setAccountProp("profileImage",t,e)},setAddressExplorerUrl(t,e){W.setAccountProp("addressExplorerUrl",t,e)},setSmartAccountDeployed(t,e){W.setAccountProp("smartAccountDeployed",t,e)},setCurrentTab(t){W.setAccountProp("currentTab",t,W.state.activeChain)},setTokenBalance(t,e){t&&W.setAccountProp("tokenBalance",t,e)},setShouldUpdateToAddress(t,e){W.setAccountProp("shouldUpdateToAddress",t,e)},setAllAccounts(t,e){W.setAccountProp("allAccounts",t,e)},addAddressLabel(t,e,r){const i=W.getAccountProp("addressLabels",r)||new Map;i.set(t,e),W.setAccountProp("addressLabels",i,W.state.activeChain)},removeAddressLabel(t,e){const r=W.getAccountProp("addressLabels",e)||new Map;r.delete(t),W.setAccountProp("addressLabels",r,W.state.activeChain)},setConnectedWalletInfo(t,e){W.setAccountProp("connectedWalletInfo",t,e)},setPreferredAccountType(t,e){W.setAccountProp("preferredAccountType",t,e)},setSocialProvider(t,e){t&&W.setAccountProp("socialProvider",t,e)},setSocialWindow(t,e){t&&W.setAccountProp("socialWindow",vt(t),e)},setFarcasterUrl(t,e){t&&W.setAccountProp("farcasterUrl",t,e)},async fetchTokenBalance(){var i,o;const t=(i=st.state.caipNetwork)==null?void 0:i.id,e=(o=st.state.caipNetwork)==null?void 0:o.chain,r=St.state.address;try{if(r&&t&&e){const n=await Xt.getBalance(r,t),a=n.balances.filter(l=>l.quantity.decimals!=="0");this.setTokenBalance(a,e),ya.setBalances(wo.mapBalancesToSwapTokens(n.balances))}}catch{Ut.showError("Failed to fetch token balance")}},resetAccount(t){W.resetAccount(t)}},mr=ne({loading:!1,open:!1,shake:!1}),c0={state:mr,subscribe(t){return dt(mr,()=>t(mr))},subscribeKey(t,e){return lt(mr,t,e)},async open(t){await fe.state.prefetchPromise;const e=St.state.isConnected;t!=null&&t.view?br.reset(t.view):e?br.reset("Account"):br.reset("Connect"),mr.open=!0,xi.set({open:!0}),ri.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const t=St.state.isConnected||!1;mr.open=!1,xi.set({open:!1}),ri.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}})},setLoading(t){mr.loading=t,xi.set({loading:t})},shake(){mr.shake||(mr.shake=!0,setTimeout(()=>{mr.shake=!1},500))}},U1={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},G5={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},q5={providers:vp,selectedProvider:null,error:null,purchaseCurrency:U1,paymentCurrency:G5,purchaseCurrencies:[U1],paymentCurrencies:[],quotesLoading:!1};ne(q5);ne({loading:!1});ne({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"});ne({suggestions:[],loading:!1});var yn=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let ii=class extends O{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=kr.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH"}render(){return _`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${me.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){var r,i;if(e.target instanceof HTMLElement&&e.target.id==="copy-address"){(r=this.onCopyClick)==null||r.call(this,e);return}(i=this.onProfileClick)==null||i.call(this,e)}getIconTemplate(e){return _`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};ii.styles=[j,te,gp];yn([m()],ii.prototype,"avatarSrc",void 0);yn([m()],ii.prototype,"profileName",void 0);yn([m()],ii.prototype,"address",void 0);yn([m()],ii.prototype,"icon",void 0);yn([m()],ii.prototype,"onProfileClick",void 0);yn([m()],ii.prototype,"onCopyClick",void 0);ii=yn([L("wui-profile-button-v2")],ii);const Y5=U`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var Cn=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let ni=class extends O{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e=this.size==="sm"?"small-600":"paragraph-600";return _`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?_`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};ni.styles=[j,te,Y5];Cn([m()],ni.prototype,"variant",void 0);Cn([m()],ni.prototype,"imageSrc",void 0);Cn([m({type:Boolean})],ni.prototype,"disabled",void 0);Cn([m()],ni.prototype,"icon",void 0);Cn([m()],ni.prototype,"size",void 0);Cn([m()],ni.prototype,"text",void 0);ni=Cn([L("wui-chip-button")],ni);const K5=U`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var B0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let zo=class extends O{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return _`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return _` <wui-flex class="networks">
      ${e==null?void 0:e.map(r=>_` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`}};zo.styles=[j,te,K5];B0([m({type:Array})],zo.prototype,"networkImages",void 0);B0([m()],zo.prototype,"text",void 0);zo=B0([L("wui-compatible-network")],zo);const Q5=U`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var O0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ho=class extends O{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return _`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Ho.styles=[j,te,Q5];O0([m()],Ho.prototype,"icon",void 0);O0([m()],Ho.prototype,"text",void 0);Ho=O0([L("wui-banner")],Ho);const J5=U`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var ts=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Gn=class extends O{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return _`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Gn.styles=[j,te,J5];ts([m()],Gn.prototype,"imageSrc",void 0);ts([m()],Gn.prototype,"text",void 0);ts([m()],Gn.prototype,"size",void 0);Gn=ts([L("wui-banner-img")],Gn);const X5=U`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var An=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let oi=class extends O{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return _`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${me.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?_`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:_`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};oi.styles=[j,te,X5];An([m()],oi.prototype,"tokenName",void 0);An([m()],oi.prototype,"tokenImageUrl",void 0);An([m({type:Number})],oi.prototype,"tokenValue",void 0);An([m()],oi.prototype,"tokenAmount",void 0);An([m()],oi.prototype,"tokenCurrency",void 0);An([m({type:Boolean})],oi.prototype,"clickable",void 0);oi=An([L("wui-list-token")],oi);const ef=U`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Ni=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Or=class extends O{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return _`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?_` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:_`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Or.styles=[j,te,ef];Ni([m()],Or.prototype,"icon",void 0);Ni([m()],Or.prototype,"text",void 0);Ni([m()],Or.prototype,"description",void 0);Ni([m()],Or.prototype,"tag",void 0);Ni([m()],Or.prototype,"iconBackgroundColor",void 0);Ni([m()],Or.prototype,"iconColor",void 0);Ni([m({type:Boolean})],Or.prototype,"disabled",void 0);Or=Ni([L("wui-list-description")],Or);const tf=U`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,rf=/[.*+?^${}()|[\]\\]/gu,nf=/[0-9,.]/u;var rs=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let qn=class extends O{constructor(){super(...arguments),this.inputElementRef=E0(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),_`<input
      ${T0(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var i,o;const r=e.data;if(r&&((i=this.inputElementRef)!=null&&i.value))if(r===","){const n=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=n,this.value=`${this.value}${n}`}else nf.test(r)||(this.inputElementRef.value.value=this.value.replace(new RegExp(r.replace(rf,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:(o=this.inputElementRef.value)==null?void 0:o.value,bubbles:!0,composed:!0}))}};qn.styles=[j,te,tf];rs([m({type:Boolean})],qn.prototype,"disabled",void 0);rs([m({type:String})],qn.prototype,"value",void 0);rs([m({type:String})],qn.prototype,"placeholder",void 0);qn=rs([L("wui-input-amount")],qn);const of=U`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var na=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let un=class extends O{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return _`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?_`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?_`<wui-image src=${this.imageSrc}></wui-image>`:_`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};un.styles=[j,te,of];na([m()],un.prototype,"text",void 0);na([m()],un.prototype,"address",void 0);na([m()],un.prototype,"imageSrc",void 0);na([m({type:Boolean})],un.prototype,"isAddress",void 0);un=na([L("wui-preview-item")],un);const af=U`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var oa=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let dn=class extends O{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=kr.getConnectedConnector(),this.labels=St.state.addressLabels,this.caipNetwork=st.state.caipNetwork,this.socialProvider=kr.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){var e;super.connectedCallback(),Xt.getBalance(this.accountAddress,(e=this.caipNetwork)==null?void 0:e.id).then(r=>{let i=this.balance;r.balances.length>0&&(i=r.balances.reduce((o,n)=>o+((n==null?void 0:n.value)||0),0)),this.balance=i,this.fetchingBalance=!1,this.requestUpdate()})}render(){const e=this.getLabel();return this.shouldShowIcon=this.connectedConnector==="AUTH",_`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?_`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===J1.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:_`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${me.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?_`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:_` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){var r;let e=(r=this.labels)==null?void 0:r.get(this.accountAddress);return!e&&this.connectedConnector==="AUTH"?e=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:!e&&this.connectedConnector==="INJECTED"||this.connectedConnector==="ANNOUNCED"?e="Injected Account":e||(e="EOA"),e}};dn.styles=[j,te,af];oa([m()],dn.prototype,"accountAddress",void 0);oa([m()],dn.prototype,"accountType",void 0);oa([m({type:Boolean})],dn.prototype,"selected",void 0);oa([m({type:Function})],dn.prototype,"onSelect",void 0);dn=oa([L("wui-list-account")],dn);const sf=U`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var U0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Wo=class extends O{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return _`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};Wo.styles=[j,te,sf];U0([m()],Wo.prototype,"text",void 0);U0([m()],Wo.prototype,"icon",void 0);Wo=U0([L("wui-icon-button")],Wo);const lf=U`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var D0=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Vo=class extends O{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return _`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Vo.styles=[j,te,lf];D0([m()],Vo.prototype,"text",void 0);D0([m({type:Boolean})],Vo.prototype,"disabled",void 0);Vo=D0([L("wui-list-button")],Vo);const cf=U`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var aa=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let hn=class extends O{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return _`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?_` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};hn.styles=[j,te,cf];aa([m()],hn.prototype,"logo",void 0);aa([m()],hn.prototype,"name",void 0);aa([m()],hn.prototype,"align",void 0);aa([m({type:Boolean})],hn.prototype,"disabled",void 0);hn=aa([L("wui-list-social")],hn);const uf=U`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var Xl=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Ua=class extends O{constructor(){super(...arguments),this.imageSrc=""}render(){return _`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?_`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:_`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};Ua.styles=[j,te,Ha,uf];Xl([m()],Ua.prototype,"imageSrc",void 0);Ua=Xl([L("wui-select")],Ua);const df=U`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var ir=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Lt=class extends O{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&me.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&me.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&me.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&me.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&me.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&me.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&me.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&me.getSpacingStyles(this.margin,3)};
    `,_`<slot></slot>`}};Lt.styles=[j,df];ir([m()],Lt.prototype,"gridTemplateRows",void 0);ir([m()],Lt.prototype,"gridTemplateColumns",void 0);ir([m()],Lt.prototype,"justifyItems",void 0);ir([m()],Lt.prototype,"alignItems",void 0);ir([m()],Lt.prototype,"justifyContent",void 0);ir([m()],Lt.prototype,"alignContent",void 0);ir([m()],Lt.prototype,"columnGap",void 0);ir([m()],Lt.prototype,"rowGap",void 0);ir([m()],Lt.prototype,"gap",void 0);ir([m()],Lt.prototype,"padding",void 0);ir([m()],Lt.prototype,"margin",void 0);Lt=ir([L("wui-grid")],Lt);const hf=U`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var ec=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let Da=class extends O{constructor(){super(...arguments),this.text=""}render(){return _`${this.template()}`}template(){return this.text?_`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Da.styles=[j,hf];ec([m()],Da.prototype,"text",void 0);Da=ec([L("wui-separator")],Da);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ca=globalThis,L0=Ca.ShadowRoot&&(Ca.ShadyCSS===void 0||Ca.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j0=Symbol(),D1=new WeakMap;let tc=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==j0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(L0&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=D1.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&D1.set(r,e))}return e}toString(){return this.cssText}};const pf=t=>new tc(typeof t=="string"?t:t+"",void 0,j0),ff=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,o,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1],t[0]);return new tc(r,t,j0)},gf=(t,e)=>{if(L0)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),o=Ca.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}},L1=L0?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return pf(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mf,defineProperty:wf,getOwnPropertyDescriptor:vf,getOwnPropertyNames:bf,getOwnPropertySymbols:yf,getPrototypeOf:Cf}=Object,_i=globalThis,j1=_i.trustedTypes,Af=j1?j1.emptyScript:"",Hs=_i.reactiveElementPolyfillSupport,So=(t,e)=>t,La={toAttribute(t,e){switch(e){case Boolean:t=t?Af:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},F0=(t,e)=>!mf(t,e),F1={attribute:!0,type:String,converter:La,reflect:!1,hasChanged:F0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_i.litPropertyMetadata??(_i.litPropertyMetadata=new WeakMap);class Tn extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=F1){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,r);o!==void 0&&wf(this.prototype,e,o)}}static getPropertyDescriptor(e,r,i){const{get:o,set:n}=vf(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const l=o==null?void 0:o.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??F1}static _$Ei(){if(this.hasOwnProperty(So("elementProperties")))return;const e=Cf(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(So("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(So("properties"))){const r=this.properties,i=[...bf(r),...yf(r)];for(const o of i)this.createProperty(o,r[o])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,o]of r)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const o=this._$Eu(r,i);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)r.unshift(L1(o))}else e!==void 0&&r.push(L1(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gf(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:La).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=i.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:La;this._$Em=o,this[o]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??F0)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,a]of o)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}Tn.elementStyles=[],Tn.shadowRootOptions={mode:"open"},Tn[So("elementProperties")]=new Map,Tn[So("finalized")]=new Map,Hs==null||Hs({ReactiveElement:Tn}),(_i.reactiveElementVersions??(_i.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=globalThis,ja=Eo.trustedTypes,z1=ja?ja.createPolicy("lit-html",{createHTML:t=>t}):void 0,rc="$lit$",yi=`lit$${Math.random().toFixed(9).slice(2)}$`,ic="?"+yi,xf=`<${ic}>`,pn=document,Zo=()=>pn.createComment(""),Go=t=>t===null||typeof t!="object"&&typeof t!="function",z0=Array.isArray,_f=t=>z0(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ws=`[ 	
\f\r]`,go=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H1=/-->/g,W1=/>/g,Ki=RegExp(`>|${Ws}(?:([^\\s"'>=/]+)(${Ws}*=${Ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V1=/'/g,Z1=/"/g,nc=/^(?:script|style|textarea|title)$/i,Sf=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),oc=Sf(1),Yn=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),G1=new WeakMap,Ji=pn.createTreeWalker(pn,129);function ac(t,e){if(!z0(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return z1!==void 0?z1.createHTML(e):e}const Ef=(t,e)=>{const r=t.length-1,i=[];let o,n=e===2?"<svg>":e===3?"<math>":"",a=go;for(let l=0;l<r;l++){const h=t[l];let g,C,A=-1,k=0;for(;k<h.length&&(a.lastIndex=k,C=a.exec(h),C!==null);)k=a.lastIndex,a===go?C[1]==="!--"?a=H1:C[1]!==void 0?a=W1:C[2]!==void 0?(nc.test(C[2])&&(o=RegExp("</"+C[2],"g")),a=Ki):C[3]!==void 0&&(a=Ki):a===Ki?C[0]===">"?(a=o??go,A=-1):C[1]===void 0?A=-2:(A=a.lastIndex-C[2].length,g=C[1],a=C[3]===void 0?Ki:C[3]==='"'?Z1:V1):a===Z1||a===V1?a=Ki:a===H1||a===W1?a=go:(a=Ki,o=void 0);const I=a===Ki&&t[l+1].startsWith("/>")?" ":"";n+=a===go?h+xf:A>=0?(i.push(g),h.slice(0,A)+rc+h.slice(A)+yi+I):h+yi+(A===-2?l:I)}return[ac(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class qo{constructor({strings:e,_$litType$:r},i){let o;this.parts=[];let n=0,a=0;const l=e.length-1,h=this.parts,[g,C]=Ef(e,r);if(this.el=qo.createElement(g,i),Ji.currentNode=this.el.content,r===2||r===3){const A=this.el.content.firstChild;A.replaceWith(...A.childNodes)}for(;(o=Ji.nextNode())!==null&&h.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const A of o.getAttributeNames())if(A.endsWith(rc)){const k=C[a++],I=o.getAttribute(A).split(yi),N=/([.?@])?(.*)/.exec(k);h.push({type:1,index:n,name:N[2],strings:I,ctor:N[1]==="."?kf:N[1]==="?"?If:N[1]==="@"?Rf:is}),o.removeAttribute(A)}else A.startsWith(yi)&&(h.push({type:6,index:n}),o.removeAttribute(A));if(nc.test(o.tagName)){const A=o.textContent.split(yi),k=A.length-1;if(k>0){o.textContent=ja?ja.emptyScript:"";for(let I=0;I<k;I++)o.append(A[I],Zo()),Ji.nextNode(),h.push({type:2,index:++n});o.append(A[k],Zo())}}}else if(o.nodeType===8)if(o.data===ic)h.push({type:2,index:n});else{let A=-1;for(;(A=o.data.indexOf(yi,A+1))!==-1;)h.push({type:7,index:n}),A+=yi.length-1}n++}}static createElement(e,r){const i=pn.createElement("template");return i.innerHTML=e,i}}function Kn(t,e,r=t,i){var a,l;if(e===Yn)return e;let o=i!==void 0?(a=r.o)==null?void 0:a[i]:r.l;const n=Go(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),n===void 0?o=void 0:(o=new n(t),o._$AT(t,r,i)),i!==void 0?(r.o??(r.o=[]))[i]=o:r.l=o),o!==void 0&&(e=Kn(t,o._$AS(t,e.values),o,i)),e}class Tf{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??pn).importNode(r,!0);Ji.currentNode=o;let n=Ji.nextNode(),a=0,l=0,h=i[0];for(;h!==void 0;){if(a===h.index){let g;h.type===2?g=new sa(n,n.nextSibling,this,e):h.type===1?g=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(g=new Mf(n,this,e)),this._$AV.push(g),h=i[++l]}a!==(h==null?void 0:h.index)&&(n=Ji.nextNode(),a++)}return Ji.currentNode=pn,o}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class sa{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this.v}constructor(e,r,i,o){this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=o,this.v=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Kn(this,e,r),Go(e)?e===bt||e==null||e===""?(this._$AH!==bt&&this._$AR(),this._$AH=bt):e!==this._$AH&&e!==Yn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_f(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==bt&&Go(this._$AH)?this._$AA.nextSibling.data=e:this.T(pn.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=qo.createElement(ac(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(r);else{const a=new Tf(o,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=G1.get(e.strings);return r===void 0&&G1.set(e.strings,r=new qo(e)),r}k(e){z0(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,o=0;for(const n of e)o===r.length?r.push(i=new sa(this.O(Zo()),this.O(Zo()),this,this.options)):i=r[o],i._$AI(n),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this.v=e,(r=this._$AP)==null||r.call(this,e))}}class is{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,o,n){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=bt}_$AI(e,r=this,i,o){const n=this.strings;let a=!1;if(n===void 0)e=Kn(this,e,r,0),a=!Go(e)||e!==this._$AH&&e!==Yn,a&&(this._$AH=e);else{const l=e;let h,g;for(e=n[0],h=0;h<n.length-1;h++)g=Kn(this,l[i+h],r,h),g===Yn&&(g=this._$AH[h]),a||(a=!Go(g)||g!==this._$AH[h]),g===bt?e=bt:e!==bt&&(e+=(g??"")+n[h+1]),this._$AH[h]=g}a&&!o&&this.j(e)}j(e){e===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class kf extends is{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===bt?void 0:e}}class If extends is{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==bt)}}class Rf extends is{constructor(e,r,i,o,n){super(e,r,i,o,n),this.type=5}_$AI(e,r=this){if((e=Kn(this,e,r,0)??bt)===Yn)return;const i=this._$AH,o=e===bt&&i!==bt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==bt&&(i===bt||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Mf{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Kn(this,e)}}const Vs=Eo.litHtmlPolyfillSupport;Vs==null||Vs(qo,sa),(Eo.litHtmlVersions??(Eo.litHtmlVersions=[])).push("3.2.0");const Nf=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=o=new sa(e.insertBefore(Zo(),n),n,void 0,r??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Nn extends Tn{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Nf(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.o)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.o)==null||e.setConnected(!1)}render(){return Yn}}var K1;Nn._$litElement$=!0,Nn.finalized=!0,(K1=globalThis.litElementHydrateSupport)==null||K1.call(globalThis,{LitElement:Nn});const Zs=globalThis.litElementPolyfillSupport;Zs==null||Zs({LitElement:Nn});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");const Pf=ff`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var $f=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let u0=class extends Nn{constructor(){var e;super(...arguments),this.dappImageUrl=(e=ue.state.metadata)==null?void 0:e.icons,this.walletImageUrl=mi.getConnectedWalletImageUrl()}firstUpdated(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return oc`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,r){e.animate([{transform:"translateX(0px)"},{transform:r}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};u0.styles=Pf;u0=$f([L("w3m-connecting-siwe")],u0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bf={attribute:!0,type:String,converter:La,reflect:!1,hasChanged:F0},Of=(t=Bf,e,r)=>{const{kind:i,metadata:o}=r;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const h=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,h,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const h=this[a];e.call(this,l),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+i)};function Uf(t){return(e,r)=>typeof r=="object"?Of(t,e,r):((i,o,n)=>{const a=o.hasOwnProperty(n);return o.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(o,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Df(t){return Uf({...t,state:!0,attribute:!1})}var sc=function(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(n=(o<3?a(n):o>3?a(e,r,n):a(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n};let d0=class extends Nn{constructor(){var e;super(...arguments),this.dappName=(e=ue.state.metadata)==null?void 0:e.name,this.isSigning=!1}render(){return this.onRender(),oc`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){co.state.session&&Ys.close()}async onSign(){this.isSigning=!0,Sr.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{co.setStatus("loading");const e=await co.signIn();return co.setStatus("success"),Sr.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return Tr.state.preferredAccountType===J1.ACCOUNT_TYPES.SMART_ACCOUNT?yr.showError("This application might not support Smart Accounts"):yr.showError("Signature declined"),co.setStatus("error"),Sr.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=Tr.state;e?(await kn.disconnect(),Ys.close()):Cr.push("Connect"),Sr.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};sc([Df()],d0.prototype,"isSigning",void 0);d0=sc([L("w3m-connecting-siwe-view")],d0);export{co as SIWEController,u0 as W3mConnectingSiwe,d0 as W3mConnectingSiweView,Wf as getDidAddress,Hf as getDidChainId};
