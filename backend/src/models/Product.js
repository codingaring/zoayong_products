import mongoose from "mongoose";

const { Schema, model } = mongoose;

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
    price: [
      new Schema({
        option: { type: String, required: true }, // 가격 옵션 (예: default, sale 등)
        price: { type: Number, required: true }, // 해당 옵션의 가격
      }),
    ],
    description: { type: String, default: "" }, // 상세 설명
    thumbnailImage: { type: String, required: true }, // 썸네일 이미지

    // 추가 정보
    specifications: {
      specImage: { type: String, required: true }, // 상품 스펙 이미지
      specDetails: {
        name: { type: String, required: true }, // 스펙 이름
        extra: {
          features: { type: String, default: "" }, // 기타 특징
          innerFeatures: { type: String, default: "" }, // 내부 특징
        },
      },
      images: [{ type: String }], // 상품 이미지 리스트
    },
    options: [
      new Schema({
        optionName: { type: String, required: true }, // 옵션 이름
        optionColor: { type: String, default: "" }, // 옵션 색상 (hex)
        optionImage: { type: String, default: "" }, // 옵션 이미지 URL
        optionPattern: { type: String },
      }),
    ], // 상품 옵션
    cautions: [{ type: String, default: "" }], // 주의사항 리스트
    customOptions: [
      new Schema({
        option: { type: String, required: true }, // 옵션 이름
        MOQ: { type: String, default: "" }, // 최소 주문 수량
        duration: { type: String, default: "" }, // 소요 기간
      }),
    ], // 커스텀 옵션 리스트
    relatedProducts: [{ type: String }], // 연관 상품 리스트 (이름만 저장)
    configurationOptions: [
      new Schema({
        option: { type: String },
        optionImageUrl: [{ type: String }],
      }),
    ], // 구성 옵션
  },
  {
    timestamps: true, // 생성일, 수정일 관리
  }
);

const Product = model("Product", ProductSchema);

export default Product;
