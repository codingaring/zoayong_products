import mongoose from "mongoose";
import data from "./mock.js";
import Product from "../models/Product.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env.local 경로 설정
dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

console.log("Current Working Directory:", process.cwd());
console.log("__dirname:", __dirname);
console.log("DATABASE_URL:", process.env.DATABASE_URL);

const seedDatabase = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL 환경 변수가 설정되지 않았습니다.");
    }

    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB에 연결되었습니다.");

    await Product.deleteMany({});
    console.log("기존 데이터를 삭제했습니다.");

    await Product.insertMany(data);
    console.log("새로운 데이터를 삽입했습니다.");

    await mongoose.disconnect();
    console.log("MongoDB 연결이 종료되었습니다.");
  } catch (error) {
    console.error("데이터베이스 초기화 중 오류가 발생했습니다:", error);
    mongoose.disconnect();
  }
};

seedDatabase();
