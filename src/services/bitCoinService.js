import axios from "axios"
export const bitCoinService={
    getRate
}
async function getRate(){
    try {
        const res = await axios(`https://blockchain.info/tobtc?currency=USD&value=1`)
        console.log('res',res.data);
        
        return res.data
    } catch (err) {
        console.log(`err`,err)

}
}

function getById(carId) {
    // return storageService.get(STORAGE_KEY, carId)
}