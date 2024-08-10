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