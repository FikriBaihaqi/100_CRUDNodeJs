import express, {Router} from "express";
const router = express.Router();
const hero = [
    {
        nama : "Alvien",
        Role : "minion",
        Type : "DPS",
        Job : "Marksman",
    },
    {
        nama : "Alif",
        Role : "Lord",
        Type : "Burst",
        Job : "Assasin",
    },
];
router.get("/", (req, res) => {
    res.send (hero);
});
export default router;
