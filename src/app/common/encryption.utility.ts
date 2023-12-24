import { environment } from "src/environments/environment"
import * as CryptoJS from "crypto-js"

export const encryptInput = (input: string) => { 
    console.log(environment.encriptionKey)
    return CryptoJS.AES.encrypt(input, environment.encriptionKey).toString();
}

export const decryptInput = (input: string) => {
    // console.log(environment.encriptionKey, 'Input: ',input)
    const bytes = CryptoJS.AES.decrypt(input, environment.encriptionKey);
    // console.log(bytes.toString(CryptoJS.enc.Utf8))
    return bytes.toString(CryptoJS.enc.Utf8)

}