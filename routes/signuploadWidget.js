
// Server-side function used to sign an Upload Widget upload.
module.exports = (params) => {
  const apiSecret = params.cloudinary.config().api_secret;
  const timestamp = Math.round((new Date).getTime()/1000);

  const signature = params.cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    source: 'uw',
    folder: 'signed_upload_demo_uw'}, apiSecret);

  return { timestamp, signature }
}
