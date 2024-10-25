import express, {Router} from "express";
const router = express.Router();
const mobil = [
    {
        merk : "Toyota",
        model : "Avanza",
        warna : "Hitam",
        Tahun : 2021,
    },
    {
        merk : "Porsche",
        model : "Sport",
        warna : "Kuning",
        Tahun : 2024,
    },
];
router.get("/", (req, res) => {
    res.send (mobil);
});
export default router;
