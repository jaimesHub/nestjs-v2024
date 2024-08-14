# Mongoose Plugins

## 47. Timestamps plugin
- https://mongoosejs.com/docs/guide.html#timestamps
- Mục đích:
    - khi create => tự động update trường createdAt/updatedAt
    - khi update => tự động update trường updatedAt
- @Schema({timestamps: true }) và khai báo @Prop createdAt/updatedAt

## 48. Soft-delete plugin
- 2 cách để setup soft-delete
    - thêm nó từng model
    - thêm nó bằng global (AppModule) <---
- cách sử dụng

## 49. Query builder
- search
- pagination
- filter

## 50. Setup FE project
- Link: `https://github.com/haryphamdev/react-for-nest`

## 51. What is CORS ?
- What ?
    - Cơ chế server cho phép origin (domain/port) từ browser được truy cập 
    - Xảy ra khi browser gửi request lên server và server chưa cấu hình CORS 
- Why ?
- Cơ chế của browser : sử dụng Cookie sẽ lưu theo domain & value
    - Nếu k có cơ chế CORS thì sẽ dễ bị mất cookie 
    - Vào chính xác domain nào thì nó gửi cookie đó
- Chặn CORS khi khác domain 

## 52.1 How to bypass CORS ?
- c1: update browser
    - chỉ cho demo thôi
    - ko nên dùng cách này 
- c2: using BE *
    - BE do dev kiểm soát  --> fix ở BE
    - BE do bên thứ 3 làm --> gọi BE -> BE sẽ giải quyết vấn đề FE -> BE (3rd party)
        - mô hình fe -> be -> be (3rd party)
        - sử dụng axios, ... 
        - vì BE của cta k thể lấy cookie