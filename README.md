# Bonmano Coffee - Next.js App

Bonmano Coffee App is a modern web application built with Next.js 14.2, Tailwind CSS 3, Prisma, and MySQL. This project provides a seamless and responsive coffee shop experience.

## 🚀 Technologies Used
- **Next.js 15** - React-based framework for SSR and SSG.
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development.
- **Prisma** - Modern database ORM for interacting with MySQL.
- **MySQL** - Relational database for data persistence.

## 📦 Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/masih-developer/bonmano-coffee-next.git
cd bonmano-coffee-next
```

### 2. Install Dependencies
```sh
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DATABASE_URL="mysql://user:password@localhost:3306/bonmano_coffee"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```
Modify the `DATABASE_URL` according to your MySQL credentials.

### 4. Run Database Migrations
```sh
npx prisma migrate dev --name init
```

### 5. Start the Development Server
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:3000`.

## 🛠 Features
- Modern UI with Tailwind CSS
- Server-side rendering & static generation with Next.js
- Database management with Prisma & MySQL
- Fully responsive design

## 🤝 Contributing
Feel free to fork the repository and submit pull requests to improve the project.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
