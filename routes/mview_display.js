module.exports = function (app) {
    app.post("/mview_display", (req,res)=>{
        let sqlquery = 'SELECT * FROM `Match` LEFT JOIN Video ON Video.Match_id=Match.Match_id LEFT JOIN User ON User.User_id = Video.User_id where Match.Match_id= ?'
        let data = [req.body.match_id]


        db.query(sqlquery,data,(err,results)=>{
            if (err) {
                throw err
            }
            //console.log(results)

            let sqlquery2 = 'SELECT * FROM `User` WHERE User_id=? '
            let data2 = [results[0].Match_owner]

            db.query(sqlquery2,data2,(err,results2) => {
                if (err) {
                    throw err
                }

                // console.log(results2)

                let vidPos = []
                for(let n=0; n<results.length; n++){
                    vidPos.push(results[n].Video_pos)
                }

                //console.log(vidPos)
                
                let numOfVideos = vidPos.length

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
                        video1: results[vidPos[0]-1].Video_public_id,
                        video2: results[vidPos[1]-1].Video_public_id,
                        video3: results[vidPos[2]-1].Video_public_id,
                        video4: results[vidPos[3]-1].Video_public_id,
                        video5: results[vidPos[4]-1].Video_public_id,
                        video6: results[vidPos[5]-1].Video_public_id,
                        stime1: results[results[0].Video_pos-1].Video_stime,
                        stime2: results[results[1].Video_pos-1].Video_stime,
                        stime3: results[results[2].Video_pos-1].Video_stime,
                        stime4: results[results[3].Video_pos-1].Video_stime,
                        stime5: results[results[4].Video_pos-1].Video_stime,
                        stime6: results[results[5].Video_pos-1].Video_stime,
                        user1: results[results[0].Video_pos-1].User_name,
                        user2: results[results[1].Video_pos-1].User_name,
                        user3: results[results[2].Video_pos-1].User_name,
                        user4: results[results[3].Video_pos-1].User_name,
                        user5: results[results[4].Video_pos-1].User_name,
                        user6: results[results[5].Video_pos-1].User_name,
                        icon1: results[results[0].Video_pos-1].User_icon,
                        icon2: results[results[1].Video_pos-1].User_icon,
                        icon3: results[results[2].Video_pos-1].User_icon,
                        icon4: results[results[3].Video_pos-1].User_icon,
                        icon5: results[results[4].Video_pos-1].User_icon,
                        icon6: results[results[5].Video_pos-1].User_icon,
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
                        video1: results[vidPos[0]-1].Video_public_id,
                        video2: results[vidPos[1]-1].Video_public_id,
                        video3: results[vidPos[2]-1].Video_public_id,
                        video4: results[vidPos[3]-1].Video_public_id,
                        video5: results[vidPos[4]-1].Video_public_id,
                        stime1: results[results[0].Video_pos-1].Video_stime,
                        stime2: results[results[1].Video_pos-1].Video_stime,
                        stime3: results[results[2].Video_pos-1].Video_stime,
                        stime4: results[results[3].Video_pos-1].Video_stime,
                        stime5: results[results[4].Video_pos-1].Video_stime,
                        user1: results[results[0].Video_pos-1].User_name,
                        user2: results[results[1].Video_pos-1].User_name,
                        user3: results[results[2].Video_pos-1].User_name,
                        user4: results[results[3].Video_pos-1].User_name,
                        user5: results[results[4].Video_pos-1].User_name,
                        icon1: results[results[0].Video_pos-1].User_icon,
                        icon2: results[results[1].Video_pos-1].User_icon,
                        icon3: results[results[2].Video_pos-1].User_icon,
                        icon4: results[results[3].Video_pos-1].User_icon,
                        icon5: results[results[4].Video_pos-1].User_icon,
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
                        video1: results[vidPos[0]-1].Video_public_id,
                        video2: results[vidPos[1]-1].Video_public_id,
                        video3: results[vidPos[2]-1].Video_public_id,
                        video4: results[vidPos[3]-1].Video_public_id,
                        stime1: results[results[0].Video_pos-1].Video_stime,
                        stime2: results[results[1].Video_pos-1].Video_stime,
                        stime3: results[results[2].Video_pos-1].Video_stime,
                        stime4: results[results[3].Video_pos-1].Video_stime,
                        user1: results[results[0].Video_pos-1].User_name,
                        user2: results[results[1].Video_pos-1].User_name,
                        user3: results[results[2].Video_pos-1].User_name,
                        user4: results[results[3].Video_pos-1].User_name,
                        icon1: results[results[0].Video_pos-1].User_icon,
                        icon2: results[results[1].Video_pos-1].User_icon,
                        icon3: results[results[2].Video_pos-1].User_icon,
                        icon4: results[results[3].Video_pos-1].User_icon,
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
                        video1: results[vidPos[0]-1].Video_public_id,
                        video2: results[vidPos[1]-1].Video_public_id,
                        video3: results[vidPos[2]-1].Video_public_id,
                        stime1: results[results[0].Video_pos-1].Video_stime,
                        stime2: results[results[1].Video_pos-1].Video_stime,
                        stime3: results[results[2].Video_pos-1].Video_stime,
                        user1: results[results[0].Video_pos-1].User_name,
                        user2: results[results[1].Video_pos-1].User_name,
                        user3: results[results[2].Video_pos-1].User_name,
                        icon1: results[results[0].Video_pos-1].User_icon,
                        icon2: results[results[1].Video_pos-1].User_icon,
                        icon3: results[results[2].Video_pos-1].User_icon,
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
                        video1: results[vidPos[0]-1].Video_public_id,
                        video2: results[vidPos[1]-1].Video_public_id,
                        stime1: results[results[0].Video_pos-1].Video_stime,
                        stime2: results[results[1].Video_pos-1].Video_stime,
                        user1: results[results[0].Video_pos-1].User_name,
                        user2: results[results[1].Video_pos-1].User_name,
                        icon1: results[results[0].Video_pos-1].User_icon,
                        icon2: results[results[1].Video_pos-1].User_icon,
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
                        video1: results[vidPos[0]-1].Video_public_id,
                        stime1: results[results[0].Video_pos-1].Video_stime,
                        user1: results[results[0].Video_pos-1].User_name,
                        icon1: results[results[0].Video_pos-1].User_icon,
                    })
                }

            })
        })
    })
}