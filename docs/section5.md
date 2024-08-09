# Connect Database
- kết nối backend tới Database bằng cách sử dụng MongoDB
- tối ưu hóa cách sử dụng `hằng số`, dựa vào cách sử dụng `tham số môi trường` (.env) với `Nest.JS Config`

## Lựa chọn Database 
- TypeORM *
- Đặc biệt, NestJS hỗ trợ `TypeORM`, `Sequelize` và `Mongoose` (mongodb) với các package
`@nestjs/typeorm`, `@nestjs/sequelize`, `@nestjs/mongoose`
- Việc coding càng trở nên dễ dàng hơn 
- Sẽ học `MongoDB` trong project này

## Cài đặt MongoDB
- docker và without docker (mongodb server)
- MongoDB Compass (phần mềm giúp kết nối vào DB)*
    - Security Quickstart
        - Create user: jameslearnsnestjs / wX10aAcHzSj3bfah
        - Where would you like to connect from?
            - 0.0.0.0/0 --> anywhere can access it
    - mongodb+srv://jameslearnsnestjs:wX10aAcHzSj3bfah@cluster0.wh22rm1.mongodb.net/

## Sử dụng MongoDB w NestJS 
- Sử dụng mongoose 
- Inject MongooseModule into AppModule
    - All modules nhận biết sự hiện diện của MongooseModule

## ENV variables 
- Sử dụng .dotenv --> k khuyến khích
    - process.env.VARIABLE_NAME
    - ưu
    - nhược
        - nhiều môi trường test sẽ k linh hoạt
        
- Config service in NestJS --> cách thay thế
    - Về bản chất, Config Service cũng sử dụng thư viện .env
    - Giải quyết 2 vấn đề: 
        - sử dụng nhiều file .env
        - validate file .env

- Sử dụng Config Service
- Sử dụng với file main.ts
- Sử dụng khi khai báo Module