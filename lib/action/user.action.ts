'use server'

import { CreateUserParams } from "@/types"
import prisma from "@/lib/prismadb"

export const createUser = async (user:CreateUserParams) => {
   
     try {
            const newUser = await prisma.user.create({
              data:user
            })  

            return JSON.parse(JSON.stringify(newUser))
     } catch (error:any) {
            console.log(error)
     }
}