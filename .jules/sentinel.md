## 2025-02-12 - DOM-based XSS and Plaintext Password Exposure
**Vulnerability:** User input (First Name, Last Name) was directly injected into the DOM via `.innerHTML` in both the navigation bar update and the account details view. Additionally, user passwords were displayed in plaintext on the account details screen.
**Learning:** In static front-end applications, there is a high risk of "shoulder surfing" and script injection if data stored in `localStorage` is rendered insecurely. The lack of a backend or templating engine often leads to developers using dangerous methods like `innerHTML` for convenience.
**Prevention:** Always use `textContent` or `createTextNode` when rendering any data that can be influenced by a user. Explicitly exclude sensitive fields like passwords from being rendered in the UI, even if they are available in the local state.

## 2025-02-12 - Insecure Password Storage and Session Management
**Vulnerability:** Passwords were stored in plaintext in `localStorage` and sent to a third-party API without encryption. Additionally, the login state did not persist across page refreshes.
**Learning:** For client-side only applications, storing sensitive data in `localStorage` is risky. Hashing the password before storage provides a basic layer of defense if the device is compromised.
**Prevention:** Use standard cryptographic hashing (like SHA-256) for any sensitive data stored client-side. Implement a centralized state management or UI update logic to ensure consistent session representation.
