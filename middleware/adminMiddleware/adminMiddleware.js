
const isLogIn = (req,res,next) => {
    // try {
    //     if (req.session.admin_id) {
    //         next();
    //     } else {
    //         res.redirect('/admin/adminLogin');
    //     }
    // } catch (error) {
    //     console.log(error.message);
    // }
    next()
}
const isLogOut = (req,res,next)=>{
    // try{
    //     if(req.session.admin_id == null){
    //         next()
    //     }else{
    //         res.redirect('/admin/adminDashboard')
    //     }
    // }catch(error){
    //     console.log("error on islogout",error)
    // }
    next()
}

module.exports = {
    isLogIn,
    isLogOut
}