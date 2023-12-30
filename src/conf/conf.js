const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBookingsCollectionId:String(import.meta.env.VITE_APPWRITE_BOOKINGS_COLLECTION_ID),
    appwriteCitiesCollectionId:String(import.meta.env.VITE_APPWRITE_CITIES_COLLECTION_ID),
    appwriteHotelsCollectionId:String(import.meta.env.VITE_APPWRITE_HOTELS_COLLECTION_ID),
    appwriteUsersKey:String(import.meta.env.VITE_APPWRITE_USERS_API_KEY)
}

export default conf;