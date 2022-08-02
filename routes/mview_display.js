const { sequelize } = require("../db/models")
const { QueryTypes } = require("sequelize")

module.exports = function (app) {
    var router = require("express").Router()
    let bodyParser = require('body-parser')
    let jsonParser = bodyParser.json()
    let rawParser = bodyParser.raw()
    let urlencodedParser = bodyParser.urlencoded({ extended: false })

    router.post("/mview_display",urlencodedParser, (req,res,next) => {
        const db = require("../db/models")
        const Video = db.videos
        const Match = db.matches
        const Match_user = db.match_users
        const User = db.users
        let matchId = req.body.match_id
        if(!matchId){
            throw new Error("No such Match ID")
        }
        
        Match.sync({alter: true}).then(async ()=>{
            /*
            const videos = await Video.findAll({where: {match_id: matchId}}, 
            {
                type: QueryTypes.SELECT,
            },
            {
                include: [
                    {
                        model: Match,
                        required: false,
                        //right: true,
                        // where: {
                        //     id: matchId
                        // }
                    },

                ]
            }
            )
            */
            const videos = await sequelize.query(`SELECT * FROM matches 
            INNER JOIN videos ON videos.match_id=matches.id 
            INNER JOIN users ON users.id=matches.owner_id
            where matches.id= ?`, 
            {
                replacements: [matchId],
                type: QueryTypes.SELECT,
            })

            if(videos.length==0){
                res.send("ERROR: Cannot find match in database!")
            }
            return JSON.stringify(videos)

        }).then(async (data_final)=>{
            let vids = JSON.parse(data_final)
            //console.group(vids)
            let numOfVideos = vids.length

            let vidPublicIps = []
            let sTimes = []
            vids.forEach(element => {
                vidPublicIps.push(element.public_id)
                sTimes.push(element.start_time)
            })

            if(numOfVideos==5){
                res.render("pages/mview_display",{
                    //for html
                    tabTitle: "MULTI-VIEW",
                    numOfVideos: numOfVideos,
                    title: vids[0].title,
                    ctime: vids[0].createdAt,
                    matchOwner: vids[0].user_name,
                    matchOwnerIcon: vids[0].user_icon,
                    cloudinary_name: process.env.CLOUD_NAME,
    
                    //for js
                    video1: vidPublicIps[0],
                    video2: vidPublicIps[1],
                    video3: vidPublicIps[2],
                    video4: vidPublicIps[3],
                    video5: vidPublicIps[4],
                    stime1: sTimes[0],
                    stime2: sTimes[1],
                    stime3: sTimes[2],
                    stime4: sTimes[3],
                    stime5: sTimes[4],
                })
            }
            else{
                throw new Error("Incorrect Number of Videos")
            }
 
        }).catch((err)=>{
            console.log("Error Processing Match for Display:", err)
        })
        
    }) 

    app.use("/", router)

}