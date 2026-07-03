<div align="center">

# 🛒 Introduction to Design Patterns and Procedural Programming

### Comparing Procedural Programming and the Module Pattern in JavaScript

A practical JavaScript project demonstrating the transition from traditional **Procedural Programming** to the **Module Pattern**, highlighting how design patterns improve code organization, encapsulation, maintainability, and scalability.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![Pattern](https://img.shields.io/badge/Design-Module%20Pattern-blue)
![Programming](https://img.shields.io/badge/Programming-Procedural-success)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

</div>

---

# 📖 Overview

This project introduces one of the most important software engineering concepts: **Design Patterns**.

A simple **Shopping Cart** application is implemented twice:

- **Procedural Programming**
- **Module Pattern**

Both implementations provide the same functionality while demonstrating two different approaches to organizing JavaScript code.

The project clearly illustrates why modular architecture is preferred in modern software development.

---

# 🎯 Objectives

- Understand Procedural Programming.
- Learn the fundamentals of the Module Pattern.
- Practice JavaScript closures.
- Compare global state management with encapsulated state.
- Improve code maintainability and scalability.
- Understand how design patterns solve common software design problems.

---

# 🏗️ Project Structure

```text
Introduction-to-Design-Patterns-and-Procedural-Programming/
│
├── procedural/
│   └── shoppingCart.js
│
├── module-pattern/
│   └── shoppingCartModule.js
│
├── explanation.txt
├── reflection-report.md
├── Project-Diagram.jpg
├── Code execution1.png
├── Code execution2.png
└── README.md
```

---

# 🚀 Features

Both implementations support:

- ➕ Add items to the shopping cart
- ❌ Remove items
- 👀 View cart contents
- 💰 Calculate total price
- 🧹 Clear the cart
- 📦 Console-based testing

---

# 💻 Technologies Used

- JavaScript (ES6)
- Node.js
- Console Application

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/Introduction-to-Design-Patterns-and-Procedural-Programming.git
```

Enter the project directory:

```bash
cd Introduction-to-Design-Patterns-and-Procedural-Programming
```

---

# ▶️ Running the Project

## Procedural Version

```bash
node procedural/shoppingCart.js
```

---

## Module Pattern Version

```bash
node module-pattern/shoppingCartModule.js
```

---

# 📂 Implementation Comparison

## 1️⃣ Procedural Programming

Characteristics:

- Uses global variables
- Standalone functions
- Shared mutable state
- Simple structure
- Suitable for small scripts

Functions:

- `addItem()`
- `removeItem()`
- `viewCart()`
- `clearCart()`

---

## 2️⃣ Module Pattern

Characteristics:

- Uses Closures
- Private variables
- Encapsulation
- Public API
- Better organization
- Better maintainability

Public Methods:

- `ShoppingCart.addItem()`
- `ShoppingCart.removeItem()`
- `ShoppingCart.viewCart()`
- `ShoppingCart.clearCart()`

---

# 📊 Comparison Table

| Feature | Procedural Programming | Module Pattern |
|----------|------------------------|----------------|
| Global Variables | ✅ Yes | ❌ No |
| Encapsulation | ❌ No | ✅ Yes |
| Private Data | ❌ No | ✅ Yes |
| Code Organization | Basic | Excellent |
| Maintainability | Medium | High |
| Scalability | Medium | High |
| Reusability | Limited | High |
| Data Protection | Low | High |

---

# 🧠 Key Concepts Demonstrated

- Procedural Programming
- Design Patterns
- Module Pattern
- Closures
- Encapsulation
- Information Hiding
- Public API
- Private State
- Maintainable Code

---

# 📸 Project Preview

The repository includes:

- Project architecture diagram
- Console execution screenshots
- Reflection report
- Design explanation document

---

# 📄 Documentation

Additional documentation included:

- **explanation.txt**
  - Explains why the Module Pattern is superior.

- **reflection-report.md**
  - Personal reflection on the learning experience.

- **Project-Diagram.jpg**
  - Visual architecture of the project.

---

# 🎓 Learning Outcomes

After completing this project, you will understand how to:

- Build applications using procedural programming.
- Refactor procedural code into a modular architecture.
- Protect application state using closures.
- Expose functionality through a clean public API.
- Write more maintainable and scalable JavaScript applications.

---

# 🔮 Future Improvements

Possible enhancements include:

- Quantity updates
- Discount coupons
- Inventory management
- Product categories
- Persistent storage
- User authentication
- ES Modules implementation
- Unit testing
- Shopping cart UI
- Local Storage support

---

# 👨‍💻 Author

**Yassine Kaltoum**

JavaScript Developer | MERN Stack Learner

---

# 📜 License

This project was created for educational purposes as part of a JavaScript Design Patterns checkpoint.

Feel free to use, modify, and extend it for learning purposes.

---

<div align="center">

### ⭐ If you found this project helpful, consider giving it a star!

**Happy Coding! 🚀**

</div>
