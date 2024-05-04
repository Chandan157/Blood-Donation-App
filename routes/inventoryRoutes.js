const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
//Add Inventory || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//Get All Blood Records
router.get("/get-inventory", authMiddleware, getInventoryController);

//Get Donar Records
router.get("/get-donars", authMiddleware, getDonarsController);

//Get Donar Records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//Get Organisation Records
router.get("/get-organisation", authMiddleware, getOrgnaisationController);

module.exports = router;
