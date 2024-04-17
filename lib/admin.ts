import { auth } from "@clerk/nextjs"

const adminIds = ["user_2e9TZx8D6LQ694AKoOUFLUW8K1H"]

export const getIsAdmin =  () =>{
    const {userId} =  auth();

    if(!userId){
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
}