import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ProviderSchema = new Schema(
  {
    /** @param {string} creatorId - ID of the provider's account */
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },

    /** @param {string} name - Name of the provider */
    name: {type: String, required: true},
    
    /** @param {string} bio - Blurb about this provider */
    bio: {type: String},

    /** @param {string} businessId - ID of business */
    businessId: {type: Schema.Types.ObjectId, ref: 'Business'},
    
    /** @param {object} availability - Availability of the provider */
    availability: {type: Object, required: true},
    // This object is just to define the format of the availability object
    // I wonder if I could just make this a model and use that as the type???
    // availability = {
    //   // implied 7 day schedule, starting on monday
    //   days: [ // array of the available timeslots within each day
    //     [[540, 720], [780, 1020]], // monday availability is 9-12, 13-17, times in minutes since midnight
    //     [[540, 720], [780, 1020]],
    //     [[540, 720], [780, 1020]],
    //     [[540, 720], [780, 1020]],
    //     [[540, 720], [780, 1020]],
    //     [], // no weekend availability
    //     []
    //   ]
    // }

    /** @param {string} providerImgUrl - URL to profile photo for provider */
    providerImgUrl: {type: String, default: './assets/img/default-profile.jpg'},
    // that might be the wrong path, not totally sure what it's relative to
    // we could also just put this in the client

    /** @param {array} reviews - Array of reviews for this provider */
    reviews: {type: Array},
    // This object is just to define the format of the availability object
    // reviews: [
    //   {
    //     creatorId, // id of the user that wrote the review
    //     rating, // number, rating from... 1-5 (integers only)
    //     body, // written review, not required, string
    //     datetime // when was the review written or updated
    //   }, // more reviews here
    // ]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ProviderSchema.virtual('business', {
  localField: 'businessId',
  foreignField: '_id',
  justOne: true,
  ref: 'Business'
})
