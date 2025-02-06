const user={
  "users": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "age": 28,
      "isActive": true,
      "address": {
        "street": "123 Elm St",
        "city": "Somewhere",
        "state": "CA",
        "zip": "90210"
      }
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "age": 34,
      "isActive": false,
      "address": {
        "street": "456 Oak Rd",
        "city": "Anywhere",
        "state": "TX",
        "zip": "75001"
      }
    },
    {
      "id": 3,
      "firstName": "Alice",
      "lastName": "Johnson",
      "email": "alice.johnson@example.com",
      "age": 22,
      "isActive": true,
      "address": {
        "street": "789 Pine Ave",
        "city": "Everytown",
        "state": "NY",
        "zip": "10001"
      }
    }
  ],
  "posts": [
    {
      "id": 101,
      "userId": 1,
      "title": "Lorem ipsum dolor sit amet",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "date": "2025-01-01"
    },
    {
      "id": 102,
      "userId": 2,
      "title": "Vestibulum ante ipsum primis",
      "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce dapibus leo et velit suscipit.",
      "date": "2025-02-01"
    },
    {
      "id": 103,
      "userId": 3,
      "title": "Curabitur non nulla sit amet nisl tempus",
      "content": "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin sagittis nisl id dolor luctus, sed ultricies ex rutrum.",
      "date": "2025-02-10"
    }
  ]
}
module.exports=user;