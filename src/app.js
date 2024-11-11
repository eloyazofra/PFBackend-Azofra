import express from "express";
import routerProducts from "./routes/products.router.js";
import routerCart from "./routes/cart.router.js";
import paths from "./utils/paths.js";
import path from "path";

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/public", express.static(paths.public));


app.get("/", (req, res) => {
    res.sendFile(path.join(paths.public, "index.html"));
});

app.use("/api/products", routerProducts);
app.use("/api/cart", routerCart);

app.listen(PORT, () => {
    console.log(`Ejecutándose en http://localhost:${PORT}`);
});
