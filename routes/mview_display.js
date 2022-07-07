module.exports = function (app) {

    app.get("/mview_display", (req,res)=>{
        res.render("mview_display",{
            tabTitle: "MULTI-view",
        })
    })
}