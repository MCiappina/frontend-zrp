# ZRP Frontend Project

![image](https://github.com/MCiappina/frontend-zrp/assets/46383288/3170d027-b897-4dd3-b087-3ec3518bbc98)

This project is a frontend application built with Next.js and styled-components for the ZRP company. It provides a user interface for accessing Pokémon data from the ZRP backend, also builtt for this test case: https://github.com/MCiappina/backend-zrp. The project includes Docker configuration for easy deployment.

## Getting Started

To run the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/MCiappina/frontend-zrp.git
   ```
2. Create a `.env.local` file in the root directory of the project. You can use the example file provided:

```dotenv
NEXT_PUBLIC_BACKEND_URL=http://localhost:####
```
Replace #### with the port number used for the backend.

3. Build the Docker image:
   ```
   docker build -t frontend-zrp
   ```
4. Run the Docker image:
   ```
   docker run -p 3000:3000 frontend-zrp
   ```
Replace 3000 with the port number you want to assign to your frontend.

## Technologies Used
- Next.js
- Styled-components
- Docker
