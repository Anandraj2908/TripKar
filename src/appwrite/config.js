import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    
    //posts
    async createBooking({hotelName, userId,bookingDate}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBookingsCollectionId,
                ID.unique(),
                {
                    hotelName,
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


}



const service = new Service()
export default service