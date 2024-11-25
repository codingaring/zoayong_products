import mongoose from "mongoose";

const { Schema, model } = mongoose;

// 연관상품 스키마
const RelatedProductSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // 연관 상품 ID
  name: { type: String, required: true }, // 연관 상품 이름
  thumbnailImage: { type: String }, // 연관 상품 썸네일
});

// 상품 스키마
const ProductSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      default: () => new mongoose.Types.ObjectId().toString(),
    }, // 자동 생성 ID
    category: { type: String, required: true }, // 상품 카테고리
    name: { type: String, required: true }, // 상품명
    price: { type: Number, required: true }, // 가격
    description: { type: String }, // 상세 설명
    thumbnailImage: { type: String, required: true }, // 썸네일 이미지

    // 추가 정보
    specifications: {
      material: { type: String, required: true }, // 소재 정보
      specImage: { type: String, required: true }, // 상품 스펙 이미지
      specDetails: {
        name: { type: String, required: true }, // 스펙 이름
        extra: {
          pages: { type: String, required: true }, // 페이지 정보
          features: { type: String, required: true }, // 기타 특징
        },
      },
    },
    options: [{ type: String }], // 상품 옵션 (예: 색상 등)
    cautions: [{ type: String }], // 주의사항 리스트
    customOptions: [{ type: String }], // 커스텀 옵션 리스트
    relatedProducts: [RelatedProductSchema], // 연관 상품 정보
  },
  {
    timestamps: true, // 생성일, 수정일 관리
  }
);

const Product = model("Product", ProductSchema);

export default Product;
