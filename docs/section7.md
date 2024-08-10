# Stateful & Stateless

## 26. Setup Backend Test
- clone https://github.com/harypham/nestjs-auth-basic 
- run project
- demo
    - stateful
        - server side rendering
    - stateless
        - client side rendering
        - access token

## Debug NestJS Applications
- Đặt breakpoint
- npm run start:debug --> cần cầu hình thêm vscode
- cấu hình vscode
    - /.vscode/launch.json
    - re-customize launch.json
    - run & debug -> nest debug

## 28. Stateful Application
- session (bộ nhớ máy tính)
- các phương pháp lưu trữ thông tin của client & server 

## 29. (Demo) Cơ chế hoạt động của Stateful App
- https://github.com/harypham/nestjs-auth-basic 
- f12 -> application -> cookies -> query db -> know who you are 
- cấu hình để nestjs biết session 
    - config cookies 
    - config session 
    - config passport
    - install passport library
    - nên lưu vào db/disk hơn là cache 

## 30. Ưu / nhược điểm của stateful
## 31. Mô hình Stateless 
## 32. Ưu nhược điểm của stateless