const express = require("express");
const adminRoute = express();
const adminAuth = require("../controller/adminController/adminAuth");
const adminMiddleware = require('../middleware/adminMiddleware/adminMiddleware')
const adminController = require('../controller/adminController/controller')
const productController = require('../controller/adminController/productController')
const productMiddleware = require('../middleware/multerMiddleware')
const orderController = require('../controller/adminController/orderController')
const couponController = require('../controller/adminController/couponController')
const salesController = require('../controller/adminController/salesController')
const bannerController = require('../controller/adminController/bannerController')
const bannerMiddleware = require('../middleware/bannerMulter')
const nocache = require('nocache')

adminRoute.set("view engine", "ejs");
adminRoute.set("views", "./views/admin");

adminRoute.use(nocache())

adminRoute.get('/adminLogin', adminMiddleware.isLogOut, adminAuth.adminLogin)
adminRoute.post('/adminLogin', adminAuth.adminLoginVerify)
adminRoute.get('/adminLogout', adminMiddleware.isLogIn, adminAuth.adminLogout)
adminRoute.get('/adminDashboard', adminMiddleware.isLogIn, adminAuth.dashBoard)
adminRoute.get('/dashboardData', adminMiddleware.isLogIn, adminAuth.dashBoardData)
adminRoute.get('/userslist', adminMiddleware.isLogIn, adminController.userList)
adminRoute.patch('/blockUser', adminMiddleware.isLogIn, adminController.blockUser)
adminRoute.patch('/unBlockUser', adminMiddleware.isLogIn, adminController.unBlockUser)
adminRoute.get('/categories', adminMiddleware.isLogIn, adminController.categories)
adminRoute.get('/findcatId', adminMiddleware.isLogIn, adminController.findCatId)
adminRoute.post('/addCategories', adminMiddleware.isLogIn, adminController.addCategories)
adminRoute.patch('/editCategory', adminMiddleware.isLogIn, adminController.editCategory)
adminRoute.get('/findCategories', adminMiddleware.isLogIn, adminController.findCategories)
adminRoute.post('/blockCategory', adminMiddleware.isLogIn, adminController.blockCategory)
adminRoute.post('/unBlockCategory', adminMiddleware.isLogIn, adminController.unblockCategory)
adminRoute.get('/Products', adminMiddleware.isLogIn, productController.loadproduct)
adminRoute.get('/addProducts', adminMiddleware.isLogIn, productController.loadAddProducts)
adminRoute.post('/addProducts', adminMiddleware.isLogIn, productMiddleware.uploadsProduct, productController.addProducts)
adminRoute.patch('/editProduct', adminMiddleware.isLogIn, productMiddleware.uploadsProduct, productController.editProduct)
adminRoute.patch('/unlistProduct', adminMiddleware.isLogIn, productController.unlistProduct)
adminRoute.patch('/listProduct', adminMiddleware.isLogIn, productController.listProduct)
adminRoute.get('/editProduct/:productName', adminMiddleware.isLogIn, productController.loadEditProduct)
adminRoute.get('/Orders', adminMiddleware.isLogIn, orderController.loadOrder)
adminRoute.get('/orderDetails/:order_id', adminMiddleware.isLogIn, orderController.loadOrderDetails)
adminRoute.patch('/status', orderController.updateStatus)
adminRoute.get('/coupons', adminMiddleware.isLogIn, couponController.loadCoupons)
adminRoute.get('/add-coupon', adminMiddleware.isLogIn, couponController.loadAddCoupons);
adminRoute.post('/add-coupon', adminMiddleware.isLogIn, couponController.addCoupons)
adminRoute.get('/edit-coupon/:id', adminMiddleware.isLogIn, couponController.loadEditCoupon)
adminRoute.get('/checkCode/:currentCode/:updateCode', adminMiddleware.isLogIn, couponController.checkCode)
adminRoute.post('/edit-coupon/:id', adminMiddleware.isLogIn, couponController.editCoupon)
adminRoute.get('/sales', adminMiddleware.isLogIn, salesController.loadSales)
adminRoute.patch('/sales',adminMiddleware.isLogIn, salesController.loadSales)
adminRoute.get('/salesreport/:downloadType',adminMiddleware.isLogIn,salesController.reportDownload)
adminRoute.get('/banners',adminMiddleware.isLogIn,bannerController.loadBanners)
adminRoute.get('/addBanners',adminMiddleware.isLogIn,bannerController.loadAddBanner)
adminRoute.post('/addBanners',adminMiddleware.isLogIn,bannerMiddleware.uploadsBanner,bannerController.addBanners)
adminRoute.patch('/updateBanner/:id',adminMiddleware.isLogIn,bannerController.updateBanner)
adminRoute.get('/editBanner/:id',adminMiddleware.isLogIn,bannerController.loadEditBanner)
adminRoute.patch('/editBanner/:id',adminMiddleware.isLogIn,bannerMiddleware.uploadsBanner,bannerController.editBanner)


module.exports = adminRoute;