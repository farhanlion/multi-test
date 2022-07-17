module.exports = function (app) {
 
    app.post("/mview_display", (req,res)=>{
        let data = [req.body.match_id]
        
        let sqlquery = 'SELECT * FROM `Match` LEFT JOIN Video ON Video.Match_id=Match.Match_id LEFT JOIN User ON User.User_id = Video.User_id where Match.Match_id= ?'

        db.query(sqlquery, data, (err, results) => {
            if (err) {
                throw err
            }

            //console.log(results)

            let sqlquery2 = 'SELECT * FROM `User` WHERE User_id=? '
            let data2 = [results[0].Match_owner]

            db.query(sqlquery2, data2, (err, results2) => {
                if (err) {
                    throw err
                }

                //console.log(results2)

                let vidPublicIps = [0]
                let sTimes = [0]
                let userNames = ["unknown"]
                let userIcons = ["defaultUserIcon"]
                for(let n=0; n<results.length; n++){
                    vidPublicIps[results[n].Video_pos] = results[n].Video_public_id
                    sTimes[results[n].Video_pos] = results[n].Video_stime
                    userNames[results[n].Video_pos] = results[n].User_name
                    userIcons[results[n].Video_pos] = results[n].User_icon

                }

                
                let numOfVideos = results.length

                if(numOfVideos==6){
                    res.render("mview_display",{
                        //for html
                        tabTitle: "MULTI-view",
                        title: results[0].Match_name,
                        ctime: results[0].Match_creation_time,
                        numOfVideos: numOfVideos,
                        matchOwner: results2[0].User_name,
                        matchOwnerIcon: results2[0].User_icon,
        
                        //for js
                        video1: vidPublicIps[1],
                        video2: vidPublicIps[2],
                        video3: vidPublicIps[3],
                        video4: vidPublicIps[4],
                        video5: vidPublicIps[5],
                        video6: vidPublicIps[6],
                        stime1: sTimes[1],
                        stime2: sTimes[2],
                        stime3: sTimes[3],
                        stime4: sTimes[4],
                        stime5: sTimes[5],
                        stime6: sTimes[6],
                        user1: userNames[1],
                        user2: userNames[2],
                        user3: userNames[3],
                        user4: userNames[4],
                        user5: userNames[5],
                        user6: userNames[6],
                        icon1: userIcons[1],
                        icon2: userIcons[2],
                        icon3: userIcons[3],
                        icon4: userIcons[4],
                        icon5: userIcons[5],
                        icon6: userIcons[6],
                    })
                }
               
                else if(numOfVideos==5){
                    res.render("mview_display",{
                        //for html
                        tabTitle: "MULTI-view",
                        title: results[0].Match_name,
                        ctime: results[0].Match_creation_time,
                        numOfVideos: numOfVideos,
                        matchOwner: results2[0].User_name,
                        matchOwnerIcon: results2[0].User_icon,
        
                        //for js
                        video1: vidPublicIps[1],
                        video2: vidPublicIps[2],
                        video3: vidPublicIps[3],
                        video4: vidPublicIps[4],
                        video5: vidPublicIps[5],
                        stime1: sTimes[1],
                        stime2: sTimes[2],
                        stime3: sTimes[3],
                        stime4: sTimes[4],
                        stime5: sTimes[5],
                        user1: userNames[1],
                        user2: userNames[2],
                        user3: userNames[3],
                        user4: userNames[4],
                        user5: userNames[5],
                        icon1: userIcons[1],
                        icon2: userIcons[2],
                        icon3: userIcons[3],
                        icon4: userIcons[4],
                        icon5: userIcons[5],
                    })
                }

                else if(numOfVideos==4){
                    res.render("mview_display",{
                        //for html
                        tabTitle: "MULTI-view",
                        title: results[0].Match_name,
                        ctime: results[0].Match_creation_time,
                        numOfVideos: numOfVideos,
                        matchOwner: results2[0].User_name,
                        matchOwnerIcon: results2[0].User_icon,
        
                        //for js
                        video1: vidPublicIps[1],
                        video2: vidPublicIps[2],
                        video3: vidPublicIps[3],
                        video4: vidPublicIps[4],
                        stime1: sTimes[1],
                        stime2: sTimes[2],
                        stime3: sTimes[3],
                        stime4: sTimes[4],
                        user1: userNames[1],
                        user2: userNames[2],
                        user3: userNames[3],
                        user4: userNames[4],
                        icon1: userIcons[1],
                        icon2: userIcons[2],
                        icon3: userIcons[3],
                        icon4: userIcons[4],
                    })
                }

                else if(numOfVideos==3){
                    res.render("mview_display",{
                        //for html
                        tabTitle: "MULTI-view",
                        title: results[0].Match_name,
                        ctime: results[0].Match_creation_time,
                        numOfVideos: numOfVideos,
                        matchOwner: results2[0].User_name,
                        matchOwnerIcon: results2[0].User_icon,
        
                        //for js
                        video1: vidPublicIps[1],
                        video2: vidPublicIps[2],
                        video3: vidPublicIps[3],
                        stime1: sTimes[1],
                        stime2: sTimes[2],
                        stime3: sTimes[3],
                        user1: userNames[1],
                        user2: userNames[2],
                        user3: userNames[3],
                        icon1: userIcons[1],
                        icon2: userIcons[2],
                        icon3: userIcons[3],
                    })
                }

                else if(numOfVideos==2){
                    res.render("mview_display",{
                        //for html
                        tabTitle: "MULTI-view",
                        title: results[0].Match_name,
                        ctime: results[0].Match_creation_time,
                        numOfVideos: numOfVideos,
                        matchOwner: results2[0].User_name,
                        matchOwnerIcon: results2[0].User_icon,
        
                        //for js
                        video1: vidPublicIps[1],
                        video2: vidPublicIps[2],
                        stime1: sTimes[1],
                        stime2: sTimes[2],
                        user1: userNames[1],
                        user2: userNames[2],
                        icon1: userIcons[1],
                        icon2: userIcons[2],
                    })
                }

                else if(numOfVideos==1){
                    res.render("mview_display",{
                        //for html
                        tabTitle: "MULTI-view",
                        title: results[0].Match_name,
                        ctime: results[0].Match_creation_time,
                        numOfVideos: numOfVideos,
                        matchOwner: results2[0].User_name,
                        matchOwnerIcon: results2[0].User_icon,
        
                        //for js
                        video1: vidPublicIps[1],
                        stime1: sTimes[1],
                        user1: userNames[1],
                        icon1: userIcons[1],
                    })
                }

            })  
            
        })
        
    })

}