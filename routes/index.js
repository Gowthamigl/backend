import express from "express"
import
{
    createProduct,
    getAllProducts,
    getProductId,
    updateProduct,
    deleteProduct
} from "../controllers/products.js"

const router=express.Router()

router.get("/",getAllProducts)
router.get("/:id",getProductId)
router.post("/",createProduct)
router.patch("/:id",updateProduct)
router.delete("/:id",deleteProduct)

export default router