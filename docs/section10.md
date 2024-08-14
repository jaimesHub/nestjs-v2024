# Mongoose Plugins

## 47. Timestamps plugin
- https://mongoosejs.com/docs/guide.html#timestamps
- Mục đích:
    - khi create => tự động update trường createdAt/updatedAt
    - khi update => tự động update trường updatedAt
- @Schema({timestamps: true }) và khai báo @Prop createdAt/updatedAt