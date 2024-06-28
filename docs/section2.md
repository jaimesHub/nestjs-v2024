# SECTION 2: NESTJS VÀ TYPESCRIPT 

## Typescript decorators

- Ví dụ về Decorators
    - @Controller()
    - @Injectable()
- What
    - là những ký hiệu (chú thích) giúp cho class/property/functions/params có thêm `sức mạnh` mới
    - syntax: decorator = `@` + `expression()`
    - gồm 5 levels
        - class
        - properties
        - accessors (getter/setter)
        - methods
        - parameters
- Why
    - giúp code ngắn gọn hơn
    - tái sử dụng ở nhiều nơi
    - bổ sung `sức mạnh` cho các thành phần được `decorated`
    - ví dụ: validation / limit length a string field

- References
    - https://www.typescriptlang.org/docs/handbook/decorators.html
    - https://www.digitalocean.com/community/tutorials/how-to-use-decorators-in-typescript

## Sử dụng Decorator với NestJS
- Setup
    - `tsconfig.json`
    - "experimentalDecorators": true
- Phân loại: 2 loại
    - Nest đã viết
    - Customize 
- Sử dụng Decorator
    - 2 cách viết
        - đóng mở ngoặc (99% gặp) --> bảo compiler thực thi 
        - k cần đóng mở ngoặc

## Mô hình Router với NestJS
- 2 cách sd server
    - Client (React)
    - Server-side rendering
- Controller: có nhiệm vụ điều hướng trang

## Controllers
- `/user/user.controller.ts`
- @Controller('user') 
    - `đặt tên router` cho controller
    - định nghĩa cái route mà mình xuất phát -> đích đến
    - router `/user`
- @method
    - @Get() = @Get("") = @Get("/")
    - router: `/user/`
- cơ chế hoạt động router
- trong thực tế nên lấy tên bắt đầu của controller làm tiền tố cho router đó luôn
    - ví dụ: UserController -> @Controller("user")
