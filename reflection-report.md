# Reflection Report

## Challenges During the Refactor

The main challenge during the refactoring process was moving from a procedural structure to a modular architecture while preserving the same functionality. 
In the procedural version, the shopping cart data was stored in a global variable that could be accessed and modified from anywhere in the application. 
While this approach was simple, it increased the risk of accidental modifications and made the code harder to maintain as the application grew.

Another challenge was understanding how closures work in JavaScript.
The Module Pattern relies on closures to keep data private while exposing only selected methods to the outside world. 
Implementing private variables and helper functions required careful restructuring of the original code.

## Improvements Brought by the Design Pattern

The Module Pattern significantly improved the overall quality of the code. 
Cart data became private and could only be manipulated through controlled public methods. 
This reduced the risk of bugs caused by unintended changes to the cart.

The code also became more organized and easier to understand because all shopping cart functionality was grouped inside a single module. Future developers can easily locate and modify cart-related logic without searching through multiple global functions.

## When to Choose a Design Pattern

Procedural programming is suitable for small scripts and simple applications where complexity is limited. 
However, when an application grows and requires better organization, maintainability, and scalability, design patterns become essential.

I would choose a design pattern whenever a project contains multiple components, requires data protection, or is expected to evolve over time. Design patterns provide a structured and reusable solution that helps create cleaner and more professional software.