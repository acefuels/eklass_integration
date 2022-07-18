//Initialize the instance
const zg = new ZegoRoomKit();
//Initial configuration information
zg.init({
  secretID: secretID,
});
const url = "https://roomkit-api.zego.im";

async function getRoom() {
  //Configuration for joining a room
  const config = {};
  config.userID = 123; // User ID
  config.productID = productID; // Product ID
  config.userName = "okpara"; // User name
  config.roomID = "12111"; // Room ID
  config.token = await getSDKToken(config.userID);
  config.role = 2; // Join the room as an attendee
  console.log("config", config);
  //Join the room

  const res = await zg.inRoomService().joinRoomWithConfig(config, "app");
  return res;
}
getRoom();
