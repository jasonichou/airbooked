import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let listingSchema = new Schema({
    id: String,
    name: String,
    host_id: String,
    host_name: String,
    neighbourhood_group: String,
    neighbourhood: String,
    latitude: String,
    longitude: String,
    room_type: String,
    price: String,
    minimum_nights: String,
    number_of_reviews: String,
    last_review: String,
    reviews_per_month: String,
    calculated_host_listings_count: String,
    availability_365: String
}//, { collection: 'san_francisco_listings' }

);

const Listing = mongoose.model('san_francisco_listing', listingSchema); 

export {Listing as default};