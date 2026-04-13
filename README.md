# 🧮 Responsive Calculator (Keyboard Controlled)

## 📌 Project Overview
This is a **responsive calculator web application** built using **HTML, CSS, and JavaScript**.

The calculator supports:
- Keyboard input (main focus)
- Button click input
- Full expression evaluation
- Input validation with error handling

---

## 🎯 Features

✅ Perform basic operations:
- Addition (+)
- Subtraction (−)
- Multiplication (×)
- Division (÷)
- Modulus (%)

✅ Keyboard Support:
- Numbers (0–9)
- Operators (+, -, *, /, %)
- Enter → Calculate result
- Backspace → Delete last input

❌ Invalid keys:
- Show alert message
- Prevent input

---

## 🧠 Concepts Used

- DOM Manipulation
- Event Handling (`addEventListener`)
- Keyboard Events
- Functions in JavaScript
- String Handling & Expression Parsing
- Responsive Design (Flexbox + Media Queries)

---

## ⚙️ Functions Used

Each operation is implemented using separate functions:

```javascript
add(a, b)
subtract(a, b)
multiply(a, b)
divide(a, b)
modulus(a, b)
