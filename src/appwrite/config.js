import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service{
    client = new Client();
    databases;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    
    //bookings
    async createBooking(hotelId, userId,bookingDate){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBookingsCollectionId,
                ID.unique(),
                {
                    hotelId,
                    userId,
                    bookingDate
                }
            )

        }catch(error){
            console.log("Create Booking error: ", error)
        }
    }


    async deleteBooking(bookingId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBookingsCollectionId,
                bookingId
            )
            return true
        } catch (error) {
            console.log("Delete Document Error ",error)
            return false
        }
    }


    async getBookings(queries){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteBookingsCollectionId,
                queries
            )
        } catch (error) {
            console.log("Get all Bookings error: ",error)
        }
    }

    async deleteBooking(bookingId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBookingsCollectionId,
                bookingId
            )
            return true
        } catch (error) {
            console.log("Delete booking Error ",error)
            return false
        }
    }

    async getHotels(queries){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteHotelsCollectionId,
                queries
            )
        }catch(error){
            console.log("Get hotels error",error)
        }
    }

    async getHotel(hotelId){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteHotelsCollectionId,
                hotelId
            )
        }catch(error){
            console.log("Get hotel error",error)
        }
    }


}



const service = new Service()
export default service