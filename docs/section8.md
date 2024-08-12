# JWT - Json Web Token
``` Stateless ```

## 33. JWT là gì ?
- What ?
    - Chuỗi kí tự đã được mã hoá 
    - Mục đích: 
        - An toàn 
        - Trao đổi thông tin giữa các hệ thống khác nhau 
    - 3 thành phần
        - #1 (Header) chứa thông tin thuật toán 
        - #2 (Payload) data (muốn chứa cái gì, json format) được truyền đi
        - #3 (Signature) chìa khoá, tăng bảo mật
- Why ?
    - Cách an toàn trao đổi thông tin giữa client & server
    - Hỗ trợ thuật toán mạnh mẽ, chỉ có server có key để giải mã được
- When ?
    - Trong mô hình stateless
    - Truyền thông tin giữa các hệ thống với nhau

## 34. Phân loại token sử dụng
- decode 
- encode 
- Access Token
    - Thường được BE cung cấp (issued) - encode 
    - Mã hoá dưới dạng JWT
    - ko nên lưu thông tin nhạy cảm vào payload
    
    
- Refresh Token
    - quy định khi nào hết hạn: thời gian sống ngắn (5p, 30p, 1h, ...)

- Hình thức lưu trữ
    - lưu vào localstorage: `localStorage.get('item')`
    - k lưu tại session storage: vì close browser sẽ mất data 
    - cookies: refresh_token 
    - tại BE, lưu tại ram, disk, DB (hay dùng nhất)

## 35. Giới thiệu về PassportJS
- passport-local
- passport-jwt
- What?
    - dùng để authentication (login, xác thực)
    - middleware, can thiệp req và res
- Why ?
    - đơn giản hoá việc xác thực người dùng 
    - hỗ trợ hơn 500 loại đăng nhập 
    - an toàn hơn so với tự code 
- When ?

## 36. Local Strategies với NestJS
- Mô hình stateless
- username / password
- server tạo access_token (jwt format)

### 1. Xác thực người dùng
- quá trình client gửi lên server data (username/password)
- server check thông tin có hợp lệ hay k ?
- passport là thư viện gốc => giúp ra tạo ra middleware (can thiệp và req và res), và lưu
trữ thông tin người dùng đăng nhập (req.user)

- Implementing Passport local: https://docs.nestjs.com/recipes/passport 

## 37. Nestjs Guard
- Middleware
- Guards
    - ExecutionContext (ly thuyet cua JS)
    - Có nhiệm vụ check true/false
    - Tạo base Guards: `TestGuard` --> how it works

## 38. LocalGuard w Passport
- test api: `/login`
    - username / password (đây là 2 body data bắt buộc phải nhập, k thay đổi được, lấy từ passport library)
- debug after setup `/login` route

## 39. Using JWT
- nestjs jwtmodule with config service

## 40. Implementing Passport JWT
- bảo vệ route với jwt --> nếu như client k truyền kèm với access_token -> báo lỗi
    - protected routes
    - jwt.strategy.ts --> thư viện xử lý token như thế nào? encode, decode ra làm sao ?
    - jwt-auth.guard.ts --> middleware check có sử dụng JWT Strategy hay ko ?
    - nestjs config service inside super