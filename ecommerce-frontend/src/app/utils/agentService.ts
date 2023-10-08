import axios from 'axios'; 
import { CVS } from './constants';

const agentAPIUrl = 'http://localhost:8000'; 

// generate QR and embed transact-with-receiot call
    // save the credential
export const purchaseProduct = async (did:any,amount:number) => {
    const url = agentAPIUrl+'/transact-with-receipt'; 
    
    const response = await axios.post(url,{did:did, targetDID:CVS, value:amount}); 
    
    if(response.status === 200) {
        const receiptVC = response.data.data.credential; 
        console.log(receiptVC);
        return receiptVC; 
    }
}

export const getBalance = async (did:string) => {
    const url = agentAPIUrl+'/get-balance/'+did; 

    const response = await axios.get(url); 
    if(response.status === 200) {
        return response.data.balance; 
    }
}

export const saveReceipt = async (vc:any, did:any) => {
    const url = agentAPIUrl + '/save'
    const response = await axios.post(url,{did:did, vc:vc}); 
    console.log(response)
    return response; 
}

export const login = async (username:string, password:string) => {
    const url = agentAPIUrl+'/login'; 

    const response = await axios.post(url, {username:username, password:password}); 
    if(response.status === 200) {
        return response.data.did; 
    }
}
