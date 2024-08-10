# Restful API

```
Goal
    - Viết module Users theo đúng chuẩn Restful
    - Sử dụng tool generate resources, schema, controller và services.
```

## Generate resources
- `nest g resource users --no-spec`
- "@nestjs/mapped-types": "1.2.2"

## Create Schema (Models)
- Add database name in .env
- Model injection
    - create schema
    - validate schema

## 22.1 Create A User
- Tạo endpoint
- Controller User (test route)
- Service
- request payloads
    - @Body()
    - làm sao để truy cập mongoDB --> tạo mới user 

## 22.2 Hash User’s Password
- hash password
- `constructor(@InjectModel(User.name) private userModel: Model<User>) {}` ?
    - `https://github.com/jaimesHub/nestjs-v2024/commit/e7b7a32be0eb42d3a60ee267cf1f6fd7525c4d5a`

## 22.3 DTO - Data Transfer Object
- request payloads
- request object
- DTO là 1 object định nghĩa hình dạng dữ liệu được “transfer” (frontend và backend)
- Lưu ý sử dụng class, thay vì type hay interface

- Update dto
- Why do: controller -> service -> model -> mongodb
    - https://github.com/jaimesHub/nestjs-v2024/commit/994d4e7741f633c446464c57171a2ab94bd0edfb

## 22.4 Pipe
- Pipe có 2 tác dụng:
    - Transform data : convert string => number ,array …
    - Validate data
- ~ middleware
- Nhận biết: những class nào có @Injectable thì được gọi là `pipe`
- use cases: built-in pipe 
- schema based validation / class validation
- https://docs.nestjs.com/pipes#class-validator

## 22.5 Validation
- class validation