"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const librarydataroute_1 = __importDefault(require("./routes/librarydataroute"));
const borrowroute_1 = __importDefault(require("./routes/borrowroute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true
}));
(0, config_1.connectDB)();
dotenv_1.default.config();
app.use("/api", librarydataroute_1.default);
app.use("/api", borrowroute_1.default);
app.listen(process.env.port, () => {
    console.log(`Server running on port ${process.env.port}`);
});
